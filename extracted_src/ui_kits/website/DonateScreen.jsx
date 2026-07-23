try { (() => {
// Donate screen — giving form + bank details + impact reassurance.
const RSA_DON = window.RaisingStarAfricaDesignSystem_bbbbd8;
function DonateScreen() {
  const {
    Input,
    Checkbox,
    Button,
    Card,
    SectionHeading,
    StatCard
  } = RSA_DON;
  const I = window.RSAIcons;
  const [amount, setAmount] = React.useState(10000);
  const [agree, setAgree] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const presets = [5000, 10000, 25000, 50000];
  const fmt = n => '\u20A6' + n.toLocaleString('en-NG');
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 24px'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.PageHeader, {
    eyebrow: "Donate",
    title: "Your gift broadens our reach",
    img: "../../assets/hero-digital-vocational.jpeg",
    intro: "Your monetary donations help us reach more differently-abled and less privileged children across Africa."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 24px',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 44,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 36,
      gap: 22
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 68,
      height: 68,
      borderRadius: 999,
      background: 'var(--rsa-green-100)',
      color: 'var(--rsa-green-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 36
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26
    }
  }, "Thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: 'var(--text-body)',
      maxWidth: 340
    }
  }, "Your pledge of ", fmt(amount), " means the world to the children we serve. We\\u2019ll be in touch by email shortly."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setDone(false);
      setAgree(false);
    }
  }, "Make another donation")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Give Today",
    title: "Make a donation"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "Choose an amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 10
    }
  }, presets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setAmount(p),
    style: {
      padding: '13px 6px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 15,
      border: `2px solid ${amount === p ? 'var(--color-primary)' : 'var(--border-default)'}`,
      background: amount === p ? 'var(--rsa-teal-050)' : '#fff',
      color: amount === p ? 'var(--rsa-teal-700)' : 'var(--text-body)'
    }
  }, fmt(p))))), /*#__PURE__*/React.createElement(Input, {
    label: "Amount (NGN)",
    type: "number",
    value: amount,
    onChange: e => setAmount(Number(e.target.value) || 0)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Ada Obi"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I accept the terms and conditions",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    size: "lg",
    fullWidth: true,
    disabled: !agree,
    iconLeft: /*#__PURE__*/React.createElement(I.Heart, {
      size: 18
    }),
    onClick: () => setDone(true)
  }, "Donate ", fmt(amount)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 28,
      gap: 12,
      background: 'var(--rsa-teal-700)',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '.04em',
      color: '#fff'
    }
  }, "Bank Transfer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      color: 'rgba(255,255,255,.92)',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "Bank"), /*#__PURE__*/React.createElement("strong", null, "United Bank of Africa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "Account name"), /*#__PURE__*/React.createElement("strong", null, "Raising Star Africa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "NGN account"), /*#__PURE__*/React.createElement("strong", null, "1023988410")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "Domiciliary"), /*#__PURE__*/React.createElement("strong", null, "3003286628")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: fmt(5000),
    label: "Provides school supplies for a child",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: fmt(25000),
    label: "Sponsors a term of inclusive schooling",
    tone: "green"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      background: 'var(--rsa-gold-100)',
      borderRadius: 'var(--radius-lg)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rsa-gold-600)'
    }
  }, /*#__PURE__*/React.createElement(I.Sprout, {
    size: 30
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--rsa-brown-700)'
    }
  }, "Every gift is put to work in classrooms, therapy rooms and vocational workshops across Nigeria.")))));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateScreen.jsx", error: String((e && e.message) || e) }); }
