(self.webpackChunkyoungjae_lim_github_io=self.webpackChunkyoungjae_lim_github_io||[]).push([[986],{3434:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg","srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/345ff/profile.jpg 260w","sizes":"130px"},"sources":[{"srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/a819e/profile.webp 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/0fcc6/profile.webp 260w","type":"image/webp","sizes":"130px"}]},"width":130,"height":130}')},2761:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(7294),n=r(9),i=r(652),l=r(2347),o=n.ZP.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hsde3i-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-white);text-transform:uppercase;font-weight:500;background:var(--);display:inline-block;margin-top:0;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:100%;left:0;width:100%;height:1.5px;background:var(--clr-white);z-index:-1;}"]),m=function(e){var t=e.title;return a.createElement(o,null,a.createElement("h4",null,t),a.createElement("div",{className:"line"}))},c=n.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"gkmq2h-0"})(["text-align:center;p{color:var(--clr-white);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}"]),s=function(){return a.createElement(c,null,a.createElement(m,{title:"about me"}),a.createElement(l.S,{src:"../../assets/profile.jpg",layout:"fixed",width:130,height:130,className:"img",alt:"profile",__imageData:r(3434)}),a.createElement("p",null,"I am a full stack software engineer/data analyst from NYC who is seeking remote/freelancing/full-time opportunities. I am passionate about collecting, processing, exploring, and publishing data and building anything involving modern web technology. When I am not at my computer, I am a photographer as well."),a.createElement(i.Z,{styleClass:"banner-icons"}))},g=r(5444),p=n.ZP.div.withConfig({displayName:"Recent__Wrapper",componentId:"sc-107dsn2-0"})([".post{display:grid;grid-template-columns:75px 1fr;column-gap:1rem;margin-bottom:1rem;}.img{border-radius:var(--radius);}h5{font-size:0.7rem;margin-bottom:0.25rem;letter-spacing:0;line-height:1.2;color:var(--clr-white);}p{font-size:0.6rem;margin-bottom:0;color:var(--clr-grey-5);}.post:hover{h5{color:var(--clr-link-hover);}}"]),d=function(){var e=(0,g.K2)("3827573359").allMdx.nodes;return a.createElement(p,null,a.createElement(m,{title:"recent"}),e.map((function(e){var t=e.frontmatter,r=t.title,n=t.slug,i=t.date,o=t.image;return a.createElement(g.rU,{key:e.id,to:"/posts/"+n,className:"post"},a.createElement(l.G,{image:(0,l.d)(o),alt:r,className:"img"}),a.createElement("div",null,a.createElement("h5",null,r),a.createElement("p",null,i)))})))},u=r(2041),f=n.ZP.div.withConfig({displayName:"BannerTags__Wrapper",componentId:"sc-14bwk7r-0"})([""]),h=function(){return a.createElement(f,null,a.createElement(m,{title:"Tags"}),a.createElement(u.Z,null))},b=function(e){var t=e.post;return a.createElement(v,{post:t},a.createElement(s,null),a.createElement(d,null),a.createElement(h,null))},v=n.ZP.aside.withConfig({displayName:"Banner__Wrapper",componentId:"xz9m40-0"})(["display:grid;margin-top:",";grid-template-columns:300px;justify-content:center;row-gap:1rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,250px);column-gap:3rem;}}"],(function(e){return e.post?"0rem":"2.5rem"}))},1838:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(2347),i=r(3201),l=r(1424),o=r(5444),m=r(8625),c=r(9).ZP.article.withConfig({displayName:"PostCard__Wrapper",componentId:"ty76nh-0"})(["margin-bottom:3rem;.info{text-align:center;}.img{margin-bottom:1rem;border-radius:var(--radius);height:17rem;}.category{display:inline-block;margin-bottom:1rem;background:var(--clr-green-1);padding:0.25rem 0.5rem;text-transform:uppercase;font-weight:700;border-radius:var(--radius);letter-spacing:var(--spacing);color:black;}h3{font-weight:700;margin-bottom:1rem;text-transform:initial;margin-top:0;}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}p{color:var(--clr-white);line-height:1.8;}.link{margin-top:1rem;text-transform:uppercase;letter-spacing:var(--spacing);font-weight:700;color:var(--continue-reading);padding-bottom:0.1rem;display:flex;align-items:center;svg{margin-left:0.25rem;font-size:1.2rem;}}.link:hover{border-color:var(--clr-primary-8);color:var(--clr-link-hover);}footer{margin-top:2rem;padding-top:1rem;border-top:1px solid var(--clr-grey-9);display:flex;align-items:center;justify-content:space-between;color:var(--clr-grey-5);& .date{display:flex;align-items:center;& .icon{color:var(--clr-grey-5);margin-right:0.5rem;}}}@media (min-width:600px){.img{height:20rem;}}@media (min-width:800px){.img{height:25rem;}}@media (min-width:992px){&{display:grid;grid-template-columns:30rem 1fr;column-gap:1.5rem;.info{text-align:left;}.img{height:100%;max-height:20rem;}.underline{margin-left:0;margin-right:0;}}}"]),s=function(e){var t=e.frontmatter,r=e.excerpt,s=t.title,g=t.slug,p=t.date,d=t.tags,u=t.image,f=t.readTime;return a.createElement(c,null,a.createElement(n.G,{image:(0,n.d)(u),alt:s,className:"img"}),a.createElement("div",{className:"info"},a.createElement("h3",null,s),a.createElement("div",{className:"underline"}),a.createElement("p",null,r),(null==d?void 0:d.length)>0?a.createElement(m.Z,{tags:d}):"",a.createElement(o.rU,{to:"/posts/"+g,className:"link"},"Continue Reading ",a.createElement(l.ntD,null)),a.createElement("footer",null,a.createElement("span",{className:"date"},a.createElement(i.fSQ,{className:"icon"}),p),a.createElement("span",null,f," min"))))},g=r(3389),p=r(2761),d=r(2041),u=function(e){var t=e.posts,r=e.title,n=e.count;return a.createElement("section",{className:"posts"},a.createElement("h3",{className:"posts-title"},r,void 0===n?"":1===n?": 1 post is found":": "+n+" posts are found"),a.createElement("div",{className:"posts-center"},a.createElement("article",null,a.createElement(d.Z,null),a.createElement("br",null),t.map((function(e){return"PROJECT"!==e.frontmatter.category?a.createElement(s,Object.assign({key:e.id},e)):a.createElement(g.Z,Object.assign({key:e.id},e))}))),a.createElement("article",null,a.createElement(p.Z,{post:!0}))))}},3389:function(e,t,r){"use strict";var a=r(7294),n=r(2347),i=r(3201),l=r(1424),o=r(5444),m=r(9),c=r(8625),s=m.ZP.article.withConfig({displayName:"ProjectCard__Wrapper",componentId:"b7j8if-0"})(["margin-bottom:3rem;.info{text-align:center;}.img{margin-bottom:1rem;border-radius:var(--radius);height:17rem;}.category{display:inline-block;margin-bottom:1rem;background:var(--clr-green-1);padding:0.25rem 0.5rem;text-transform:uppercase;font-weight:700;border-radius:var(--radius);letter-spacing:var(--spacing);color:black;}h3{font-weight:700;margin-bottom:1rem;text-transform:initial;margin-top:0;}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}p{color:var(--clr-white);line-height:1.8;}.link{margin-top:1rem;text-transform:uppercase;letter-spacing:var(--spacing);font-weight:700;color:var(--continue-reading);padding-bottom:0.1rem;display:flex;align-items:center;svg{margin-left:0.25rem;font-size:1.2rem;}}.link:hover{border-color:var(--clr-primary-8);color:var(--clr-link-hover);}footer{margin-top:2rem;padding-top:1rem;border-top:1px solid var(--clr-grey-9);display:flex;align-items:center;justify-content:space-between;color:var(--clr-grey-5);& .date{display:flex;align-items:center;& .icon{color:var(--clr-grey-5);margin-right:0.5rem;}}}@media (min-width:600px){.img{height:20rem;}}@media (min-width:800px){.img{height:25rem;}}@media (min-width:992px){&{display:grid;grid-template-columns:30rem 1fr;column-gap:1.5rem;.info{text-align:left;}.img{height:100%;max-height:20rem;}.underline{margin-left:0;margin-right:0;}}}"]);t.Z=function(e){var t=e.frontmatter,r=e.excerpt,m=t.title,g=t.slug,p=t.date,d=t.tags,u=t.image,f=t.readTime;return a.createElement(s,null,a.createElement(n.G,{image:(0,n.d)(u),alt:m,className:"img"}),a.createElement("div",{className:"info"},a.createElement("h3",null,m),a.createElement("div",{className:"underline"}),a.createElement("p",null,r),(null==d?void 0:d.length)>0?a.createElement(c.Z,{tags:d}):"",a.createElement(o.rU,{to:"/projects/"+g,className:"link"},"Continue Reading ",a.createElement(l.ntD,null)),a.createElement("footer",null,a.createElement("span",{className:"date"},a.createElement(i.fSQ,{className:"icon"}),p),a.createElement("span",null,f," min"))))}},2041:function(e,t,r){"use strict";var a=r(7294),n=r(5444),i=r(9);t.Z=function(){var e=(0,n.K2)("266133262").allMdx.group;return a.createElement(l,null,a.createElement(n.rU,{to:"/tags",className:"tag"},"All"),e.map((function(e,t){return a.createElement(n.rU,{key:t,to:"/tags/"+e.fieldValue,className:"tag"},e.fieldValue," (",e.totalCount,")")})))};var l=i.ZP.div.withConfig({displayName:"Tags__Wrapper",componentId:"p64dpx-0"})([".tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:80%;overflow-x:auto;text-transform:none;font-family:var(--fira-mono-font);margin-right:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-primary-10);}.tag:hover{background:var(--clr-green-1);color:black;}"])},8625:function(e,t,r){"use strict";var a=r(7294),n=r(5444),i=r(9);t.Z=function(e){var t=e.tags;return a.createElement(l,null,t.map((function(e,t){return a.createElement(n.rU,{key:t,to:"/tags/"+e,className:"tag"},e)})))};var l=i.ZP.div.withConfig({displayName:"TagsList__Wrapper",componentId:"sc-1ax2mik-0"})(["display:flex;flex-wrap:wrap;justify-content:center;.tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:90%;text-transform:none;font-family:var(--fira-mono-font);margin-top:2px;margin-right:5px;margin-bottom:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-primary-10);}.tag:hover{background:var(--clr-green-1);color:black;}@media (min-width:992px){justify-content:left;}"])},7253:function(e,t,r){"use strict";r.r(t);var a=r(7294),n=r(1308),i=r(1838),l=r(1633);t.default=function(e){var t=e.data.allMdx,r=t.allPosts,o=t.totalCount;return a.createElement(n.Z,null,a.createElement(l.Z,{title:"Posts"}),a.createElement(i.Z,{posts:r,title:"blog posts",count:o}))}}}]);
//# sourceMappingURL=component---src-pages-posts-js-9e42195cb6a686677c81.js.map