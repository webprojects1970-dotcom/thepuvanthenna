import { useEffect } from 'react';
import { setupScrollReveal } from '@/lib/animations';
import { hotelInfo } from '@/lib/hotelData';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-sm uppercase tracking-widest text-hotel-500 font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6 text-hotel-900">LET'S TALK – Get In Touch</h2>
          <p className="text-hotel-600 mb-8">
            Get in touch with us to find out how we can assist you to plan and enjoy your stay in Sri Lanka. We are always available, contact us through the contact details mentioned below and enjoy hassle-free holiday planning. Direct all your questions about reservations, rates, accommodation, dining, excursions, leisure activities, honeymoon packages, and other facilities as well as special offers to us. Don't hesitate to call or e-mail us, we are more than happy to provide you with our great hospitality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-hotel-100 bg-hotel-50 hover:shadow-md transition-shadow md:col-span-4">
              <div className="p-3 bg-hotel-100 rounded-full text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium text-hotel-900 mb-2">Phone</h4>
              <p className="text-hotel-600">{hotelInfo.phone}</p>
              <p className="text-sm text-hotel-500 mt-2">Available 24/7 for reservations and inquiries</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-hotel-100 bg-hotel-50 hover:shadow-md transition-shadow md:col-span-4">
              <div className="p-3 bg-hotel-100 rounded-full text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium text-hotel-900 mb-2">Email</h4>
              <div className="w-full px-4">
                <p className="text-hotel-600 text-sm">
                thepuvanthennavilla
                <br
                ></br>@hotmail.com
                </p>
              </div>
              <p className="text-sm text-hotel-500 mt-2">We'll respond to your email within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-hotel-100 bg-hotel-50 hover:shadow-md transition-shadow md:col-span-4">
              <div className="p-3 bg-hotel-100 rounded-full text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-medium text-hotel-900 mb-2">Address</h4>
              <p className="text-hotel-600 mb-3">{hotelInfo.address}</p>
              <a 
                href="#location" 
                className="inline-flex items-center border-2 border-hotel-800 text-hotel-800 hover:bg-hotel-800 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                style={{ borderColor: '#5D4037' }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                View on Map
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="text-lg font-medium text-hotel-900 mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-5">
              {Object.entries(hotelInfo.social).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-hotel-100 rounded-full text-hotel-600 hover:text-primary hover:bg-hotel-200 transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  {platform === 'facebook' && <Facebook className="h-5 w-5" />}
                  {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                  {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
