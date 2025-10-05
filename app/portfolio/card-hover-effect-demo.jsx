import { HoverEffect } from "./card-hover-effect"

export default function CardHoverEffectDemo() {
  return (
    <div className=" mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
    {
      id: 1,
      title: "Driving Success Through Digital Transformation",
      description: "Webskitters Transformed MHISA to Redefine Mental Healthcare through Strategic Web Development and Design Solutions",
      image: "https://www.marswebsolution.com/images/portfolio/design57.jpg",
      category: "Web Design",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://appvenuz.com/",
    },
    {
      id: 2,
      title: "Luxify Digital Web",
      description:
        "A premium global digital marketing agency that builds captivating brand experiences.",
      image: "https://mplussoft.com/portfolio-images/LuxifyDigital.jpg",
      category: "SEO & Analytics",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://luxifydigital.com/",
    },
    {
      id: 3,
      title: "Zealwise Technologies Web",
      description:
        "Technology-driven company delivering innovative solutions with expertise.",
      image: "https://mplussoft.com/portfolio-images/Zealwise.jpg",
      bg: "from-slate-900 to-slate-950",
      category: "E-commerce",
      url: "https://zealwise.com/",
    },
    {
      id: 4,
      title: "NES Electrical Supplies Web",
      description:
        "Your home for all your electrical supply needs with quality and reliability.",
      image:
        "https://res.cloudinary.com/drfbuv5ll/image/upload/v1742189429/NES_wy9r22.jpg",
      category: "E-commerce",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://www.neselectricalsupplies.com/",
    },
    {
      id: 5,
      title: "Gentium Web",
      description:
        "Technology-driven company delivering innovative solutions with expertise.",
      image: "https://mplussoft.com/portfolio-images/Gentium.jpg",
      category: "E-commerce",
      bg: "from-zinc-300 to-zinc-500",
      url: "https://www.gentium.in/",
    },
    {
      id: 6,
      title: "Mind Spa Web",
      description:
        "Your home for all your electrical supply needs with quality and reliability.",
      image: "https://mplussoft.com/portfolio-images/Mind_Spa.jpg",
      category: "SEO & Analytics",
      bg: "from-zinc-300 to-zinc-400",
      url: "https://www.mindspa.in/",
    },
  ];