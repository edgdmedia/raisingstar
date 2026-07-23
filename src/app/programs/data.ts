export interface Program {
  slug: string;
  title: string;
  badge: string;
  tone: "teal" | "green" | "gold" | "neutral";
  desc: string;
  coverImage: string;
  about: string;
  extendedAbout?: string;
  covers: string[];
  focusArea: string;
  beneficiaries: string;
  partner?: string;
}

export const PROGRAMS_DATA: Program[] = [
  {
    slug: "support-inclusive-school",
    title: "Support Inclusive School Initiative",
    badge: "Schools",
    tone: "teal",
    desc: "We enhance learning, positive classrooms and accessibility for children with disabilities by renovating schools and classrooms and supplying furniture and refurbishment.",
    coverImage: "/assets/photos/igando-inclusive-school.jpg",
    about: "The physical learning environment plays a massive role in child development. For children with disabilities, inaccessible structures are a physical barrier to their education. We renovate classrooms and school facilities to make them inclusive and accessible.",
    extendedAbout: "This program addresses structural inequalities. We repair roofs, build ramps, install proper desks, paint walls, and construct sanitization units. Our goal is to create safe, clean, and inspiring environments where every child, regardless of physical ability, can study comfortably.",
    covers: [
      "Construction of wheelchair ramps and widening of classroom doorways.",
      "Renovation of dilapidated roofs, ceilings, walls, and flooring.",
      "Provision of custom-built desks and chairs designed for special needs.",
      "Repainting and decorating spaces with educational murals.",
    ],
    focusArea: "Educational Inclusion",
    beneficiaries: "Differently-abled children in public schools",
    partner: "Local community councils & Ministry of Education",
  },
  {
    slug: "star-teacher",
    title: "The Star Teacher",
    badge: "Teachers",
    tone: "green",
    desc: "We run capacity-building initiatives such as life-skills trainings to empower teachers with pedagogical and behavioural skills that improve learning outcomes and classroom management.",
    coverImage: "/assets/hero-capacity-building.jpeg",
    about: "Teachers hold the key to every inclusive classroom. Through The Star Teacher, we run capacity-building initiatives such as life-skills trainings to empower teachers with pedagogical and behavioural skills that improve learning outcomes and classroom management.",
    extendedAbout: "We have collaborated with professors in Education Psychology and Communication Science from the University of Georgia to train special-needs education teachers — strengthening the people children depend on most, so that improvement reaches every classroom they touch.",
    covers: [
      "Pedagogical skills for inclusive teaching and differentiated learning.",
      "Behavioural and classroom-management techniques for positive classrooms.",
      "Life-skills training modules teachers can pass on to their pupils.",
      "Mentorship and follow-up support after each training cycle.",
    ],
    focusArea: "Educational Inclusion",
    beneficiaries: "Teachers & their pupils",
    partner: "University of Georgia",
  },
  {
    slug: "girl-child-education",
    title: "Girl Child Education",
    badge: "Girl Child",
    tone: "gold",
    desc: "We champion access and inclusion for the girl child, ensuring every girl can learn and thrive in a safe, supportive environment.",
    coverImage: "/assets/photos/img-4299.jpg",
    about: "Girls face compounded challenges accessing education in many communities, particularly girls with disabilities. We provide support structures to keep girls in school.",
    covers: [
      "Scholarships covering tuition, books, and essential items.",
      "Mentorship programs linking girls with female role models.",
      "Distribution of hygiene kits and personal care resources.",
      "Community advocacy targeting cultural barriers to female education.",
    ],
    focusArea: "Educational Inclusion",
    beneficiaries: "Less privileged and differently-abled girls",
  },
  {
    slug: "stars-out",
    title: "Stars Out Initiative",
    badge: "Exposure",
    tone: "teal",
    desc: "We facilitate social exposure and interaction by taking children on excursions and outings — shopping malls, airports, amusement parks and cultural sites.",
    coverImage: "/assets/photos/visit-ogun-state.jpg",
    about: "Differently-abled children are often marginalized or confined to their homes or schools. Stars Out takes them on educational and social outings to broaden their horizons.",
    covers: [
      "Excursions to key transport hubs, including airports and train stations.",
      "Outings to shopping malls, parks, and recreational centers.",
      "Visits to historical monuments and cultural heritage sites.",
      "Supported peer-interaction sessions in community spaces.",
    ],
    focusArea: "Disability Awareness & Advocacy",
    beneficiaries: "Differently-abled children",
  },
  {
    slug: "vocational-training",
    title: "Vocational & Self-sufficiency Skill Trainings",
    badge: "Skills",
    tone: "green",
    desc: "We break the barriers of limitation by giving children with disabilities and learning disabilities lifelong skills to become independent.",
    coverImage: "/assets/photos/vocational-skill.jpg",
    about: "Dependency is one of the biggest challenges differently-abled adults face. We address this early by teaching children practical vocational skills that lay the foundation for economic independence.",
    covers: [
      "Introductory computer science, digital literacy, and coding courses.",
      "Handicrafts, tailoring, card making, and soap production.",
      "Basic business management, budgeting, and savings training.",
      "Mentoring pathways leading to apprenticeships and micro-enterprise.",
    ],
    focusArea: "Vocational Empowerment",
    beneficiaries: "Youth and teenagers with learning or physical disabilities",
    partner: "Local technical colleges & artisan guides",
  },
  {
    slug: "educational-resources",
    title: "Provision of Educational Resources",
    badge: "Resources",
    tone: "gold",
    desc: "We support less-privileged children with textbooks, notebooks, sandals, school bags and uniforms to increase education outcomes.",
    coverImage: "/assets/hero-educational-inclusion.jpeg",
    about: "For many low-income families, the cost of school materials is a barrier. We distribute textbooks, writing materials, uniforms, and bags directly to students in need.",
    covers: [
      "Direct distribution of notebooks, textbooks, and pens.",
      "Provision of school uniforms, bags, and protective footwear.",
      "Supplying assistive devices such as braille slates and hearing aids.",
      "Term-by-term assessment of classroom material needs.",
    ],
    focusArea: "Educational Inclusion",
    beneficiaries: "Less privileged and special needs students",
  },
  {
    slug: "back-to-school",
    title: "Getting Out-of-School Children Back to School",
    badge: "Access",
    tone: "teal",
    desc: "We are preparing a future where every child has access to quality education, irrespective of their background.",
    coverImage: "/assets/hero-foundation.jpeg",
    about: "Millions of children in Africa are out of school. We run sensitization, tracking, and sponsorship schemes to re-enroll children who have dropped out.",
    covers: [
      "Community enrollment drives and census tracking.",
      "Financial sponsorship covering primary school enrollment fees.",
      "Remedial tutoring sessions for children who missed school.",
      "Parent support groups focused on keeping children enrolled.",
    ],
    focusArea: "Educational Inclusion",
    beneficiaries: "Out-of-school children in urban slums",
  },
];
