'use client';

import { useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/taylor-marcheleventh/30min';

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  market: string;
}

type FieldErrors = Partial<Record<keyof FormData, string>>;

const budgetOptions = [
  { value: '', label: 'Monthly Ad Budget *' },
  { value: 'under-1k', label: 'Under $1,000 / month' },
  { value: '1k-3k', label: '$1,000 – $3,000 / month' },
  { value: '3k-5k', label: '$3,000 – $5,000 / month' },
  { value: '5k-10k', label: '$5,000 – $10,000 / month' },
  { value: '10k-plus', label: '$10,000+ / month' },
];

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    market: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.phone.trim()) next.phone = 'Phone is required';
    if (!formData.budget) next.budget = 'Select your monthly ad budget';
    if (!formData.market.trim()) next.market = 'Enter your market or city';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    // Optional webhook
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }),
        });
      } catch (err) {
        console.error('Webhook error:', err);
      }
    }

    setStatus('done');

    // Brief animation, then redirect
    setTimeout(() => {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const inputBase =
    'w-full bg-[#141414] border text-white placeholder-[#4a4a4a] text-sm px-4 py-3.5 rounded transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#f59e0b]/60 focus:border-[#f59e0b]/60';
  const inputNormal = `${inputBase} border-[#2a2a2a] hover:border-[#3a3a3a]`;
  const inputError = `${inputBase} border-red-500/60 bg-red-500/5`;

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center fade-up">
        <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-barlow text-2xl font-bold text-white mb-2">
          Opening Your Calendar...
        </h3>
        <p className="text-[#737373] text-sm max-w-xs">
          Pick a time that works for you. We&rsquo;ll review your info before the call.
        </p>
        <div className="mt-6 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#f59e0b] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          className={errors.name ? inputError : inputNormal}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          className={errors.email ? inputError : inputNormal}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          className={errors.phone ? inputError : inputNormal}
        />
        {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
      </div>

      {/* Budget dropdown */}
      <div>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={`${errors.budget ? inputError : inputNormal} cursor-pointer appearance-none`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a4a4a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            backgroundSize: '16px',
          }}
        >
          {budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''} style={{ background: '#141414', color: opt.value === '' ? '#4a4a4a' : '#f5f5f5' }}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.budget && <p className="mt-1.5 text-xs text-red-400">{errors.budget}</p>}
      </div>

      {/* Market / City */}
      <div>
        <input
          type="text"
          name="market"
          value={formData.market}
          onChange={handleChange}
          placeholder="Your Market / City *"
          className={errors.market ? inputError : inputNormal}
        />
        {errors.market && <p className="mt-1.5 text-xs text-red-400">{errors.market}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#f59e0b] hover:bg-[#fbbf24] disabled:bg-[#d97706] text-[#080808] font-bold text-base py-4 px-6 rounded transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] mt-2"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Booking your call...
          </span>
        ) : (
          'Book Your Free Strategy Call →'
        )}
      </button>

      <p className="text-center text-xs text-[#4a4a4a] pt-1">
        Free. No commitment. For real estate investors only.
      </p>
    </form>
  );
}
