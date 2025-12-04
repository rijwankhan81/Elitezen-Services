export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string; // ISO e.g. "2025-10-12"
  formattedDate?: string; // generated in getStaticProps
  image?: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Essential Security Tips for Your Digital Wallet",
    category: "Security",
    excerpt:
      "Learn how to protect your digital assets with these proven security practices that every user should implement.",
    author: "Michael Chen",
    date: "2025-10-12",
    image: "/images/blog/security-5-tips.jpg",
    slug: "5-essential-security-tips-for-your-digital-wallet",
  },
  {
    id: "2",
    title: "Understanding Currency Exchange Rates: A Complete Guide",
    category: "Global Payments",
    excerpt:
      "Master the basics of currency conversion and learn how to get the best rates for your international transactions.",
    author: "Emma Williams",
    date: "2025-10-10",
    image: "/images/blog/currency-exchange.jpg",
    slug: "understanding-currency-exchange-rates",
  },
  {
    id: "3",
    title: "How to Boost Sales with Digital Payment Solutions",
    category: "Merchant Tips",
    excerpt:
      "Discover strategies to increase revenue and customer satisfaction by offering seamless payment experiences.",
    author: "David Martinez",
    date: "2025-10-08",
    image: "/images/blog/boost-sales-payments.jpg",
    slug: "how-to-boost-sales-with-digital-payment-solutions",
  },
  {
    id: "4",
    title: "Introducing Smart Budgeting Tools in PeddyPay",
    category: "Product Updates",
    excerpt:
      "Take control of your finances with our new AI-powered budgeting features that help you save smarter.",
    author: "Lisa Anderson",
    date: "2025-10-05",
    image: "/images/blog/smart-budgeting.jpg",
    slug: "introducing-smart-budgeting-tools-in-peddypay",
  },
  {
    id: "5",
    title: "10 Smart Ways to Save Money on International Transfers",
    category: "Money Tips",
    excerpt:
      "Reduce fees and maximize value when sending money abroad with these expert-recommended strategies.",
    author: "James Taylor",
    date: "2025-10-03",
    image: "/images/blog/save-money-transfers.jpg",
    slug: "10-smart-ways-to-save-money-on-international-transfers",
  },
  {
    id: "6",
    title: "The Rise of Contactless Payments: What You Need to Know",
    category: "Digital Wallet Trends",
    excerpt:
      "Explore how contactless technology is revolutionizing the way we pay and what it means for consumers.",
    author: "Rachel Kim",
    date: "2025-10-01",
    image: "/images/blog/contactless-payments.jpg",
    slug: "the-rise-of-contactless-payments",
  },
];
