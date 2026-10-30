import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#F4F8FB]">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-[#E3EAF0] shadow-sm text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#061F49] mb-3">
              Something went wrong
            </h1>
            <p className="text-sm text-[#64748B] mb-6 leading-relaxed">
              We encountered an unexpected display issue. Please refresh the page or return to the KYRA Pacific Green homepage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-[#061F49] text-white hover:bg-[#0a2f6c] transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
              <SecondaryButton to="/" size="md" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Home
              </SecondaryButton>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

