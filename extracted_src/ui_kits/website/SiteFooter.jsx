try { (() => {
// Site footer: brand blurb, contact, menu, newsletter, social + copyright.
const {
  Input: RSAFooterInput,
  Button: RSAFooterButton
} = window.RaisingStarAfricaDesignSystem_bbbbd8;
function SiteFooter({
  onNav
}) {
  const I = window.RSAIcons;
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  };
  const h = {
    margin: 0,
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: '.02em',
    color: '#fff'
  };
  const link = {
    color: 'rgba(255,255,255,.82)',
    fontSize: 14.5,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--rsa-ink)',
      color: 'rgba(255,255,255,.82)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 28px',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1.2fr .9fr 1.4fr',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Raising Star Africa",
    style: {
      height: 64,
      alignSelf: 'flex-start',
      background: '#fff',
      borderRadius: 12,
      padding: 8
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.7
    }
  }, "Empowering and inspiring quality education and life skills among differently-abled and less privileged children across Africa.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: link
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 17
  }), " 1 Adekunle Owobiyi Close, Ogba, Ikeja, Lagos."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: link
  }, /*#__PURE__*/React.createElement(I.Phone, {
    size: 17
  }), " +234 803 446 5277"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: link
  }, /*#__PURE__*/React.createElement(I.Mail, {
    size: 17
  }), " info@raisingstarafrica.org")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Menu"), ['About', 'Programs', 'Projects', 'Volunteer'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.toLowerCase());
    },
    style: {
      ...link
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5
    }
  }, "Get our emails about opportunities to help."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Your email",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid rgba(255,255,255,.18)',
      background: 'rgba(255,255,255,.06)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(RSAFooterButton, {
    variant: "donate",
    size: "sm"
  }, "Sign Up")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Raising Star Africa Foundation. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, [I.Facebook, I.X, I.Instagram, I.Linkedin].map((Ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,.8)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 17
  })))))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }
