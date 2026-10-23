import { HOTEL_CONFIG } from '../data/hotelData';

export interface BookingFormData {
  name: string;
  phone?: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message?: string;
}

export interface DateValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Strips non-digit characters from phone number (ensures Pakistan country code format, e.g. 923001113686)
 */
export function sanitizeWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    return `92${digits.slice(1)}`;
  }
  return digits;
}

/**
 * Encodes text and formats a direct WhatsApp click-to-chat URL
 */
export function formatWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = sanitizeWhatsAppNumber(phoneNumber);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates an inquiry message for a specific room category
 */
export function buildRoomInquiryMessage(roomName: string): string {
  return [
    `Assalam-o-Alaikum, Grand Palace Hotel Multan team.`,
    ``,
    `I would like to check availability and rates for the *${roomName}*.`,
    `Please share details regarding current room tariff and available dates.`,
    ``,
    `Thank you!`
  ].join('\n');
}

/**
 * Generates a complete structured WhatsApp reservation inquiry from form fields
 */
export function buildBookingFormMessage(data: BookingFormData): string {
  const lines = [
    `*ROOM RESERVATION INQUIRY*`,
    `*Grand Palace Hotel Multan*`,
    `─────────────────────────`,
    `👤 *Guest Name:* ${data.name.trim()}`,
  ];

  if (data.phone && data.phone.trim()) {
    lines.push(`📞 *Contact:* ${data.phone.trim()}`);
  }

  lines.push(`📅 *Check-In Date:* ${data.checkIn}`);
  lines.push(`📅 *Check-Out Date:* ${data.checkOut}`);
  lines.push(`👥 *Guests:* ${data.guests}`);
  lines.push(`🛏️ *Preferred Room:* ${data.roomType}`);

  if (data.message && data.message.trim()) {
    lines.push(`📝 *Special Requests:* ${data.message.trim()}`);
  }

  lines.push(`─────────────────────────`);
  lines.push(`Assalam-o-Alaikum! Please confirm room availability and total estimated charges for my requested stay.`);

  return lines.join('\n');
}

/**
 * Validates check-in and check-out dates
 */
export function validateBookingDates(checkIn: string, checkOut: string): DateValidationResult {
  if (!checkIn) {
    return { isValid: false, error: 'Please select a check-in date.' };
  }
  if (!checkOut) {
    return { isValid: false, error: 'Please select a check-out date.' };
  }

  const checkInDate = new Date(`${checkIn}T00:00:00`);
  const checkOutDate = new Date(`${checkOut}T00:00:00`);

  if (isNaN(checkInDate.getTime())) {
    return { isValid: false, error: 'Invalid check-in date format.' };
  }
  if (isNaN(checkOutDate.getTime())) {
    return { isValid: false, error: 'Invalid check-out date format.' };
  }

  // Check-out must be strictly after check-in
  if (checkOutDate <= checkInDate) {
    return { isValid: false, error: 'Check-out date must be after the check-in date.' };
  }

  return { isValid: true };
}

/**
 * Returns today's date formatted as YYYY-MM-DD for date input min attribute
 */
export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Returns tomorrow's date formatted as YYYY-MM-DD
 */
export function getTomorrowDateString(baseDate?: string): string {
  const base = baseDate ? new Date(`${baseDate}T00:00:00`) : new Date();
  base.setDate(base.getDate() + 1);
  const year = base.getFullYear();
  const month = String(base.getMonth() + 1).padStart(2, '0');
  const day = String(base.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Human-readable date formatter
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(`${dateStr}T00:00:00`);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
