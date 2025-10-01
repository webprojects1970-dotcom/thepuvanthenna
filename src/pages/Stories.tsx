import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StoriesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="bg-hotel-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Thepuvanthenna Stories</h1>
          <p className="text-xl text-hotel-100 max-w-3xl mx-auto">Discover the latest news, experiences, and insights from our beautiful retreat</p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/stories/${story.slug}`} className="block">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-hotel-600">{story.date}</span>
                  <h2 className="text-xl font-semibold text-hotel-900 mt-2 mb-3 hover:text-hotel-600 transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <span className="text-hotel-600 font-medium hover:text-hotel-800 transition-colors">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-hotel-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Experience Thepuvanthenna for Yourself</h2>
          <p className="text-lg text-hotel-100 mb-8 max-w-3xl mx-auto">
            Ready to create your own story at our beautiful retreat? Book your stay today and experience the magic of Thepuvanthenna.
          </p>
          <Link 
            to="/#booking" 
            className="inline-block px-8 py-3 bg-white text-hotel-800 rounded-full hover:bg-hotel-100 transition-colors text-lg font-medium"
            onClick={(e) => {
              // If we're already on the home page, prevent default and scroll to booking
              if (window.location.pathname === '/') {
                e.preventDefault();
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Book Your Stay
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoriesPage;
