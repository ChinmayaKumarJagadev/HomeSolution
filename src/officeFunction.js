import Image1 from "./assets/Images/off1.jpg";
import Image2 from "./assets/Images/off2.jpg";
import Image3 from "./assets/Images/off3.jpg";
import Image4 from "./assets/Images/off4.jpg";
import Image5 from "./assets/Images/off5.jpg";
import Image6 from "./assets/Images/off6.jpg";
import Image7 from "./assets/Images/off7.jpg";
import Image8 from "./assets/Images/off8.jpg";
import Image9 from "./assets/Images/off9.jpg";

import HomeDet1 from "./assets/Images/off-1.1.jpg";
import HomeDet2 from "./assets/Images/off-1.2.jpg";
import HomeDet21 from "./assets/Images/off-2.1.jpg";
import HomeDet22 from "./assets/Images/off-2.2.jpg";
import HomeDet31 from "./assets/Images/off-3.1.jpg";
import HomeDet32 from "./assets/Images/off-3.2.jpg";
import HomeDet41 from "./assets/Images/off-4.1.jpg";
import HomeDet42 from "./assets/Images/off-4.2.jpg";
import HomeDet51 from "./assets/Images/off-5.1.jpg";
import HomeDet52 from "./assets/Images/off-5.2.jpg";
import HomeDet61 from "./assets/Images/off-6.1.jpg";
import HomeDet62 from "./assets/Images/off-6.2.jpg";
import HomeDet71 from "./assets/Images/off-7.1.jpg";
import HomeDet72 from "./assets/Images/off-7.2.jpg";
import HomeDet81 from "./assets/Images/off-8.1.jpg";
import HomeDet82 from "./assets/Images/off-8.2.jpg";
import HomeDet91 from "./assets/Images/off-9.1.jpg";
import HomeDet92 from "./assets/Images/off-9.2.jpg";

const cardsData = [
  {
    id: 1,
    title: "Professional Office Designs with a Modern Edge",
    description:
      "Enhance your workspace with Professional Office Designs that feature a modern edge. Sleek layouts, ergonomic furniture, and innovative design elements combine to create a productive and stylish environment suited for contemporary professionals.",
    layout: "Professional Office Designs",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Professional Office Designs incorporate minimalist aesthetics with cutting-edge technology. Ergonomic workstations, glass partitions for natural light, and collaborative spaces foster both productivity and creativity. High-end finishes and smart office solutions ensure a functional, modern workspace.",
    price: "Get An Estimate",
    image: Image1,
    bottomImage: [Image1, HomeDet1, HomeDet2],
  },
  {
    id: 2,
    title: "Minimalist Offices with Elegant Design Solutions",
    description:
      "Step into Minimalist Offices designed for efficiency and style, offering elegant design solutions that prioritize simplicity and functionality. Clean lines, open spaces, and modern furnishings create a professional yet calm environment, perfect for productivity.",
    layout: "Offices with Elegant Design Solutions",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Minimalist Offices feature sleek, clutter-free workspaces with smart storage solutions, maximizing efficiency. Natural light, neutral color palettes, and ergonomic furniture contribute to a sophisticated, comfortable atmosphere that enhances focus while maintaining a modern, stylish aesthetic.",
    price: "Get An Estimate",
    image: Image2,
    bottomImage: [Image2, HomeDet21, HomeDet22],
  },
  {
    id: 3,
    title: "Luxurious Office Spaces with Clean, Modern Lines",
    description:
      "Discover productivity and style in these Luxurious Office Spaces, featuring clean, modern lines and an open, sleek design. These spaces are crafted to promote focus and collaboration, offering a professional yet sophisticated atmosphere for any business environment.",
    layout: "Office Spaces with Clean and Modern Lines",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Luxurious Office Spaces emphasize minimalist design with clean lines, high-end finishes, and ample natural light. Flexible workstations, advanced technology integration, and premium materials create an elegant, functional environment perfect for fostering creativity and productivity.",
    price: "Get An Estimate",
    image: Image3,
    bottomImage: [Image3, HomeDet31, HomeDet32],
  },
  {
    id: 4,
    title: "Exclusive Office Interiors with a Modern Twist",
    description:
      "Step into a workspace like no other with Exclusive Office Interiors featuring a sleek, modern twist. Designed to boost productivity and inspire creativity, the space blends contemporary aesthetics with functional elegance for a professional yet dynamic environment.",
    layout: "Exclusive Office Interiors",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Exclusive Office Interiors boast open layouts with minimalist furniture, glass partitions, and ergonomic designs that promote collaboration. High-quality materials, integrated technology, and smart lighting systems create a cutting-edge workspace that balances style, comfort, and efficiency.",
    price: "Get An Estimate",
    image: Image4,
    bottomImage: [Image4, HomeDet41, HomeDet42],
  },
  {
    id: 5,
    title: "Eco-Friendly Offices with Sustainable Design",
    description:
      "Step into the future of workspaces with these Eco-Friendly Offices, designed with sustainability at their core. Energy-efficient systems, natural materials, and eco-conscious features create a modern, productive environment while reducing environmental impact.",
    layout: "Eco-Friendly Offices",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Eco-Friendly Offices include solar panels for clean energy, energy-efficient HVAC systems, and recycled or locally sourced materials. Large windows provide ample natural light, reducing the need for artificial lighting, while green spaces enhance employee well-being and air quality.",
    price: "Get An Estimate",
    image: Image5,
    bottomImage: [Image5, HomeDet51, HomeDet52],
  },
  {
    id: 6,
    title: "Corporate Offices with Sleek, Professional Interiors",
    description:
      "Step into a world of sophistication with these Corporate Offices, designed with sleek, professional interiors. The modern aesthetic, featuring clean lines and high-end finishes, creates an ideal environment for productivity and business excellence.",
    layout: "Corporate Offices with Sleek",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Corporate Offices offer open, flexible workspaces with contemporary furniture, glass-walled conference rooms, and advanced technology integration. The professional interiors are designed for comfort and efficiency, providing a polished setting for meetings, collaboration, and focused work.",
    price: "Get An Estimate",
    image: Image6,
    bottomImage: [Image6, HomeDet61, HomeDet62],
  },
  {
    id: 7,
    title: "Creative Studio Offices with Inspiring Designs",
    description:
      "Step into our Creative Studio Offices, designed to inspire innovation and collaboration. With open spaces, vibrant colors, and thoughtfully curated designs, these offices create an energizing environment perfect for fostering creativity and productivity.",
    layout: "Creative Studio Offices",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Creative Studio Offices offer flexible workspaces with customizable layouts, bold accent walls, and natural light to enhance focus. Collaborative areas, breakout zones, and integrated technology make it ideal for team brainstorming, while the modern decor inspires creativity at every corner.",
    price: "Get An Estimate",
    image: Image7,
    bottomImage: [Image7, HomeDet71, HomeDet72],
  },
  {
    id: 8,
    title: "Tech-Driven Offices with Smart Features and Layout",
    description:
      "Step into the future with Tech-Driven Offices, equipped with smart features that optimize productivity and comfort. The sleek, modern layout integrates cutting-edge technology, offering a workspace that is both innovative and highly functional.",
    layout: "Tech-Driven Offices",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Tech-Driven Offices feature automated lighting, climate control, and smart security systems for an optimized work environment. The flexible layout encourages collaboration while incorporating ergonomic design, wireless charging stations, and advanced connectivity for seamless business operations.",
    price: "Get An Estimate",
    image: Image8,
    bottomImage: [Image8, HomeDet81, HomeDet82],
  },
  {
    id: 9,
    title: "Open-Plan Offices with Collaborative Workspaces",
    description:
      "Optimize productivity in these Open-Plan Offices, designed with collaborative workspaces that foster teamwork and creativity. The modern, flexible layout promotes interaction and efficiency, with versatile areas that adapt to various work styles and needs.",
    layout: "Open-Plan Offices",
    style: "Modern",
    idealFor: "Medium Families",
    SpecialFeature:
      "These Open-Plan Offices feature flexible, collaborative workspaces that encourage team engagement and innovation. The design includes modular furniture, adjustable lighting, and breakout areas to accommodate different work preferences, while large windows and open layouts ensure a bright, inviting environment.",
    price: "Get An Estimate",
    image: Image9,
    bottomImage: [Image9, HomeDet91, HomeDet92],
  },
];

export default cardsData;
