(self.webpackChunkyoungjae_lim_github_io=self.webpackChunkyoungjae_lim_github_io||[]).push([[986],{3434:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg","srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/345ff/profile.jpg 260w","sizes":"130px"},"sources":[{"srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/a819e/profile.webp 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/0fcc6/profile.webp 260w","type":"image/webp","sizes":"130px"}]},"width":130,"height":130}')},3076:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(7294),n=a(9),l=a(652),i=a(2347),o=n.ZP.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hsde3i-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-white);text-transform:uppercase;font-weight:500;background:var(--);display:inline-block;margin-top:0;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:100%;left:0;width:100%;height:1.5px;background:var(--clr-white);z-index:-1;}"]),c=function(e){var t=e.title;return r.createElement(o,null,r.createElement("h4",null,t),r.createElement("div",{className:"line"}))},s=n.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"gkmq2h-0"})(["text-align:center;p{color:var(--clr-white);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}"]),m=function(){return r.createElement(s,null,r.createElement(c,{title:"about me"}),r.createElement(i.S,{src:"../../assets/profile.jpg",layout:"fixed",width:130,height:130,className:"img",alt:"author",__imageData:a(3434)}),r.createElement("p",null,"I am an senior data analyst as well as a full stack developer from NYC who is seeking remote/freelancing/full-time opportunities. I am passionate about collecting, processing, exploring, and publishing data and building anything involving modern web technology. When I am not at my computer, I am a photographer as well."),r.createElement(l.Z,{styleClass:"banner-icons"}))},g=a(5444),u=n.ZP.div.withConfig({displayName:"Recent__Wrapper",componentId:"sc-107dsn2-0"})([".post{display:grid;grid-template-columns:75px 1fr;column-gap:1rem;margin-bottom:1rem;}.img{border-radius:var(--radius);}h5{font-size:0.7rem;margin-bottom:0.25rem;letter-spacing:0;line-height:1.2;color:var(--clr-white);}p{font-size:0.6rem;margin-bottom:0;color:var(--clr-grey-5);}.post:hover{h5{color:var(--clr-link-hover);}}"]),p=function(){var e=(0,g.K2)("3827573359").allMdx.nodes;return r.createElement(u,null,r.createElement(c,{title:"recent"}),e.map((function(e){var t=e.frontmatter,a=t.title,n=t.slug,l=t.date,o=t.image;return r.createElement(g.rU,{key:e.id,to:"/posts/"+n,className:"post"},r.createElement(i.G,{image:(0,i.d)(o),alt:a,className:"img"}),r.createElement("div",null,r.createElement("h5",null,a),r.createElement("p",null,l)))})))},d=a(2812),f=n.ZP.div.withConfig({displayName:"BannerCategories__Wrapper",componentId:"gsxv7k-0"})([".category{font-size:1rem;color:var(--clr-white);text-transform:capitalize;display:block;padding-left:1rem;letter-spacing:var(--spacing);transition:var(--transition);border-radius:var(--radius);}.category:hover{background:var(--category-hover);color:var(--clr-link-hover);}ul{margin-left:0;}"]),E=function(){return r.createElement(f,null,r.createElement(c,{title:"Categories"}),r.createElement(d.Z,null))},h=function(e){var t=e.post;return console.log("post? ",t),r.createElement(v,{post:t},r.createElement(m,null),r.createElement(p,null),r.createElement(E,null))},v=n.ZP.aside.withConfig({displayName:"Banner__Wrapper",componentId:"xz9m40-0"})(["display:grid;margin-top:",";grid-template-columns:300px;justify-content:center;row-gap:1rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,250px);column-gap:3rem;}}"],(function(e){return e.post?"0rem":"2.5rem"}))},2812:function(e,t,a){"use strict";var r=a(7294),n=a(5444);t.Z=function(){var e=(0,n.K2)("3981428836"),t=e.allMdx.group;return console.log("data: ",e),console.log(t),r.createElement("ul",{className:"categories"},t.map((function(e,t){return r.createElement("li",{key:t},r.createElement(n.rU,{to:"/posts/category/"+e.fieldValue,className:"category"},e.fieldValue," (",e.totalCount,")"))})))}},1308:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(5444),l=a(3201),i=a.p+"static/logo_ylim-8e49e2a4cad3cb9d90f6be78c6f66955.svg",o=function(e){var t=e.styleClass,a=e.children;return r.createElement("ul",{className:t},r.createElement("li",null,r.createElement(n.rU,{to:"/",className:"page-link"},"Home")),r.createElement("li",null,r.createElement(n.rU,{to:"/posts",className:"page-link"},"Posts"),a),r.createElement("li",null,r.createElement(n.rU,{to:"/projects",className:"page-link"},"Projects")),r.createElement("li",null,r.createElement(n.rU,{to:"/contact",className:"page-link"},"Contact")),r.createElement("li",null,r.createElement(n.rU,{to:"/post",className:"page-link"},"Post")))},c=a(652),s=function(e){var t=e.toggle;return r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"nav-container"},r.createElement("div",{className:"nav-center"},r.createElement(n.rU,{to:"/",className:"nav-logo"},r.createElement("img",{src:i,alt:"mdx logo"})),r.createElement("button",{className:"toggle-btn",onClick:t},r.createElement(l.Fm7,null)),r.createElement(o,{styleClass:"nav-links"}),r.createElement(c.Z,{styleClass:"nav-icons"}))))},m=a(2812),g=a(1424),u=function(e){var t=e.isOpen,a=e.toggle;return r.createElement("aside",{className:"sidebar "+(t?"showSidebar":"")+" "},r.createElement("button",{className:"close-btn",onClick:a},r.createElement(g.QAE,null)),r.createElement("div",{className:"sidebar-container"},r.createElement(o,{styleClass:"sidebar-links"},r.createElement(m.Z,null))))},p=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",null,r.createElement(c.Z,{styleClass:"footer-icons"}),r.createElement("div",null,r.createElement("span",{id:"copyright-symbol"},"©")," ",(new Date).getFullYear()," ","Youngjae Jay Lim. All Rights Reserved, Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com",target:"_blank",rel:"noreferrer"},"Gatsby"))))},d=function(e){var t=e.children,a=(0,r.useState)(!1),n=a[0],l=a[1],i=function(){l(!n)};return r.createElement(r.Fragment,null,r.createElement(s,{toggle:i}),r.createElement(u,{isOpen:n,toggle:i}),r.createElement("main",null,t),r.createElement(p,null))}},8562:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),n=a(2347),l=a(3201),i=a(1424),o=a(5444),c=a(9).ZP.article.withConfig({displayName:"Post__Wrapper",componentId:"sc-13b38oa-0"})(["margin-bottom:3rem;.info{text-align:center;}.img{margin-bottom:1rem;border-radius:var(--radius);height:17rem;}.category{display:inline-block;margin-bottom:1rem;background:var(--clr-grey-10);padding:0.25rem 0.5rem;text-transform:uppercase;font-weight:700;border-radius:var(--radius);letter-spacing:var(--spacing);color:var(--clr-grey-5);}h3{font-weight:700;margin-bottom:1rem;text-transform:initial;margin-top:0;}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}p{color:var(--clr-white);line-height:1.8;}.link{text-transform:uppercase;letter-spacing:var(--spacing);font-weight:700;color:var(--continue-reading);padding-bottom:0.1rem;display:flex;align-items:center;svg{margin-left:0.25rem;font-size:1.2rem;}}.link:hover{border-color:var(--clr-primary-8);color:var(--clr-link-hover);}footer{margin-top:2rem;padding-top:1rem;border-top:1px solid var(--clr-grey-9);display:flex;align-items:center;justify-content:space-between;color:var(--clr-grey-5);& .date{display:flex;align-items:center;& .icon{color:var(--clr-grey-5);margin-right:0.5rem;}}}@media (min-width:600px){.img{height:20rem;}}@media (min-width:800px){.img{height:25rem;}}@media (min-width:992px){&{display:grid;grid-template-columns:30rem 1fr;column-gap:1.5rem;.info{text-align:left;}.img{height:100%;max-height:20rem;}.underline{margin-left:0;margin-right:0;}}}"]),s=function(e){var t=e.frontmatter,a=e.excerpt,s=t.title,m=t.slug,g=t.date,u=t.category,p=t.image,d=t.readTime;return r.createElement(c,null,r.createElement(n.G,{image:(0,n.d)(p),alt:s,className:"img"}),r.createElement("div",{className:"info"},r.createElement("span",{className:"category"},u),r.createElement("h3",null,s),r.createElement("div",{className:"underline"}),r.createElement("p",null,a),r.createElement(o.rU,{to:"/posts/"+m,className:"link"},"Continue Reading ",r.createElement(i.ntD,null)),r.createElement("footer",null,r.createElement("span",{className:"date"},r.createElement(l.fSQ,{className:"icon"}),g),r.createElement("span",null,d," min"))))},m=a(3076),g=function(e){var t=e.posts,a=e.title,n=e.count;return console.log(n),r.createElement("section",{className:"posts"},r.createElement("h3",{className:"posts-title"},a,void 0===n?"":1===n?": 1 post is found":": "+n+" posts are found"),r.createElement("div",{className:"posts-center"},r.createElement("article",null,t.map((function(e){return r.createElement(s,Object.assign({key:e.id},e))}))),r.createElement("article",null,r.createElement(m.Z,{post:!0}))))}},652:function(e,t,a){"use strict";var r=a(7294),n=a(3201);t.Z=function(e){var t=e.styleClass;return r.createElement("ul",{className:t},r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/youngjae-lim"},r.createElement(n.ltd,{className:"social-icon linkedin-icon"}))),r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/JayYoungjae"},r.createElement(n.N1v,{className:"social-icon twitter-icon"}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/youngjae-lim"},r.createElement(n.NML,{className:"social-icon github-icon"}))),r.createElement("li",null,r.createElement("a",{href:"https://instagram.com/youngjayonthestreet"},r.createElement(n.dR1,{className:"social-icon instagram-icon"}))))}},7253:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(1308),l=a(8562);t.default=function(e){var t=e.data.allMdx,a=t.allPosts,i=t.totalCount;return console.log(a,i),r.createElement(n.Z,null,r.createElement(l.Z,{posts:a,title:"all posts",count:i}))}}}]);
//# sourceMappingURL=component---src-pages-posts-js-4712f5692bfc8f05ed00.js.map