import React, { useRef, useEffect } from 'react';

interface ChildPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChildPolicyModal: React.FC<ChildPolicyModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900">Child Policy</h2>
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
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Age Requirements & Pricing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Children of all ages are welcome.</li>
                <li>Children age 0 - 2 can stay free.</li>
                <li>Children age 3 – 11 applies to the child price.</li>
                <li>Guests aged 11 and above are considered adults and will be charged at the standard adult rate.</li>
                <li>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Safety Information</h3>
              <p>
                The Villa and the estate grounds are open to deep water, heights, wild animals in the garden and open lounge spaces without child safety locks.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Children must be always under accompanying adults' / parents' supervision.</li>
                <li>Children must not sleep in a room without an adult.</li>
                <li>Picky eaters are welcome - please ensure you include the number of children aged 10 and under in a note to us, so we know to cater to them.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Cot and Extra Beds</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cot is available upon request free of charge for children age 0 - 2 years.</li>
                <li>The number of cots allowed is dependent on the option you choose. Please check your selected option for more information.</li>
                <li>All cots are subject to availability.</li>
                <li>No extra beds are available in the rooms.</li>
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

export default ChildPolicyModal;
