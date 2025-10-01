import { useEffect, useState } from 'react';
import { setupScrollReveal } from '@/lib/animations';
import { hotelInfo } from '@/lib/hotelData';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [addressCopied, setAddressCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(hotelInfo.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.phone.replace(/\D/g, '')}`, '_blank');
  };

  useEffect(() => {
    const cleanup = setupScrollReveal();
    return cleanup;
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('thepuvanthennavilla@hotmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const openEmailClient = () => {
    window.location.href = 'mailto:thepuvanthennavilla@hotmail.com';
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(hotelInfo.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center reveal">
          <span className="text-sm uppercase tracking-widest text-hotel-500 font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6 text-hotel-900">LET'S TALK – Get In Touch</h2>
          <p className="text-hotel-600 mb-8 font-semibold">
            Get in touch with us to find out how we can assist you to plan and enjoy your stay in Sri Lanka. We are always available, contact us through the contact details mentioned below and enjoy hassle-free holiday planning. Direct all your questions about reservations, rates, accommodation, dining, excursions, leisure activities, honeymoon packages, and other facilities as well as special offers to us. Don't hesitate to call or e-mail us, we are more than happy to provide you with our great hospitality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
            <div className="flex flex-col items-center text-center p-8 rounded-xl border-2 border-hotel-200 bg-white hover:shadow-lg transition-all duration-300 h-full mx-auto w-full">
              <div className="p-4 bg-hotel-100 rounded-full text-primary mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-medium text-hotel-900 mb-4">Phone</h4>
              <p className="text-hotel-700 text-2xl font-medium mb-4">{hotelInfo.phone}</p>
              <div className="flex flex-col space-y-3 w-full mt-auto">
                <button
                  onClick={copyPhone}
                  className="relative group flex items-center justify-center bg-hotel-100 hover:bg-hotel-200 text-hotel-800 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {phoneCopied ? (
                    <>
                      <Check className="h-5 w-5 mr-2 text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.498 14.382v3.3c0 .6.6.6.6.6h2.4c.6 0 .6-.6.6-.6v-11.4c0-.6-.6-.6-.6-.6h-16.8c-.6 0-.6.6-.6.6v16.8c0 .6.6.6.6.6h3.6c.6 0 .6-.6.6-.6v-4.8c0-.6.6-.6.6-.6h2.4c.6 0 .6.6.6.6v4.8c0 .6.6.6.6.6h3.6c.6 0 .6-.6.6-.6v-6.6c0-.6-.6-.6-.6-.6h-1.8c-.6 0-.6-.6-.6-.6v-2.4c0-.6.6-.6.6-.6h4.2c.6 0 .6.6.6.6v2.4c0 .6-.6.6-.6.6h-1.8z"/>
                  </svg>
                  <span>Message on WhatsApp</span>
                </button>
              </div>
              <p className="text-hotel-500 mt-3 font-semibold">Available 24/7 for reservations and inquiries</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-xl border-2 border-hotel-200 bg-white hover:shadow-lg transition-all duration-300 h-full mx-auto w-full">
              <div className="p-4 bg-hotel-100 rounded-full text-primary mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-medium text-hotel-900 mb-4">Email</h4>
              <p className="text-hotel-700 text-lg mb-4">
                thepuvanthennavilla@hotmail.com
              </p>
              <div className="flex flex-col space-y-3 w-full mt-auto">
                <button
                  onClick={copyEmail}
                  className="relative group flex items-center justify-center bg-hotel-100 hover:bg-hotel-200 text-hotel-800 px-4 py-2 rounded-lg transition-colors duration-200"
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
                <button
                  onClick={openEmailClient}
                  className="flex items-center justify-center bg-hotel-800 hover:bg-hotel-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Open in Mail</span>
                </button>
              </div>
              <p className="text-hotel-500 mt-3 font-semibold">We'll respond to your email within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-xl border-2 border-hotel-200 bg-white hover:shadow-lg transition-all duration-300 mx-auto w-full">
              <div className="p-4 bg-hotel-100 rounded-full text-primary mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-medium text-hotel-900 mb-4">Address</h4>
              <p className="text-hotel-700 text-lg mb-4">{hotelInfo.address}</p>
              <div className="flex flex-col space-y-3 w-full">
                <button
                  onClick={copyAddress}
                  className="flex items-center justify-center bg-hotel-100 hover:bg-hotel-200 text-hotel-800 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {addressCopied ? (
                    <>
                      <Check className="h-5 w-5 mr-2 text-green-600" />
                      <span>Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 mr-2" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
                <a 
                  href="#location" 
                  className="inline-flex items-center justify-center bg-hotel-800 text-white hover:bg-hotel-900 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  View on Map
                </a>
              </div>
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
