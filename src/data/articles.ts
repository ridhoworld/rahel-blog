export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  category: string
  image: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "building-digital-products-from-scratch",
    title: "Building Digital Products From Scratch",
    excerpt:
      "What I learned from turning an idea into a real digital product.",
    date: "27 AUG 2026",
    readTime: "8 MIN",
    category: "BUILDING",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Building a digital product from scratch is rarely a straight line.",
      "There are moments when everything feels clear, followed by moments where even the simplest decision becomes difficult.",
      "The biggest lesson I learned is that good products are not created by adding as many features as possible.",
      "They are created by understanding what people actually need and removing everything that gets in the way.",
      "The process taught me to value simplicity, iteration, and consistency."
    ],
  },

  {
    id: 2,
    slug: "lessons-from-building-real-world-applications",
    title: "Lessons From Building Real-World Applications",
    excerpt:
      "Things that became obvious only after building applications for real users.",
    date: "20 AUG 2026",
    readTime: "6 MIN",
    category: "DEVELOPMENT",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Building applications for real users changes the way you think about software.",
      "A feature that looks perfect in a development environment can behave completely differently when people start using it.",
      "Real-world development taught me that reliability often matters more than cleverness.",
      "Small details such as loading states, validation, error handling, and clear navigation can make a huge difference.",
      "Software becomes valuable when it quietly helps people accomplish something."
    ],
  },

  {
    id: 3,
    slug: "why-good-software-should-feel-simple",
    title: "Why Good Software Should Feel Simple",
    excerpt:
      "Simplicity is not about having fewer features. It is about reducing unnecessary friction.",
    date: "15 AUG 2026",
    readTime: "5 MIN",
    category: "DESIGN",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The best software often feels almost invisible.",
      "Users should not need to think about how the system works before they can accomplish what they came to do.",
      "That does not mean the underlying technology is simple.",
      "In fact, creating a simple experience often requires significantly more thought.",
      "Good design hides complexity and exposes only what is necessary."
    ],
  },

  {
    id: 4,
    slug: "learning-to-build-with-intention",
    title: "Learning to Build With Intention",
    excerpt:
      "A personal reflection on building software with more purpose and less noise.",
    date: "08 AUG 2026",
    readTime: "4 MIN",
    category: "PERSONAL",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Over time, I have started to care less about building quickly and more about building intentionally.",
      "Every project is an opportunity to understand a problem a little better.",
      "Technology changes constantly, but the ability to think clearly remains valuable.",
      "For me, building with intention means knowing why something exists before deciding how it should work."
    ],
  },
]