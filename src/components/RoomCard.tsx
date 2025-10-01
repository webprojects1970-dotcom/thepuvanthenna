
import { useState } from 'react';
import { RoomType } from '@/lib/hotelData';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  room: RoomType;
  className?: string;
}

const RoomCard = ({ room, className }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full max-w-6xl mx-auto",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Room image slider */}
        <div className="relative h-96 lg:h-[600px] overflow-hidden">
          {room.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-in-out",
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <img
                src={image}
                alt={`${room.name} - View ${index + 1}`}
                className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
              />
            </div>
          ))}
          
          {/* Image navigation dots */}
          {room.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
              {room.images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentImageIndex ? "w-6 bg-white" : "bg-white/40"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                  aria-label={`View room image ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Room price badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-medium text-hotel-900">
            ${room.price} <span className="text-sm text-hotel-600">/night</span>
          </div>
        </div>
        
        {/* Room details */}
        <div className="p-10 space-y-8">
          <h3 className="text-3xl font-serif font-semibold text-hotel-900">{room.name}</h3>
          
          <div className="flex flex-wrap items-center text-base text-hotel-600 gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 4v16"></path>
                <path d="M22 4v16"></path>
                <path d="M4 8h2"></path>
                <path d="M4 16h2"></path>
                <path d="M18 8h2"></path>
                <path d="M18 16h2"></path>
                <path d="M6 4v16"></path>
                <path d="M18 4v16"></path>
                <path d="M12 4v4"></path>
                <path d="M12 16v4"></path>
                <rect x="8" y="12" width="8" height="4"></rect>
              </svg>
              {room.beds}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Up to {room.capacity} guests
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              {room.size}
            </div>
          </div>
          
          <p className="text-lg text-hotel-600 leading-relaxed">{room.description}</p>
          
          {/* Room amenities */}
          <div>
            <h4 className="text-xl font-medium text-hotel-800 mb-4">Room Amenities</h4>
            <div className="grid grid-cols-2 gap-4">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-hotel-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Book now button */}
          <div className="pt-4">
            <a 
              href="#booking" 
              className={cn(
                "w-full inline-block text-center py-5 rounded-md transition-all duration-300 border text-xl",
                isHovered 
                  ? "bg-primary text-white border-primary" 
                  : "bg-white text-hotel-900 border-hotel-200 hover:border-primary hover:text-primary"
              )}
            >
              Book This Room
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
