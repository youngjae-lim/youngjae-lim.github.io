(self.webpackChunkyoungjae_lim_github_io=self.webpackChunkyoungjae_lim_github_io||[]).push([[946],{2911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7294),a=n(494),i=n(8625),l=n(3841),o=n(1633),m=n(2761),d=n(5444),c=n(9),s=n(3201),u=c.ZP.div.withConfig({displayName:"PrevAndNext__Wrapper",componentId:"sc-1f9s74g-0"})(["margin-top:16px;display:flex;justify-content:space-between;div:last-child{text-align:right;margin-left:8px;}@media screen and (max-width:500px){flex-direction:column;div:last-child{margin-left:0;margin-top:8px;}}"]),p=c.ZP.div.withConfig({displayName:"PrevAndNext__InnerWrapper",componentId:"sc-1f9s74g-1"})(["border-radius:8px;padding:8px 16px;font-size:14px;border:0.3px solid var(--clr-green-4);width:100%;max-width:300px;box-sizing:border-box;@media screen and (max-width:500px){max-width:100%;}"]),g=function(e){var t=e.prev,n=e.next,a=(null==t?void 0:t.frontmatter.title)||"",i=(null==t?void 0:t.frontmatter.slug)||"",l=(null==n?void 0:n.frontmatter.title)||"",o=(null==n?void 0:n.frontmatter.slug)||"";return r.createElement(u,null,n?r.createElement(p,null,r.createElement("div",null,r.createElement(s._HU,null),"Next"),r.createElement(d.rU,{to:"/posts/"+o,rel:"next"},l)):r.createElement("div",null),t?r.createElement(p,null,r.createElement("div",null,"Previous",r.createElement(s.H_v,null)),r.createElement(d.rU,{to:"/posts/"+i,rel:"prev"},a)):r.createElement("div",null))},f="comments-container",v=function(){return(0,r.useEffect)((function(){var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo","youngjae-lim/youngjae-lim.github.io.comments"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","icy-dark"),e.setAttribute("crossorigin","anonymous"),e.async=!0;var t=document.getElementById(f);return t&&t.appendChild(e),function(){var e=document.getElementById(f);e&&(e.innerHTML="")}}),[]),r.createElement("div",null,r.createElement("h4",null,"Comments"),r.createElement("div",{id:f}))},h=n(2001),x=function(e){var t=e.posts,n=e.tag;return r.createElement(E,null,r.createElement("p",null,"You might also like posts tagged with"," ",r.createElement(d.rU,{to:"/tags/"+n},"#",n),":"),r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.id},r.createElement(d.rU,{to:"/posts/"+e.frontmatter.slug},e.frontmatter.title))}))))},E=c.ZP.div.withConfig({displayName:"YouMightAlsoLike__Wrapper",componentId:"z6ou9b-0"})(["margin-top:1rem;padding:1rem 1rem 0 1rem;border:0.3px solid var(--clr-green-4);border-radius:var(--radius-2);p{font-weight:bold;}a{text-decoration:underline;}"]),w=n(6725),b=n(2347),y=function(e){var t=e.data,n=e.pageContext,d="undefined"!=typeof window?window.location.href:"",c="undefined"!=typeof window?window.location.pathname:"",s=t.mdx.frontmatter,u=s.title,p=s.tags,f=s.image,E=s.date,y=s.embeddedImages,k=s.videoSourceURL,N=s.videoTitle,P=n.previousPost,I=n.nextPost,Z=n.relatedPosts,C=t.mdx,j=C.body,A=C.tableOfContents,U=C.excerpt,z=u||U,L=0!==Object.keys(A).length;return r.createElement(a.Z,null,r.createElement(o.Z,{title:u,description:U,image:null==f?void 0:f.childImageSharp.resize,pathname:c}),r.createElement(_,{toc:L},L&&r.createElement(l.Z,{items:A.items}),r.createElement("article",{className:"mdx-page"},r.createElement(b.G,{image:(0,b.d)(f),alt:u,className:"main-img"}),r.createElement("div",{className:"post-info"},r.createElement("h1",null,u),(null==p?void 0:p.length)>0&&r.createElement(i.Z,{tags:p,isPost:!0}),r.createElement("p",null,E),r.createElement("div",{className:"underline"}),r.createElement("div",{className:"social-buttons-top"},r.createElement(h.Z,{url:d,description:z}))),r.createElement(w.MDXRenderer,{embeddedImages:y,videoSourceURL:k,videoTitle:N},j),r.createElement("div",{className:"social-buttons"},r.createElement("span",null,"If you found this article informative, please share: "),r.createElement(h.Z,{url:d,description:z})),r.createElement(g,{prev:P,next:I}),(null==Z?void 0:Z.length)>0&&r.createElement(x,{posts:Z,tag:p[0]}),r.createElement(v,null)),r.createElement("article",null,r.createElement(m.Z,{isPost:!0}))))},_=c.ZP.section.withConfig({displayName:"post-template__Wrapper",componentId:"sc-73fbtu-0"})(["display:grid;width:90vw;max-width:",";margin:4rem auto 4rem;.post-info{margin:2rem 0 3rem 0;text-align:center;span{background:var(--clr-green-1);color:black;border-radius:var(--radius);padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:var(--spacing);}h1{margin:1.25rem 0;font-weight:900;}p{color:var(--clr-white);}.underline{width:5rem;height:1px;background:var(--clr-grey-9);margin:0 auto;margin-bottom:1rem;}}.post-nav{span{color:white;border-bottom:1px solid #ddd;}}.social-buttons-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1rem;}.social-buttons{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;font-size:1.6rem;}@media (min-width:992px){&{display:grid;width:92vw;}.main-img{width:100%;display:block;margin:0 auto;}}@media (min-width:1170px){&{display:grid;grid-template-columns:",";column-gap:4rem;justify-content:space-around;}}"],(function(e){return e.toc?"1600px":"1100px"}),(function(e){return e.toc?"350px 1fr 200px":"1fr 300px"}))}}]);
//# sourceMappingURL=component---src-templates-post-template-js-3f283682ef30cc26a323.js.map