(window.webpackJsonp=window.webpackJsonp||[]).push([[5,35],{73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(23),r=a(88),c=a(3),i=a(78),s=a(80),m=a(103),d=a(7),u=a(89),b=a(4),p=a(1),f=a.n(p),v=a(82),h=a.n(v),k=a(84),E={active:f.a.bool,"aria-label":f.a.string,block:f.a.bool,color:f.a.string,disabled:f.a.bool,outline:f.a.bool,tag:k.g,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),onClick:f.a.func,size:f.a.string,children:f.a.node,className:f.a.string,cssModule:f.a.object,close:f.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(u.a)(a)),a}Object(b.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,o=e.className,r=e.close,i=e.cssModule,s=e.color,m=e.outline,u=e.size,b=e.tag,p=e.innerRef,f=Object(d.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&void 0===f.children&&(f.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+s,E=Object(k.d)(h()(o,{close:r},r||"btn",r||v,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),i);f.href&&"button"===b&&(b="a");var g=r?"Close":null;return l.a.createElement(b,Object(c.a)({type:"button"===b&&f.onClick?"button":void 0},f,{className:E,ref:p,onClick:this.onClick,"aria-label":a||g}))},t}(l.a.Component);g.propTypes=E,g.defaultProps={color:"secondary",tag:"button"};var w=g,y=a(104);var N=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",window.scrollTo(0,0),()=>{document.body.style.overflow="visible"})),[e])},C=a(46),j=a.n(C);const M=({item:e,onItemClick:t})=>"category"===e.type?e.items.length>0?l.a.createElement("div",null,l.a.createElement("h4",{className:"ml-2"},e.label),e.items.map((e=>l.a.createElement(M,{key:e.label,item:e,onItemClick:t})))):l.a.createElement(l.a.Fragment,null):"link"===e.type?l.a.createElement(m.a,null,l.a.createElement(i.a,Object(c.a)({key:e.label,className:"sidebar-item m-4 text-white",to:e.href},Object(s.a)(e.href)?{isNavLink:!0,activeClassName:"active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),e.label)):l.a.createElement(l.a.Fragment,null);var O=({sidebar:e})=>{const[t,a]=Object(n.useState)(!1),o=Object(n.useCallback)((()=>{a(!t)}),[t,a]);return N(t),l.a.createElement("div",{className:h()("bg-info",j.a.sidebar)},l.a.createElement("div",{className:h()("text-white",{[j.a.isOpen]:t})},l.a.createElement("div",{className:"d-flex w-100 justify-content-end mr-5"},l.a.createElement(w,{color:"secondary",onClick:o,className:h()("mr-2",j.a.sidebarFAB)},l.a.createElement("svg",{"aria-label":"Menu",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})))),l.a.createElement("div",{className:h()(j.a.sideMenu)},l.a.createElement(y.a,{vertical:!0,className:"list-unstyled p-3 mr-auto"},e.map((e=>l.a.createElement(M,{key:e.label,item:e,onItemClick:e=>{e.currentTarget.blur(),a(!1)}})))))))},x=a(86),R=a(83),D=a(77),F=a(10);function T({currentDocRoute:e,versionMetadata:t,children:a}){const{permalinkToSidebar:n,docsSidebars:o}=t,r=n[e.path],c=o[r];return l.a.createElement(R.a,{title:"Doc page",description:"My Doc page"},l.a.createElement("div",{className:"d-flex vh-100"},c&&l.a.createElement("div",{role:"complementary"},l.a.createElement(O,{key:r,sidebar:c})),l.a.createElement("main",{className:"w-100 align-items-center overflow-auto p-5"},l.a.createElement(D.a,{components:x.a},a))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(F.d)(n.pathname,e)));return c?l.a.createElement(T,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):l.a.createElement(r.default,e)}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(83);t.default=function(){return l.a.createElement(o.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container my-xl-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-6 offset-3"},l.a.createElement("h1",null,"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);