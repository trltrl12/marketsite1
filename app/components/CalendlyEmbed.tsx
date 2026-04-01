'use client';

import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/taylor-marcheleventh/30min';

interface CalendlyEmbedProps {
  prefillName?: string;
  prefillEmail?: string;
}

export default function CalendlyEmbed({ prefillName, prefillEmail }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  // Build URL with prefill params
  const params = new URLSearchParams();
  if (prefillName) params.set('name', prefillName);
  if (prefillEmail) params.set('email', prefillEmail);
  const embedUrl = params.toString()
    ? `${CALENDLY_URL}?${params.toString()}&hide_event_type_details=1&hide_gdpr_banner=1`
    : `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`;

  return (
    <div className="step-transition">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Your info was received — pick your call time below
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Step 2: Schedule Your Free Strategy Call
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Choose a time that works for you. This is a no-pitch, no-pressure conversation focused on your lead generation goals.
        </p>
      </div>

      <div
        className="calendly-inline-widget calendly-container rounded-xl overflow-hidden shadow-lg border border-gray-100"
        data-url={embedUrl}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
