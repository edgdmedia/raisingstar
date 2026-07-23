try { (() => {
// About screen — story, vision/mission, objectives, founder.
const RSA_ABOUT = window.RaisingStarAfricaDesignSystem_bbbbd8;
function PageHeader({
  eyebrow,
  title,
  intro,
  img
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '82px 0 74px',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(23,120,133,.93), rgba(23,120,133,.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 720
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
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,4.5vw,52px)',
      color: '#fff',
      lineHeight: 1.08
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.9)',
      maxWidth: 620
    }
  }, intro)));
}
window.PageHeader = PageHeader;
function AboutScreen() {
  const {
    StatCard,
    SectionHeading,
    Card
  } = RSA_ABOUT;
  const I = window.RSAIcons;
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 24px'
  };
  const OBJECTIVES = ['Reduce vulnerability and dependency among differently-abled and less privileged children.', 'Empower over 15,000 children with life-long skills through vocation and self-sustainability training.', 'Advocate and give a voice through campaigns, publicity and community sensitization.', 'Offer a chance for a better life through educational aids and scholarships.', 'Promote quality learning through school and classroom improvement and refurbishment.'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "About Us",
    title: "Our story of impact",
    img: "../../assets/hero-foundation.jpeg",
    intro: "Founded in 2020, Raising Star Africa Foundation supports, empowers and inspires quality education and life skills among differently-abled and less privileged children across Africa."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '76px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/team-photo.jpg",
    alt: "The Raising Star Africa team",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Our Founder",
    title: "Turning lived experience into a movement"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Raising Star Africa Foundation was founded by Michael Showunmi, a person with disability from a less-privileged background in Lagos, Nigeria. Unable to attend nursery school because no provision was made for disabilities, Michael was carried to and from school by friends for over two years of his primary education."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "That experience ignited his passion to inspire an inclusive African society where every differently-abled and less privileged child has a voice and equal opportunity."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "15,000+",
    label: "Children reached",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "2020",
    label: "Year founded",
    tone: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "Nigeria",
    label: "Communities served",
    tone: "gold"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--rsa-surface)',
      padding: '76px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, [{
    icon: 'Sprout',
    t: 'Our Vision',
    b: 'To inspire an inclusive African society, where every differently-abled and less privileged child has a voice and equal opportunity.',
    tone: 'teal'
  }, {
    icon: 'Heart',
    t: 'Our Mission',
    b: 'To support, empower and inspire quality education and life skills among differently-abled and less privileged children across Africa.',
    tone: 'green'
  }].map(c => {
    const Ic = I[c.icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: c.t,
      style: {
        gap: 14,
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 15,
        background: `var(--rsa-${c.tone === 'gold' ? 'gold-600' : c.tone})`,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--text-strong)'
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.7,
        color: 'var(--text-body)'
      }
    }, c.b));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '76px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Objectives",
    title: "What we set out to do"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, OBJECTIVES.map((o, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--rsa-gold)',
      color: '#4a3a10',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, idx + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, o))))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }
