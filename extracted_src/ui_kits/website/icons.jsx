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
