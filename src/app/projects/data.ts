export interface Project {
  slug: string;
  title: string;
  badge: string;
  desc: string;
  img: string;
  about: string[];
  gallery?: string[];
  raised: number;
  goal: number;
  beneficiaries: string;
  status: "Upcoming" | "Active" | "Completed";
}

export const PAST_PROJECTS = [
  "Renovation of LG Primary Inclusive Schools, Ipakodo, Ikorodu",
  "Renovation of LG Inclusive Schools, Igando",
  "Teachers' Development with the University of Georgia",
  "Donation of Basic and Educational Materials",
  "THIS – ABILITY",
  "Renovation of Igando Inclusive Primary School 1",
];

export const PROJECTS_DATA: Project[] = [
  {
    slug: "iganmu-schools",
    title: "Renovation of Iganmu Schools",
    badge: "Schools",
    desc: "Rebuilding classrooms and accessibility so every child can learn in dignity.",
    img: "/assets/photos/igando-inclusive-school.jpg",
    about: [
      "We are currently working on a major structural renovation of public inclusive schools in the Iganmu district.",
      "The project involves replacing dangerous collapsed roofing, leveling classroom floors for wheelchair access, and painting environments with engaging educational murals.",
    ],
    raised: 12000000,
    goal: 30000000,
    beneficiaries: "Primary School Students",
    status: "Active",
  },
  {
    slug: "this-ability-5",
    title: "This Ability 5.0",
    badge: "Event",
    desc: "Our flagship celebration of ability, inclusion and community.",
    img: "/assets/photos/this-ability-5.jpg",
    about: [
      "This Ability is an awareness and advocacy event used to commemorate and celebrate children with disabilities on Children's Day. It also enlightens society about the abilities embedded in a person with disability. This year's theme is \"Promoting Cultural Diversity among Children with Disabilities.\"",
      "The event consists of a parent seminar, an art exhibition, a talent competition, and financial grants for young adults with disabilities. In the previous edition, we were joined virtually by the U.S. Consulate.",
      "We were also joined by the Minister of Trade and Investment of Nigeria, the Commissioner of Youth and Social Development in Lagos, the Air Peace Airline Manager, the IHS Social Development team, and others.",
    ],
    gallery: [
      "/assets/gallery/g1.jpg",
      "/assets/gallery/g9.jpeg",
      "/assets/gallery/g10.jpeg",
      "/assets/gallery/g11.jpeg",
      "/assets/gallery/g13.jpeg",
      "/assets/gallery/g14.jpeg",
    ],
    raised: 0,
    goal: 50000000,
    beneficiaries: "Children with Disabilities",
    status: "Upcoming",
  },
  {
    slug: "leadership-capacity-development",
    title: "Leadership & Capacity Development of Children with Disability",
    badge: "Training",
    desc: "Building leadership and life skills among children with disabilities.",
    img: "/assets/photos/team-photo.jpg",
    about: [
      "We believe that true empowerment comes from self-belief. This project is a rigorous 6-week training bootcamp designed to instill leadership qualities in teenagers living with disabilities.",
    ],
    raised: 2500000,
    goal: 5000000,
    beneficiaries: "Teenagers with Disabilities",
    status: "Active",
  },
  {
    slug: "ability-center",
    title: "Building of the Ability Center",
    badge: "Infrastructure",
    desc: "A permanent home for therapy, training and learning.",
    img: "/assets/photos/visit-ogun-state.jpg",
    about: [
      "Our most ambitious project yet. We are acquiring land to build a state-of-the-art Ability Center.",
      "The center will house permanent therapy rooms, vocational training workshops, an inclusive library, and an administrative hub for our foundation.",
    ],
    raised: 50000000,
    goal: 200000000,
    beneficiaries: "All communities",
    status: "Active",
  },
  {
    slug: "sports-fest-4",
    title: "Sports Fest 4.0",
    badge: "Event",
    desc: "Inclusive sport that builds confidence and belonging.",
    img: "/assets/photos/feed-the-1000.jpg",
    about: [
      "Sports Fest is an annual inclusive athletic event bringing together special needs children from across Lagos.",
      "Events include adapted track races, wheelchair basketball, sensory-friendly games, and team-building exercises.",
    ],
    raised: 8000000,
    goal: 8000000,
    beneficiaries: "Differently-abled children",
    status: "Completed",
  },
  {
    slug: "hiring-support",
    title: "Hiring of Therapists, Interpreters & Instructors",
    badge: "Support",
    desc: "Sign-language interpreters, therapists and vocational instructors for our children.",
    img: "/assets/photos/vocational-skill.jpg",
    about: [
      "To provide consistent, high-quality care, we are running a campaign to sustainably fund the salaries of essential support staff.",
    ],
    raised: 3000000,
    goal: 15000000,
    beneficiaries: "Teachers & Students",
    status: "Active",
  },
];
