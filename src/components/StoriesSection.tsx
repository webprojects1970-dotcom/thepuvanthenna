import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StoryModal from './StoryModal';
import { stories, Story } from '../data/stories';

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (story: Story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      {selectedStory && (
        <StoryModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedStory.title}
          date={selectedStory.date}
          content={selectedStory.content}
          imageUrl={selectedStory.imageUrl}
        />
      )}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-hotel-900 mb-4">Thepuvanthenna Stories</h2>
            <div className="w-20 h-1 bg-hotel-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(story)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-hotel-600">{story.date}</span>
                  <h3 className="text-xl font-semibold text-hotel-900 mt-2 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <button 
                    className="text-hotel-600 font-medium hover:text-hotel-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(story);
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/stories"
              className="inline-block px-8 py-3 bg-hotel-600 text-white rounded-full hover:bg-hotel-700 transition-colors text-lg font-medium"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoriesSection;
