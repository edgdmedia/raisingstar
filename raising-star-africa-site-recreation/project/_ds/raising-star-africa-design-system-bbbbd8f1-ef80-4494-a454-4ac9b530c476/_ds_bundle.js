/* @ds-bundle: {"format":4,"namespace":"RaisingStarAfricaDesignSystem_bbbbd8","components":[{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ProgramCard","sourcePath":"components/content/ProgramCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/content/Badge.jsx":"7307207948d6","components/content/Card.jsx":"f330c4eb6ed5","components/content/ProgramCard.jsx":"47b3b4b618c8","components/content/SectionHeading.jsx":"14674f7183a0","components/content/StatCard.jsx":"459c5804374e","components/forms/Button.jsx":"dd51885744b4","components/forms/Checkbox.jsx":"4973caf6681c","components/forms/Input.jsx":"0861f1e2b29f","ui_kits/website/AboutScreen.jsx":"09f843d80df6","ui_kits/website/DonateScreen.jsx":"791bbcd0b33d","ui_kits/website/HomeScreen.jsx":"2eecf131581b","ui_kits/website/ProgramsScreen.jsx":"83b88aba4343","ui_kits/website/SiteFooter.jsx":"bdb32a90db21","ui_kits/website/SiteHeader.jsx":"13e250944bce","ui_kits/website/app.jsx":"42d3cd21df69","ui_kits/website/icons.jsx":"a669f7af8a4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RaisingStarAfricaDesignSystem_bbbbd8 = window.RaisingStarAfricaDesignSystem_bbbbd8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small pill label for categories, statuses and tags. */
function Badge({
  children,
  tone = 'teal',
  variant = 'soft',
  style,
  ...props
}) {
  const tones = {
    teal: {
      solidBg: 'var(--rsa-teal)',
      softBg: 'var(--rsa-teal-100)',
      fg: 'var(--rsa-teal-700)'
    },
    green: {
      solidBg: 'var(--rsa-green)',
      softBg: 'var(--rsa-green-100)',
      fg: 'var(--rsa-green-600)'
    },
    gold: {
      solidBg: 'var(--rsa-gold)',
      softBg: 'var(--rsa-gold-100)',
      fg: 'var(--rsa-gold-600)'
    },
    neutral: {
      solidBg: 'var(--rsa-slate)',
      softBg: 'var(--surface-subtle-2)',
      fg: 'var(--text-body)'
    }
  };
  const t = tones[tone] || tones.teal;
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.solidBg : t.softBg,
      color: solid ? '#fff' : t.fg,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container with soft shadow — base for project/blog/content cards. */
function Card({
  children,
  padded = true,
  hoverable = false,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      overflow: 'hidden',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      padding: padded ? 'var(--space-5)' : 0,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ProgramCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Image-first card for programs, projects and blog posts. */
function ProgramCard({
  image,
  imageAlt = '',
  badge,
  badgeTone = 'teal',
  title,
  description,
  linkLabel = 'Read more',
  href = '#',
  onClick,
  style,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, props), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 2',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    variant: "solid"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)',
      flex: 1
    }
  }, !image && badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h4)',
      lineHeight: 1.28,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--color-primary)',
      letterSpacing: '0.02em'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })))));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centered or left-aligned section header: eyebrow + title + optional intro. */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  invert = false,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 640 : 'none',
      ...style
    }
  }, props), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: 'var(--color-accent)',
      display: 'inline-block'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-heading)',
      color: invert ? '#fff' : 'var(--text-strong)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      color: invert ? 'rgba(255,255,255,.86)' : 'var(--text-body)'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big impact statistic — e.g. "15,000+ children reached". */
function StatCard({
  value,
  label,
  tone = 'teal',
  icon,
  style,
  ...props
}) {
  const tones = {
    teal: 'var(--rsa-teal)',
    green: 'var(--rsa-green)',
    gold: 'var(--rsa-gold-600)',
    brown: 'var(--rsa-brown-700)'
  };
  const c = tones[tone] || tones.teal;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: c,
      marginBottom: 4,
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extrabold)',
      fontSize: 'clamp(34px, 4vw, 46px)',
      lineHeight: 1,
      color: c,
      letterSpacing: '-0.02em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      letterSpacing: '0.01em'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary call-to-action button for Raising Star Africa.
 * Variants map to the brand: teal (primary), green (secondary),
 * gold "Donate" accent, and outline/ghost for lower emphasis.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...props
}) {
  const sizes = {
    sm: {
      padding: '9px 16px',
      font: 'var(--fs-sm)'
    },
    md: {
      padding: '13px 24px',
      font: 'var(--fs-body)'
    },
    lg: {
      padding: '17px 34px',
      font: 'var(--fs-lead)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '2px solid transparent',
      shadow: 'var(--shadow-teal)'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: '#fff',
      border: '2px solid transparent',
      shadow: 'none'
    },
    donate: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '2px solid transparent',
      shadow: '0 10px 22px color-mix(in srgb, var(--rsa-gold) 40%, transparent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
      shadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid transparent',
      shadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.font,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      background: v.background,
      color: v.color,
      border: v.border,
      borderRadius: 'var(--radius-pill)',
      boxShadow: disabled ? 'none' : v.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label — e.g. "Accept terms" on the donate form. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  ...props
}) {
  const cbId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, props)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input used in newsletter, donate and contact forms. */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  icon,
  style,
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)',
      padding: icon ? '13px 16px 13px 42px' : '13px 16px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--rsa-error)' : focused ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !error ? '0 0 0 4px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, props))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--rsa-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
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

// ui_kits/website/DonateScreen.jsx
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

// ui_kits/website/HomeScreen.jsx
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

// ui_kits/website/ProgramsScreen.jsx
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

// ui_kits/website/SiteFooter.jsx
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

// ui_kits/website/SiteHeader.jsx
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

// ui_kits/website/app.jsx
try { (() => {
// App shell: routes between screens via the header nav.
function RSAWebsiteApp() {
  const [route, setRoute] = React.useState('home');
  const onNav = r => {
    const map = {
      home: 'home',
      about: 'about',
      programs: 'programs',
      donate: 'donate'
    };
    setRoute(map[r] || 'home');
    document.getElementById('rsa-scroll')?.scrollTo({
      top: 0
    });
    window.scrollTo({
      top: 0
    });
  };
  const screens = {
    home: window.HomeScreen,
    about: window.AboutScreen,
    programs: window.ProgramsScreen,
    donate: window.DonateScreen
  };
  const Screen = screens[route] || window.HomeScreen;
  const headerKey = {
    home: 'home',
    about: 'about',
    programs: 'programs',
    donate: ''
  }[route];
  return /*#__PURE__*/React.createElement("div", {
    id: "rsa-scroll"
  }, /*#__PURE__*/React.createElement(window.SiteHeader, {
    current: headerKey,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    onNav: onNav
  })), /*#__PURE__*/React.createElement(window.SiteFooter, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(RSAWebsiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Inline SVG icon set (Lucide-style, 1.9px stroke) + brand social glyphs.
// SUBSTITUTION NOTE: the live site uses Elementor's Font Awesome icons; these are
// close Lucide-equivalents for line icons. Social marks are brand glyphs.
const RSAIcons = (() => {
  const S = ({
    children,
    size = 22,
    stroke = 2,
    ...p
  }) => /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p), children);
  return {
    Menu: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    Close: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    ChevronDown: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    Arrow: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    Heart: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
    })),
    Book: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    Users: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    Megaphone: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l18-5v12L3 14v-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
    })),
    Sprout: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M7 20h10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 20v-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 12C12 8 9 6 5 6c0 4 3 6 7 6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 12c0-3 2-5 6-5 0 3-2 5-6 5z"
    })),
    MapPin: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    Phone: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
    })),
    Mail: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 6-10 7L2 6"
    })),
    Check: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    Facebook: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })),
    Instagram: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.5",
      y2: "6.5"
    })),
    Linkedin: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    X: p => /*#__PURE__*/React.createElement(S, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 4l16 16M20 4L4 20"
    }))
  };
})();
window.RSAIcons = RSAIcons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
