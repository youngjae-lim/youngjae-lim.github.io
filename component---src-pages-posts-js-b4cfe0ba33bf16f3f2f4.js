(self.webpackChunkyoungjae_lim_github_io=self.webpackChunkyoungjae_lim_github_io||[]).push([[986],{3434:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg","srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/ac2d9/profile.jpg 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/345ff/profile.jpg 260w","sizes":"130px"},"sources":[{"srcSet":"/static/5fc49fb3ba6bfed18aee329fa42b8e9a/a819e/profile.webp 130w,\\n/static/5fc49fb3ba6bfed18aee329fa42b8e9a/0fcc6/profile.webp 260w","type":"image/webp","sizes":"130px"}]},"width":130,"height":130}')},2761:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(7294),n=r(9),i=r(652),o=r(2347),l=n.ZP.div.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hsde3i-0"})(["position:relative;text-align:center;margin-bottom:1.25rem;h4{color:var(--clr-white);text-transform:uppercase;font-weight:500;background:var(--);display:inline-block;margin-top:0;margin-bottom:0;padding:0 0.6rem;}.line{position:absolute;top:100%;left:0;width:100%;height:1.5px;background:var(--clr-white);z-index:-1;}"]),c=function(e){var t=e.title;return a.createElement(l,null,a.createElement("h4",null,t),a.createElement("div",{className:"line"}))},s=n.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"gkmq2h-0"})(["text-align:center;p{color:var(--clr-white);}.img{border-radius:50%;margin:0 auto;margin-bottom:1rem;}"]),m=function(){return a.createElement(s,null,a.createElement(c,{title:"about me"}),a.createElement(o.S,{src:"../../assets/profile.jpg",layout:"fixed",width:130,height:130,className:"img",alt:"profile",__imageData:r(3434)}),a.createElement("p",null,"I am a full stack software engineer/data analyst from NYC who is seeking remote/freelancing/full-time opportunities. I am passionate about collecting, processing, exploring, and publishing data and building anything involving modern web technology. When I am not at my computer, I am a photographer as well."),a.createElement(i.Z,{styleClass:"banner-icons"}))},d=r(5444),g=n.ZP.div.withConfig({displayName:"Recent__Wrapper",componentId:"sc-107dsn2-0"})([".post{display:grid;grid-template-columns:75px 1fr;column-gap:1rem;margin-bottom:1rem;}.img{border-radius:var(--radius);}h5{font-size:0.7rem;margin-bottom:0.25rem;letter-spacing:0;line-height:1.2;color:var(--clr-white);}p{font-size:0.6rem;margin-bottom:0;color:var(--clr-grey-5);}.post:hover{h5{color:var(--clr-link-hover);}}"]),u=function(){var e=(0,d.K2)("2356771501").allMdx.nodes;return a.createElement(g,null,a.createElement(c,{title:"recent"}),e.map((function(e){var t=e.frontmatter,r=t.title,n=t.slug,i=t.date,l=t.image;return a.createElement(d.rU,{key:e.id,to:"/posts/"+n,className:"post"},a.createElement(o.G,{image:(0,o.d)(l),alt:r,className:"img"}),a.createElement("div",null,a.createElement("h5",null,r),a.createElement("p",null,i)))})))},p=r(2041),f=n.ZP.div.withConfig({displayName:"BannerTags__Wrapper",componentId:"sc-14bwk7r-0"})([""]),v=function(){return a.createElement(f,null,a.createElement(c,{title:"Tags"}),a.createElement(p.Z,null))},b=function(e){var t=e.isPost;return a.createElement(h,{isPost:t},a.createElement(m,null),a.createElement(u,null),a.createElement(v,null))},h=n.ZP.aside.withConfig({displayName:"Banner__Wrapper",componentId:"xz9m40-0"})(["display:grid;margin-top:",";grid-template-columns:300px;justify-content:center;row-gap:1rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,250px);column-gap:3rem;}}"],(function(e){return e.isPost?"2.5rem":"0rem"}))},8484:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var a=r(7294),n=r(2347),i=r(5444),o=r(8625),l=r(9),c=l.ZP.article.withConfig({displayName:"Card__Wrapper",componentId:"lrf4im-0"})(["background-color:var(--clr-green-4);border-radius:var(--radius-2);margin-bottom:1rem;box-shadow:var(--card-shadow);transition:var(--transition);:hover{transform:scale(1.01);}.info{padding:0.5rem;text-align:center;}.img{margin-bottom:1rem;border-top-left-radius:var(--radius-2);border-top-right-radius:var(--radius-2);object-fit:cover;}.category{display:inline-block;margin-bottom:1rem;background:var(--clr-green-1);padding:0.25rem 0.5rem;text-transform:uppercase;font-weight:700;border-radius:var(--radius);letter-spacing:var(--spacing);color:black;}h3{font-weight:700;margin-bottom:1rem;text-transform:initial;margin-top:0;}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}p{color:var(--clr-white);line-height:1.8;}.link{display:flex;margin-top:1rem;text-transform:uppercase;letter-spacing:var(--spacing);font-weight:700;color:var(--continue-reading);align-items:center;svg{margin-left:0.25rem;font-size:1.2rem;}}.link:hover{border-color:var(--clr-primary-8);color:var(--clr-link-hover);}footer{padding-top:1rem;border-top:1px solid var(--clr-grey-9);display:flex;align-items:center;justify-content:space-between;color:var(--clr-grey-5);& .date{display:flex;align-items:center;& .icon{color:var(--clr-grey-5);margin-right:0.5rem;}}}@media (min-width:600px){.img{height:20rem;}}@media (min-width:800px){.img{height:25rem;}}@media (min-width:992px){&{display:grid;grid-template-columns:20rem 1fr;column-gap:0.5rem;.info{margin-top:0.3rem;text-align:left;}.img{height:100%;max-height:20rem;border-top-left-radius:var(--radius-2);border-bottom-left-radius:var(--radius-2);border-top-right-radius:0;border-bottom-right-radius:0;}.underline{margin-left:0;margin-right:0;}}}"]),s=function(e){var t=e.frontmatter,r=(e.excerpt,t.title),l=t.slug,s=t.date,m=t.tags,d=t.image,g=t.readTime,u=t.category;return a.createElement(c,null,a.createElement(n.G,{image:(0,n.d)(d),alt:r,className:"img"}),a.createElement(i.rU,{to:"PROJECT"===u?"/projects/"+l:"/posts/"+l},a.createElement("div",{className:"info"},a.createElement("h3",null,r),a.createElement("div",{className:"underline"}),(null==m?void 0:m.length)>0&&a.createElement(o.Z,{tags:m,isPost:!1}),a.createElement(i.rU,{to:"PROJECT"===u?"/projects/"+l:"/posts/"+l,className:"link"},"Continue Reading..."),a.createElement("footer",null,a.createElement("span",{className:"date"},"📆   ",s),a.createElement("span",null,g," min")))))},m=l.ZP.div.withConfig({displayName:"SlimCard__Wrapper",componentId:"wn3yht-0"})(["margin-bottom:0.5rem;.info{padding-left:0.5rem;padding-right:0.5rem;text-align:left;border-radius:var(--radius-2);transition:var(--transition);display:flex;border:1px solid var(--clr-green-4);svg{margin-left:0.25rem;font-size:1.2rem;}}.info:hover{background-color:var(--clr-green-5);transform:scale(1.01);}h4{color:white;margin-top:0.5rem;text-transform:capitalize;}footer{margin-top:0rem;padding-top:0rem;align-items:center;justify-content:space-between;color:var(--clr-grey-5);& .date{align-items:center;}}"]),d=function(e){var t=e.frontmatter,r=t.title,n=t.slug,o=t.date,l=t.category;return a.createElement(m,null,a.createElement(i.rU,{to:"PROJECT"===l?"/projects/"+n:"/posts/"+n,className:"info"},a.createElement("div",null,a.createElement("h4",null,r),a.createElement("footer",null,a.createElement("span",{className:"date"},o)))))},g=function(e){var t=e.posts,r=e.isSlim;return a.createElement(u,null,t.map((function(e){return r?a.createElement(d,Object.assign({key:e.id},e)):a.createElement(s,Object.assign({key:e.id},e))})))},u=l.ZP.div.withConfig({displayName:"CardList__Wrapper",componentId:"sc-18eo1po-0"})(["> div:last-child{margin-bottom:2rem;}"])},6960:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(8484),i=r(2761),o=r(2041),l=r(9),c=r(3201),s=r(7955),m=function(e){var t=e.title,r=e.children,n=a.useContext(s.r),i=n.isOpen,o=n.toggleTags;return a.createElement(d,null,a.createElement("div",{className:"accordion-title",onClick:function(){return o()}},a.createElement("div",null,t),a.createElement("div",null,i?a.createElement(c.wbB,null):a.createElement(c.EIY,null))),i&&a.createElement("div",{className:"accordion-content"},r))},d=l.ZP.div.withConfig({displayName:"Accordion__Wrapper",componentId:"xjxj2k-0"})([".accordion-title{display:flex;justify-content:space-between;font-size:1.2rem;font-weight:900;color:white;flex-direction:row;cursor:pointer;background-color:var(--clr-green-3);}.accordion-title:hover{background-color:var(--clr-green-2);color:var(--clr-green-5);transition:var(--transition);}.accordion-title,.accordion-content{padding:1rem;}.accordion-content{background-color:var(--clr-green-4);}"]),g=r(58),u=function(e){var t=e.posts,r=e.title,l=e.count,c=e.context;return a.createElement("section",{className:"posts"},a.createElement("h3",{className:"posts-title"},r,void 0===l?"":1===l?": 1 post is found":": "+l+" posts are found"),a.createElement("div",{className:"posts-center"},a.createElement("article",null,a.createElement(m,{title:"Tags"},a.createElement(o.Z,null)),a.createElement("br",null),a.createElement(g.Z,null),a.createElement(n.Z,{posts:t,isSlim:c.isSlim})),a.createElement("article",null,a.createElement(i.Z,{post:!0}))))}},2041:function(e,t,r){"use strict";var a=r(7294),n=r(5444),i=r(9);t.Z=function(){var e=(0,n.K2)("1552795008").allMdx.group;return a.createElement(o,null,a.createElement(n.rU,{to:"/tags",className:"tag"},"All"),e.map((function(e,t){return a.createElement(n.rU,{key:t,to:"/tags/"+e.fieldValue,className:"tag"},e.fieldValue," (",e.totalCount,")")})))};var o=i.ZP.div.withConfig({displayName:"Tags__Wrapper",componentId:"p64dpx-0"})([".tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:80%;overflow-x:auto;text-transform:none;font-family:var(--fira-mono-font);margin-right:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-tags-selected-font);}.tag:hover{background:var(--clr-green-1);color:black;}"])},8625:function(e,t,r){"use strict";var a=r(7294),n=r(5444),i=r(9);t.Z=function(e){var t=e.tags,r=e.isPost;return a.createElement(o,{isPost:r},t.map((function(e,t){return a.createElement(n.rU,{key:t,to:"/tags/"+e,className:"tag"},e)})))};var o=i.ZP.div.withConfig({displayName:"TagsList__Wrapper",componentId:"sc-1ax2mik-0"})(["display:flex;flex-wrap:wrap;justify-content:center;.tag{background:var(--clr-tags-bg);color:var(--clr-code-font);padding:0.1rem 0.2rem;border-radius:var(--radius);font-size:90%;text-transform:none;font-family:var(--fira-mono-font);margin-top:2px;margin-right:5px;margin-bottom:5px;font-weight:bold;transition:var(--transition);}a[aria-current='page']{background:var(--clr-tags-selected);color:var(--clr-tags-selected-font);}.tag:hover{background:var(--clr-green-1);color:black;}@media (min-width:992px){justify-content:",";}"],(function(e){return e.isPost?"center":"left"}))},58:function(e,t,r){"use strict";var a=r(7294),n=r(9),i=r(1852),o=r(7955);t.Z=function(){var e=a.useContext(o.r);return a.createElement(l,null,a.createElement("span",null,a.createElement(i.LDO,null)),a.createElement("span",null,"View as List"),a.createElement("span",{onClick:function(){return e.changeView()}},e.isSlim?a.createElement(i.XGl,null):a.createElement(i.YXN,null)))};var l=n.ZP.div.withConfig({displayName:"ToggleViewButton__Wrapper",componentId:"sc-13kpr7e-0"})(["background-color:var(--clr-green-5);align-items:center;border:0.3px solid var(--clr-green-4);border-radius:var(--radius-2);padding:5px;margin-bottom:1rem;span{color:white;margin-left:0.2rem;margin-right:0.5rem;line-height:2;}svg{font-size:1.5rem;}"])},7253:function(e,t,r){"use strict";r.r(t);var a=r(7294),n=r(494),i=r(6960),o=r(1633),l=r(7955);t.default=function(e){var t=e.data.allMdx,r=t.allPosts,c=t.totalCount,s=a.useContext(l.r);return a.createElement(n.Z,null,a.createElement(o.Z,{title:"Posts"}),a.createElement(i.Z,{posts:r,title:"blog posts",count:c,context:s}))}}}]);
//# sourceMappingURL=component---src-pages-posts-js-b4cfe0ba33bf16f3f2f4.js.map