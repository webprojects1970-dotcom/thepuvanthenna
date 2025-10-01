export interface Story {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  slug: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: 'A Day in the Life at Thepuvanthenna',
    date: 'August 16, 2025',
    excerpt: 'Experience the daily rhythms of our villa, from morning yoga sessions to sunset tea in the garden.',
    content: 'Experience the daily rhythms of our villa, from morning yoga sessions to sunset tea in the garden.\n\nWake up to the sound of birds chirping and the gentle rustle of leaves. Start your day with a refreshing yoga session on our open-air deck, followed by a healthy breakfast made from locally-sourced ingredients.\n\nSpend your day exploring our lush gardens, relaxing by the pool, or taking a short trip to nearby attractions. As the sun sets, enjoy a cup of Ceylon tea while taking in the breathtaking views of the surrounding hills.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'a-day-in-the-life-at-thepuvanthenna'
  },
  {
    id: 2,
    title: 'The Spice Garden Tour',
    date: 'July 28, 2025',
    excerpt: 'Explore our organic spice garden and learn about the herbs and spices that flavor our local cuisine.',
    content: 'Explore our organic spice garden and learn about the herbs and spices that flavor our local cuisine.\n\nOur on-site spice garden is home to a variety of aromatic plants and herbs, including cinnamon, cardamom, pepper, and nutmeg. Join our guided tour to learn about the cultivation and traditional uses of these spices.\n\nYou\'ll have the opportunity to see, touch, and smell the spices in their natural environment, and even participate in a cooking demonstration to learn how to incorporate these flavors into your own dishes.',
    imageUrl: 'https://images.unsplash.com/photo-1561501903-c0e0ee0e73a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'the-spice-garden-tour'
  },
  {
    id: 3,
    title: 'Meditation Retreat Experiences',
    date: 'June 15, 2025',
    excerpt: 'Guests share their transformative experiences during our meditation retreats in the heart of nature.',
    content: 'Guests share their transformative experiences during our meditation retreats in the heart of nature.\n\nOur meditation retreats are designed to help you disconnect from the stresses of daily life and reconnect with your inner self. Set amidst the tranquil surroundings of our villa, these retreats combine guided meditation sessions with mindfulness practices and yoga.\n\nMany of our guests report feeling more centered, peaceful, and rejuvenated after their stay. Join us for a journey of self-discovery and personal growth in our serene natural setting.',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'meditation-retreat-experiences'
  }
];
