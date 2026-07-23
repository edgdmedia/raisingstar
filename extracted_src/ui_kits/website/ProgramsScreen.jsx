try { (() => {
// Programs screen — grid of the foundation's seven programs.
const RSA_PROG = window.RaisingStarAfricaDesignSystem_bbbbd8;
const PROGRAMS_LIST = [{
  t: 'Support Inclusive School Initiative',
  b: 'We enhance learning, positive classrooms and accessibility for children with disabilities by renovating schools and supplying classroom furniture.',
  img: '../../assets/photos/igando-inclusive-school.jpg',
  tag: 'Schools',
  tone: 'teal'
}, {
  t: 'The Star Teacher',
  b: 'Capacity-building trainings that equip teachers with pedagogical and behavioural skills to improve learning outcomes for children with disabilities.',
  img: '../../assets/photos/team-photo.jpg',
  tag: 'Training',
  tone: 'green'
}, {
  t: 'Girl Child Education',
  b: 'We close the gender gap in education, giving girls — especially those with disabilities — access to safe, inclusive classrooms.',
  img: '../../assets/photos/img-4299.jpg',
  tag: 'Girl Child',
  tone: 'gold'
}, {
  t: 'Stars Out Initiative',
  b: 'We facilitate social exposure through excursions to malls, airports, amusement parks and other sites for children with disabilities.',
  img: '../../assets/photos/visit-ogun-state.jpg',
  tag: 'Inclusion',
  tone: 'teal'
}, {
  t: 'Vocational & Self-sufficiency Skills',
  b: 'We break the barriers of limitation by equipping children with lifelong vocational skills to become independent.',
  img: '../../assets/photos/vocational-skill.jpg',
  tag: 'Vocational',
  tone: 'green'
}, {
  t: 'Educational Resources for Children',
  b: 'We support less-privileged children with textbooks, notebooks, sandals, school bags and uniforms to increase education outcomes.',
  img: '../../assets/photos/feed-the-1000.jpg',
  tag: 'Aid',
  tone: 'gold'
}, {
  t: 'Out-of-School Children Back to School',
  b: 'We are preparing a future where every child has access to quality education, irrespective of their background.',
  img: '../../assets/photos/this-ability-5.jpg',
  tag: 'Access',
  tone: 'teal'
}];
function ProgramsScreen({
  onNav
}) {
  const {
    ProgramCard,
    SectionHeading,
    Button
  } = RSA_PROG;
  const I = window.RSAIcons;
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.PageHeader, {
    eyebrow: "Programs",
    title: "How we create change",
    img: "../../assets/hero-educational-inclusion.jpeg",
    intro: "Our programs help us support, empower and inspire quality education and life skills. With the help of our sponsors, volunteers and team, they are a result of dedication, hard work and focus."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '76px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, PROGRAMS_LIST.map(p => /*#__PURE__*/React.createElement(ProgramCard, {
    key: p.t,
    image: p.img,
    badge: p.tag,
    badgeTone: p.tone,
    title: p.t,
    description: p.b,
    linkLabel: "Read more",
    href: "#",
    onClick: e => e.preventDefault()
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18,
      background: 'var(--rsa-teal-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: 'var(--rsa-teal)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.Users, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--rsa-teal-700)'
    }
  }, "Want to help a program grow?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--rsa-teal-700)'
    }
  }, "Volunteer your time or partner with us to expand our reach across more communities."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 17
    }),
    onClick: () => onNav('donate')
  }, "Get involved"))))));
}
window.ProgramsScreen = ProgramsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }
