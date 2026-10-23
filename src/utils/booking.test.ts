import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeWhatsAppNumber,
  formatWhatsAppUrl,
  buildRoomInquiryMessage,
  buildBookingFormMessage,
  validateBookingDates,
  getTodayDateString,
  getTomorrowDateString
} from './booking';

test('sanitizeWhatsAppNumber properly handles local and international formats', () => {
  assert.equal(sanitizeWhatsAppNumber('03001113686'), '923001113686');
  assert.equal(sanitizeWhatsAppNumber('+92 300 1113686'), '923001113686');
  assert.equal(sanitizeWhatsAppNumber('923001113686'), '923001113686');
});

test('formatWhatsAppUrl generates standard wa.me click-to-chat url with encoded text', () => {
  const url = formatWhatsAppUrl('923001113686', 'Hello Multan');
  assert.equal(url, 'https://wa.me/923001113686?text=Hello%20Multan');
});

test('buildRoomInquiryMessage includes room name and polite greeting', () => {
  const msg = buildRoomInquiryMessage('Deluxe Double Room');
  assert.ok(msg.includes('Deluxe Double Room'));
  assert.ok(msg.includes('Grand Palace Hotel Multan'));
  assert.ok(msg.includes('Assalam-o-Alaikum'));
});

test('buildBookingFormMessage builds structured reservation details', () => {
  const msg = buildBookingFormMessage({
    name: 'Muhammad Ali',
    phone: '03001234567',
    checkIn: '2026-11-01',
    checkOut: '2026-11-03',
    guests: '2 Adults',
    roomType: 'Deluxe Double Room',
    message: 'Quiet upper floor room requested'
  });

  assert.ok(msg.includes('Muhammad Ali'));
  assert.ok(msg.includes('2026-11-01'));
  assert.ok(msg.includes('2026-11-03'));
  assert.ok(msg.includes('Deluxe Double Room'));
  assert.ok(msg.includes('Quiet upper floor room requested'));
});

test('validateBookingDates validates sequential dates correctly', () => {
  const valid = validateBookingDates('2026-11-01', '2026-11-03');
  assert.equal(valid.isValid, true);
  assert.equal(valid.error, undefined);

  const sameDay = validateBookingDates('2026-11-01', '2026-11-01');
  assert.equal(sameDay.isValid, false);
  assert.ok(sameDay.error?.includes('after'));

  const backwards = validateBookingDates('2026-11-05', '2026-11-02');
  assert.equal(backwards.isValid, false);

  const missing = validateBookingDates('', '2026-11-02');
  assert.equal(missing.isValid, false);
});

test('getTomorrowDateString increments base date by 1 day', () => {
  const tomorrow = getTomorrowDateString('2026-11-01');
  assert.equal(tomorrow, '2026-11-02');
});
