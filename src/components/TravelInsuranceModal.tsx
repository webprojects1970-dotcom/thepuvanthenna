import React, { useRef, useEffect } from 'react';

interface TravelInsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TravelInsuranceModal: React.FC<TravelInsuranceModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900">Travel Insurance & Policies</h2>
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
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Travel Insurance</h3>
              <p>
                Guests are advised to obtain travel insurance, and Thepuvanthenna Villa can provide details if needed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Responsibility</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will assume liability only for incidents directly resulting from our staff proven negligence during your stay, within the premises of our accommodation.</li>
                <li>Thepuvanthenna Villa cannot be held accountable for the failure of any element outside our Villa and the estate premises.</li>
                <li>
                  Certain circumstances may render it impossible to fulfill the contract due to events beyond our control, such as loss of government supplied utilities, war, the threat of war, riots, civil strife, industrial disputes, terrorist activity, natural or nuclear disasters, fire, adverse weather conditions, and similar events. In such cases, we will not be liable for compensation, and we may be compelled to cancel, delay, curtail, or alter your reservation in any manner, affecting or preventing our service.
                </li>
                <li>We do not assume responsibility for any loss, damage to baggage, property, or for injury, illness, death, or any damages or claims caused directly or indirectly by accidents, loss, damage to a person or property, delays, transport failures, strikes, war, force majeure, or any other losses arising from or related to your travel arrangements.</li>
                <li>We acknowledge our responsibility to ensure that the holidays you book with us adhere to the provided descriptions and that the services we are contractually obligated to offer meet a reasonable standard.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Breakages and Damages</h3>
              <p>
                You will be held accountable for any breakages, losses, or damages caused by you or a member of your party during your stay in the accommodation. It is your duty to rectify the damage or make full payment to Thepuvanthenna Villa before departure, indemnifying us against any losses, damages, or claims.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Behaviour</h3>
              <p>
                If in the opinion of our staff, your behaviour is unkind, disruptive, causing distress, injury, or danger to our staff, or any other third party, your reservation may be terminated, and we shall not be liable for any incurred costs or claims.
              </p>
              <p>
                Our Villa and the estate are situated close to animal and bird sanctuaries- cruelty to animals will not be tolerated. You must not obstruct nature, litter or take away. Our guests must adhere to the wildlife authority rules of behavior when participating in any outdoor activities. If Thepuvanthenna Villa management receives a complaint from the authorities or your tour organizer, your reservation may be terminated, and we shall not be liable for any incurred costs or claims.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Complaints</h3>
              <p>
                We aim to amicably resolve any reasonable complaints we receive regarding the standard of service or accommodation arrangements.
                Please email your concerns to{' '}
                <a href="mailto:thepuvanthennavilla@hotmail.com" className="text-hotel-600 hover:underline">
                  thepuvanthennavilla@hotmail.com
                </a>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Exclusion of Liability</h3>
              <p>
                We have endeavored to portray and describe each accommodation and/or service as best we can and also to provide the most up-to-date information through our website and other communications with you to the best of our knowledge.
              </p>
              <p>
                We cannot be held liable for any discrepancies or differences that might arise between the content of our website (pricing, text, images, etc.) on any other 3rd party websites or social media pages.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Information provided by you</h3>
              <p>
                All information provided by you should be true and accurate. We will treat it confidentially and not forward it to any third party. We have a strict anti-fraud policy and take responsible steps to protect personal information. We will not request for your Credit Card details, Security Codes, OTP or Pins.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Electronic Communication</h3>
              <p>
                Communications via email or WhatsApp is accepted, and users agree to receive electronic communications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Copyright</h3>
              <p>
                All website material is owned by Thepuvanthenna Villa Estate Private Limited, and commercial copying is prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Governing Law and Jurisdiction</h3>
              <p>
                These terms are subject to Sri Lankan laws and jurisdiction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-hotel-800">Validity</h3>
              <p>
                These terms are effective from 1st November, 2025.
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

export default TravelInsuranceModal;
