(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return E}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(142),s=a.n(i);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var o=a(144),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(7),s=a.n(i),o=a(51),m=a.n(o),u=a(143),p=(a(149),function(e){var t=e.theme;return r.a.createElement("div",{className:"social-link-row "+t},r.a.createElement("a",{href:"https://www.linkedin.com/showcase/siebel-center-for-design/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("a",{href:"https://twitter.com/scdillinois",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("a",{href:"https://www.facebook.com/SCDillinois/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("a",{href:"https://www.instagram.com/scdillinois/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement("a",{href:"https://medium.com/siebel-center-for-design",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("div",{className:"social-link"},r.a.createElement("i",{className:"fab fa-medium-m"}))))});p.propTypes={theme:c.a.string};var d=p,E=(a(150),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return r.a.createElement("div",{className:"menu-overlay"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-content-container"},r.a.createElement("h1",null,"Siebel Center for Design"),r.a.createElement("hr",null),r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Connect")),r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Stories")),r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Courses")),r.a.createElement(u.Link,{to:"/resources"},r.a.createElement("div",{className:"menu-option"},"Resources")),r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"menu-option"},"Newsletter"))),r.a.createElement("div",{className:"menu-close-button"},r.a.createElement("div",{className:"button",onClick:function(e){t.props.onCloseButtonPress(e)}},"✕"))))},t}return s()(t,e),t}(r.a.Component)),f=(a(151),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){e.preventDefault();var t=a.state.showMenu;a.setState({showMenu:!t})},a.spawnMenu=function(){return a.state.showMenu?r.a.createElement(E,{onCloseButtonPress:a.toggleMenu}):""},a.render=function(){return r.a.createElement("main",null,a.spawnMenu(),r.a.createElement("header",null,r.a.createElement(d,{theme:"blue"}),r.a.createElement("div",{className:"titlespace"},r.a.createElement(u.Link,{to:"/"},r.a.createElement("h1",null,"SCD"))),r.a.createElement("div",{className:"menu-icon-space"},r.a.createElement("div",{className:"soft-button",onClick:a.toggleMenu},"Menu ",r.a.createElement("i",{className:"fas fa-bars"})))))},a.state={showMenu:!1},a.toggleMenu.bind(m()(m()(a))),a}return s()(t,e),t}(r.a.Component));f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var h=f,v=(a(152),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"},r.a.createElement("h1",null,"Siebel Center for Design"),r.a.createElement("h2",null,"University of Illinois at Urbana-Champaign"),r.a.createElement("h2",null,"designcenter@illinois.edu"),r.a.createElement("h2",null,"217–300–9100")),r.a.createElement("div",{className:"cell"},r.a.createElement(u.Link,{to:"/events"},r.a.createElement("h1",null,"Events")),r.a.createElement("p",null,"Upcoming"),r.a.createElement("p",null,"Archives")),r.a.createElement("div",{className:"cell"},r.a.createElement(u.Link,{to:"/events"},r.a.createElement("h1",null,"Stories")),r.a.createElement(u.Link,{to:"/social-innovation-spotlight"},r.a.createElement("p",null,"Social Innovation Spotlight")),r.a.createElement(u.Link,{to:"/collaborators"},r.a.createElement("p",null,"Collaborators")),r.a.createElement(u.Link,{to:"/archives"},r.a.createElement("p",null,"Archives")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"}),r.a.createElement("div",{className:"cell"},r.a.createElement(u.Link,{to:"/resources"},r.a.createElement("h1",null,"Resources")),r.a.createElement(u.Link,{to:"/readings"},r.a.createElement("p",null,"Readings")),r.a.createElement(u.Link,{to:"/articles"},r.a.createElement("p",null,"Articles")),r.a.createElement(u.Link,{to:"/videos"},r.a.createElement("p",null,"Videos")),r.a.createElement(u.Link,{to:"/websites"},r.a.createElement("p",null,"Websites")),r.a.createElement(u.Link,{to:"/companies"},r.a.createElement("p",null,"Companies"))),r.a.createElement("div",{className:"cell"},r.a.createElement(u.Link,{to:"/news"},r.a.createElement("h1",null,"News")),r.a.createElement(u.Link,{to:"/news/subscribe"},r.a.createElement("p",null,"Newsletter Signup")),r.a.createElement(u.Link,{to:"/news/past-editions"},r.a.createElement("p",null,"Archives")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"cell wide"},r.a.createElement("p",null,"Copyright 2019"),r.a.createElement("p",null,"The Board of Trustees at the University of Illinois"),r.a.createElement("p",null,"Privacy Statement | Engineering Cookie Policy | Cookie Settings")),r.a.createElement("div",{className:"cell wide anchor-right-bottom"},r.a.createElement(d,{theme:"black"}))))}),g=(a(153),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{siteTitle:"Siebel Center for Design"}),r.a.createElement("div",{class:"content-wrapper"},r.a.createElement("main",null,t),r.a.createElement(v,null)))});g.propTypes={children:c.a.node.isRequired};t.a=g},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(53),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=(a(162),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).generateColumn=function(e){var t;return e.paragraphs?t=e.paragraphs.map(function(e,t){return c.a.createElement("p",{className:"serif",key:t},e)}):e.options&&(t=c.a.createElement("div",{className:"grid-menu"},e.options.map(function(e,t){return c.a.createElement("div",{className:"option",key:t},">",e)}))),t},t.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"serif"},t.props.title),c.a.createElement("div",{className:"two-column-grid"},c.a.createElement("div",{className:"grid-column"},t.generateColumn(t.props.left)),c.a.createElement("div",{className:"grid-column"},t.generateColumn(t.props.right))))},t}return r()(t,e),t}(c.a.Component));t.a=i},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=(a(154),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"grid-box"},c.a.createElement("div",{className:"navigation"},t.props.tabs.map(function(e,t){return c.a.createElement("div",{className:"tab",key:t},e)})),t.props.children)},t}return r()(t,e),t}(c.a.Component));t.a=i},162:function(e,t,a){}}]);
//# sourceMappingURL=0-3398dec185dac63b9644.js.map