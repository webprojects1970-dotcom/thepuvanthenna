import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Train, MapPin, Gift, ClipboardList, Bell, Shield, Baby } from 'lucide-react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoomCard from "@/components/RoomCard";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";
import StoriesSection from "@/components/StoriesSection";
import Footer from "@/components/Footer";
import ImageSlideshow from "@/components/ImageSlideshow";
import TrainJourneyModal from "@/components/TrainJourneyModal";
import BonnesAffairesModal from "@/components/BonnesAffairesModal";
import { ReservationsSection } from "@/components/ReservationsSection";
import { HouseRulesModal } from "@/components/HouseRulesModal";
import { ServicesAndExtrasModal } from "@/components/ServicesAndExtrasModal";
import { TravelInsuranceModal } from "@/components/TravelInsuranceModal";
import { ChildPolicyModal } from "@/components/ChildPolicyModal";
import { setupScrollReveal } from '@/lib/animations';
import { rooms, hotelInfo } from '@/lib/hotelData';

const Index = () => {
  const location = useLocation();
  const [showTrainModal, setShowTrainModal] = useState(false);
  const [showBonnesAffairesModal, setShowBonnesAffairesModal] = useState(false);
  const [showReservationsModal, setShowReservationsModal] = useState(false);
  const [showHouseRulesModal, setShowHouseRulesModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showTravelInsuranceModal, setShowTravelInsuranceModal] = useState(false);
  const [showChildPolicyModal, setShowChildPolicyModal] = useState(false);

  // Close modal when location changes
  useEffect(() => {
    if (showTrainModal) {
      setShowTrainModal(false);
    }
  }, [location]);

  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanup = setupScrollReveal();
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    return cleanup;
  }, []);

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="text-14xl md:text-4xl font-serif font-semibold mt-2 text-hotel-900">Where Wilderness Meets Tranquility and Wellness – Be One with Nature</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          </div>

          <div className="max-w-6xl mx-auto reveal">
            <p className="text-hotel-800 leading-relaxed text-center mb-8 font-medium text-base md:text-lg">
            Nestled in the heart of the country side surrounded by mountains and spices, Thepuvanthenna Villa together with its Estate is a sanctuary, offers an unparalleled blend of serenity, comfort, and world class service. Constructed using ecologically accountable processes endorsed with an enduring love of nature, this is where a cherished journey to the famous island originates. 
            </p>
          </div>
          <div className="max-w-6xl mx-auto reveal">
            <p className="text-hotel-800 leading-relaxed text-center mb-8 font-medium text-base md:text-lg">
            The Villa and the Estate welcome you to a glorious haven of serenity; its beautifully designed rooms, open-air restaurant coupled with its unforgettable experience of Asian cuisine. The Estate attracts various forms of wild life mainly birds and deer as you can do birdwatching and stroll around the estate. Villa’s modern comfortable rooms will guarantee the privacy and harmony that you desire. Thepuvanthenna Villa and its heavenly space surrounded by nature, village life and its attentive staff will ensure an unforgettable stay for you. Your journey at the Thepuvanthenna Villa will further your understanding of the incomparable experiences that Sri Lanka has to offer, through guided and warm escapades.   
            </p>
          </div>

          <div className="max-w-6xl mx-auto reveal">
            <p className="text-xl md:text-2xl font-serif font-semibold text-hotel-800 text-center mb-8">
              Experience the ultimate tranquility and wellness
            </p>
          </div>

          <div id="accommodation" className="max-w-6xl mx-auto mt-12 reveal">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg mb-12">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Accommodation</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                <div className="space-y-6">
                  <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100">
                    <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg mb-6">
                      A hideaway in a rural spice garden in the mountains, snuggled in the heart of a panoramic Kandyan village surrounded by paddy fields and a river, the villa promotes wellness and is the epitome of tranquility.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                        <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Villa Features</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Spacious holiday home with 4 bedrooms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">4 well-appointed bathrooms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Comfortable living room area</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Beautiful terrace with scenic views</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                        <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Property Highlights</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Spacious on-site restaurant</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Lush garden spaces</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">3-acre estate with lush greenery</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Riverside location</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Family and kid-friendly environment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div id="facilities" className="max-w-6xl mx-auto mt-12 reveal">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg mb-12">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Facilities</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                <div className="space-y-6">
                  <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100">
                    <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg mb-6">
                      Our facilities are designed to provide you with the ultimate comfort and relaxation during your stay. Enjoy a perfect blend of modern amenities and natural beauty.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                        <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Dining & Relaxation</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Open-air restaurant with panoramic views</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Outdoor juice and snack bar</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Sun terrace for relaxation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Healthy cuisine options</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                        <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Wellness & Nature</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Natural spring water baths (hot or cold)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Refreshing open-air showers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Riverside rock-pool</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Guided nature walks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-hotel-700">Yoga and free meditation lessons</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-hotel-700 font-medium">
                        <span className="font-semibold">Complimentary WiFi</span> available throughout the property
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability & Community Section */}
          <div id="sustainability" className="max-w-6xl mx-auto mt-12 reveal">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg mb-12">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Sustainability & Community</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                
                {/* Introduction */}
                <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100 mb-8">
                  <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg mb-4">
                    At Thepuvanthenna Villa we respect and celebrate Sri Lanka's diverse natural beauty and culture. We are committed to sustainable tourism that benefits both our guests and the local community.
                  </p>
                </div>

                {/* Sustainability Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                    <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Our Sustainable Practices</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">100% organic, home-grown ingredients in all meals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Solar-powered electricity and hot water</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Natural spring water from local sources</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Completely single-use plastic free</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Bio cell sewage treatment system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Comprehensive waste management and recycling</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                    <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Eco-Friendly Operations</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Rainwater harvesting for gardens</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Chemical-free, organic farming practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">On-site composting system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Natural pest control methods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Refillable water bottles for guests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Energy-efficient lighting and appliances</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Community Section */}
                <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100 mb-8">
                  <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-4">Community Engagement</h4>
                  <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg mb-6">
                    We are deeply committed to supporting and empowering our local community through various initiatives that promote sustainable development and cultural preservation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                      <h5 className="text-lg font-serif font-semibold text-hotel-800 text-center mb-3">Home Garden Initiative</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Providing seeds, soil, and agricultural training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Supporting access to water resources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Purchasing harvests from local farmers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Creating market opportunities for surplus produce</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                      <h5 className="text-lg font-serif font-semibold text-hotel-800 text-center mb-3">Local Employment</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Hiring local staff for all operations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Supporting local transport services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Providing fair wages and training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-hotel-700">Encouraging skill development</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-hotel-100">
                    <h5 className="text-lg font-serif font-semibold text-hotel-800 text-center mb-3">Women's Empowerment</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Training programs for local women</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Support for home-based businesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Exhibition space for local handicrafts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-hotel-700">Opportunities to sell products to guests</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-hotel-700 font-medium italic">
                    "We believe in living in harmony with nature and our community, creating a positive impact that extends beyond our property boundaries."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section id="wellness" className="py-20 bg-hotel-50">
        <div className="container mx-auto px-8 md:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mt-2 text-hotel-900">Wellness</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          </div>

          <div className="max-w-6xl mx-auto reveal">
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              Step away from the distractions and daily demands, and nestle into a calmer and more natural pace - where calm and serenity naturally arise within you. Thepuvanthenna Villa brings you a holistic retreat combined with guided meditation, inner reflection, mindfulness and yoga practices designed to enrich, restore, and strengthen your being.
            </p>
            <p className="text-hotel-700 leading-relaxed text-center mb-10 font-medium font-semibold text-base md:text-lg">
              Atop the hills of Kandy, between nutmeg, cloves and black pepper plantation, paddy fields and the local river, lies a bountiful forested sanctuary where you can surround yourself in natures epitome. Join us in a journey of exploration where you can slow down, breathe deeply, cleanse and reconnect through mindful movement, meditation, and conscious rest.
            </p>

            {/* Detoxing and Cleansing */}
            <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Detoxing and Cleansing</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100">
                  <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg">
                    A healthy cuisine nourished with local vegetation grown organically is focused on detoxing and cleansing aspects of the physical body. Thepuvanthenna's well-structured detox menus aspire to give your body a real boost in its tireless campaign to keep you healthy. You will be able to take away with you the know how you need to maintain your wellness and healthy lifestyle at the end of your stay at the Villa.
                  </p>
                </div>
              </div>
            </div>

            {/* Meditation */}
            <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Meditation</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100">
                  <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg">
                    Free meditation lessons are available as part of purifying the mind. A meditation practitioner will conduct morning meditation sessions as a compliment of the Villa, free of charge, with time to practice the techniques you learn accompanied with Dhamma Discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* Yoga */}
            <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-lg">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-800 mb-3">Yoga</h3>
                  <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
                </div>
                <div className="bg-hotel-50 p-6 rounded-lg border border-hotel-100">
                  <p className="text-hotel-700 leading-relaxed text-center font-medium text-base md:text-lg">
                    Yoga sessions are offered at Thepuvanthenna Villa as a group of physical, mental, and spiritual practices and disciplines at salvaging body and mind to attain various spiritual goals. Learn yoga with a professional yoga master experiencing the natural breeze. This will include guided lessons and translations for a fee. Reserve them in advance. A 60-minute guided session held three times a week (at present on Tuesday, Thursday and Friday from 9 to 10 am).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mt-2 text-hotel-900">Location</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          </div>

          <div className="max-w-6xl mx-auto reveal">
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              Thepuvanthenna Villa is located in an agricultural farm in the hill country of Central Sri Lanka.
            </p>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              Access via: <span className="font-bold">Pirivena Road, Marathugoda, Poojapitiya, Kandy.</span>
            </p>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              The Estate is stocked with spice trees, vegetables, paddy, fruits and coconut trees. Guests can experience the farm activities, taste fresh local produce, and immerse themselves in the rural lifestyle. It stands 20 minutes from the Kandy city Centre.
            </p>

            {/* Google Maps Button */}
            <div className="text-center my-8">
              <a 
                href="https://www.google.com/maps/place/Thepuvanthenna+Villa/@7.2345,80.6789,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-hotel-600 hover:bg-hotel-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View on Google Maps
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-hotel-800 text-center mb-6">Airport & Transfer Information</h3>
              
              <div className="bg-hotel-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold text-hotel-900 mb-4">Airport Transfer</h4>
                <p className="text-hotel-700 leading-relaxed mb-6 font-medium font-semibold text-base md:text-lg">
                  Simply let us know your flight arrival details and we will arrange a convenient and reliable pickup from Colombo Bandaranaike International Airport to Thepuvanthenna Villa. Expect a smooth, scenic drive along beautiful Sri Lanka. The trip takes around 2 hours.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <h4 className="text-xl font-semibold text-hotel-900 mb-6 text-center">Other Transfer Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Mattala Rajapaksa International Airport</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">4.26 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Colombo City</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">2.5 to 3 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Yala</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">5.30 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Ella</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">3 hours</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Sigiriya</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">1.45 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Nuwara Eliya</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">1.45 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Unawatuna Galle</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">3.30 hours</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-semibold text-hotel-800">Victoria Reservoir Kandy Seaplane Base</span>
                      <span className="font-semibold text-hotel-900 bg-hotel-100 px-3 py-1 rounded">15 minutes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-hotel-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 text-hotel-900">Gallery</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="max-w-2xl mx-auto text-hotel-600 mb-12">
              Take a peek into what you can enjoy at Thepuvanthenna Villa. Browse through our gallery to discover the breathtaking pictures of the accommodation, facilities and amenities which await you at Thepuvanthenna Villa.
            </p>
          </div>

          <div className="reveal">
            <ImageSlideshow
              images={[
                {
                  url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                  alt: "Luxury Room"
                },
                {
                  url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                  alt: "Villa View"
                },
                {
                  url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  alt: "Garden View"
                },
                {
                  url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  alt: "Dining Area"
                },
                {
                  url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  alt: "Bathroom"
                },
                {
                  url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                  alt: "Exterior View"
                }
              ]}
            />
          </div>

        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-hotel-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Booking Details */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6 text-hotel-900">Reservations</h2>
                  <ul className="text-hotel-700 text-center mb-8 space-y-2 text-base md:text-lg">
                    <li className="flex items-center justify-center">
                      <span className="mr-2">•</span>
                      <span>4 double rooms with en-suite bathrooms</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <span className="mr-2">•</span>
                      <span>Maximum 2 adults per room</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-hotel-50 p-6 rounded-lg">
                    <h3 className="text-xl font-serif font-semibold text-hotel-800 mb-4">A Little Bit of Planning</h3>
                    <p className="text-hotel-700 leading-relaxed mb-4 font-semibold">
                      If you need help with planning your trip, sightseeing and transport, give us a shout, a little in advance so we can give you a hand in organising your trip.
                    </p>
                    <p className="text-hotel-700 leading-relaxed mb-4 font-semibold">
                      If you have a flight at an odd hour, please let us know with your booking, check/agree with us on the flexibility and head straight to Thepuvanthenna from the Airport. Only an additional meal charge will apply- if any. Our flexibility goes a little further to your timings of check in and check out - based on availability.
                    </p>
                    <p className="text-hotel-700 leading-relaxed font-semibold">
                      We have discounts for our returning guests and multi property reservations within The Villa. It's only available on reservations made through our website. For more information see offers under the 'Thepuvanthenna Stories' page.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Buttons in requested order */}
              <div className="reveal mt-8 space-y-4">
                {/* Main Reservation Button */}
                <button
                  onClick={() => setShowReservationsModal(true)}
                  className="w-full flex items-center justify-center bg-hotel-800 hover:bg-hotel-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <ClipboardList className="h-5 w-5 mr-2" />
                  View Reservation Details
                </button>

                {/* Services & Extras Button (full width) */}
                <button
                  onClick={() => setShowServicesModal(true)}
                  className="w-full flex items-center justify-center bg-white text-hotel-800 border border-hotel-200 hover:bg-hotel-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Bell className="h-5 w-5 mr-2 text-hotel-600" />
                  Services & Extras
                </button>

                {/* House Rules and Child Policy Buttons (side by side) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setShowHouseRulesModal(true)}
                    className="w-full flex items-center justify-center bg-white text-hotel-800 border border-hotel-200 hover:bg-hotel-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <ClipboardList className="h-5 w-5 mr-2 text-hotel-600" />
                    House Rules
                  </button>
                  <button
                    onClick={() => setShowChildPolicyModal(true)}
                    className="w-full flex items-center justify-center bg-white text-hotel-800 border border-hotel-200 hover:bg-hotel-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    <Baby className="h-5 w-5 mr-2 text-hotel-600" />
                    Child Policy
                  </button>
                </div>

                {/* Travel Insurance & Policies Button (full width) */}
                <button
                  onClick={() => setShowTravelInsuranceModal(true)}
                  className="w-full flex items-center justify-center bg-white text-hotel-800 border border-hotel-200 hover:bg-hotel-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <Shield className="h-5 w-5 mr-2 text-hotel-600" />
                  Travel Insurance & Policies
                </button>
              </div>
            </div>
            
            {/* Right Column - Booking Form */}
            <div className="sticky top-6">
              <div className="reveal">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <StoriesSection />

      {/* Train Journey Section */}
      <section className="py-20 bg-hotel-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-hotel-900 mb-4">Rendezvous Kandy: Colombo – Kandy Intercity Train</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-hotel-600 text-lg mb-8 max-w-3xl mx-auto font-semibold">
              Experience one of the world's most scenic train journeys from Colombo to Kandy. This 2.5-hour ride offers breathtaking views of Sri Lanka's lush countryside, tea plantations, and misty mountains.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button
                onClick={() => setShowTrainModal(true)}
                className="flex items-center justify-center bg-hotel-800 hover:bg-hotel-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <Train className="h-5 w-5 mr-2" />
                Explore Train Journey
              </button>
              <a 
                href="#location" 
                className="flex items-center justify-center bg-white text-hotel-800 border border-hotel-200 hover:bg-hotel-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <MapPin className="h-5 w-5 mr-2" />
                View on Map
              </a>
            </div>
            
            <p className="text-hotel-500 text-sm mt-4">
              Click to learn about booking, best seats, and travel tips
            </p>
          </div>
        </div>
        
        {showTrainModal && (
          <TrainJourneyModal 
            isOpen={showTrainModal} 
            onClose={() => setShowTrainModal(false)} 
          />
        )}
      </section>

      {/* Les Bonnes Affaires Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-hotel-900 mb-4">Les Bonnes Affaires</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-hotel-600 text-lg mb-8 max-w-3xl mx-auto font-semibold">
              Check us out as The Villa offers 'Les Bonnes Affaires' (literally meaning 'The Good Deals') - 'Last minute - Enjoy The Villa and the Estate' at certain dates of the calendar from time to time.
            </p>
            
            <button
              onClick={() => setShowBonnesAffairesModal(true)}
              className="flex items-center justify-center mx-auto bg-hotel-800 hover:bg-hotel-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Gift className="h-5 w-5 mr-2" />
              Find Out More
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <BonnesAffairesModal 
        isOpen={showBonnesAffairesModal}
        onClose={() => setShowBonnesAffairesModal(false)}
      />
      
      <ReservationsSection 
        isOpen={showReservationsModal}
        onClose={() => setShowReservationsModal(false)}
      />

      <HouseRulesModal
        isOpen={showHouseRulesModal}
        onClose={() => setShowHouseRulesModal(false)}
      />

      <ServicesAndExtrasModal
        isOpen={showServicesModal}
        onClose={() => setShowServicesModal(false)}
      />

      <TravelInsuranceModal
        isOpen={showTravelInsuranceModal}
        onClose={() => setShowTravelInsuranceModal(false)}
      />

      <ChildPolicyModal
        isOpen={showChildPolicyModal}
        onClose={() => setShowChildPolicyModal(false)}
      />

      <Footer />
    </div>
  );
};

export default Index;
