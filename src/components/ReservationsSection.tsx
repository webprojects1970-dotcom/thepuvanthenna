import React, { useRef, useEffect } from 'react';

interface ReservationsSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationsSection: React.FC<ReservationsSectionProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900">Booking Conditions</h2>
            <button 
              onClick={onClose}
              className="text-hotel-600 hover:text-hotel-800"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-8 text-hotel-700 font-medium">
            <div className="space-y-4">
              <p className="font-semibold">
                Guests are required to read and comply with the terms and conditions, including booking conditions available at{' '}
                <a href="https://www.thepuvanthennavilla.com/terms&conditions" className="text-hotel-600 hover:underline">
                  www.thepuvanthennavilla.com/terms&conditions
                </a>. Any violation may result in reservation cancellation, denial of accommodation access, forfeiture of payments, and charges for costs incurred.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Booking Your Holiday</h3>
              <p className="font-semibold">
                For Thepuvanthenna Villa reservations made through this website, confirmation of your reservation occurs upon you receiving written communication from Thepuvanthenna management, that your reservation is confirmed. The written communication will guide you through the next steps of a deposit (20% of the total reservation price) that is payable within 30 days prior to check in date.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Final Payment</h3>
              <p className="font-semibold">
                The remaining 80% of the total reservation price will be paid at Check in. For any additional services with charges incurred during your stay- these will be billed at the end of your stay.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Methods of Payment</h3>
              <p className="font-semibold">Payment options are:</p>
              <ul className="list-disc pl-6 space-y-2 font-semibold">
                <li>Bank transfer (LKR, USD or EUR), any bank transfer-related charges are borne by the Guest.</li>
                <li>Global Payments Email Pay- payment with VISA or MasterCard. The link will be sent to you by Thepuvanthenna Villa management team when the deposit for the reservation is due.</li>
                <li>Any cash amount in LKR is accepted. Notes must be without any damage, free of pen marks or stamps.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Cancellation | Prepayment</h3>
              <p className="font-semibold">
                Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Price Policy</h3>
              <p className="font-semibold">The pricing of the reservation is for each room. Maximum number of adults for a room allowed is 2.</p>
              <p className="font-semibold">However, If the entire accommodation needs booking, the total reservation price per night depends on the number of guests above the age of 10.</p>
              <p className="font-semibold">Children above age 10 and adults are considered as 'Guests' of Thepuvanthennna Villa. Children age 10 and under stay free of charge sharing sleeping space with parents. The number of children under age 10 must be communicated to the Villa along with the reservation in a note.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Booking Confirmation</h3>
              <p className="font-semibold">
                For internet bookings, refrain from replying to auto-generated confirmation emails. Contact{' '}
                <a href="mailto:thepuvanthennavilla@hotmail.com" className="text-hotel-600 hover:underline">thepuvanthennavilla@hotmail.com</a>{' '}
                for inquiries, and call Whatsapp{' '}
                <a href="https://wa.me/94775497458" className="text-hotel-600 hover:underline">+94 775497458</a>{' '}
                for assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Amendments and Cancellations</h3>
              <p className="font-semibold">
                Cancellations and reasonable changes to the reservations may be made to travel arrangements after confirmation varying by the booking period. Amendments are accepted based on availability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Special Changes and Cancellation Conditions for Bookings</h3>
              <ul className="list-disc pl-6 space-y-2 font-semibold">
                <li>Free cancellation - 100% refund of the deposit received for requests received in writing over 30 days prior to check in date. Alternatively, the deposit could be transferred to an amended date.</li>
                <li>Cancellations within the 30 days – cancelations received in writing within 30 days prior to check in date are subject to a 20% cancellation fee. Equals to the deposit of 20% of the total reservation price not being refunded.</li>
                <li>No shows - are also subject to a 20% cancellation fee. Also, equals to the deposit of 20% of the total reservation price not being refunded.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Cancellation Policy for Amended Bookings:</h3>
              <p className="font-semibold">The cancellation policy applies to the original date of arrival, not the extended date. If the arrival date is brought forward, the cancellation policy applies to the amended arrival date.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Changes to the Booking</h3>
              <p className="font-semibold">
                Reservation date changes and number of guests changes are subject to availability.
                To modify your reservation, please send an email to{' '}
                <a href="mailto:thepuvanthennavilla@hotmail.com" className="text-hotel-600 hover:underline">thepuvanthennavilla@hotmail.com</a>. 
                Changes to dates are conditional upon availability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Booking (Reservation) Disputes</h3>
              <p className="font-semibold">
                In the event of a dispute concerning a booking made with the Thepuvanthanna Villa, the sole discretion lies with the Thepuvanthanna Villa to cancel the reservation and notify the booker via email. The full reservation amount, minus any applicable bank charges, will be refunded via the booker's original payment method.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-hotel-800 text-white rounded hover:bg-hotel-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsSection;