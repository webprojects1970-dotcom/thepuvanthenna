import React, { useRef, useEffect } from 'react';

interface HouseRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HouseRulesModal: React.FC<HouseRulesModalProps> = ({ isOpen, onClose }) => {
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
      <div ref={modalRef} className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900">House Rules</h2>
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
          
          <div className="space-y-6 text-hotel-700 font-medium">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Check-in & Check-out</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Arrival from 14:00.</li>
                <li>You'll need to let the property know in advance what time you'll arrive.</li>
                <li>No age restriction or requirement for check-in.</li>
                <li>Departure until 12:00</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Smoking Policy</h3>
              <p>Smoking is not allowed in the building or the grounds. No designated smoking areas are available.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Parties & Events</h3>
              <p>Parties/events are not allowed. Hen/stag parties are not allowed.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Pet Policy</h3>
              <p>Pets are not accepted.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Parking</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Parking space for your vehicle is available onsite</li>
                <li>We do not provide drivers accommodation</li>
                <li>Parking is available free of charge</li>
                <li>No access for large or mini buses</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Important Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Guests are required to show a photo identification that matches the name on the reservation on arrival.</li>
                <li>Inform The Villa in advance of your expected arrival time.</li>
                <li>You can use the Special Requests box when booking, or contact the property directly in writing with the contact details provided in your confirmation.</li>
                <li>Payment of the advance / reservation fee before arrival via bank transfer is required.</li>
                <li>The Villa management team will contact you after you book to provide instructions.</li>
              </ul>
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

export default HouseRulesModal;
