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
