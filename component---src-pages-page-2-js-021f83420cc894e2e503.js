(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(134),l=a(139);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(133),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(135),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(28);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},135:function(e,t,a){var n;e.exports=(n=a(137))&&n.default||n},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Project C.A.R.E"}}}}},137:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(47),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},138:function(e,t,a){},139:function(e,t,a){"use strict";var n=a(136),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(140),s=a.n(o),u=a(134),m=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{id:"topbar",style:{}},i.a.createElement("div",{className:"ui container fluid"},i.a.createElement("div",{className:"ui huge menu inverted blue header"},i.a.createElement("div",{className:"ui container"},i.a.createElement(u.Link,{className:"item header",to:"/"},t),i.a.createElement("div",{className:"right menu"}),i.a.createElement("div",{className:"item"},i.a.createElement(u.Link,{className:"ui huge green button",to:"/app/onboarding"},"Begin Report"))))))))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var d=m,p=function(e){e.siteTitle;return i.a.createElement("div",{class:"ui center aligned text container"},i.a.createElement("div",{class:"ui footer basic segment"},i.a.createElement("p",null,"Project C.A.R.E was created by team ",i.a.createElement("strong",null,"Kernel Panic")," in 28 hours for the ",i.a.createElement("a",{href:"https://2018isbhacks.devpost.com"},"Jazz SDG Hackathon 2018"),"."),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/amingilani/project-care"},i.a.createElement("i",{className:"github icon"})," Code on Github")," | ",i.a.createElement("a",{href:"https://devpost.com/software/project-care"},i.a.createElement("i",{className:"code icon"})," DevPost Submission")),i.a.createElement("p",null,"© All content is copyright ",i.a.createElement("a",{href:"https://amin.gilani.me"},"Amin Gilani"),", ",i.a.createElement("a",{href:"https://www.linkedin.com/in/mohsulaimankhan/"},"Sulaiman Khan"),", and ",i.a.createElement("a",{href:"https://www.linkedin.com/in/izzashahid-gilani/"},"Izza Gilani"),", 2018."),i.a.createElement("p",null,"All original content imagery is released under ",i.a.createElement("a",{href:"https://creativecommons.org/licenses/by-nc/4.0/"},"CC BY-NC 4.0.")," ",i.a.createElement("br",null),"All code is released under the ",i.a.createElement("a",{href:"https://www.gnu.org/licenses/agpl.txt"},"AGPL v3"),".")))};p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var h=p,f=(a(141),a(142),a(138),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t),i.a.createElement(h,null))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-page-2-js-021f83420cc894e2e503.js.map