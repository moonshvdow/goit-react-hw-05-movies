"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[658],{8658:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var r=s(5861),n=s(885),a=s(7757),i=s.n(a),c=s(2791),o=s(501),u=s(6871),l=s(6188),m="search-form_searchForm__eBYHD",h="search-form_button__WdqrP",_="search-form_input__vwyGK",v=s(184),f=function(e){var t=e.onSubmit,s=(0,c.useState)(""),r=(0,n.Z)(s,2),a=r[0],i=r[1];return(0,v.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),t(a),i("")},children:[(0,v.jsx)("input",{className:_,name:"search",type:"text",value:a,onChange:function(e){var t=e.target.value;i(t)},required:!0,placeholder:"Search movies"}),(0,v.jsx)("button",{className:h,type:"submit"})]})},p="movies-search-list_section__+Oscn",d="movies-search-list_item__SBlO4",x="movies-search-list_link__fxcaF",j="movies-search-list_gallery__JPVKt",g="movies-search-list_itemImage__ub1Sd",b=function(e){var t=e.movies,s=e.location,r=t.map((function(e){var t;return(0,v.jsx)("li",{className:d,children:(0,v.jsx)(o.rU,{className:x,to:"/movies/".concat(e.id),state:{from:s},children:(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{className:g,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://picsum.photos/200/300",alt:""}),(0,v.jsx)("p",{children:null!==(t=e.title)&&void 0!==t?t:e.name})]})})},e.id)}));return(0,v.jsx)("div",{className:p,children:(0,v.jsx)("ul",{className:j,children:r})})},w=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),s=t[0],a=t[1],m=(0,o.lr)(),h=(0,n.Z)(m,2),_=h[0],p=h[1],d=_.get("query"),x=(0,u.TH)();(0,c.useEffect)((function(){if(d){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.zi)(d);case 3:t=e.sent,s=t.results,a(s),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{onSubmit:function(e){return p({query:e,page:1})}}),d&&Boolean(s.length)&&(0,v.jsx)(b,{movies:s,location:x}),d&&!Boolean(s.length)&&(0,v.jsxs)("p",{children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",d," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]})]})},N=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(w,{})})}}}]);
//# sourceMappingURL=658.2e63d862.chunk.js.map