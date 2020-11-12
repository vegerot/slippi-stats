(this["webpackJsonpslippi-stats"]=this["webpackJsonpslippi-stats"]||[]).push([[0],{126:function(e,t){},155:function(e,t){},157:function(e,t){},176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);n(98);var r,a=n(0),o=n.n(a),c=n(87),i=n.n(c),u=n(95),l=n(25),s=n(7),d=n(4),f=n(9);!function(e){e.ADD_GAME="ADD_GAME",e.SET_ERROR="SET_ERROR",e.ADD_FILE="ADD_FILE"}(r||(r={}));var m={files:[]},p=Object(a.createContext)({state:m,dispatch:function(){return null}}),g=function(e,t){return function(e,t){switch(t.type){case r.ADD_GAME:var n=t.payload,a=n.filename,o=n.game,c=n.details,i=e.files,u=i.findIndex((function(e){return e.file.name===a}));return-1!==u&&(i[u].game=o,i[u].details=c,i[u].loading=!1),Object(f.a)(Object(f.a)({},e),{},{files:i});case r.SET_ERROR:var l=t.payload,s=l.filename,d=l.error,m=e.files,p=m.findIndex((function(e){return e.file.name===s}));return-1!==p&&(m[p].error=d,m[p].loading=!1),Object(f.a)(Object(f.a)({},e),{},{files:m});case r.ADD_FILE:var g=t.payload.file,b=e.files;return Boolean(b.find((function(e){return e.file.name===g.name})))||b.push({file:g,loading:!0,game:null,details:null}),Object(f.a)(Object(f.a)({},e),{},{files:b});default:return e}}(e,t)},b=function(e){var t=e.children,n=Object(a.useReducer)(g,m),r=Object(d.a)(n,2),c=r[0],i=r[1];return o.a.createElement(p.Provider,{value:{state:c,dispatch:i}},t)},h=n(3),v=n(6),O=n(1),j=n(10),E=n.n(j),y=n(22),x=n(8),k=n(96);function w(){var e=Object(h.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ",";\n  border-style: dashed;\n  background-color: #fafafa;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n"]);return w=function(){return e},e}var S,P=x.a.div(w(),(function(e){return function(e){return e.isDragAccept?"#00e676":e.isDragActive?"#2196f3":"#eeeeee"}(e)})),I=function(e){var t=Object(k.a)(e),n=t.getRootProps,r=t.getInputProps,a=t.isDragActive,c=t.isDragAccept,i=t.isDragReject;return o.a.createElement("div",{className:"container"},o.a.createElement(P,n({isDragActive:a,isDragAccept:c,isDragReject:i}),o.a.createElement("input",r()),o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))},C=function(e){var t=e.file,n=e.loading,r=e.error;return o.a.createElement("div",null,t.name," ",n&&o.a.createElement("span",null,"processing...")," ",r&&o.a.createElement("span",null,"error :c"))},A=function(e){var t=e.files;return Object(O.d)("div",null,t.map((function(e){return Object(O.d)(C,Object.assign({key:e.file.name},e))})))},N=n(26),L=n(43);function R(e){switch(e){case 1:return S.P1;case 2:return S.P2;case 3:return S.P3;case 4:return S.P4;default:return S.P1}}!function(e){e.P1="#f52e2e",e.P2="#5463ff",e.P3="#ffc717",e.P4="#1f9e40"}(S||(S={}));var _=n(67);function D(){var e=Object(h.a)(["\n        position: relative;\n        border: solid 1px black;\n        height: 500px;\n        width: 500px;\n      "]);return D=function(){return e},e}function T(){var e=Object(h.a)(["\n  background: #286163;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n  padding: 1rem 0rem;\n  width: 100%;\n  font-weight: 700;\n  font-size: 3rem;\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n"]);return T=function(){return e},e}var M=x.a.button(T()),B=function(){var e=Object(s.e)(),t=Object(a.useContext)(p),n=t.state,c=t.dispatch,i=o.a.useState(null),u=Object(d.a)(i,2),l=u[0],f=(u[1],Object(a.useCallback)((function(e){e.forEach(function(){var e=Object(y.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:r.ADD_FILE,payload:{file:t}}),e.prev=1,e.next=4,Object(_.b)(t);case 4:n=e.sent,a=Object(_.a)(t.name,n),c({type:r.ADD_GAME,payload:{filename:t.name,game:n,details:a}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({type:r.SET_ERROR,payload:{filename:t.name,error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[c])),m=!n.files.find((function(e){return e.loading})),g=0===n.files.length||m?"COMPUTE STATS":"PLEASE WAIT";return Object(O.d)("div",{css:Object(O.c)(D())},Object(O.d)(I,{accept:".slp",onDrop:f}),Object(O.d)(A,{files:n.files}),m?Object(O.d)("div",null,"done"):Object(O.d)("div",null,"still processing..."),Object(O.d)(M,{disabled:0===n.files.length||!m,onClick:function(){var t="?"+function(e){var t=Object(L.a)(e),n=t.games,r=t.summary,a=(t.btsSummary,{}),o=n[n.length-1],c=o.players[0],i=o.players[1];return a.leftColor=R(c.port),a.rightColor=R(i.port),a.char1=c.characterId,a.char2=i.characterId,a.color1=c.characterColor,a.color2=i.characterColor,a.gt=n.length,n.forEach((function(e,t){console.log("processing game: ",e);var n="g".concat(t+1),r=e.stage.id,o=e.duration,c=e.players.map((function(e){return[e.characterId,e.characterColor,e.gameResult].join(",")})),i=[r,o].concat(Object(N.a)(c)).join(",");console.log("".concat(n," : ").concat(i)),a[n]=i})),r.forEach((function(e){switch(e.id){case"openingsPerKill":a.opk1=e.results[0].simple.text,a.opk2=e.results[1].simple.text;break;case"damagePerOpening":a.dpo1=e.results[0].simple.text,a.dpo2=e.results[1].simple.text;break;case"neutralWins":a.nw1=e.results[0].simple.text,a.nw2=e.results[1].simple.text;break;case"killMoves":console.log(e);var t=e.results[0].result[0],n=e.results[1].result[0];a.mckm1="".concat(t.shortName.toUpperCase()," - ").concat(t.count),a.mckm2="".concat(n.shortName.toUpperCase()," - ").concat(n.count);break;case"neutralOpenerMoves":var r=e.results[0].result[0],o=e.results[1].result[0];a.mcno1="".concat(r.shortName.toUpperCase()," - ").concat(r.count),a.mcno2="".concat(o.shortName.toUpperCase()," - ").concat(o.count);break;case"inputsPerMinute":a.ipm1=e.results[0].simple.text,a.ipm2=e.results[1].simple.text;break;case"avgKillPercent":a.akp1=e.results[0].simple.text,a.akp2=e.results[1].simple.text;break;case"damageDone":a.tdd1=e.results[0].simple.text,a.tdd2=e.results[1].simple.text}})),console.log("returning these params: ",a),new URLSearchParams(a)}(n.files.filter((function(e){return null!==e.details})).map((function(e){return e.details}))).toString();e.push({pathname:"/render",search:t})}},g),Object(O.d)("textarea",{readOnly:!0,value:JSON.stringify(l,null,2)}))};function U(){var e=Object(h.a)(["\n        body.themed {\n          background: radial-gradient(circle at center -30%, ",", ",");\n        }\n      "]);return U=function(){return e},e}var G={primaryColor:"#286163",secondaryColor:"#121020"},K=function(e){var t=e.primaryColor,n=e.secondaryColor;return Object(O.d)(O.a,{styles:Object(O.c)(U(),t,n)})};function F(){var e=Object(h.a)(["\n        margin: 0 12rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      "]);return F=function(){return e},e}var z=function(){var e=Object(s.e)();return Object(O.d)("div",{css:Object(O.c)(F())},Object(O.d)(K,G),Object(O.d)("h1",null,"Slippi Stats"),Object(O.d)("button",{onClick:function(){var t=["mckm1","mckm2","mcno1","mcno2","opk1","opk2","tdd1","tdd2","dpo1","dpo2","ipm1","ipm2"].reduce((function(e,t){var n,r,a=(n=50,r=250,Math.random()*(r-n)+n);return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t,a.toFixed(1)))}),{}),n="?"+new URLSearchParams(t).toString();e.push({pathname:"/render",search:n})}},"randomize"),Object(O.d)(B,null))};function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(a.useState)(t),r=Object(d.a)(n,2),o=r[0],c=r[1],i=Object(s.e)(),u=Object(s.f)();Object(a.useEffect)((function(){var n=new URLSearchParams(u.search).get(e);n!==o&&c(n||t)}),[e,t,u,o]);var l=function(t){var n=new URLSearchParams(u.search);n.set(e,t);var r="?"+n.toString();i.push({pathname:u.pathname,search:r})};return[o,l]}function V(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){function t(t){t.key===e&&o(!0)}var n=function(t){t.key===e&&o(!1)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}}),[e]),r}var W=n(28);function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toLowerCase().replace(/[. &]+/gi,t)}function Y(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Default",n=J(e),r=J(t);return"".concat(".","/images/characters/").concat(n,"/").concat(r)}(W.characters.getCharacterName(+e),t)}function X(e,t){var n=Y(e,t);return"".concat(n,"/portrait.png")}function $(){var e=Object(h.a)(["\n        height: 100%;\n        width: 100%;\n        position: relative;\n        background: radial-gradient(circle at center -30%, ",", transparent);\n        &::after {\n          content: ' ';\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          background-image: url(\"",'");\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: top ',";\n        }\n      "]);return $=function(){return e},e}var q=function(e){var t=e.colorParam,n=e.charParam,r=e.align,a=e.theme,o=H(t),c=Object(d.a)(o,1)[0],i=H(n),u=function(e,t,n){var r=Y(t,n);return"".concat(r,"/vs-").concat(e,".png")}("left"===r?"right":"left",Object(d.a)(i,1)[0],c);return Object(O.d)("div",{css:Object(O.c)($(),a,u,r)})},Q=n(45);function Z(){var e=Object(h.a)(["\n  ","\n"]);return Z=function(){return e},e}function ee(){var e=Object(h.a)(['\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  &::after {\n    content: " ";\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n  }\n']);return ee=function(){return e},e}function te(){var e=Object(h.a)(["\n  position: relative;\n  display: block;\n  border: solid 0.1rem rgba(255, 255, 255, 0.3);\n  height: 5rem;\n  width: 100%;\n  max-width: 10rem;\n"]);return te=function(){return e},e}var ne=x.a.div(te()),re=x.a.div(ee()),ae=Object(x.a)(re)(Z(),(function(e){var t=100-e.waypoint;return"\n      ".concat("right"===e.side?"clip-path: polygon(".concat(e.waypoint,"% 0, 100% 0, 100% 100%, ").concat(t,"% 100%);"):"","\n      ").concat(e.dim?"filter: brightness(25%);":"","\n      ").concat(e.backgroundColor?"background: radial-gradient(circle at center -30%, ".concat(e.backgroundColor,", black);"):"","\n      &::after {\n        width: ").concat(e.waypoint,'%;\n        background-image: url("').concat(e.imageSrc,'");\n        background-position: top ').concat(e.side,";\n        ").concat("right"===e.side?"left: ".concat(t,"%;"):"transform: scaleX(-1);","\n      }\n    ")})),oe=function(e){var t=e.char1,n=e.color1,r=e.result1,a=e.char2,o=e.color2,c=e.result2,i=e.leftColor,u=e.rightColor,l=X(t,n),s=X(a,o);return Object(O.d)(ne,null,Object(O.d)(ae,{backgroundColor:i,imageSrc:l,waypoint:55,side:"left",dim:"loser"===r}),Object(O.d)(ae,{backgroundColor:u,imageSrc:s,waypoint:55,side:"right",dim:"loser"===c}))};function ce(){var e=Object(h.a)(["\nborder: solid 1px rgba(255, 255, 255, 0.3);\nz-index: 1;\nposition: relative;\n    width: 100%;\n    height: 9rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    &::after {\n      z-index: -1;\n        content: ' ';\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n  background-image: url(\"",'");\n  background-repeat: no-repeat;\n  background-size: 105% auto;\n  background-position: center;\n  filter: blur(1px) brightness(30%);\n    }\n']);return ce=function(){return e},e}function ie(){var e=Object(h.a)(["\n  font-size: 2.5rem;\n  font-weight: bold;\n  opacity: 0.7;\n  text-shadow: 2px 2px 2px black;\n"]);return ie=function(){return e},e}var ue=x.a.span(ie()),le=x.a.div(ce(),(function(e){return e.src})),se=function(e){var t=e.stageId,n=e.duration,r=function(e){var t=W.stages.getStageName(+e);return"".concat(".","/images/stages/").concat(t,".png")}(t);return Object(O.d)(le,{src:r},Object(O.d)(ue,null,n))};function de(){var e=Object(h.a)(["\n        display: grid;\n        grid-template-columns: 100%;\n        justify-items: center;\n        width: 100%;\n        max-width: 18rem;\n        grid-row-gap: 2rem;\n      "]);return de=function(){return e},e}var fe=function(e){var t=e.stageId,n=e.duration,r=Object(Q.a)(e,["stageId","duration"]);return Object(O.d)("div",{css:Object(O.c)(de())},Object(O.d)(oe,r),Object(O.d)(se,{stageId:t,duration:n}))};function me(){var e=Object(h.a)(["\n        display: grid;\n        grid-column-gap: 2rem;\n        grid-template-columns: repeat(",", 1fr);\n        justify-items: center;\n      "]);return me=function(){return e},e}var pe=function(e){var t=e.index,n=e.leftColor,r=e.rightColor,a=H("g".concat(t)),o=Object(d.a)(a,1)[0];if(!o)return null;var c=o.split(","),i=Object(d.a)(c,8),u=i[0],l=i[1],s=i[2],f=i[3],m=i[4],p=i[5],g=i[6],b=i[7];return Object(O.d)(fe,{stageId:u,duration:l,char1:s,color1:f,result1:m,char2:p,color2:g,result2:b,leftColor:n,rightColor:r})},ge=function(e){for(var t=H("gt"),n=Object(d.a)(t,1)[0],r=parseInt(n,10)||0,a=[],o=1;o<=r;o++)a.push(Object(O.d)(pe,{key:"g".concat(o),index:o,leftColor:e.leftColor,rightColor:e.rightColor}));return Object(O.d)("div",{css:Object(O.c)(me(),r)},a)},be=(n(176),function(e){var t,n,r=e.text,c=e.onSetText,i=e.textAlign,u=Object(a.useState)(!1),l=Object(d.a)(u,2),s=l[0],f=l[1],m=Object(a.useState)(r),p=Object(d.a)(m,2),g=p[0],b=p[1],h=Object(a.useRef)(null),v=Object(a.useRef)(null),O=Object(a.useRef)(null),j=V("Tab"),E=V("Enter"),y=V("Escape");return Object(a.useEffect)((function(){b(r)}),[r]),t=h,n=function(){s&&(c(g),f(!1))},Object(a.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[t,n]),Object(a.useEffect)((function(){s&&O.current&&O.current.focus()}),[s]),Object(a.useEffect)((function(){s&&((E||j)&&(c(g),f(!1)),y&&(b(e.text),f(!1)))}),[j,E,y,s,c,g,e.text]),o.a.createElement("span",{className:"inline-text",ref:h},o.a.createElement("span",{ref:v,onClick:function(){return f(!0)},className:"inline-text_copy inline-text_copy--".concat(s?"hidden":"active")},e.text),o.a.createElement("input",{ref:O,style:{textAlign:i,maxWidth:"100%"},value:g,onChange:function(e){b(e.target.value)},className:"inline-text_input inline-text_input--".concat(s?"active":"hidden")}))});function he(){var e=Object(h.a)(["\n          justify-self: end;\n          text-align: right;\n        "]);return he=function(){return e},e}function ve(){var e=Object(h.a)(["\n          justify-self: start;\n        "]);return ve=function(){return e},e}function Oe(){var e=Object(h.a)(['\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  &::before {\n    z-index: -1;\n    content: "";\n    display: block;\n    background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);\n    height: 0.1rem;\n    position: absolute;\n    width: 80%;\n    margin-left: 50%;\n    transform: translate(-50%, -50%);\n  }\n']);return Oe=function(){return e},e}function je(){var e=Object(h.a)(["\n  width: 100%;\n  font-weight: 800;\n  font-size: ",";\n"]);return je=function(){return e},e}function Ee(){var e=Object(h.a)(["\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  padding: 0.3em 2.5em;\n  font-weight: 700;\n  font-size: 1.2em;\n  box-shadow: 0.2em 0.2em 0.2em black;\n  justify-self: center;\n  z-index: 1;\n"]);return Ee=function(){return e},e}be.defaultProps={text:"",onSetText:function(){}};var ye=x.a.div(Ee(),(function(e){return e.labelBackground}),(function(e){return e.labelColor})),xe=x.a.div(je(),(function(e){return"text"===e.type?"1.4em":"2.3em"})),ke=x.a.div(Oe()),we=function(e){var t=e.type,n=e.label,r=e.leftText,a=e.rightText,o=e.labelBackground,c=e.labelColor;return Object(O.d)(ke,null,Object(O.d)(xe,{type:t,css:Object(O.c)(ve())},Object(O.d)(be,{text:r,onSetText:e.onLeftTextBlur})),Object(O.d)(ye,{labelBackground:o,labelColor:c},n),Object(O.d)(xe,{type:t,css:Object(O.c)(he())},Object(O.d)(be,{text:a,textAlign:"right",onSetText:e.onRightTextBlur})))};we.defaultProps={type:"number",labelColor:"black",labelBackground:"white",onLeftTextBlur:function(){},onRightTextBlur:function(){}};var Se=function(e){var t=e.param1,n=e.param2,r=e.label,a=e.type,c=e.primaryColor,i=e.secondaryColor,u="number"===a?"0":"-",l=H(t,u),s=Object(d.a)(l,2),f=s[0],m=s[1],p=H(n,u),g=Object(d.a)(p,2),b=g[0],h=g[1],v="number"===a?i:"white",O="number"===a?"white":c;return o.a.createElement(we,{type:a,leftText:f,onLeftTextBlur:function(e){return m(e)},label:r,rightText:b,onRightTextBlur:function(e){return h(e)},labelColor:v,labelBackground:O})};Se.defaultProps={type:"number"};var Pe=function(e){return o.a.createElement(Se,Object.assign({type:"text",param1:"mckm1",param2:"mckm2",label:"MOST COMMON KILL MOVE"},e))},Ie=function(e){return o.a.createElement(Se,Object.assign({type:"text",param1:"mcno1",param2:"mcno2",label:"MOST COMMON NEUTRAL OPENER"},e))},Ce=function(e){return o.a.createElement(Se,Object.assign({param1:"akp1",param2:"akp2",label:"AVERAGE KILL PERCENT"},e))},Ae=function(e){return o.a.createElement(Se,Object.assign({param1:"nw1",param2:"nw2",label:"NEUTRAL WINS"},e))},Ne=function(e){return o.a.createElement(Se,Object.assign({param1:"opk1",param2:"opk2",label:"OPENINGS / KILL"},e))},Le=function(e){return o.a.createElement(Se,Object.assign({param1:"tdd1",param2:"tdd2",label:"TOTAL DAMAGE DONE"},e))};function Re(){var e=Object(h.a)(["\n          display: grid;\n          grid-template-columns: 100%;\n          grid-row-gap: 2rem;\n          margin: 4rem;\n        "]);return Re=function(){return e},e}function _e(){var e=Object(h.a)(["\n        background: rgba(0, 0, 0, 0.3);\n        width: 100%;\n      "]);return _e=function(){return e},e}function De(){var e=Object(h.a)(['\n  content: " ";\n  display: block;\n  height: 0.1rem;\n  width: 100%;\n  margin-top: 0.7rem;\n  background-color: rgba(255, 255, 255, 0.05);\n']);return De=function(){return e},e}var Te=x.a.div(De()),Me=function(e){var t=e.leftColor,n=e.rightColor,r=Object(Q.a)(e,["leftColor","rightColor"]);return Object(O.d)("div",{css:Object(O.c)(_e())},Object(O.d)("div",{css:Object(O.c)(Re())},Object(O.d)(Pe,r),Object(O.d)(Ie,r),Object(O.d)(Te,null),Object(O.d)(Ne,r),Object(O.d)(Le,r),Object(O.d)(Ce,r),Object(O.d)(Ae,r),Object(O.d)(Te,null),Object(O.d)(ge,{leftColor:t,rightColor:n})))};function Be(){var e=Object(h.a)(["\n          width: 100%;\n        "]);return Be=function(){return e},e}function Ue(){var e=Object(h.a)(["\n          justify-self: end;\n          width: 100%;\n        "]);return Ue=function(){return e},e}function Ge(){var e=Object(h.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n"]);return Ge=function(){return e},e}var Ke=x.a.div(Ge()),Fe=function(e){var t=e.primaryColor,n=e.secondaryColor,r=H("leftColor",S.P1),a=Object(d.a)(r,1)[0],o=H("rightColor",S.P2),c=Object(d.a)(o,1)[0];return Object(O.d)(Ke,null,Object(O.d)("div",{css:Object(O.c)(Ue())},Object(O.d)(q,{theme:a,charParam:"char1",colorParam:"color1",align:"right"})),Object(O.d)(Me,{primaryColor:t,secondaryColor:n,leftColor:a,rightColor:c}),Object(O.d)("div",{css:Object(O.c)(Be())},Object(O.d)(q,{theme:c,charParam:"char2",colorParam:"color2",align:"left"})))},ze=n(94),He=n.n(ze);function Ve(){var e=Object(h.a)(["\n              max-height: 5rem;\n            "]);return Ve=function(){return e},e}function We(){var e=Object(h.a)(["\n          margin-bottom: 2rem;\n        "]);return We=function(){return e},e}function Je(){var e=Object(h.a)(["\n        margin: 0 12rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      "]);return Je=function(){return e},e}function Ye(){var e=Object(h.a)(['\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 5.5rem;\n  margin: 2rem;\n  padding-bottom: 1rem;\n  position: relative;\n\n  &::before {\n    z-index: -1;\n    content: "";\n    display: block;\n    background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);\n    height: 0.1rem;\n    position: absolute;\n    width: 80%;\n    margin-left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n  }\n']);return Ye=function(){return e},e}var Xe=x.a.h1(Ye()),$e=function(){var e=H("primaryColor",G.primaryColor),t=Object(d.a)(e,1)[0],n=H("secondaryColor",G.secondaryColor),r=Object(d.a)(n,1)[0];return Object(O.d)("div",{css:Object(O.c)(Je())},Object(O.d)(K,{primaryColor:t,secondaryColor:r}),Object(O.d)(l.b,{to:"/",style:{textDecoration:"inherit",color:"inherit"},title:"Back to homepage"},Object(O.d)(Xe,null,"Post Match Stats")),Object(O.d)("div",{css:Object(O.c)(We())},Object(O.d)("a",{href:"https://slippi.gg",target:"_blank",rel:"noopener noreferrer"},Object(O.d)("img",{alt:"Powered by Slippi",title:"Open Slippi.gg homepage",src:He.a,css:Object(O.c)(Ve())}))),Object(O.d)(Fe,{primaryColor:t,secondaryColor:r}))},qe=Object(u.hot)((function(){return o.a.createElement(b,null,o.a.createElement(l.a,{basename:"/"},o.a.createElement(s.a,{exact:!0,path:"/",component:z}),o.a.createElement(s.a,{path:"/render",component:$e})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,n){"use strict";var r,a=n(9),o=n(6),c=n(28),i=c.stages,u=c.moves,l=c.characters,s=n(44),d=n(173),f={OPENINGS_PER_KILL:"openingsPerKill",DAMAGE_PER_OPENING:"damagePerOpening",NEUTRAL_WINS:"neutralWins",KILL_MOVES:"killMoves",NEUTRAL_OPENER_MOVES:"neutralOpenerMoves",EARLY_KILLS:"earlyKills",LATE_DEATHS:"lateDeaths",SELF_DESTRUCTS:"selfDestructs",INPUTS_PER_MINUTE:"inputsPerMinute",AVG_KILL_PERCENT:"avgKillPercent",HIGH_DAMAGE_PUNISHES:"highDamagePunishes",DAMAGE_DONE:"damageDone"},m=(r={},Object(o.a)(r,f.OPENINGS_PER_KILL,{id:f.OPENINGS_PER_KILL,name:"Openings / Kill",type:"number",betterDirection:"lower",recommendedRounding:1,calculate:function(e,t){return p(e,t,"openingsPerKill",1)}}),Object(o.a)(r,f.DAMAGE_PER_OPENING,{id:f.DAMAGE_PER_OPENING,name:"Damage / Opening",type:"number",betterDirection:"higher",recommendedRounding:1,calculate:function(e,t){return p(e,t,"damagePerOpening",1)}}),Object(o.a)(r,f.NEUTRAL_WINS,{id:f.NEUTRAL_WINS,name:"Neutral Wins",type:"number",betterDirection:"higher",recommendedRounding:0,calculate:function(e,t){return p(e,t,"neutralWinRatio",0,"count")}}),Object(o.a)(r,f.KILL_MOVES,{id:f.KILL_MOVES,name:"Most Common Kill Move",type:"text",calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","conversions"])||[],r=d.filter(n,(function(e){var n=e.playerIndex===t,r=e.didKill;return n&&r}));return d.map(r,(function(e){return d.last(e.moves)}))})),r=d.groupBy(n,"moveId"),a=d.map(r,(function(e){var t=d.first(e);return{count:e.length,id:t.moveId,name:u.getMoveName(t.moveId),shortName:u.getMoveShortName(t.moveId)}})),o=d.orderBy(a,["count"],["desc"]),c=d.first(o),i="N/A";return c&&(i="".concat(c.shortName," (").concat(c.count,")")),{result:o,simple:{text:i}}}}),Object(o.a)(r,f.NEUTRAL_OPENER_MOVES,{id:f.NEUTRAL_OPENER_MOVES,name:"Most Common Neutral Opener",type:"text",calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","conversions"])||[],r=d.filter(n,(function(e){var n=e.playerIndex===t,r="neutral-win"===e.openingType;return n&&r}));return d.map(r,(function(e){return d.first(e.moves)}))})),r=d.groupBy(n,"moveId"),a=d.map(r,(function(e){var t=d.first(e);return{count:e.length,id:t.moveId,name:u.getMoveName(t.moveId),shortName:u.getMoveShortName(t.moveId)}})),o=d.orderBy(a,["count"],["desc"]),c=d.first(o),i="N/A";return c&&(i="".concat(c.shortName," (").concat(c.count,")")),{result:o,simple:{text:i}}}}),Object(o.a)(r,f.EARLY_KILLS,{id:f.EARLY_KILLS,name:"Earliest Kill",type:"number",betterDirection:"lower",recommendedRounding:1,calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","stocks"])||[];return d.filter(n,(function(e){var n=e.playerIndex!==t,r=null!==e.endPercent;return n&&r}))})),r=d.orderBy(n,["endPercent"],["asc"]),a=d.first(r),o={text:"N/A",number:null};return a&&(o.number=a.endPercent,o.text=o.number.toFixed(1)),{result:d.take(r,5),simple:o}}}),Object(o.a)(r,f.LATE_DEATHS,{id:f.LATE_DEATHS,name:"Latest Death",type:"number",betterDirection:"higher",recommendedRounding:1,calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","stocks"])||[];return d.filter(n,(function(e){var n=e.playerIndex===t,r=null!==e.endPercent;return n&&r}))})),r=d.orderBy(n,["endPercent"],["desc"]),a=d.first(r),o={text:"N/A",number:null};return a&&(o.number=a.endPercent,o.text=o.number.toFixed(1)),{result:d.take(r,5),simple:o}}}),Object(o.a)(r,f.SELF_DESTRUCTS,{id:f.SELF_DESTRUCTS,name:"Total Self-Destructs",type:"number",betterDirection:"lower",recommendedRounding:0,calculate:function(e,t){var n=d.map(e,(function(e){var n=d.get(e,["stats","stocks"])||[],r=d.filter(n,(function(e){var n=e.playerIndex===t,r=null!==e.endPercent;return n&&r})),a=d.get(e,["stats","conversions"])||[],o=d.filter(a,(function(e){var n=e.playerIndex!==t,r=e.didKill;return n&&r}));return r.length-o.length})),r=d.sum(n);return{result:r,simple:{number:r,text:"".concat(r)}}}}),Object(o.a)(r,f.INPUTS_PER_MINUTE,{id:f.INPUTS_PER_MINUTE,name:"Inputs / Minute",type:"number",betterDirection:"higher",recommendedRounding:1,calculate:function(e,t){return p(e,t,"inputsPerMinute",1)}}),Object(o.a)(r,f.AVG_KILL_PERCENT,{id:f.AVG_KILL_PERCENT,name:"Average Kill Percent",type:"number",betterDirection:"lower",recommendedRounding:1,calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","stocks"])||[];return d.filter(n,(function(e){var n=e.playerIndex!==t,r=null!==e.endPercent;return n&&r}))})),r={total:n.length,count:d.sumBy(n,"endPercent")||0};return r.ratio=r.total?r.count/r.total:null,{result:r,simple:b(r,1)}}}),Object(o.a)(r,f.HIGH_DAMAGE_PUNISHES,{id:f.HIGH_DAMAGE_PUNISHES,name:"Highest Damage Punish",type:"number",betterDirection:"higher",recommendedRounding:1,calculate:function(e,t){var n=d.flatMap(e,(function(e){var n=d.get(e,["stats","conversions"])||[];return d.filter(n,(function(e){var n=e.playerIndex===t,r=null!==e.endPercent;return n&&r}))})),r=function(e){return e.endPercent-e.startPercent},a=d.orderBy(n,[r],"desc"),o=d.first(a),c={text:"N/A",number:null};return o&&(c.number=r(o),c.text=c.number.toFixed(1)),{result:d.take(a,5),simple:c}}}),Object(o.a)(r,f.DAMAGE_DONE,{id:f.DAMAGE_DONE,name:"Total Damage Done",type:"number",betterDirection:"higher",recommendedRounding:1,calculate:function(e,t){return p(e,t,"damagePerOpening",1,"count")}}),r);function p(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"ratio",o=d.map(e,(function(e){var r=d.get(e,["stats","overall"]);return d.keyBy(r,"playerIndex")[t][n]})),c=g(o),i=b(c,r,a);return{result:c,simple:i}}function g(e){var t={};return t.count=d.sumBy(e,"count")||0,t.total=d.sumBy(e,"total")||0,t.ratio=t.total?t.count/t.total:null,t}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ratio",r={};switch(n){case"ratio":r.number=e.ratio,r.text=null!==e.ratio?e.ratio.toFixed(t):"N/A";break;case"count":r.number=e.count,r.text=e.count.toFixed(t)}return r}function h(e){var t=d.first(e),n=d.map(t.settings.players,"playerIndex"),r=[n,d.chain(n).clone().reverse().value()];return d.flatMap(f,(function(t){var n=m[t];if(!n.calculate)return[];var o=d.map(r,(function(t){var r=n.calculate(e,t[0],t[1]);return r.port=t[0]+1,r})),c=Object(a.a)({},n);return delete c.calculate,c.results=o,[c]}))}function v(e){var t=d.orderBy(e,[function(e){return e.metadata.startAt}],["asc"]),n=function(e){return function(t){var n;return n={port:t.port,characterId:t.characterId,characterColor:t.characterColor,nametag:t.nametag,characterName:l.getCharacterName(t.characterId)},Object(o.a)(n,"characterColor",l.getCharacterColorName(t.characterId,t.characterColor)),Object(o.a)(n,"gameResult",function(e,t){var n=e.gameEnd;if(!n)return"unknown";var r=d.get(e.settings,["players"]),a=d.filter(r,(function(e){return e.playerIndex!==t})),o=d.get(a,[0,"playerIndex"]);switch(n.gameEndMethod){case 1:return"unknown";case 2:var c=d.get(e.latestFrame,"players")||[],i=d.get(c,[t,"post","stocksRemaining"]),u=d.get(c,[o,"post","stocksRemaining"]);return 0===i&&0===u?"unknown":0===i?"loser":"winner";case 7:return n.lrasInitiatorIndex===t?"loser":"winner"}return"unknown"}(e,t.playerIndex)),n}};return d.map(t,(function(e){var t=n(e);return{stage:{id:e.settings.stageId,name:i.getStageName(e.settings.stageId)},players:d.map(e.settings.players,t),startTime:e.metadata.startAt,duration:j(e.stats.lastFrame)}}))}function O(e){var t=[f.KILL_MOVES,f.NEUTRAL_OPENER_MOVES,f.OPENINGS_PER_KILL,f.DAMAGE_DONE],n=function(e){var t=e.type,n=Object(a.a)({},e);return n.results=d.map(e.results,(function(e){return d.get(e,["simple",t])})),n},r=[],o=d.keyBy(e,"id"),c=o;d.forEach(t,(function(e){var t=o[e];r.push(n(t)),delete c[e]}));var i=o[f.SELF_DESTRUCTS],u=i.results[0].simple.number,l=i.results[0].simple.number;u>1||l>1||delete c[f.SELF_DESTRUCTS];var s=d.shuffle(c),m=d.take(s,2);return d.forEach(m,(function(e){r.push(n(e))})),r}function j(e){var t=s.duration(e/60,"seconds");return s.utc(t.as("milliseconds")).format("m:ss")}t.a=function(e){return function(e){var t=h(e);return{games:v(e),summary:t,btsSummary:O(t)}}(function(e){var t=d.groupBy(e,(function(e){return 2===e.settings.players.length})),n=d.get(t,!1)||[];d.some(n)&&(console.log("The following games have been excluded because they are not singles games:"),d.forEach(n,(function(e){console.log(e.filePath)})),console.log());var r=d.get(t,!0)||[],a=d.chain(r).groupBy((function(e){var t=d.map(e.settings.players,"port");return d.join(t,"-")})).orderBy(["length"],["desc"]).value(),o=a.shift();if(d.some(a)){console.log("The following games have been excluded because the player ports differ:");var c=d.flatten(a);d.forEach(c,(function(e){console.log(e.filePath)})),console.log()}if(d.isEmpty(o))throw new Error("There were no valid games found to compute stats from.");return console.log("Including ".concat(o.length," games for stat calculation...")),o}(e))}},67:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var r=n(10),a=n.n(r),o=n(22),c=n(28);n(43);function i(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(a.a.mark((function t(n){var r,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(n);case 2:return r=t.sent,o=new Int8Array(r),i=e.from(o),t.abrupt("return",new c.SlippiGame(i));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(e,t){return{filePath:e,settings:t.getSettings(),frames:t.getFrames(),stats:t.getStats(),metadata:t.getMetadata(),latestFrame:t.getLatestFrame(),gameEnd:t.getGameEnd()}}function s(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.onabort=function(){return n("file reading was aborted")},r.onerror=function(){return n("file reading has failed")},r.readAsBinaryString?(r.addEventListener("load",(function(){for(var t=null!=this.resultString?this.resultString:this.result,n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);e(n.buffer)}),!1),r.readAsBinaryString(t)):(r.addEventListener("load",(function(){this.result?e(this.result):n("no data read")}),!1),r.readAsArrayBuffer(t))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(29).Buffer)},94:function(e,t,n){e.exports=n.p+"static/media/powered-by.61867ea8.png"},97:function(e,t,n){e.exports=n(177)},98:function(e,t,n){}},[[97,1,2]]]);
//# sourceMappingURL=main.99857782.chunk.js.map