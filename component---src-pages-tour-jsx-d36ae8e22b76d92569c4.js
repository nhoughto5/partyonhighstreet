webpackJsonp([9393494642403],{503:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(4),r=l(n),u=a(24),i=l(u),d=a(55),o=l(d),f=a(202),m=l(f),c=i.default.div.withConfig({displayName:"tour-banner__BannerWrapper"})(["margin:0 ","%;position:relative;"],o.default.MAIN_PADDING),s=i.default.div.withConfig({displayName:"tour-banner__Banner"})(["height:50vh;background-image:url(",");background-size:cover;max-height:400px;"],m.default),g=i.default.div.withConfig({displayName:"tour-banner__Overlay"})(["position:absolute;height:100%;top:0;left:0;right:0;background-color:rgba(0,0,0,0.7);z-index:5;display:flex;justify-content:center;align-items:center;color:white;"]),h=function(){return r.default.createElement(c,null,r.default.createElement(s,null),r.default.createElement(g,null,r.default.createElement("h1",null,"Tour")))};t.default=h,e.exports=t.default},511:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(4),r=l(n),u=a(24),i=l(u),d=a(503),o=l(d),f=a(55),m=l(f),c=i.default.div.withConfig({displayName:"tour__ListWrapper"})(["margin:2rem ","%;position:relative;text-align:center;a{font-size:3rem;}p{padding-left:2%;}"],m.default.MAIN_PADDING),s=(i.default.div.withConfig({displayName:"tour__ListSubHead"})(["margin:2rem ","%;position:relative;font-size:3rem;font-weight:700;text-decoration:underline solid rgb(244,131,66);text-align:center;"],m.default.MAIN_PADDING),function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement(o.default,null),r.default.createElement("h1",{className:"showTime"},"Upcoming Shows"),r.default.createElement(c,null,r.default.createElement("hr",null),r.default.createElement("hr",null),r.default.createElement("hr",null),t.allMarkdownRemark.edges.map(function(e){return r.default.createElement("div",{key:e.node.frontmatter.title},r.default.createElement("a",{href:e.node.frontmatter.path},"•",e.node.frontmatter.title),r.default.createElement("p",null,e.node.frontmatter.summary),r.default.createElement("hr",null))}),r.default.createElement("hr",null),r.default.createElement("hr",null)))});t.pageQuery="** extracted graphql fragment **";t.default=s}});
//# sourceMappingURL=component---src-pages-tour-jsx-d36ae8e22b76d92569c4.js.map