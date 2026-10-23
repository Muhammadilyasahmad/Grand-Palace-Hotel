import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { formatWhatsAppUrl } from '../utils/booking';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'floating' | 'primary' | 'secondary' | 'outline' | 'compact';
  label?: string;
  className?: string;
  onClick?: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = HOTEL_CONFIG.defaultInquiryText,
  variant = 'primary',
  label = 'Chat on WhatsApp',
  className = '',
  onClick
}) => {
  const href = formatWhatsAppUrl(HOTEL_CONFIG.verifiedWhatsAppNumber, message);

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (variant === 'floating') {
    return (
      <aside
        aria-label="Contact options"
        className="fixed bottom-6 right-6 z-50 group flex items-center print:hidden"
      >
        <span
          role="tooltip"
          id="whatsapp-floating-tooltip"
          className="mr-3 hidden md:inline-block px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
        >
          Chat with us on WhatsApp
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Grand Palace Hotel Multan on WhatsApp"
          aria-describedby="whatsapp-floating-tooltip"
          onClick={handleClick}
          className={`relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 ${className}`}
        >
          {/* Subtle pulse ripple */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
          <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        </a>
      </aside>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${className}`}
      >
        <MessageCircle className="w-4 h-4 fill-white stroke-none" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'secondary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B1528] bg-transparent hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>{label}</span>
      </a>
    );
  }

  // Default Primary Variant
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-white stroke-none" />
      <span>{label}</span>
    </a>
  );
};
