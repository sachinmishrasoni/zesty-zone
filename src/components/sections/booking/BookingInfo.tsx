import React from 'react';

const BookingInfo = () => {
  return (
    <section className="px-6 py-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Why Book a Table?</h2>
        <p className="text-lg text-gray-600">Find out the benefits of booking a table and the rules for a smooth dining experience.</p>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Benefits of Booking a Table */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Booking a Table</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-4">
            <li><strong>Save Time:</strong> Skip the wait and enjoy priority seating.</li>
            <li><strong>Guaranteed Availability:</strong> Ensure your table is reserved during peak hours.</li>
            <li><strong>Special Requests:</strong> Easily accommodate dietary preferences or special requirements.</li>
            <li><strong>Exclusive Offers:</strong> Enjoy special deals and discounts available to online reservations.</li>
          </ul>
        </div>

        {/* Table Reservation Rules */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Table Reservation Rules</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-4">
            <li><strong>Reservation Timing:</strong> Please ensure to arrive 10 minutes before your booking time.</li>
            <li><strong>Cancellation Policy:</strong> Reservations must be canceled at least 24 hours in advance.</li>
            <li><strong>Group Size:</strong> Reservations are only accepted for a minimum of 2 people.</li>
            <li><strong>Late Arrival:</strong> If you&#39;re running late, please call us to hold your table.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
