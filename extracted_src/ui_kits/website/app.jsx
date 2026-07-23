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
