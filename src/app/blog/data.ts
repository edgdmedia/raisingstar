export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  tone: "teal" | "green" | "gold" | "neutral";
  img: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "education-is-hope",
    title: "Education Is Hope; Why Every Child With Disabilities Must Be Included",
    tag: "Inclusion",
    tone: "teal",
    img: "/assets/photos/img-4299.jpg",
    excerpt: "In many communities, education is seen as the key to a better life. Parents struggle, sacrifice and pray so their children can go to school — yet for children with disabilities, the door is too often closed before it is opened.",
    content: [
      "In many communities, education is seen as the key to a better life. Parents struggle, sacrifice and pray so their children can go to school. Yet for many children with disabilities, education remains a distant dream.",
      "Some schools are too far. Some classrooms are not accessible. Some teachers are not trained to support children with different needs. In other cases, children are discouraged from attending school because of shame, fear or misunderstanding.",
      "When a child with a disability is kept out of school, the loss is not only personal – it affects families, communities, and the nation. Education gives children confidence, skills and a voice. Without it, many are pushed into lifelong dependency and poverty.",
      "Inclusive education is not about special treatment. It is about fairness. It means building schools that everyone can enter, training teachers to teach every child, and changing mindsets that say some children matter less.",
      "The future depends on all its children. When every child learns, the whole community grows.",
      "No child should be left behind."
    ],
    date: "30 January 2026",
    readTime: "4 min read",
  },
  {
    slug: "empowering-inclusion",
    title: "Empowering Inclusion: The Role of Disability Representation in Advertising",
    tag: "Advocacy",
    tone: "green",
    img: "/assets/gallery/g9.jpeg",
    excerpt: "In today’s modern world, advertising has become an all-pervading part of our lives. Whether we are browsing the internet or watching TV…",
    content: [
      "In today's modern world, advertising has become an all-pervading part of our lives. Whether we are browsing the internet (there are Google ads), simply"
    ],
    date: "15 February 2026",
    readTime: "5 min read",
  },
  {
    slug: "girls-women-challenges",
    title: "Girls, women, and the multifaceted challenges",
    tag: "Girl Child",
    tone: "gold",
    img: "/assets/photos/img-4299.jpg",
    excerpt: "For the past few years, different campaigns have been raised that address the major issues facing women and girls in our society…",
    content: [
      "For the past few years, different campaigns have been raised that addresses major issues facing the girl-child. Campaigns such as"
    ],
    date: "8 March 2026",
    readTime: "3 min read",
  },
  {
    slug: "begging-an-option",
    title: "Questions that need answers; is begging an option?",
    tag: "Society",
    tone: "teal",
    img: "/assets/gallery/g11.jpeg",
    excerpt: "When you live in Lagos, you should be used to the high number of beggars you meet on the road every single day…",
    content: [
      "When you live in Lagos, you should be used to the high number of beggars on the streets with a"
    ],
    date: "22 April 2026",
    readTime: "4 min read",
  },
  {
    slug: "covid-19-realities",
    title: "Nigerians with Disabilities; COVID-19: Realities and Lessons",
    tag: "Story",
    tone: "green",
    img: "/assets/gallery/g13.jpeg",
    excerpt: "One thing you will first notice about 16-year-old Samuel is his beautiful smile, a smile that hides a much harder story…",
    content: [
      "One thing you will first notice about 16 years old Samuel is his beautiful smile, white set of teeth, and"
    ],
    date: "10 May 2026",
    readTime: "6 min read",
  },
  {
    slug: "life-skills-training",
    title: "Life Skills Training for Special Needs Education Teachers",
    tag: "Training",
    tone: "gold",
    img: "/assets/photos/team-photo.jpg",
    excerpt: "We collaborated with two professors in Education Psychology and Communication Science from the University of…",
    content: [
      "We collaborated with two professors in Education Psychology and Communication Science from the University of Georgia, USA to train public school S.E.N teachers from 10 local government in Lagos, Nigeria. This training took place physically in Lagos. It was fully sponsored by Mandela Washington Fellowship and IREX."
    ],
    date: "5 June 2026",
    readTime: "4 min read",
  }
];
