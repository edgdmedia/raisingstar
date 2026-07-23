try { (() => {
// Sticky site header with logo, nav (dropdowns), social + Donate CTA.
const {
  Button: RSAButton
} = window.RaisingStarAfricaDesignSystem_bbbbd8;
function SiteHeader({
  current,
  onNav
}) {
  const I = window.RSAIcons;
  const [open, setOpen] = React.useState(null);
  const nav = [{
    label: 'About',
    key: 'about',
    sub: ['Advisory Board', 'Board Members', 'Team Members']
  }, {
    label: 'Programs',
    key: 'programs'
  }, {
    label: 'Projects',
    key: 'projects'
  }, {
    label: 'Blog',
    key: 'blog',
    sub: ['Resources']
  }, {
    label: 'Gallery',
    key: 'gallery'
  }, {
    label: 'Join Us',
    key: 'join',
    sub: ['Partner', 'Volunteer']
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--rsa-teal-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '7px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-heading)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      opacity: .92
    }
  }, /*#__PURE__*/React.createElement(I.Mail, {
    size: 15
  }), " info@raisingstarafrica.org"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, [I.Facebook, I.X, I.Instagram, I.Linkedin].map((Ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#fff',
      opacity: .9,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 15
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Raising Star Africa Foundation",
    style: {
      height: 58
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.key,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(n.key),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      n.sub ? null : onNav(n.key);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '10px 13px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14.5,
      color: current === n.key ? 'var(--color-primary)' : 'var(--text-strong)'
    }
  }, n.label, n.sub && /*#__PURE__*/React.createElement(I.ChevronDown, {
    size: 15
  })), n.sub && open === n.key && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: 200,
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      display: 'flex',
      flexDirection: 'column'
    }
  }, n.sub.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      padding: '9px 12px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--rsa-teal-050)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, s)))))), /*#__PURE__*/React.createElement(RSAButton, {
    variant: "donate",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Heart, {
      size: 16
    }),
    onClick: () => onNav('donate')
  }, "Donate")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }
