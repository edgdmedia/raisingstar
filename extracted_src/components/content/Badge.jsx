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
