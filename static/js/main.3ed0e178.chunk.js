(this.webpackJsonppoke_dex=this.webpackJsonppoke_dex||[]).push([[0],{146:function(e,t,a){e.exports={container:"Search_container__2L79C"}},147:function(e,t,a){e.exports={header:"Header_header__EheOy",logo:"Header_logo__2XF1R"}},207:function(e,t,a){e.exports={container:"Pagination_container__6smvz"}},225:function(e,t,a){e.exports={grid:"stylePokeList_grid__3jAyn",Defolt:"stylePokeList_Defolt__12Tzh"}},237:function(e,t,a){e.exports=a(597)},241:function(e,t,a){},242:function(e,t,a){},597:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(241),a(242),a(243),a(17)),l=a(604),s=a(207),u=a.n(s),m=a(600),p=function(e){e.pokeCount;var t=e.onShowSizeChange,a=e.onChange;return o.a.createElement("div",{className:u.a.container},o.a.createElement(m.a,{defaultCurrent:1,defaultPageSize:20,total:1050,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onShowSizeChange:t,onChange:a,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," Pokemon")}}))},f=a(599),d=a(97),g=a.n(d),h=a(87),E=a.n(h),v=a(99),k=a.n(v),b=a(602),_=a(601);function S(e){var t=e.pName,a=e.pType,c=e.TYPE_COLORS,r=e.pImg,l=(e.PokeAbilities,e.PokeHeight),s=e.PokeBaseStats,u=e.PokeStatsName,m=Object(n.useState)(!0),p=Object(i.a)(m,2),f=p[0],d=p[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{width:700,title:t,visible:f,onCancel:function(){d(!1)},footer:null,style:{fontFamily:"Ranchers, cursive",fontSize:"40px"}},o.a.createElement("div",{className:k.a.content},o.a.createElement("div",{className:k.a.imgAndStats},o.a.createElement("div",{className:k.a.imgDiv},o.a.createElement("img",{src:r,style:{height:"219px"}})),o.a.createElement("div",{className:k.a.statsDiv},o.a.createElement("div",null,o.a.createElement(_.a,{trailColor:"violet",strokeLinecap:"square",type:"dashboard",percent:2*l,format:function(e){return"".concat(l/10," m")},status:"normal"})),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("div",{style:{minWidth:"90px",display:"flex",flexDirection:"column",justifyContent:"space-between"}},u.map((function(e){return o.a.createElement("p",{style:{fontSize:"13px",margin:"0"}},e)}))),o.a.createElement("div",null,s.map((function(e){return o.a.createElement(_.a,{trailColor:"violet",percent:e/2,format:function(t){return"".concat(e)},status:"normal"})})))))),o.a.createElement("div",null,a.map((function(e){return o.a.createElement("p",{style:{background:"#".concat(c[e]),color:"#fff",padding:"5px",textAlign:"center",fontSize:"25px",margin:"0"}},e)}))))))}var O=a(220),C={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6",unknown:"00BBCD",shadow:"B8C0EA"};function j(e){var t=e.p,a=Object(n.useState)(t),c=Object(i.a)(a,2),r=c[0],l=(c[1],Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"+r)),s=Object(i.a)(l,2),u=s[0],m=(s[1],Object(n.useState)(null)),p=Object(i.a)(m,2),f=p[0],d=p[1],h=Object(n.useState)(),v=Object(i.a)(h,2),k=v[0],b=v[1],_=Object(n.useState)([]),j=Object(i.a)(_,2),y=j[0],P=j[1],D=Object(n.useState)([]),w=Object(i.a)(D,2),x=w[0],N=(w[1],Object(n.useState)()),B=Object(i.a)(N,2),z=B[0],F=B[1],A=Object(n.useState)([]),T=Object(i.a)(A,2),I=T[0],H=T[1],L=Object(n.useState)([]),R=Object(i.a)(L,2),W=R[0],M=R[1],U=Object(n.useState)(!0),Y=Object(i.a)(U,2),J=(Y[0],Y[1]);return Object(n.useEffect)((function(){J(!0),g.a.get(u).then((function(e){J(!1),b(e.data.id),d(e.data.sprites.front_default),F(e.data.height),P(e.data.types.map((function(e){return e.type.name}))),H(e.data.stats.map((function(e){return e.base_stat}))),M(e.data.stats.map((function(e){return e.stat.name})))}))}),[u]),o.a.createElement("div",{style:{fontFamily:"Ranchers"},className:E.a.pokecard,onClick:function(){Object(O.a)(o.a.createElement(S,{TYPE_COLORS:C,pName:r,pUrl:u,pType:y,pID:k,pImg:f,PokeAbilities:x,PokeHeight:z,PokeBaseStats:I,PokeStatsName:W}))}},o.a.createElement("div",{className:E.a.CardHeader},o.a.createElement("div",{className:E.a.idDiv},o.a.createElement("p",null,k)),o.a.createElement("div",{className:E.a.nameDiv},r)),o.a.createElement("img",{src:f}),y.map((function(e){return o.a.createElement("div",{className:E.a.typeDiv,key:e},o.a.createElement("p",{style:{color:"#".concat(C[e])}},e))})))}var y=a(225),P=a.n(y),D=function(e){var t=e.Pokemons,a=e.search;return o.a.createElement("div",{className:P.a.grid},t.filter((function(e){return e.includes(a)})).map((function(e){return o.a.createElement("div",{key:e},o.a.createElement(j,{key:e,p:e}))})))},w=function(e){var t=e.setpokeCount,a=e.Url,c=e.search,r=Object(n.useState)([]),l=Object(i.a)(r,2),s=l[0],u=l[1],m=Object(n.useState)(!0),p=Object(i.a)(m,2),d=p[0],h=p[1];return Object(n.useEffect)((function(){var e;return h(!1),g.a.get(a,{canselToken:new g.a.CancelToken((function(t){return e=t}))}).then((function(e){t(e.data.count),u(e.data.results.map((function(e){return e.name})))})),function(){return e()}}),[a]),d?o.a.createElement(f.a,{size:"large"}):o.a.createElement("div",null,o.a.createElement(D,{Pokemons:s,search:c}))},x=a(146),N=a.n(x),B=a(603),z=function(e){var t=e.setSearch;return o.a.createElement("div",{className:N.a.container},o.a.createElement(B.a,{className:N.a.search,placeholder:"Search Pokemon",onChange:function(e){return t(e.target.value)}}))},F=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(20),s=Object(i.a)(r,2),u=s[0],m=s[1],f=Object(n.useState)(0),d=Object(i.a)(f,2),g=d[0],h=d[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),k=v[0],b=v[1],_=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?limit=".concat(u,"&offset=").concat(g)),S=Object(i.a)(_,2),O=S[0],C=S[1];function j(e,t){m(t),console.log(e,t),console.log(u)}function y(e){console.log("Page: ",e),h(1===e?0:e*u),console.log("ofset: ",e)}return Object(n.useEffect)((function(){C(""===k?"https://pokeapi.co/api/v2/pokemon?limit=".concat(u,"&offset=").concat(g):"https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0")})),o.a.createElement("div",null,o.a.createElement(z,{setSearch:b}),console.log(k),o.a.createElement(p,{pokeCount:a,onChange:y,onShowSizeChange:j}),o.a.createElement(w,{setpokeCount:c,page_Size:u,page_Number:g,Url:O,search:k}),o.a.createElement(p,{pokeCount:a,onChange:y,onShowSizeChange:j}),o.a.createElement(l.a,null,o.a.createElement("p",null,"Up")))},A=a(147),T=a.n(A),I=function(){return o.a.createElement("div",{className:T.a.header},o.a.createElement("h1",{className:T.a.logo},"PokeDex"))};var H=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,null),o.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports={pokecard:"stylePokeCard_pokecard__3n3OW",idDiv:"stylePokeCard_idDiv__3rY59",CardHeader:"stylePokeCard_CardHeader__1EZc2",nameDiv:"stylePokeCard_nameDiv__2k9lD",typeDiv:"stylePokeCard_typeDiv__21YLc"}},99:function(e,t,a){e.exports={content:"stylePokeInfoModal_content__1u9IS",imgAndStats:"stylePokeInfoModal_imgAndStats__TFSan",imgDiv:"stylePokeInfoModal_imgDiv__WsJAp"}}},[[237,1,2]]]);
//# sourceMappingURL=main.3ed0e178.chunk.js.map