webpackJsonp([9393494642403],{509:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(6),r=l(n),u=a(23),i=l(u),d=a(71),o=l(d),f=a(303),c=l(f),m=i.default.div.withConfig({displayName:"tour-banner__BannerWrapper"})(["margin:0 ","%;position:relative;"],o.default.MAIN_PADDING),s=i.default.div.withConfig({displayName:"tour-banner__Banner"})(["height:50vh;background-image:url(",");background-size:cover;max-height:400px;"],c.default),g=i.default.div.withConfig({displayName:"tour-banner__Overlay"})(["position:absolute;height:100%;top:0;left:0;right:0;background-color:rgba(0,0,0,0.7);z-index:5;display:flex;justify-content:center;align-items:center;color:white;"]),p=function(){return r.default.createElement(m,null,r.default.createElement(s,null),r.default.createElement(g,null,r.default.createElement("h1",null,"Tour")))};t.default=p,e.exports=t.default},518:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(6),r=l(n),u=a(23),i=l(u),d=a(509),o=l(d),f=a(71),c=l(f),m=i.default.div.withConfig({displayName:"tour__ListWrapper"})(["margin:2rem ","%;position:relative;text-align:center;a{font-size:3rem;}p{padding-left:2%;}"],c.default.MAIN_PADDING),s=(i.default.div.withConfig({displayName:"tour__ListSubHead"})(["margin:2rem ","%;position:relative;font-size:3rem;font-weight:700;text-decoration:underline solid rgb(244,131,66);text-align:center;"],c.default.MAIN_PADDING),function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(o.default,null),r.default.createElement("h1",{className:"showTime"},"Upcoming Shows"),r.default.createElement(m,null,r.default.createElement("hr",null),r.default.createElement("hr",null),r.default.createElement("hr",null),t.allMarkdownRemark.edges.map(function(e){return r.default.createElement("a",{href:e.node.frontmatter.path},r.default.createElement("div",{className:"tour-entry",key:e.node.frontmatter.title},"• ",e.node.frontmatter.title,r.default.createElement("p",null,new Date(e.node.frontmatter.date).toDateString())))}),r.default.createElement("hr",null),r.default.createElement("hr",null)))});t.pageQuery="** extracted graphql fragment **";t.default=s}});
//# sourceMappingURL=component---src-pages-tour-jsx-c6c00c89129e857d74b1.js.map