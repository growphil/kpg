// Serverless function handler for Vercel: /api/enquiry
// Validates enquiry payloads, handles spam honeypot, rate limiting, and forwards to Resend if configured.

export const config = {
  runtime: 'nodejs',
};

// Simple in-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(ts => now - ts < windowMs);
  
  if (validTimestamps.length >= limit) {
    return false;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  try {
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

    // 1. Rate Limiting Check (max 5 submissions per minute per IP)
    if (!checkRateLimit(String(clientIp))) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait a minute before submitting again.',
      });
    }

    const {
      fullName,
      company,
      email,
      phone,
      location,
      enquiryType,
      message,
      honeypot, // Hidden bot trap field
    } = req.body || {};

    // 2. Honeypot check for bots
    if (honeypot && String(honeypot).trim() !== '') {
      // Silently accept without action to fool automated spam bots
      return res.status(200).json({
        success: true,
        message: 'Your enquiry has been received successfully.',
      });
    }

    // 3. Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Please provide a valid full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return res.status(400).json({ success: false, message: 'Please provide a valid phone or WhatsApp number.' });
    }

    if (!enquiryType || typeof enquiryType !== 'string') {
      return res.status(400).json({ success: false, message: 'Please select an enquiry type.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Please provide details about your requirements (minimum 10 characters).' });
    }

    // 4. Server-Side Delivery (e.g. Resend API if RESEND_API_KEY is configured in Vercel environment)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'kyrapacificgreen@gmail.com';

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'KYRA Pacific Green Enquiries <enquiries@kyrapacificgreen.com>',
            to: [NOTIFICATION_EMAIL],
            reply_to: email.trim(),
            subject: `[KYRA Web Enquiry] ${enquiryType} — ${fullName.trim()}`,
            text: `
New Enquiry Received via KYRA Pacific Green Corporate Website:

Name: ${fullName.trim()}
Company / Organisation: ${company ? company.trim() : 'N/A'}
Email: ${email.trim()}
Phone / WhatsApp: ${phone.trim()}
Location / Province: ${location ? location.trim() : 'Papua New Guinea'}
Enquiry Type: ${enquiryType}

Requirements Message:
${message.trim()}

Timestamp: ${new Date().toISOString()}
IP Address: ${clientIp}
            `.trim(),
          }),
        });

        if (!emailResponse.ok) {
          const errData = await emailResponse.text();
          console.error('Resend delivery error:', errData);
        }
      } catch (sendErr) {
        console.error('Failed to dispatch via Resend:', sendErr);
        // We still acknowledge customer submission
      }
    } else {
      console.log('RESEND_API_KEY not configured. Enquiry logged securely on server:', {
        fullName,
        email,
        phone,
        enquiryType,
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to KYRA Pacific Green. Our energy specialists will review your requirements and respond promptly.',
    });
  } catch (error: any) {
    console.error('Error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request. Please contact us directly via WhatsApp.',
    });
  }
}

