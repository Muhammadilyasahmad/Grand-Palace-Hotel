import React, { useState } from 'react';
import {
  Calendar,
  User,
  Phone,
  Users,
  BedDouble,
  MessageSquare,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { HOTEL_CONFIG, ROOMS_DATA } from '../data/hotelData';
import {
  BookingFormData,
  validateBookingDates,
  buildBookingFormMessage,
  formatWhatsAppUrl,
  getTodayDateString,
  getTomorrowDateString
} from '../utils/booking';

interface BookingFormProps {
  initialRoomType?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialRoomType,
  initialCheckIn,
  initialCheckOut,
  initialGuests
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    checkIn: initialCheckIn || getTodayDateString(),
    checkOut: initialCheckOut || getTomorrowDateString(initialCheckIn),
    guests: initialGuests || '2 Guests',
    roomType: initialRoomType || ROOMS_DATA[1].name, // Deluxe Double default
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedInquiry, setSubmittedInquiry] = useState<boolean>(false);

  // Sync if parent updates initial preferences
  React.useEffect(() => {
    if (initialRoomType) {
      setFormData((prev) => ({ ...prev, roomType: initialRoomType }));
    }
  }, [initialRoomType]);

  React.useEffect(() => {
    if (initialCheckIn) {
      setFormData((prev) => ({ ...prev, checkIn: initialCheckIn }));
    }
    if (initialCheckOut) {
      setFormData((prev) => ({ ...prev, checkOut: initialCheckOut }));
    }
    if (initialGuests) {
      setFormData((prev) => ({ ...prev, guests: initialGuests }));
    }
  }, [initialCheckIn, initialCheckOut, initialGuests]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // If check-in is moved forward past check-out, automatically adjust check-out
      if (name === 'checkIn' && value >= next.checkOut) {
        next.checkOut = getTomorrowDateString(value);
      }
      return next;
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate Guest Name
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name to proceed with the inquiry.');
      return;
    }

    // Validate Dates
    const dateValidation = validateBookingDates(formData.checkIn, formData.checkOut);
    if (!dateValidation.isValid) {
      setErrorMessage(dateValidation.error || 'Please select valid check-in and check-out dates.');
      return;
    }

    // Generate WhatsApp text and URL
    const message = buildBookingFormMessage(formData);
    const url = formatWhatsAppUrl(HOTEL_CONFIG.verifiedWhatsAppNumber, message);

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedInquiry(true);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59A3F] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast WhatsApp Reservation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1528] tracking-tight leading-tight mb-4">
            Send a Booking Inquiry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill in your preferred dates and room preference below. Your details will be formatted into a WhatsApp reservation inquiry sent directly to our 24/7 front desk team.
          </p>
        </div>

        {/* Inquiry Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 overflow-hidden">
          
          {/* Subtle Top Accent Ribbon */}
          <div className="h-2 bg-gradient-to-r from-[#0B1528] via-[#C59A3F] to-[#25D366]" />

          <div className="p-6 sm:p-10">
            {submittedInquiry && (
              <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-emerald-950">
                    WhatsApp opened with your inquiry!
                  </p>
                  <p className="mt-0.5 text-emerald-800">
                    If WhatsApp didn't open automatically, you can also reach our front desk directly at{' '}
                    <a
                      href={`tel:${HOTEL_CONFIG.verifiedPhone.replace(/\s+/g, '')}`}
                      className="underline font-semibold"
                    >
                      {HOTEL_CONFIG.verifiedPhone}
                    </a>
                    . Our staff will confirm availability and room rates shortly.
                  </p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Guest Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Guest Full Name <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Muhammad Usman"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  />
                </div>

                {/* Contact Phone / WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Your Phone / WhatsApp</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  />
                </div>

                {/* Check-In Date */}
                <div>
                  <label htmlFor="checkIn" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Check-In Date <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    required
                    min={getTodayDateString()}
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  />
                </div>

                {/* Check-Out Date */}
                <div>
                  <label htmlFor="checkOut" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Check-Out Date <span className="text-rose-500">*</span></span>
                  </label>
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    required
                    min={getTomorrowDateString(formData.checkIn)}
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Total Guests</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  >
                    <option value="1 Guest (Solo)">1 Guest (Solo)</option>
                    <option value="2 Guests (Couple / Friends)">2 Guests (Couple / Friends)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests (Family)">4 Guests (Family)</option>
                    <option value="5+ Guests (Large Family / Group)">5+ Guests (Large Family / Group)</option>
                  </select>
                </div>

                {/* Preferred Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-[#C59A3F]" />
                    <span>Preferred Room Type</span>
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all"
                  >
                    {ROOMS_DATA.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name}
                      </option>
                    ))}
                    <option value="Not Sure / Suggest Best Available">Not Sure / Suggest Best Available</option>
                  </select>
                </div>

              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C59A3F]" />
                  <span>Additional Requests or Arrival Notes (Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="e.g. Arriving late by train at Multan Railway Station, require parking space, extra pillows..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg p-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm sm:text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                  <span>Send Booking Inquiry on WhatsApp</span>
                </button>
              </div>

              {/* Honest Notice */}
              <p className="text-center text-xs text-slate-500 leading-relaxed pt-2">
                <strong>Honest Hospitality Policy:</strong> Submitting this form opens a pre-filled WhatsApp message with our front desk. It does not charge your card or immediately confirm a reservation until verified by our staff.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
