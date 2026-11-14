import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

export const NotificationToast = () => {
  const { notification, setIsConfigModalOpen } = useConfig();

  if (!notification) return null;

  const isWarning = notification.type === 'warning';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 animate-bounce-subtle">
      <div className={`p-4 rounded-xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${
        isWarning
          ? 'bg-amber-50/95 border-amber-200 text-amber-900'
          : 'bg-blue-50/95 border-blue-200 text-blue-900'
      }`}>
        <div className="mt-0.5 shrink-0">
          {isWarning ? (
            <AlertCircle className="w-5 h-5 text-amber-600" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
          )}
        </div>
        <div className="flex-1 text-sm font-medium leading-relaxed">
          <p>{notification.message}</p>
          {isWarning && (
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="mt-2 text-xs font-semibold px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            >
              Open Link Settings
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
