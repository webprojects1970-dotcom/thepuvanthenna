import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data/stories';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find(s => s.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-semibold text-hotel-900 mb-4">Story Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">The story you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/stories" 
            className="inline-block px-6 py-2 bg-hotel-600 text-white rounded-full hover:bg-hotel-700 transition-colors"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  // Split content into paragraphs
  const paragraphs = story.content.split('\n\n');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img 
          src={story.imageUrl} 
          alt={story.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-4">{story.title}</h1>
            <p className="text-xl text-hotel-100">{story.date}</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 mt-6">
        <Link 
          to="/stories" 
          className="inline-flex items-center text-hotel-600 hover:text-hotel-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Stories
        </Link>
      </div>

      {/* Story Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* CTA Section */}
      <div className="bg-hotel-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Ready for Your Own Story?</h2>
          <p className="text-lg text-hotel-100 mb-8 max-w-3xl mx-auto">
            Experience the magic of Thepuvanthenna for yourself. Book your stay and create memories that will last a lifetime.
          </p>
          <Link 
            to="/book-now" 
            className="inline-block px-8 py-3 bg-white text-hotel-800 rounded-full hover:bg-hotel-100 transition-colors text-lg font-medium"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoryDetail;
