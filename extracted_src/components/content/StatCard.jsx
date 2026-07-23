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
