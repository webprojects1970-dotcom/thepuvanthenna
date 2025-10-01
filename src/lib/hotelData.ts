export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number; 
  beds: string;
  size: string;
  amenities: string[];
  images: string[];
}

export interface AmenityType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const rooms: RoomType[] = [
  {
    id: "deluxe-suite",
    name: "Luxury Suite",
    description: "Our spacious luxury suite offers panoramic views of the surroundings with premium furnishings and a private balcony. Perfect for your relaxing getaway with all modern amenities.",
    price: 450,
    capacity: 2,
    beds: "1 King Bed",
    size: "55 m²",
    amenities: ["Free WiFi", "Minibar", "Air conditioning", "Room service", "Private balcony", "Smart TV", "Premium Linens", "En-suite Bathroom", "Daily Housekeeping"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    ]
  }
];

export const amenities: AmenityType[] = [
  {
    id: "frontdesk",
    name: "24/7 Front Desk",
    description: "Our front desk team is available around the clock to assist with any requests.",
    icon: "concierge-bell"
  },
  {
    id: "wifi",
    name: "Free WiFi",
    description: "Stay connected with complimentary WiFi throughout the property.",
    icon: "wifi"
  },
  {
    id: "meals",
    name: "All-Inclusive Meals",
    description: "Breakfast, lunch and dinner are included in the room rate. Meals are prepared mainly with the vegetation and spices grown in the Estate.",
    icon: "utensils"
  },
  {
    id: "restaurant",
    name: "Restaurant",
    description: "Beverages and snacks are available to purchase at the on-site family-friendly restaurant, which serves Asian cuisine and also offers halal, vegetarian, vegan and dairy-free options.",
    icon: "coffee"
  },
  {
    id: "wellness",
    name: "Wellness Packages",
    description: "A variety of wellness packages are available for guests to get rejuvenated in-house.",
    icon: "spa"
  },
  {
    id: "car-rental",
    name: "Car Rental & Activities",
    description: "The area is popular for hiking, and car hire is available at the villa. Guests can relax in the garden at the property.",
    icon: "car"
  },
  {
    id: "parking",
    name: "Free Parking",
    description: "Complimentary on-site parking available for all guests.",
    icon: "parking"
  }
];

export const hotelInfo = {
  name: "Thepuvanthenna Villa",
  tagline: "Wellness for Body and Mind",
  description: "Thepuvanthenna Villa and Estate is a family-owned nature focused wellness haven set in the heart of Kandy Sri Lanka. The secluded setting, modern intentional design and exceptional warm service make this the perfect Sri Lankan destination for the adventurous traveler. ",
  address: "Thepuvanthenna Villa, Marathugoda, Kandy, Sri Lanka",
  phone: "+ 94 77 5497 458 ",
  email: "thepuvanthennavilla@hotmail.com",
  social: {
    facebook: "https://facebook.com/serenityhaven",
    instagram: "https://instagram.com/serenityhaven",
    twitter: "https://twitter.com/serenityhaven"
  },
  heroImages: [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ]
};
