import Image1 from "./assets/Images/hotel1.jpg";
import Image2 from "./assets/Images/hotel2.jpg";
import Image3 from "./assets/Images/hotel3.jpg";
import Image4 from "./assets/Images/hotel4.jpg";
import Image5 from "./assets/Images/hotel5.jpg";
import Image6 from "./assets/Images/hotel6.jpg";
import Image7 from "./assets/Images/hotel9.jpg";

import HomeDet1 from "./assets/Images/hotel-1.1.jpg";
import HomeDet2 from "./assets/Images/hotel-1.2.jpg";
import HomeDet21 from "./assets/Images/hotel-2.1.jpg";
import HomeDet22 from "./assets/Images/hotel-2.2.jpg";
import HomeDet31 from "./assets/Images/hotel-3.1.jpg";
import HomeDet32 from "./assets/Images/hotel-3.2.jpg";
import HomeDet41 from "./assets/Images/hotel-4.1.jpg";
import HomeDet42 from "./assets/Images/hotel-4.2.jpg";
import HomeDet51 from "./assets/Images/hotel-5.1.jpg";
import HomeDet52 from "./assets/Images/hotel-5.2.jpg";
import HomeDet61 from "./assets/Images/hotel-6.1.jpg";
import HomeDet62 from "./assets/Images/hotel-6.2.jpg";
import HomeDet71 from "./assets/Images/hotel-7.1.jpg";
import HomeDet72 from "./assets/Images/hotel-7.2.jpg";

const cardsData = [
    {
      id: 1,
      title: "Smart Modular Layouts for Efficient Hotels Design",
      description:
        "Discover innovative hospitality with Smart Modular Layouts designed for efficient hotel spaces. These layouts maximize room functionality while maintaining comfort, creating adaptable, space-saving designs that cater to the needs of both guests and operators.",
      layout: "Hotels with Smart Modular Layouts",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "Smart Modular Layouts offer flexible room configurations that optimize space without sacrificing comfort. These designs allow for quick reconfiguration to accommodate different guest needs, integrating smart technology for energy efficiency, and minimizing operational costs while enhancing guest experience",
      price: "Starting from ₹ 10L",
      image: Image1,
      bottomImage: [Image1, HomeDet1, HomeDet2],
    },
    {
      id: 2,
      title: "Stylish Hotel Rooms with Relaxing Resort Features",
      description:
        "Unwind in our Stylish Hotel Rooms, designed with modern elegance and comfort in mind. Each room offers a serene atmosphere, complemented by luxurious resort features that ensure a relaxing stay, perfect for both business and leisure travelers.",
      layout: "Hotels with Relaxing Resort Features",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "Our Stylish Hotel Rooms include plush bedding, contemporary décor, and private balconies with scenic views. Guests can enjoy resort-style amenities such as a spa, infinity pool, and fitness center, creating a peaceful retreat that combines style with ultimate relaxation.",
      price: "Starting from ₹ 10L",
      image: Image2,
      bottomImage: [Image2, HomeDet21, HomeDet22],
    },
    {
      id: 3,
      title: "Luxury Hotels Offering Exclusive Rooftop Pool Experiences",
      description:
        "Indulge in opulence at luxury hotels with exclusive rooftop pools, offering breathtaking city or ocean views. These upscale retreats combine elegant poolside lounging with exceptional service, creating an unforgettable experience for relaxation and enjoyment high above the cityscape.",
      layout: "Hotel with Rooftop Pool Experiences",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "These luxury hotels feature exclusive rooftop pools that provide stunning panoramic views and a private oasis above the city. Guests can enjoy luxurious poolside cabanas, top-tier service, and a chic atmosphere, making it the perfect spot for both relaxation and socializing.",
      price: "Starting from ₹ 10L",
      image: Image3,
      bottomImage: [Image3, HomeDet31, HomeDet32],
    },
    {
      id: 4,
      title: "Relaxing Beachfront Hotels with Stunning Ocean Views",
      description:
        "Indulge in luxury at our Relaxing Beachfront Hotel, where stunning ocean views and serene surroundings create the perfect escape. Enjoy modern, comfortable accommodations just steps from the beach, ideal for unwinding and taking in the beauty of the sea.",
      layout: "Hotel with Stunning Ocean Views",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "Experience unparalleled relaxation with beachfront access and expansive ocean views from every room. The hotel features private balconies, direct beach access, and an infinity pool that seems to merge with the ocean. Elegant, beach-inspired décor enhances the tranquil atmosphere, making it a perfect coastal retreat",
      price: "Starting from ₹ 10L",
      image: Image4,
      bottomImage: [Image4, HomeDet41, HomeDet42],
    },
    {
      id: 5,
      title: "Comfortable Rooms with Scenic Mountain Views",
      description:
        "Enjoy relaxation in Comfortable Rooms with Scenic Mountain Views, where large windows offer panoramic vistas of majestic peaks. The cozy, well-designed interiors create a perfect retreat, blending comfort with the beauty of nature.",
      layout: "Hotel with Scenic Mountain Views",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "These Comfortable Rooms feature expansive windows that frame stunning mountain views, allowing you to fully appreciate the natural beauty from the comfort of your space. Thoughtful design elements include plush furnishings and serene color palettes, enhancing the cozy, restful atmosphere.",
      price: "Starting from ₹ 10L",
      image: Image5,
      bottomImage: [Image5, HomeDet51, HomeDet52],
    },
    {
      id: 6,
      title: "Trendy Urban Hotels with Modern City Vibes",
      description:
        "Step into style at Trendy Urban Hotels, where modern city vibes meet sleek design. These hotels offer chic, contemporary rooms with cutting-edge amenities, perfectly capturing the vibrant energy of urban living.",
      layout: "Hotels with Modern City Vibes",
      style: "Modern",
      idealFor: "Medium Families",
      SpecialFeature:
        "Trendy Urban Hotels feature chic, modern interiors with open, stylish rooms and city-inspired decor. Enjoy rooftop lounges with panoramic views, state-of-the-art fitness centers, and vibrant social spaces, all designed to reflect the dynamic energy of the city and enhance your stay.",
      price: "Starting from ₹ 10L",
      image: Image6,
      bottomImage: [Image6, HomeDet61, HomeDet62],
    },
      {
        id: 7,
        title: "Comfortable Rooms with River-Inspired Decor",
        description:
          "Relax in Comfortable Rooms designed with serene river-inspired decor. The tranquil color palette and flowing patterns create a calming ambiance, reflecting the natural beauty of river landscapes and offering a peaceful retreat from everyday life.",
        layout: "Rooms with River-Inspired Decor",
        style: "Modern",
        idealFor: "Medium Families",
        SpecialFeature:
          "These Comfortable Rooms feature river-inspired decor with soothing blues and greens, flowing patterns, and natural textures that evoke the tranquility of river scenery. Elements such as driftwood accents and water-themed artwork enhance the serene, nature-infused atmosphere.",
        price: "Starting from ₹ 10L",
        image: Image7,
        bottomImage: [Image7, HomeDet71, HomeDet72],
      },
  ];

  export default cardsData;