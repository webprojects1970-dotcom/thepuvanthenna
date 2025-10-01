import { X } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface TrainJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrainJourneyModal = ({ isOpen, onClose }: TrainJourneyModalProps) => {
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
      <div ref={modalRef} className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-hotel-600 hover:text-hotel-800"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8">
          <h2 className="text-3xl font-serif font-semibold text-hotel-900 mb-6">
            Colombo – Kandy Intercity Train Journey (2.5 hours)
          </h2>
          
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-hotel-800 mb-4">How to Book Tickets</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-hotel-500 font-bold mr-3">•</span>
                <span>Use a local Mobitel connection by dialling <strong>365</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-hotel-500 font-bold mr-3">•</span>
                <span>Visit the ticket booths at Colombo Fort Station, Peradeniya, or Kandy Station</span>
              </li>
              <li className="flex items-start">
                <span className="text-hotel-500 font-bold mr-3">•</span>
                <span>Book online via <a href="https://seatreservation.railway.gov.lk/mtktwebslr/" target="_blank" rel="noopener noreferrer" className="text-hotel-600 hover:text-hotel-800 underline">seatreservation.railway.gov.lk</a></span>
              </li>
            </ul>

            <div className="border-t border-hotel-200 pt-6 mb-8">
              <h3 className="text-2xl font-semibold text-hotel-800 mb-4">Choosing the Right Seats</h3>
              <p className="text-hotel-600 mb-4 font-bold">
                For the best experience, consider these seating options:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-hotel-500 font-bold mr-3">•</span>
                  <span><span className="font-semibold">B Carriage (Non-AC):</span> Offers a more authentic experience with openable windows for better views and photography.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hotel-500 font-bold mr-3">•</span>
                  <span><span className="font-semibold">Best Seats:</span> Seats 1, 2, 3, and 4 (front-facing) or 39, 40, 41, and 42 (reverse-facing). These are away from the toilets and near carriage gaps, perfect for capturing stunning videos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hotel-500 font-bold mr-3">•</span>
                  <span><span className="font-semibold">Viewing Tip:</span> The right side of the train (facing forward) offers the best views during the journey to Kandy.</span>
                </li>
              </ul>
            </div>

            <div className="bg-hotel-50 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold text-hotel-800 mb-4">The Journey Itself: An Experience</h3>
              <p className="text-hotel-600 mb-4 font-bold">
                If you take the 7:00 AM train from Colombo Fort to Kandy (the final stop), plan to arrive at the station by 6:30 AM. You'll need to collect your mobile ticket reference at the counter before boarding. The train typically starts boarding by 6:45 AM.
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-hotel-700 font-bold mb-2 text-lg">Important Travel Tip:</p>
                <p className="text-hotel-600 font-bold">
                  Please inform us of your travel plans in advance. We can assist with arranging your transportation from Kandy Railway Station to the villa, ensuring a smooth transition upon arrival.
                </p>
              </div>
              <p className="text-hotel-600 mb-4 font-bold">
                The journey offers breathtaking views that more than compensate for any rough patches along the way. The ever-changing landscape will keep you captivated throughout the 2.5-hour trip, making this a must-try experience that immerses you in the natural beauty of Sri Lanka's countryside.
              </p>
              
              <div className="mt-6 pt-4 border-t border-hotel-200">
                <p className="text-hotel-700 text-lg">
                  <span className="font-semibold">Journey Time:</span> Approximately 2.5 hours
                </p>
                <p className="text-hotel-600 mt-2 font-semibold">
                  Enjoy breathtaking views of Sri Lanka's beautiful countryside during your journey to Kandy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-hotel-800 hover:bg-hotel-900 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainJourneyModal;
