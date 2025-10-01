
import { hotelInfo } from '@/lib/hotelData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hotel-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-2">{hotelInfo.name}</h3>
            <p className="text-hotel-300 mb-3">
              Thepuvanthenna Villa, Marathugoda, Kandy, Sri Lanka
            </p>
            <a 
              href="#location" 
              className="inline-flex items-center text-hotel-200 hover:text-white border border-hotel-200 hover:border-white px-4 py-2 rounded-full text-sm font-medium transition-colors mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View Location
            </a>
            <div className="flex space-x-3">
              {Object.entries(hotelInfo.social).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-hotel-800 rounded-full text-hotel-300 hover:text-white hover:bg-primary transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="w-full">
            <h4 className="font-serif text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {/* Left Column */}
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'About', href: '#about' },
                  { label: 'Accommodation', href: '#accommodation' },
                  { label: 'Wellness', href: '#wellness' },
                  { label: 'Location', href: '#location' },
                  { label: 'Gallery', href: '#gallery' }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-hotel-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Right Column */}
              <ul className="space-y-2">
                {[
                  { label: 'Contact Us', href: '#contact' },
                  { label: 'Villa Stories', href: '#stories' },
                  { label: 'House Rules', href: '#' },
                  { label: 'Kids Policy', href: '#' },
                  { label: 'Menus', href: '#' },
                  { label: 'Terms & Conditions', href: '#' }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-hotel-300 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hotel-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-hotel-400 text-sm">
              &copy; {currentYear} {hotelInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
