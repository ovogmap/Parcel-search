(this["webpackJsonpParcel-search"]=this["webpackJsonpParcel-search"]||[]).push([[0],{103:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(9),o=n.n(i),s=(n(103),n(16)),l=n(13),j=n(25),u=n(11),d=n(22),b=n.n(d),O=n(36),m=n(61),p=n.n(m),x="http://info.sweettracker.co.kr",v="cylwTggXB31CmL4N9WRT6A",h="".concat(x,"/api/v1/companylist?t_key=").concat(v),f="".concat(x,"/api/v1/trackingInfo?t_key=").concat(v);function _(){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(h);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(f,"&t_code=").concat(t,"&t_invoice=").concat(n));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=n(62),y=n.n(T);var I=function(){var e=Object(r.useContext)(ke),t=Object(r.useContext)(Be),n=Object(r.useState)([]),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),d=j[0],m=j[1],p=Object(r.useState)(""),x=Object(s.a)(p,2),v=x[0],h=x[1],f=Object(u.f)(),C=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:t=e.sent,o(t.Company),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){C()}),[]),Object(r.useEffect)((function(){}),[e]),Object(a.jsxs)("div",{className:y.a.Container,children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:Object(a.jsx)("i",{children:"\ud0dd \ubc30 \uc870 \ud68c \uc11c \ube44 \uc2a4"})})}),Object(a.jsx)("div",{className:y.a.FormContainer,children:Object(a.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),""===d?alert("\ud0dd\ubc30\uc0ac\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."):""===v?alert("\uc6b4\uc1a1\uc7a5 \ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."):""!==d&&""!==v&&(t({type:"GET_CODE",paylode:d}),t({type:"GET_NUMBER",paylode:v.replace(/-/g,"").trim()}),f.push("/detail"))}(e)},children:[Object(a.jsxs)("select",{value:d,onChange:function(e){var t=e.target.value;m(t)},children:[Object(a.jsx)("option",{value:"",children:"\ud0dd\ubc30\uc0ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),i.map((function(e){return Object(a.jsx)("option",{value:e.Code,children:e.Name},e.Code)}))]}),Object(a.jsx)("input",{type:"text",placeholder:"\uc6b4\uc1a1\uc7a5 \ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",onChange:function(e){!function(e){var t=e.target.value.toString();h(t)}(e)}}),Object(a.jsx)("button",{type:"submit",children:"\uac80\uc0c9"})]})})]})},S=n(171),E=n(176),w=n(173),k=n(65),B=n.n(k);var D=function(){return Object(a.jsx)("div",{className:B.a.Container,children:Object(a.jsx)("nav",{className:B.a.NavContainer,children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/",children:"HOME"})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/list",children:"MYLIST"})})]})})})},G=n(66),R=n.n(G);var A=function(e){var t=e.children;return Object(a.jsxs)("div",{className:R.a.Container,children:[Object(a.jsx)(D,{}),Object(a.jsx)("div",{className:R.a.Content,children:t})]})},L=n(79),M=n.n(L),P=n(80),F=n.n(P);var J=function(e){var t=e.title,n=Object(u.f)();return Object(a.jsxs)("div",{className:M.a.Container,children:[Object(a.jsx)("button",{onClick:function(){n.goBack()},children:Object(a.jsx)(F.a,{})}),t&&Object(a.jsx)("h2",{children:t})]})},H=n(38),U=n.n(H),W=[{name:"\ubc30\uc1a1\uc2dc\uac04"},{name:"\ud604\uc7ac\uc704\uce58"},{name:"\ubc30\uc1a1\uc0c1\ud0dc"}];var Q=function(e){var t=e.thead,n=void 0===t?W:t,r=e.list;return Object(a.jsxs)("div",{className:U.a.Container,children:[Object(a.jsx)("div",{className:U.a.THeadContainer,children:n.map((function(e){return Object(a.jsx)("div",{className:U.a.TItem,children:Object(a.jsx)("h3",{children:e.name})},e.name)}))}),Object(a.jsx)("div",{className:U.a.TBodyContainer,children:(null===r||void 0===r?void 0:r.length)>=1?r.map((function(e){return Object(a.jsxs)("div",{className:U.a.TBodyItem,children:[Object(a.jsx)("h4",{children:e.timeString}),Object(a.jsx)("h4",{children:e.where}),Object(a.jsx)("h4",{children:e.kind})]},e.time)})).reverse():Object(a.jsx)("div",{className:U.a.Less,children:Object(a.jsx)("h4",{children:"\ubc30\uc1a1\uc815\ubcf4\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."})})})]})},q=n(53),X=n(84),K=n.n(X),z=n(49),V=n.n(z),Z=n(85),Y=n.n(Z),$=n(86),ee=n.n($),te=n(67),ne=n.n(te),ae=n(87),re=n.n(ae),ce=n(88),ie=n.n(ce);function oe(e){var t=e.item,n=e.stateNumber,r=K()(V.a.ItemContainer,Object(q.a)({},V.a.ItemContainerActive,t.id===n));return Object(a.jsxs)("div",{className:r,children:[t.icon,Object(a.jsx)("p",{children:t.state})]},t.id)}var se=function(e){var t=e.stateNumber,n=e.onlyOne,r=void 0!==n&&n,c=[{id:1,icon:Object(a.jsx)(Y.a,{}),state:"\ubc30\uc1a1\uc900\ube44\uc911"},{id:2,icon:Object(a.jsx)(ee.a,{}),state:"\uc9d1\ud654\uc644\ub8cc"},{id:3,icon:Object(a.jsx)(ne.a,{}),state:"\ubc30\uc1a1\uc911"},{id:4,icon:Object(a.jsx)(re.a,{}),state:"\uc9c0\uc810 \ub3c4\ucc29"},{id:5,icon:Object(a.jsx)(ne.a,{}),state:"\ubc30\uc1a1\ucd9c\ubc1c"},{id:6,icon:Object(a.jsx)(ie.a,{}),state:"\ubc30\uc1a1\uc644\ub8cc"}];return Object(a.jsx)("div",{className:V.a.Container,children:Object(a.jsx)("div",{className:V.a.TextContainer,children:r?Object(a.jsx)(oe,{item:c[t-1],stateNumber:t}):c.map((function(e){return Object(a.jsx)(oe,{item:e,stateNumber:t},e.id)}))})})},le=n(90),je=n.n(le),ue=n(89),de=n.n(ue),be={list:[],loading:!1},Oe=Object(r.createContext)(be),me=Object(r.createContext)((function(){return null}));function pe(e,t){switch(t.type){case"GET_LIST":return Object(l.a)(Object(l.a)({},e),{},{list:t.paylode});case"LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}}var xe=n(30),ve=n.n(xe);var he=function(e){var t=e.item,n=(Object(r.useContext)(Oe),Object(r.useContext)(me)),c=Object(r.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){var e=[];e.push(t.trackingDetails.reverse()[0]),l(e)}),[]),Object(a.jsxs)("div",{className:ve.a.Container,children:[Object(a.jsx)("div",{className:ve.a.ButtonContainer,children:Object(a.jsx)("button",{onClick:function(){var e=localStorage.getItem("items"),a=JSON.parse(String(e)).filter((function(e){return e.parcelNumber!==t.parcelNumber}));localStorage.setItem("items",JSON.stringify(a)),n({type:"GET_LIST",paylode:a})},children:Object(a.jsx)(je.a,{fontSize:"large"})})}),Object(a.jsxs)("div",{className:ve.a.Content,children:[Object(a.jsxs)("div",{className:ve.a.IntroContainer,children:[Object(a.jsx)("div",{className:ve.a.NowContainer,children:Object(a.jsx)(se,{onlyOne:!0,stateNumber:t.level})}),Object(a.jsx)("div",{className:ve.a.TableContainer,children:Object(a.jsx)(Q,{list:o})})]}),Object(a.jsx)("div",{className:ve.a.TextContainer,children:Object(a.jsxs)("h4",{children:["\uc0c1\ud488\uba85: ",t.itemName]})})]})]})};n(174),n(172),n(136),Object(S.a)((function(e){return Object(E.a)({modal:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},paper:{flexDirection:"column",backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],width:"70vw",height:"70vh",outline:"none",display:"flex",borderRadius:"5px;",position:"relative"}})}));var fe=n(58),_e=n.n(fe),Ce=n(175),Ne={loading:!1,complete:"",itemName:"",trackingDetails:[],level:0,parcelNumber:"",code:""};function ge(e,t){switch(t.type){case"GET_ITEM":return{loading:!1,complete:t.paylode.complete,itemName:t.paylode.itemName,trackingDetails:t.paylode.trackingDetails,level:t.paylode.level,parcelNumber:t.paylode.parcelNumber,code:t.paylode.code};case"LOADING_START":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}}var Te=Object(S.a)((function(e){return Object(E.a)({root:{"& > *":{margin:e.spacing(1),width:"25ch"}}})}));var ye=function(){var e=Object(r.useContext)(ke),t=Object(r.useContext)(Be),n=Object(r.useReducer)(ge,Ne),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),d=j[0],m=j[1],p=Object(u.f)(),x=Te(),v=function(){var n=Object(O.a)(b.a.mark((function n(){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o({type:"LOADING_START"}),n.prev=1,n.next=4,N(e.code,e.parcelNumber);case 4:(a=n.sent)&&t({type:"GET_STATUS",paylode:a}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log(e),v()}),[]),Object(r.useEffect)((function(){e.item&&o({type:"GET_ITEM",paylode:e.item.data})}),[e]),i.loading?Object(a.jsx)("div",{children:"...\ub85c\ub529\uc911"}):Object(a.jsxs)("div",{className:_e.a.Container,children:[Object(a.jsx)(J,{title:"\ubc30\uc1a1\uc815\ubcf4"}),Object(a.jsx)("div",{className:_e.a.IntroCard,children:Object(a.jsx)(se,{stateNumber:null===i||void 0===i?void 0:i.level})}),Object(a.jsx)(Q,{list:i.trackingDetails}),Object(a.jsx)("div",{className:_e.a.BtnContainer,children:Object(a.jsxs)("form",{className:x.root,noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(w.a,{id:"outlined-basic",label:"\uc0c1\ud488\uba85\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694",variant:"outlined",autoFocus:!0,onChange:function(e){m(e.target.value)}}),Object(a.jsx)(Ce.a,{onClick:function(){if(""===e.parcelNumber)return alert("\ubc30\uc1a1\uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");var t=localStorage.getItem("items"),n=JSON.parse(String(t)),a={loading:i.loading,complete:i.complete,itemName:d,trackingDetails:i.trackingDetails,level:i.level,parcelNumber:e.parcelNumber,code:e.code};if(null===n||void 0===n?void 0:n.some((function(e){return(null===e||void 0===e?void 0:e.parcelNumber)===a.parcelNumber})))alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \ubc30\uc1a1\uc815\ubcf4 \uc785\ub2c8\ub2e4.");else{if(t){var r=n.concat(a);return localStorage.setItem("items",JSON.stringify(r)),void p.push("/list")}var c=[a];localStorage.setItem("items",JSON.stringify(c)),p.push("/list")}},variant:"contained",color:"primary",children:"\ub9ac\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ud558\uae30"})]})})]})},Ie=function(){var e=Object(r.useReducer)(pe,be),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("items"),t=JSON.parse(String(e));c({type:"GET_LIST",paylode:t})}),[]),Object(r.useEffect)((function(){console.log(n)}),[n]),n.list.length<=0?Object(a.jsx)("div",{className:de.a.Container,children:"\uc800\uc7a5\ub41c \ubc30\uc1a1\uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}):Object(a.jsx)(Oe.Provider,{value:n,children:Object(a.jsx)(me.Provider,{value:c,children:Object(a.jsx)("div",{children:n.list.map((function(e){return Object(a.jsx)(he,{item:e},parseInt(e.parcelNumber))}))})})})};function Se(){return Object(a.jsx)(j.a,{basename:"/Parcel-search",children:Object(a.jsx)(A,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:I}),Object(a.jsx)(u.a,{exact:!0,path:"/list",component:Ie}),Object(a.jsx)(u.a,{exact:!0,path:"/detail",component:ye})]})})})}n(133);var Ee={code:"",name:"",parcelNumber:"",item:""};function we(e,t){switch(t.type){case"GET_CODE":return Object(l.a)(Object(l.a)({},e),{},{code:t.paylode});case"GET_NAME":return Object(l.a)(Object(l.a)({},e),{},{name:t.paylode});case"GET_NUMBER":return Object(l.a)(Object(l.a)({},e),{},{parcelNumber:t.paylode});case"GET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{item:t.paylode});case"RESET_STATE":return Object(l.a)(Object(l.a)({},e),{},{code:"",name:"",parcelNumber:""});default:return e}}var ke=Object(r.createContext)(Ee),Be=Object(r.createContext)((function(){return null}));var De=function(){var e=Object(r.useReducer)(we,Ee),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(ke.Provider,{value:n,children:Object(a.jsx)(Be.Provider,{value:c,children:Object(a.jsx)(Se,{})})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(De,{})}),document.getElementById("root"))},30:function(e,t,n){e.exports={Container:"Card_Container__NUrU1",Content:"Card_Content__2Kq6f",ButtonContainer:"Card_ButtonContainer__I4WFw",IntroContainer:"Card_IntroContainer__1Re-l",NowContainer:"Card_NowContainer__3-GN2",TableContainer:"Card_TableContainer__2FXoD",TextContainer:"Card_TextContainer__MkgEo"}},38:function(e,t,n){e.exports={Container:"Table_Container__3K9Vj",THeadContainer:"Table_THeadContainer__1FI6g",TItem:"Table_TItem__3hS-z",TBodyContainer:"Table_TBodyContainer__21nXb",TBodyItem:"Table_TBodyItem__1qQLe",Less:"Table_Less__33mqg"}},49:function(e,t,n){e.exports={Container:"NowBox_Container__jm04Q",TextContainer:"NowBox_TextContainer__6DR2v",ItemContainer:"NowBox_ItemContainer__WlMOW",ItemContainerActive:"NowBox_ItemContainerActive__1HPGw"}},58:function(e,t,n){e.exports={Container:"Detail_Container__3TO2R",IntroCard:"Detail_IntroCard__ol1pR",IntroCardItem:"Detail_IntroCardItem__1PlKR",BtnContainer:"Detail_BtnContainer__lvaI0",ItemContainer:"Detail_ItemContainer__1nINq",TimeBox:"Detail_TimeBox__gt2sT"}},62:function(e,t,n){e.exports={Container:"Main_Container__ZWPPR",FormContainer:"Main_FormContainer__3ZQQu"}},65:function(e,t,n){e.exports={Container:"Nav_Container__360G0",NavContainer:"Nav_NavContainer__3DyCX"}},66:function(e,t,n){e.exports={Container:"Layout_Container__1_4aA",Content:"Layout_Content__THAWF"}},79:function(e,t,n){e.exports={Container:"BackButton_Container__2sQDu"}},89:function(e,t,n){e.exports={Container:"List_Container__3cOR5"}}},[[134,1,2]]]);
//# sourceMappingURL=main.a42f99d3.chunk.js.map