import { X, Copy, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface BonnesAffairesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BonnesAffairesModal = ({ isOpen, onClose }: BonnesAffairesModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'thepuvanthennavilla@hotmail.com';
  
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy email: ', err);
      }
      document.body.removeChild(textArea);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-hotel-600 hover:text-hotel-800"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8">
          <h2 className="text-3xl font-serif font-semibold text-hotel-900 mb-6">
            Les Bonnes Affaires
          </h2>
          
          <div className="text-left space-y-8">
            <div className="bg-white p-6 rounded-xl border-l-4 border-hotel-500 shadow-md">
              <h3 className="text-2xl font-semibold text-hotel-800 mb-4">Special Autumn Getaway</h3>
              <p className="text-hotel-700 text-lg font-medium mb-2">
                <span className="font-bold">15% discount</span> on reservations from <span className="font-bold">27th September – 05 October 2025</span>
              </p>
              <p className="text-hotel-600">
                <span className="font-semibold">Includes:</span> One complimentary yoga session during your stay
              </p>
            </div>

            <div className="bg-hotel-50 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-hotel-800 mb-4">Stay Longer, Save More</h3>
              <p className="text-hotel-700 text-lg mb-4">
                Extend your escape with The Villa's "Stay Longer, Save More" offer! The longer you stay, the more you save and enjoy extra nights of relaxation, adventure, and wellness at Thepuvanthenna Villa.
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-hotel-700 mb-3">Offer Details:</h4>
                <ul className="space-y-2 text-hotel-700">
                  <li className="flex items-start">
                    <span className="text-hotel-500 font-bold mr-2">•</span>
                    <span><span className="font-semibold">10% discount</span> on extended stays of 3 nights or more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-500 font-bold mr-2">•</span>
                    <span>Offer valid only for direct bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-500 font-bold mr-2">•</span>
                    <span>Offers cannot be combined</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-500 font-bold mr-2">•</span>
                    <span>All offers are subject to availability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-t-2 border-hotel-200 shadow-md">
              <h3 className="text-xl font-semibold text-hotel-800 mb-4">How to Book</h3>
              <p className="text-hotel-700 mb-4">
                To take advantage of these special offers, please contact us directly at:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`mailto:${email}`} 
                  className="flex-1 flex items-center justify-center bg-hotel-800 hover:bg-hotel-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-center bg-hotel-100 hover:bg-hotel-200 text-hotel-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap"
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-5 w-5 mr-2 text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default BonnesAffairesModal;
