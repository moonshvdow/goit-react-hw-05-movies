"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[658],{8658:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var n=t(2982),s=t(8683),a=t(5861),i=t(885),o=t(7757),l=t.n(o),c=t(2791),u=t(501),m=t(6871),h=t(6188),f="search-form_searchForm__Fo5El",_="search-form_button__Uoeep",p="search-form_input__1AuXt",d=t(184),v=function(e){var r=e.onSubmit,t=(0,c.useState)(""),n=(0,i.Z)(t,2),s=n[0],a=n[1];return(0,d.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),r(s),a("")},children:[(0,d.jsx)("input",{className:p,name:"search",type:"text",value:s,onChange:function(e){var r=e.target.value;a(r)},required:!0,placeholder:"Search movies"}),(0,d.jsx)("button",{className:_,type:"submit"})]})},g=(0,c.memo)(v),x="movies-search-list_section__9YW53",j="movies-search-list_item__EvUQV",b="movies-search-list_link__wFJXU",k="movies-search-list_gallery__AsSE5",w="movies-search-list_itemImage__UxU4S",N=function(e){var r=e.movies,t=e.location,n=r.map((function(e){var r;return(0,d.jsx)("li",{className:j,children:(0,d.jsx)(u.rU,{className:b,to:"/movies/".concat(e.id),state:{from:t},children:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{className:w,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://picsum.photos/200/300",alt:""}),(0,d.jsx)("p",{children:null!==(r=e.title)&&void 0!==r?r:e.name})]})})},e.id)}));return(0,d.jsx)("div",{className:x,children:(0,d.jsx)("ul",{className:k,children:n})})},S=function(){var e=(0,c.useState)({films:[],loading:!1,error:null}),r=(0,i.Z)(e,2),t=r[0],o=r[1],f=(0,u.lr)(),_=(0,i.Z)(f,2),p=_[0],v=_[1],x=p.get("query"),j=(0,m.TH)();(0,c.useEffect)((function(){if(x){var e=function(){var e=(0,a.Z)(l().mark((function e(){var r,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!0})})),e.next=4,(0,h.zi)(x);case 4:r=e.sent,t=r.results,o({films:(0,n.Z)(t),loading:!1,error:null}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o({films:[],loading:!1,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);var b=(0,c.useCallback)((function(e){return v({query:e,page:1})}),[v]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{onSubmit:b}),t.loading&&(0,d.jsx)("p",{children:"\u0418\u0434\u0451\u0442 \u043f\u043e\u0438\u0441\u043a"}),t.error&&!t.loading&&(0,d.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430"}),x&&Boolean(t.films.length)&&!t.loading&&(0,d.jsx)(N,{movies:t.films,location:j}),x&&!Boolean(t.films.length)&&!t.loading&&!t.error&&(0,d.jsxs)("p",{children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",x," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]})]})},Z=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(S,{})})}}}]);
//# sourceMappingURL=658.b9baab04.chunk.js.map