(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(143),i=n(145);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(l.Link,{to:"/"},"Go back to the homepage"))}},142:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(146)),l=a(n(147)),i=a(n(7)),o=a(n(51)),c=a(n(52)),s=a(n(4)),u=a(n(0)),m=n(22),d=n(143);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/scd-gatsby/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,o.default)((0,o.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,o=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=p(n);return u.default.createElement(m.Link,(0,l.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),E(n,{state:s,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,l.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,l.default)({innerRef:t},e))});t.default=v;var E=function(e,t){window.___navigate(p(e),t)};t.navigate=E;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(142),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(144),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(7),c=n.n(o),s=n(51),u=n.n(s),m=n(143),d=(n(149),function(e){var t=e.theme;return r.a.createElement("div",{className:"social-link-row "+t},r.a.createElement("a",{href:"https://www.linkedin.com/showcase/siebel-center-for-design/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("a",{href:"https://twitter.com/scdillinois",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("a",{href:"https://www.facebook.com/SCDillinois/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("a",{href:"https://www.instagram.com/scdillinois/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement("a",{href:"https://medium.com/siebel-center-for-design",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-medium-m"}))))});d.propTypes={theme:i.a.string};var p=d,f=(n(150),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){return r.a.createElement("div",{className:"menu-overlay"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-content-container"},r.a.createElement("h1",null,"Siebel Center for Design"),r.a.createElement("hr",null),r.a.createElement(m.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Connect")),r.a.createElement(m.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Stories")),r.a.createElement(m.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Courses")),r.a.createElement(m.Link,{to:"/resources"},r.a.createElement("div",{className:"menu-option"},"Resources")),r.a.createElement(m.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Newsletter"))),r.a.createElement("div",{className:"menu-close-button"},r.a.createElement("div",{className:"button",onClick:function(e){t.props.onCloseButtonPress(e)}},"✕"))))},t}return c()(t,e),t}(r.a.Component)),h=(n(151),function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleMenu=function(e){e.preventDefault();var t=n.state.showMenu;n.setState({showMenu:!t})},n.spawnMenu=function(){return n.state.showMenu?r.a.createElement(f,{onCloseButtonPress:n.toggleMenu}):""},n.render=function(){return r.a.createElement("main",null,n.spawnMenu(),r.a.createElement("header",null,r.a.createElement(p,{theme:"blue"}),r.a.createElement("div",{className:"titlespace"},r.a.createElement(m.Link,{to:"/"},r.a.createElement("h1",null,"SCD"))),r.a.createElement("div",{className:"menu-icon-space"},r.a.createElement("div",{className:"soft-button",onClick:n.toggleMenu},"Menu ",r.a.createElement("i",{className:"fas fa-bars"})))))},n.state={showMenu:!1},n.toggleMenu.bind(u()(u()(n))),n}return c()(t,e),t}(r.a.Component));h.propTypes={siteTitle:i.a.string},h.defaultProps={siteTitle:""};var v=h,E=(n(152),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"},r.a.createElement("h1",null,"Siebel Center for Design"),r.a.createElement("h2",null,"University of Illinois at Urbana-Champaign"),r.a.createElement("h2",null,"designcenter@illinois.edu"),r.a.createElement("h2",null,"217–300–9100")),r.a.createElement("div",{className:"cell"},r.a.createElement(m.Link,{to:"/events"},r.a.createElement("h1",null,"Events")),r.a.createElement("p",null,"Upcoming"),r.a.createElement("p",null,"Archives")),r.a.createElement("div",{className:"cell"},r.a.createElement(m.Link,{to:"/events"},r.a.createElement("h1",null,"Stories")),r.a.createElement(m.Link,{to:"/social-innovation-spotlight"},r.a.createElement("p",null,"Social Innovation Spotlight")),r.a.createElement(m.Link,{to:"/collaborators"},r.a.createElement("p",null,"Collaborators")),r.a.createElement(m.Link,{to:"/archives"},r.a.createElement("p",null,"Archives")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"}),r.a.createElement("div",{className:"cell"},r.a.createElement(m.Link,{to:"/resources"},r.a.createElement("h1",null,"Resources")),r.a.createElement(m.Link,{to:"/readings"},r.a.createElement("p",null,"Readings")),r.a.createElement(m.Link,{to:"/articles"},r.a.createElement("p",null,"Articles")),r.a.createElement(m.Link,{to:"/videos"},r.a.createElement("p",null,"Videos")),r.a.createElement(m.Link,{to:"/websites"},r.a.createElement("p",null,"Websites")),r.a.createElement(m.Link,{to:"/companies"},r.a.createElement("p",null,"Companies"))),r.a.createElement("div",{className:"cell"},r.a.createElement(m.Link,{to:"/news"},r.a.createElement("h1",null,"News")),r.a.createElement(m.Link,{to:"/news/subscribe"},r.a.createElement("p",null,"Newsletter Signup")),r.a.createElement(m.Link,{to:"/news/past-editions"},r.a.createElement("p",null,"Archives")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"},r.a.createElement("p",null,"Copyright 2019"),r.a.createElement("p",null,"The Board of Trustees at the University of Illinois"),r.a.createElement("p",null,"Privacy Statement | Engineering Cookie Policy | Cookie Settings")),r.a.createElement("div",{className:"cell wide anchor-right-bottom"},r.a.createElement(p,{theme:"black"}))))}),g=(n(153),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{siteTitle:"Siebel Center for Design"}),r.a.createElement("div",{class:"content-wrapper"},r.a.createElement("main",null,t),r.a.createElement(E,null)))});g.propTypes={children:i.a.node.isRequired};t.a=g},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),l=n(4),i=n.n(l),o=n(53),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-05ed89cedcc5d35ac58f.js.map