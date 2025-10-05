import { HoverEffect } from "@/components/ui/card-hover-effect"

export default function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={reviews} />
    </div>
  )
}

export const reviews = [
  {
    title: "Amit Kumar",
    position: "CEO, Perfect Metal Works",
    description: "Shrote Technology is the place whereyou can relay on your solution & requirement for web designing for you. excellent service & communication. I recommend Shrote Technology",
    link: "https://stripe.com",
  },
  {
    title: "Lavanya",
    position: "CEO, Navashakthi Herbal Labs",
    description:
      " Having worked very closely with Navshakthi Herbals, We are able to recommend them as a true industry leader in the world of internet.",
    link: "https://netflix.com",
  },
  {
    title: "Latha",
    position: "CEO, AWI",
    description: "It has been a real pleasure working with Shrote Technology. It is one of the most customer-centric firm that I have recently dealt with..",
    link: "https://google.com",
  },
  {
    title: "Suresh",
    position: "CEO, Infinite Space Solutions",
    description:
      "Thank you for excellent service you provide for our company website. I am amazed at the personal and the prompt attention you give to my requests..",
    link: "https://meta.com",
  },
  {
    title: "Ramesh",
    position: "CEO, A S C Furniture",
    description:
      "This is a small gesture, but I hope that it conveys my gratitude and respect for the professionals, dedicated and responsible work.",
    link: "https://amazon.com",
  },
  {
    title: "Krishnakanth",
    position: "CEO, RAAH Technologies, Inc",
    description:
      "I am very pleased with the work done by Shrote Technology for our website. The Shrote team is very hard working and good people to work with. I want to give my appreciation for the abilities and efforts that were exhibited by the team.  ",
    link: "https://microsoft.com",
  },
]
