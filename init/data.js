const listings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and peaceful sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },

  {
    title: "Modern Mountain Cabin",
    description:
      "A beautiful modern cabin surrounded by mountains and nature. Perfect for a peaceful weekend retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    },
    price: 2200,
    location: "Aspen",
    country: "United States",
  },

  {
    title: "Luxury Lake House",
    description:
      "Relax in this luxurious lakeside home featuring stunning views, comfortable interiors, and a private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    },
    price: 3500,
    location: "Lake Tahoe",
    country: "United States",
  },

  {
    title: "Peaceful Forest Retreat",
    description:
      "Stay in the heart of the forest surrounded by tall trees and fresh mountain air. Ideal for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80",
    },
    price: 1800,
    location: "Portland",
    country: "United States",
  },

  {
    title: "Elegant City Apartment",
    description:
      "A stylish apartment in the heart of the city with modern interiors, great views, and easy access to attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    },
    price: 2500,
    location: "New York City",
    country: "United States",
  },

  {
    title: "Luxury Parisian Apartment",
    description:
      "Experience Paris from this elegant apartment with beautiful interiors and a convenient central location.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
    },
    price: 3200,
    location: "Paris",
    country: "France",
  },

  {
    title: "Beautiful Santorini Villa",
    description:
      "Enjoy breathtaking sea views from this beautiful Greek villa with a private pool and relaxing outdoor space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    },
    price: 5000,
    location: "Santorini",
    country: "Greece",
  },

  {
    title: "Tropical Bali Villa",
    description:
      "A relaxing tropical villa surrounded by greenery with a private pool and beautiful outdoor living areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    },
    price: 2800,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Beach Villa in Goa",
    description:
      "Enjoy a laid-back beach vacation in this beautiful villa located close to the beaches and nightlife of Goa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    },
    price: 1800,
    location: "Goa",
    country: "India",
  },

  {
    title: "Royal Palace Stay",
    description:
      "Experience traditional Indian architecture and royal hospitality in this luxurious heritage property.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    },
    price: 4500,
    location: "Jaipur",
    country: "India",
  },

  {
    title: "Himalayan Mountain Home",
    description:
      "Stay in a cozy mountain home with breathtaking Himalayan views and a peaceful atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    price: 1600,
    location: "Manali",
    country: "India",
  },

  {
    title: "Modern Mumbai Penthouse",
    description:
      "A premium penthouse with panoramic city views, modern amenities, and a luxurious interior.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
    price: 4200,
    location: "Mumbai",
    country: "India",
  },

  {
    title: "Cozy London Flat",
    description:
      "A warm and stylish apartment located near London's major attractions, restaurants, and shopping areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    },
    price: 3000,
    location: "London",
    country: "United Kingdom",
  },

  {
    title: "Swiss Alpine Chalet",
    description:
      "Relax in a traditional Swiss chalet surrounded by snowy mountains and beautiful alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&w=900&q=80",
    },
    price: 4800,
    location: "Zermatt",
    country: "Switzerland",
  },

  {
    title: "New Zealand Lakeside Cabin",
    description:
      "A peaceful lakeside cabin surrounded by mountains, perfect for adventure and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    price: 2600,
    location: "Queenstown",
    country: "New Zealand",
  },

  {
    title: "Desert Luxury Camp",
    description:
      "Experience the magic of the desert from this comfortable luxury camp with incredible sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
    },
    price: 2100,
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Japanese Traditional House",
    description:
      "Stay in a peaceful traditional Japanese home featuring beautiful wooden architecture and a serene garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
    },
    price: 2700,
    location: "Kyoto",
    country: "Japan",
  },

  {
    title: "Sydney Harbour Apartment",
    description:
      "Enjoy an unforgettable stay in this stylish apartment with spectacular views of Sydney Harbour.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
    },
    price: 3600,
    location: "Sydney",
    country: "Australia",
  },

  {
    title: "Coastal Apartment in Barcelona",
    description:
      "A bright and modern apartment close to the beach, restaurants, nightlife, and famous Barcelona attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
    },
    price: 2300,
    location: "Barcelona",
    country: "Spain",
  },

  {
    title: "Countryside Italian Villa",
    description:
      "Relax in a charming Italian villa surrounded by vineyards, rolling hills, and beautiful countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    },
    price: 3900,
    location: "Tuscany",
    country: "Italy",
  },
];

module.exports=listings;