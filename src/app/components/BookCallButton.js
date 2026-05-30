import Button from "./Button";

// ⚠️ Replace with your Google Calendar Appointment Scheduling booking link.
//
// How to get it (free with a personal Gmail like adriot2002@gmail.com):
//   1. Google Calendar → Create ▾ → "Appointment schedule"
//   2. Title it "20-min intro call", set duration 20 min + your availability
//   3. Save → "Open booking page" → copy the URL (looks like
//      https://calendar.app.google/XXXXXXXX  or a .../appointments/schedules/... link)
//   4. Paste it below.
// Bookings then auto-create an event (with Google Meet) on adriot2002@gmail.com.
export const BOOKING_URL = "https://calendar.app.google/REPLACE_WITH_YOUR_LINK";

// Opens your Google booking page in a new tab. No external script needed.
export default function BookCallButton({ size, children = "Book a call", ...props }) {
  return (
    <Button
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant="accent"
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}
