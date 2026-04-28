const bookings = [];

export function insertBooking(booking) {
  const record = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...booking,
  };
  bookings.push(record);
  return record;
}

export function countBookings() {
  return bookings.length;
}
