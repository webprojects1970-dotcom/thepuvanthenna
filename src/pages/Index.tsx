import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoomCard from "@/components/RoomCard";
import BookingForm from "@/components/BookingForm";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import StoriesSection from "@/components/StoriesSection";
import Footer from "@/components/Footer";
import ImageSlideshow from "@/components/ImageSlideshow";
import { setupScrollReveal } from '@/lib/animations';
import { rooms, hotelInfo } from '@/lib/hotelData';

const Index = () => {
  const location = useLocation();

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
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900 text-center mb-6">Accommodation</h3>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
            A hideaway in a rural spice garden in the mountains, snuggled in the heart of a panoramic Kandyan village surrounded by paddy fields and a river, the villa promotes wellness and is the epitome of tranquility. 
            </p>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
            Thepuvanthenna Villa offers a spacious holiday home with four bedrooms and four bathrooms. The property features a living room, terrace, spacious restaurant, garden, ensuring comfort and relaxation and is located in a 3-acre estate full of lush greens bordering the local river. And is kids-friendly. 
            </p>
          </div>

          {/* Facilities Section */}
          <div className="max-w-6xl mx-auto mt-12 reveal">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900 text-center mb-6">Facilities</h3>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              Guests can enjoy the open-air restaurant, sun terrace, the estate grounds, the river with a rock-pool and nature walks. Additional amenities include natural spring water baths hot or cold, open-air shower, mind and body cleansing with healthy cuisine, yoga and free meditation lessons, outdoor juice and snack bar, free WiFi.
            </p>
          </div>

          {/* Sustainability & Community Section */}
          <div className="max-w-6xl mx-auto mt-12 reveal">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-hotel-900 text-center mb-6">Sustainability & Community</h3>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              At Thepuvanthenna Villa we respect and celebrate Sri Lanka's diverse natural beauty, its culture enriched with various religions. And we try to provide a sustainable and beautiful place from which to experience Sri Lanka. The family who owns the Villa and the Estate passionately believes that both modern design and the natural world, with warm and exceptional hospitality and wildlife preservation can go hand in hand.
            </p>
            <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
              Thepuvanthenna Villa and Estate use organic, home grown and local ingredients for all menus. Water consumed in the entire Villa and the Estate is from local springs, electricity is generated from solar power, and are entirely single-use plastic free. The Villa and the Estate consistently support their local community, via farming initiatives and by helping protect the surrounding natural environment.
            </p>
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-6">The Villa's more extensive sustainable operations include:</h4>
              <ul className="list-disc pl-6 text-hotel-700 text-left space-y-2 mb-6 font-semibold">
                <li>A Bio cell sewage treatment unit</li>
                <li>Rainwater harvesting processes to be used in the vegetable garden and the Estate</li>
                <li>Solar powered hot water and electricity generated throughout the entire Estate</li>
                <li>Garbage segregation – dry/wet and recycling</li>
                <li>Recycle plastic</li>
                <li>Self-made compost used for the vegetable gardens and in spice plantations</li>
                <li>No pesticides, additives or fertilizer bought or used throughout the vegetation</li>
                <li>Self-made organic fertilizer used for the plantations and vegetations</li>
                <li>Guests are encouraged to use refillable water bottles avoiding single-use plastic water bottles</li>
              </ul>
            </div>

            <div className="max-w-6xl mx-auto mt-8">
              <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-6">Community</h4>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                The Villa takes immense pleasure in its commitment to empowering and inspiring to uplift the local community, by spearheading various home gardening initiatives, generating employment opportunities, sharing land for agriculture among the community who does not own land, allowing access to natural drinking spring water, and mainly, preserving the natural environment. All while fostering a culture of sustainable development and growth.
              </p>
            </div>

            <div className="max-w-6xl mx-auto mt-8">
              <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-6">Home Gardens</h4>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                The Estate encourages home gardens by supporting local residents by providing them with seeds, soil, compost making and new agro technology know how, access to water from the river to their paddy fields and mostly everything they need to grow their own produce. In addition, The Villa helps them in purchasing their harvests to ensure everyone thrives. The Villa encourages the local community to grow and sell any surplus they create to others.
              </p>
            </div>

            <div className="max-w-6xl mx-auto mt-8">
              <h4 className="text-xl font-serif font-semibold text-hotel-800 text-center mb-6">Using Local Community Talent</h4>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                The Villa extends its support to the community by hiring local talent whenever possible. From tuk-tuk drivers, using local transport, creating employment for handy jobs and professional jobs alike, including maintenance workers, builders, painters, farmers, seed pickers, cleaners, cooks, landscapers, gardeners, The Villa ensures that it offers fair livelihood opportunities to the local community adopting 'Live and let live' philosophy of tolerance and acceptance.
              </p>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                In addition, The Villa encourages home industry set up empowering local women by providing them with the training and tools necessary to create fabrics, art work, paintings and tote bags so they can earn a living from home. The Villa goes further by exhibiting the produce at its living area for sales opportunities.
              </p>
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
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-hotel-800 text-center mb-4">Detoxing and Cleansing</h3>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                A healthy cuisine nourished with local vegetation grown organically is focused on detoxing and cleansing aspects of the physical body. Thepuvanthenna's well-structured detox menus aspire to give your body a real boost in its tireless campaign to keep you healthy. You will be able to take away with you the know how you need to maintain your wellness and healthy lifestyle at the end of your stay at the Villa.
              </p>
            </div>

            {/* Meditation */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-hotel-800 text-center mb-4">Meditation</h3>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                Free meditation lessons are available as part of purifying the mind. A meditation practitioner will conduct morning meditation sessions as a compliment of the Villa, free of charge, with time to practice the techniques you learn accompanied with Dhamma Discussions.
              </p>
            </div>

            {/* Yoga */}
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-hotel-800 text-center mb-4">Yoga</h3>
              <p className="text-hotel-700 leading-relaxed text-center mb-6 font-medium font-semibold text-base md:text-lg">
                Yoga sessions are offered at Thepuvanthenna Villa as a group of physical, mental, and spiritual practices and disciplines at salvaging body and mind to attain various spiritual goals. Learn yoga with a professional yoga master experiencing the natural breeze. This will include guided lessons and translations for a fee. Reserve them in advance. A 60-minute guided session held three times a week (at present on Tuesday, Thursday and Friday from 9 to 10 am).
              </p>
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

          <div className="text-center mt-12 reveal">
            <a 
              href="#booking" 
              className="btn btn-primary px-8 py-3 text-lg rounded-full inline-block transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <AmenitiesSection />

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-hotel-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-sm uppercase tracking-widest text-hotel-500 font-medium">Book Your Stay</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6 text-hotel-900">Reserve Your Perfect Room</h2>
              <p className="text-hotel-600 mb-8">
                Experience unparalleled luxury and comfort at Thepuvanthenna Villa. Reserve your stay directly with us for the best rates and exclusive perks.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-hotel-100 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-hotel-900">Immediate Confirmation</h4>
                    <p className="text-hotel-600">Confirmation is immediate after booking.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-hotel-100 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 19.5L22 19.5"></path>
                      <path d="M3 5v14"></path>
                      <path d="M18 5v14"></path>
                      <path d="M21 5v14"></path>
                      <path d="M18.5 5h-14C3.67 5 3 4.33 3 3.5S3.67 2 4.5 2h14c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-hotel-900">Prepayment Required</h4>
                    <p className="text-hotel-600">50% of the total price will be charged after reservation.</p>
                    <p className="text-primary font-bold mt-1">Pay the property before arrival</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-hotel-100 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                      <line x1="7" x2="7" y1="15" y2="15"></line>
                      <line x1="12" x2="12" y1="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-hotel-900">Partially Refundable</h4>
                    <p className="text-hotel-600">You will be charged 50% of the total price if you cancel after reservation. If you don't show up, the no-show fee will be the same as the cancellation fee.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <StoriesSection />

      <Footer />
    </div>
  );
};

export default Index;
