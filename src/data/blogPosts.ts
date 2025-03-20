export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  url?: string;  // Optional external URL if you have blog posts hosted elsewhere
}

const blogPosts: BlogPost[] = [
  {
    id: 'generative-ai-evolution',
    title: 'The Evolution of Generative AI',
    excerpt: 'Exploring the rapid advancements in generative AI technologies and their implications for business.',
    date: 'March 15, 2023',
    imageUrl: '/images/blog/generative-ai.jpg',
    category: 'AI Research',
  },
  {
    id: 'automation-beyond-hype',
    title: 'Automation: Beyond the Hype',
    excerpt: 'A practical guide to implementing automation that delivers real business value, not just buzzword compliance.',
    date: 'February 2, 2023',
    imageUrl: '/images/blog/automation.jpg',
    category: 'Automation',
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics and Responsible Innovation',
    excerpt: 'Examining the ethical considerations that should guide AI development and implementation.',
    date: 'January 10, 2023',
    imageUrl: '/images/blog/ai-ethics.jpg',
    category: 'Ethics',
  },
];

export default blogPosts; 