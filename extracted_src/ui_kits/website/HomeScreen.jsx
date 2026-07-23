try { (() => {
// Home screen — faithful recreation of raisingstarafrica.org home.
const RSA_DS = window.RaisingStarAfricaDesignSystem_bbbbd8;
const HERO_SLIDES = [{
  img: '../../assets/hero-disability-advocacy.jpeg',
  kicker: 'Raising Star Africa Foundation',
  title: 'Promoting Inclusive Education'
}, {
  img: '../../assets/hero-educational-inclusion.jpeg',
  kicker: 'Educational Inclusion',
  title: 'Educational Aids and Scholarships'
}, {
  img: '../../assets/hero-foundation.jpeg',
  kicker: 'Disability Awareness & Advocacy',
  title: 'Community Sensitization'
}, {
  img: '../../assets/hero-digital-vocational.jpeg',
  kicker: 'Digital & Vocational Empowerment',
  title: 'Self-sustainability Skills Training'
}];
function HeroSlider({
  onNav
}) {
  const {
    Button,
    Badge
  } = RSA_DS;
  const I = window.RSAIcons;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = HERO_SLIDES[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 560,
      overflow: 'hidden',
      background: 'var(--rsa-ink)'
    }
  }, HERO_SLIDES.map((sl, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url(${sl.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: idx === i ? 1 : 0,
      transition: 'opacity 900ms var(--ease-out)',
      transform: idx === i ? 'scale(1.04)' : 'scale(1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(23,120,133,.9) 0%, rgba(23,120,133,.55) 45%, rgba(38,49,47,.25) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 22,
      maxWidth: 'var(--container-max)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--rsa-gold)'
    }
  }, s.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px,5vw,58px)',
      lineHeight: 1.08,
      color: '#fff',
      letterSpacing: '-.01em'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.9)',
      maxWidth: 540
    }
  }, "Every differently-abled and less privileged child deserves a voice and an equal opportunity to learn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(I.Heart, {
      size: 18
    }),
    onClick: () => onNav('donate')
  }, "Donate Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('about'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,.7)'
    }
  }, "Our Story")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 26,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 10
    }
  }, HERO_SLIDES.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    style: {
      width: idx === i ? 32 : 11,
      height: 11,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: idx === i ? 'var(--rsa-gold)' : 'rgba(255,255,255,.5)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
const FOCUS = [{
  icon: 'Book',
  tone: 'teal',
  title: 'Educational Inclusion',
  body: 'We provide differently-abled and less privileged children with improved quality of life through educational aids and scholarship.'
}, {
  icon: 'Sprout',
  tone: 'green',
  title: 'Vocational Empowerment',
  body: 'We provide life-long skills through vocation and self-sustainability skill training to reduce vulnerability and dependency.'
}, {
  icon: 'Megaphone',
  tone: 'gold',
  title: 'Disability Awareness & Advocacy',
  body: 'We give a voice through advocacy campaigns, publicity programs, community, and social sensitization.'
}];
const PROJECTS = [{
  title: 'Renovation of Iganmu Schools',
  img: '../../assets/photos/igando-inclusive-school.jpg',
  badge: 'Schools'
}, {
  title: 'This Ability 5.0',
  img: '../../assets/photos/this-ability-5.jpg',
  badge: 'Event'
}, {
  title: 'Leadership & Capacity Development',
  img: '../../assets/photos/team-photo.jpg',
  badge: 'Training'
}, {
  title: 'Building of the Ability Center',
  img: '../../assets/photos/visit-ogun-state.jpg',
  badge: 'Infrastructure'
}, {
  title: 'Sports Fest 4.0',
  img: '../../assets/photos/feed-the-1000.jpg',
  badge: 'Event'
}, {
  title: 'Hiring of Therapists & Interpreters',
  img: '../../assets/photos/vocational-skill.jpg',
  badge: 'Support'
}];
const BLOG = [{
  title: 'Education Is Hope; Why Every Child With Disabilities Must Be Included',
  excerpt: 'In many communities, education is seen as the key to a better life. Parents struggle, sacrifice and pray so their children can go to school…',
  tag: 'Inclusion'
}, {
  title: 'Empowering Inclusion: The Role of Disability Representation in Advertising',
  excerpt: 'In today\u2019s modern world, advertising has become an all-pervading part of our lives. Whether we are browsing the internet…',
  tag: 'Advocacy'
}, {
  title: 'Girls, women, and the multifaceted challenges',
  excerpt: 'For the past few years, different campaigns have been raised that address the major issues facing women and girls…',
  tag: 'Girl Child'
}];
const PARTNERS = ['bic.jpg', 'first-eandp.jpg', 'hc.png', 'nnpc.jpg', 'mandela.png', 'us-flag.jpg'];
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    StatCard,
    ProgramCard,
    SectionHeading,
    Card
  } = RSA_DS;
  const I = window.RSAIcons;
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroSlider, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: -70,
      position: 'relative',
      zIndex: 5,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, FOCUS.map(f => {
    const Ic = I[f.icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: f.title,
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 54,
        height: 54,
        borderRadius: 14,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: `var(--rsa-${f.tone === 'gold' ? 'gold-600' : f.tone})`
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 21,
        color: 'var(--text-strong)'
      }
    }, f.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, f.body));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 88,
      paddingBottom: 40,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/img-4299.jpg",
    alt: "Children in an inclusive classroom",
    style: {
      width: '100%',
      height: 440,
      objectFit: 'cover',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -26,
      right: -18,
      background: 'var(--rsa-gold)',
      color: '#4a3a10',
      padding: '20px 26px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1
    }
  }, "15,000+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 12.5,
      marginTop: 4
    }
  }, "children reached"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "About Us",
    title: "Our story of impact",
    intro: "Raising Star Africa Foundation is a non-governmental organization founded to support, empower and inspire quality education and life skills among differently-abled and less privileged children across Africa."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, FOCUS.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 34,
      height: 34,
      borderRadius: 9,
      background: 'var(--rsa-teal-100)',
      color: 'var(--rsa-teal-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, f.title, "."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, f.body))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 17
    }),
    onClick: () => onNav('about')
  }, "Read More")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--rsa-surface)',
      padding: '80px 0',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Upcoming Projects",
    title: "Where your support goes next",
    intro: "These projects are a result of dedication, hard work, and the generosity of our partners and volunteers."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProgramCard, {
    key: p.title,
    image: p.img,
    badge: p.badge,
    title: p.title,
    description: "View the project details, goals and the children it will reach.",
    linkLabel: "View project",
    href: "#",
    onClick: e => e.preventDefault()
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '92px 0',
      backgroundImage: 'url(../../assets/photos/this-ability-5.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(120deg, rgba(23,120,133,.94), rgba(77,133,49,.86))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--rsa-gold)'
    }
  }, "All over Africa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4vw,46px)',
      color: '#fff',
      maxWidth: 760
    }
  }, "Be a part of the change"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.92)',
      maxWidth: 640
    }
  }, "We are helping to reduce the inclusion gap in education amongst girls and differently-abled people. We invite you to be a part of this change."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(I.Heart, {
      size: 18
    }),
    onClick: () => onNav('donate')
  }, "Donate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('programs')
  }, "Volunteer")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40,
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Our Blog",
    title: "Stories & perspectives"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('blog')
  }, "All articles")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, BLOG.map(b => /*#__PURE__*/React.createElement(ProgramCard, {
    key: b.title,
    badge: b.tag,
    badgeTone: "green",
    title: b.title,
    description: b.excerpt,
    linkLabel: "Read more",
    href: "#",
    onClick: e => e.preventDefault()
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--rsa-surface)',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Our partners & donors",
    intro: "Some of the partners and donors who help us make a difference."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 20,
      alignItems: 'center'
    }
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      height: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/partners/${p}`,
    alt: "Partner",
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      filter: 'grayscale(1)',
      opacity: .75
    }
  })))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }
