(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return d});var n=t(0),c=t.n(n),s=t(4),r=t.n(s),l=t(144),A=t.n(l);t.d(a,"Link",function(){return A.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var i=t(147),o=t.n(i);t.d(a,"PageRenderer",function(){return o.a});var m=t(32);t.d(a,"parsePath",function(){return m.a});var u=c.a.createContext({}),d=function(e){return c.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,a,t){var n;e.exports=(n=t(149))&&n.default||n},148:function(e,a,t){"use strict";var n=t(0),c=t.n(n),s=t(4),r=t.n(s),l=t(7),A=t.n(l),i=t(51),o=t.n(i),m=t(145),u=(t(150),function(e){var a=e.theme;return c.a.createElement("div",{className:"social-link-row "+a},c.a.createElement("a",{href:"https://www.linkedin.com/showcase/siebel-center-for-design/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("div",{className:"social-link"},c.a.createElement("i",{className:"fab fa-linkedin"}))),c.a.createElement("a",{href:"https://twitter.com/scdillinois",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("div",{className:"social-link"},c.a.createElement("i",{className:"fab fa-twitter"}))),c.a.createElement("a",{href:"https://www.facebook.com/SCDillinois/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("div",{className:"social-link"},c.a.createElement("i",{className:"fab fa-facebook-f"}))),c.a.createElement("a",{href:"https://www.instagram.com/scdillinois/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("div",{className:"social-link"},c.a.createElement("i",{className:"fab fa-instagram"}))),c.a.createElement("a",{href:"https://medium.com/siebel-center-for-design",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("div",{className:"social-link"},c.a.createElement("i",{className:"fab fa-medium-m"}))))});u.propTypes={theme:r.a.string};var d=u,f=(t(151),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).render=function(){return c.a.createElement("div",{className:"menu-overlay"},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu-content-container"},c.a.createElement(m.Link,{to:"/"},c.a.createElement("h1",null,"Siebel Center for Design")),c.a.createElement("hr",null),c.a.createElement(m.Link,{to:"/connect",activeClassName:"active"},c.a.createElement("div",{className:"menu-option"},"Connect")),c.a.createElement(m.Link,{to:"/stories",activeClassName:"active"},c.a.createElement("div",{className:"menu-option"},"Stories")),c.a.createElement(m.Link,{to:"/courses",activeClassName:"active"},c.a.createElement("div",{className:"menu-option"},"Courses")),c.a.createElement(m.Link,{to:"/resources",activeClassName:"active"},c.a.createElement("div",{className:"menu-option"},"Resources")),c.a.createElement(m.Link,{to:"/newsletter",activeClassName:"active"},c.a.createElement("div",{className:"menu-option"},"Newsletter"))),c.a.createElement("div",{className:"menu-close-button"},c.a.createElement("div",{className:"button",onClick:function(e){a.props.onCloseButtonPress(e)}},"✕"))))},a}return A()(a,e),a}(c.a.Component)),E=(t(152),function(e){function a(a){var t;return(t=e.call(this,a)||this).toggleMenu=function(e){e.preventDefault();var a=t.state.showMenu;t.setState({showMenu:!a})},t.spawnMenu=function(){return t.state.showMenu?c.a.createElement(f,{onCloseButtonPress:t.toggleMenu}):""},t.render=function(){return c.a.createElement("main",null,t.spawnMenu(),c.a.createElement("header",{className:"flex"},c.a.createElement("div",{className:"scd-cw-90 scd-fill-height"},c.a.createElement(d,{theme:"blue"}),c.a.createElement("div",{className:"titlespace"},c.a.createElement(m.Link,{to:"/"},c.a.createElement("h1",null,"SCD"))),c.a.createElement("div",{className:"menu-icon-space"},c.a.createElement("div",{className:"soft-button",onClick:t.toggleMenu},"Menu ",c.a.createElement("div",{className:"long-menu-icon"}))))))},t.state={showMenu:!1},t.toggleMenu.bind(o()(o()(t))),t}return A()(a,e),a}(c.a.Component));E.propTypes={siteTitle:r.a.string},E.defaultProps={siteTitle:""};var p=E,g=(t(153),function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"scd-cw-90"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"cell wide"},c.a.createElement("h1",null,"Siebel Center for Design"),c.a.createElement("h2",null,"University of Illinois at Urbana-Champaign"),c.a.createElement("h2",null,"designcenter@illinois.edu"),c.a.createElement("h2",null,"217–300–9100")),c.a.createElement("div",{className:"cell"},c.a.createElement(m.Link,{to:"/events"},c.a.createElement("h1",null,"Events")),c.a.createElement("p",null,"Upcoming"),c.a.createElement("p",null,"Archives")),c.a.createElement("div",{className:"cell"},c.a.createElement(m.Link,{to:"/events"},c.a.createElement("h1",null,"Stories")),c.a.createElement(m.Link,{to:"/social-innovation-spotlight"},c.a.createElement("p",null,"Social Innovation Spotlight")),c.a.createElement(m.Link,{to:"/collaborators"},c.a.createElement("p",null,"Collaborators")),c.a.createElement(m.Link,{to:"/archives"},c.a.createElement("p",null,"Archives")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"cell wide"}),c.a.createElement("div",{className:"cell"},c.a.createElement(m.Link,{to:"/resources"},c.a.createElement("h1",null,"Resources")),c.a.createElement(m.Link,{to:"/readings"},c.a.createElement("p",null,"Readings")),c.a.createElement(m.Link,{to:"/articles"},c.a.createElement("p",null,"Articles")),c.a.createElement(m.Link,{to:"/videos"},c.a.createElement("p",null,"Videos")),c.a.createElement(m.Link,{to:"/websites"},c.a.createElement("p",null,"Websites")),c.a.createElement(m.Link,{to:"/companies"},c.a.createElement("p",null,"Companies"))),c.a.createElement("div",{className:"cell"},c.a.createElement(m.Link,{to:"/news"},c.a.createElement("h1",null,"News")),c.a.createElement(m.Link,{to:"/news/subscribe"},c.a.createElement("p",null,"Newsletter Signup")),c.a.createElement(m.Link,{to:"/news/past-editions"},c.a.createElement("p",null,"Archives")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"cell wide"},c.a.createElement("p",null,"Copyright 2019"),c.a.createElement("p",null,"The Board of Trustees at the University of Illinois"),c.a.createElement("p",null,"Privacy Statement | Engineering Cookie Policy | Cookie Settings")),c.a.createElement("div",{className:"cell wide anchor-right-bottom"},c.a.createElement(d,{theme:"black"})))))}),b=(t(154),function(e){var a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{siteTitle:"Siebel Center for Design"}),c.a.createElement("div",{className:"scd-ptop-100"},c.a.createElement("main",null,a),c.a.createElement(g,null)))});b.propTypes={children:r.a.node.isRequired};a.a=b},149:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),c=t.n(n),s=t(4),r=t.n(s),l=t(53),A=t(2),i=function(e){var a=e.location,t=A.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=i},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},161:function(e,a,t){"use strict";var n=t(172),c=t(0),s=t.n(c),r=t(145);t(173);a.a=function(e){return s.a.createElement(r.StaticQuery,{query:"4291594852",render:function(a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"image-banner",style:{backgroundImage:"url("+a[e.page].childImageSharp.fluid.src+")"}},s.a.createElement("div",{className:"text-line"},e.title)))},data:n})}},172:function(e){e.exports={data:{resources:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAwDAQACEAMQAAABjYA05oSP/8QAGBABAAMBAAAAAAAAAAAAAAAAAgADEQH/2gAIAQEAAQUCFWRELiqe/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BjX//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Bta//xAAYEAACAwAAAAAAAAAAAAAAAAAAIQEQMf/aAAgBAQAGPwJqKw//xAAbEAABBAMAAAAAAAAAAAAAAAABABFBUSExsf/aAAgBAQABPyEVtFhNUFjGEPv6v//aAAwDAQACAAMAAAAQCA//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QOgx//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EENj/8QAGhABAAMAAwAAAAAAAAAAAAAAAQARITFRcf/aAAgBAQABPxBES1VVr1ZxGhgKdsqabcspMek//9k=",aspectRatio:2.406015037593985,src:"/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/29ac9/resources.jpg",srcSet:"/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/91d28/resources.jpg 722w,\n/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/c4350/resources.jpg 1444w,\n/scd-gatsby/static/ec7c5ff22886a04380ba2a1cc417cc10/29ac9/resources.jpg 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},connect:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADUUlEQVQ4yyWSXVMadxTG+UTtJJPJKL6kWqkabXRs1IC87S67vO2ygizLi4uAgiCIOGCsmBhtEs20megkM0l7lat+gn6gX/9pL87FORe/c57nPK4fHBXp0GQyK7F0FGO5kcDbSHIvo+DOfet15F4WX2uTaUNivpAgeZTlyU4Ujykzm9HwpFUeajKjEQVXqJnl7LZPuG8zVlD4aTdJcE/HV4yjCZh9soV6YvF4O0G0qfPzQZTVmkrxwsbfSvLYjjGd0hiJCmBAwpVxUlT6VUrnFfSGhVoySIvZ60Obr/0tOtUY128bbLctrEOHwmWT0qCM3UkTzmqMKzJTpspEVGHUL4D9+Bpn/TJ6wWL0aZAVsSVfMHnZzvK2liIih+idNqh0C8yZaSbKHXbOB/RetbBtcfmGxEhQwi1JjAdlXL3YKr/3ypSKOYpFm+ujKt39Ep28ztTTAPNrG+i6Qd7J8mPS4Pu4xRNjk912nX/eD3ByYuYLMSbA46tBXM/1NYpZm8HwN24H+9wND7ltldnPWywGNFQh6cApUM1nmIwZfKekkJMJchWHm2OH5608I0Kq+1n4v3L1tmSc7pDG5SeqpW0GeyWszBbLPpmaU+SZEuNlZ5emgEa2i4zH09gJjdMXQ7a7fVYyOR6ForjXgv8Da3kTo94nXu3Qvbzly7sLFn0SRjTO3eUJ/lSOYXefzzdXfBh2uO5U+djf4/XlCz7c3hEVPj7wyrjXhexvXzaTKma1S7JyQKxY46rf4s3VBR9v3vD10x1/f77jz6sef/R3eHXc5PSwzl/nVW56Jd61csQ1hZlQBE8yylwmiUsLesmIa+z2KYrlcNqu8Gu7RmNvh6M9i3bZFJWguxMRfmV4f+bQrCdYi6lMClvcXgVl02CplmGilMC1Hg5jRWSKdXFl/Zhoegt/ROX+LyHcKwFGFnzcm99gwR9FTpn4M2mmIwlmVJ0xzcAT0oinYsznTGYKOq4Jb4RNTWM3Z+Mx8jwIJ7gv6YwoOu5AjLFVmbCi4tmQebgeZsSnMBtPCWCC2WAEU5LxBsMspg0CuxauRUnBJ8pRJfyKxpyIylJI5dGGKgIbY2JdZmY1LDImMRnUmBYyF5Im85E4HvHVWZHVGbFwWTx3Kp/kX/x8WE/cYIt6AAAAAElFTkSuQmCC",aspectRatio:1.4998441882206295,src:"/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/0670c/connect.png",srcSet:"/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/36882/connect.png 450w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/66981/connect.png 900w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/0670c/connect.png 1800w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/e59af/connect.png 2700w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/8af71/connect.png 3600w,\n/scd-gatsby/static/5af82c8816a79674040c5a55e31ffdfb/df14b/connect.png 4813w",sizes:"(max-width: 1800px) 100vw, 1800px"}}},stories:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABiklEQVQoz62O/0sacRjHP/4FrWDlCFou2pLFqMVgP0xKd95sx+G0pmvJ6ijTy++ennaX2qUe03Ib/bIf9se+dgSxMdhvPfDieXjzeuAtjHKHdmOAUbFQo+uklA2UUJD14AIx6Q3Pn85T0POcW1eM3Bvc/g8Gznec7rWXjWg1htQqDqc5C+1LHVEtWjSqPfLHBZLbrzBLKYr7Ep/Dqxj6HhsvlsgeHWKaLsP+NwYXEy66V3Ssr7SbQ4yqQ+n0nNyxycF+GVHRW17Q4kTLkvkkk05skvkokfqwRVINsePtciGHUevhOBO69gir5WIaDvVK1/u1yWVNtIMae2kdcWZcYptD6sUm4ddrBOZnWF6c5VlgzsPP6vIjTg41Jte/GI9/4g5ucHoTOvaYttfaqPcpl3roeZsjrYmQNmXkyDbvIjIvV5ZYnJ3i8dwDAv4pnvinCS48RIlKpHczJOMpEuoucWUH9X0CJZYgJseJRlTebimEQzGEN9wrPp+PO/4n+cQf59b75xbib+654W/jkA1GZwnSFAAAAABJRU5ErkJggg==",aspectRatio:2.406015037593985,src:"/scd-gatsby/static/f11194259f011b85fc47134d89ffc29a/d2115/stories.png",srcSet:"/scd-gatsby/static/f11194259f011b85fc47134d89ffc29a/4226f/stories.png 722w,\n/scd-gatsby/static/f11194259f011b85fc47134d89ffc29a/f7451/stories.png 1444w,\n/scd-gatsby/static/f11194259f011b85fc47134d89ffc29a/d2115/stories.png 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}},courses:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACQElEQVQozx2Q3UuTcRTH9494UXfRjZUR0UUoSFFRFwWKUUpBXSViWJRk3TSzKAzK1MyaQ0ljvlTqpnO9LNl8ydycm9OcTPeic+/PnmdvyqefHTicLwfOh+/3qPwbDpRkipg/gMPYTWjVjMc6wMr4O4I2PfPauwRsE2RkhVQ8TjaTIxGNiRuJ3XSOrLhNx5KkAmGSngAq+x89MbEMer2MdTSyZPnE3FgXFm0jLlMP5jd1hDyL5HM5lEQCRU4T2QwhxyV2lCy5pIwSTSIFIshbMVQL89P4QnGWp6dw6lrxuMxMDLTRp67G0KFm5FUD8p47AVKUtNAZYpG4AKbIC50VUw4nkEPCdUxC5fVvk1LyBFY8jD5/gO9nD5+1L2iuvYbmWT1TxmFyu5AUKZR0nrCA+bx+pEiCTDJNOizibif+Q5PCpWrW6cZsm8MwPkrNlTLa6i6zZNLhX98gIHqvJoa/EgwFGTR2sbK2RsAXIROVRMSI+F2IlIiqRCSif32o+sZGednbycjbSqrOl1Jeepxbl07Ton6IrlvL66dN1FaVY3fZaX3/hEW3G5/TRdxuY/vXN6K2abYmRwhZjGyZ9ah0P4bRmDvo0dRTfLSQcyeLKDlYwKlD+6m8UML9imJmjINI2R2CwsnsggNTnwb3l342Z6ws92uYbLrN98c1DN27icq6aqXd1EJ1wx2OHSkSwMOUFO7jxIECairO0tVwHcPHVmJyFqdnA53ewNCHdtZnfxN22LE0q+mtvkrnjTIeXTzDP/bvCImgNjPXAAAAAElFTkSuQmCC",aspectRatio:2.388059701492537,src:"/scd-gatsby/static/04d33a7f63b8016303497e97a8d0d684/64cb1/courses.png",srcSet:"/scd-gatsby/static/04d33a7f63b8016303497e97a8d0d684/4226f/courses.png 716w,\n/scd-gatsby/static/04d33a7f63b8016303497e97a8d0d684/f7451/courses.png 1433w,\n/scd-gatsby/static/04d33a7f63b8016303497e97a8d0d684/64cb1/courses.png 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},173:function(e,a,t){}}]);
//# sourceMappingURL=1-b58fba4badbf853b9aac.js.map