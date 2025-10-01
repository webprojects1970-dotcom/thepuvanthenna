import React, { useRef, useEffect } from 'react';

interface ServicesAndExtrasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesAndExtrasModal: React.FC<ServicesAndExtrasModalProps> = ({ isOpen, onClose }) => {
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

  const services = [
    {
      category: 'Guest Services',
      items: [
        'Wake-up service',
        'Room cleaning (on request)',
        'Reception services',
        'Invoice provided',
        'Private check-in/check-out',
        'Concierge service',
        '24-hour front desk availability'
      ]
    },
    {
      category: 'Safety & Security',
      items: [
        'Key access',
        '24-hour security'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900">Services and Extras</h2>
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
          
          <div className="space-y-8 text-hotel-700">
            {services.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-hotel-800">{section.category}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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

export default ServicesAndExtrasModal;
