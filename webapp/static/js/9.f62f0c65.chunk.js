(window["webpackJsonpguodada-react-blog"]=window["webpackJsonpguodada-react-blog"]||[]).push([[9],{692:function(e,t,a){"use strict";var n=a(32),r=a.n(n),c=a(693),i=a.n(c);r.a.extend(i.a),t.a=r.a},693:function(e,t,a){e.exports=function(){"use strict";return function(e,t,a){e=e||{};var n=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function c(e,t,a,r){return n.fromToBase(e,t,a,r)}a.en.relativeTime=r,n.fromToBase=function(t,n,c,i,o){for(var l,s,m,u=c.$locale().relativeTime||r,d=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,p=0;p<f;p+=1){var y=d[p];y.d&&(l=i?a(t).diff(c,y.d,!0):c.diff(t,y.d,!0));var h=(e.rounding||Math.round)(Math.abs(l));if(m=l>0,h<=y.r||!y.r){h<=1&&p>0&&(y=d[p-1]);var g=u[y.l];o&&(h=o(""+h)),s="string"==typeof g?g.replace("%d",h):g(h,n,y.l,m);break}}if(n)return s;var E=m?u.future:u.past;return"function"==typeof E?E(s):E.replace("%s",s)},n.to=function(e,t){return c(e,t,this,!0)},n.from=function(e,t){return c(e,t,this)};var i=function(e){return e.$u?a.utc():a()};n.toNow=function(e){return this.to(i(this),e)},n.fromNow=function(e){return this.from(i(this),e)}}}()},696:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(21),r=a(0);function c(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1];return[a,function(e){if(e instanceof Promise)return new Promise((function(t,a){c(!0),e.then((function(e){t(e),c(!1)})).catch((function(e){a(e),c(!1)}))}))}]}},697:function(e,t,a){"use strict";a(65);var n=a(3),r=(a(164),a(71)),c=(a(217),a(79)),i=a(0),o=a.n(i),l=a(27),s=a(63),m=a(29),u=a(66);function d(e,t){var a=t.find((function(t){return t.name===e}));return a?a.color:""}t.a=Object(s.i)((function(e){var t=Object(m.useSelector)((function(e){return e.article.tagList})),a=e.tagList,i=e.categoryList;return o.a.createElement(o.a.Fragment,null,a.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{type:"vertical",style:{marginRight:7}}),o.a.createElement(u.a,{type:"icontags",style:{marginRight:7}}),a.map((function(e,a){return o.a.createElement(r.a,{key:a,color:d(e.name,t)},o.a.createElement(l.b,{to:"/tags/".concat(e.name)},e.name))}))),i.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{type:"vertical",style:{marginRight:7}}),o.a.createElement(n.a,{type:"folder",style:{marginRight:7}}),i.map((function(e,t){return o.a.createElement(r.a,{key:t,color:"#2db7f5"},o.a.createElement(l.b,{to:"/categories/".concat(e.name)},e.name))}))))}))},698:function(e,t,a){},703:function(e,t,a){"use strict";a(671);var n=a(673),r=(a(217),a(79)),c=(a(114),a(62)),i=(a(218),a(75)),o=(a(91),a(19)),l=a(21),s=(a(90),a(26)),m=(a(65),a(3)),u=(a(360),a(129)),d=(a(113),a(54)),f=a(0),p=a.n(f),y=(a(698),a(29)),h=(a(20),a(45)),g=a(40),E=a(84),b=a(696),v=(a(66),a(126),a(42)),O=(a(672),a(674)),I=a(128),j=a(692),w=a(220),L=d.a.TextArea;function C(e){var t=e.children,a=e.item,r=e.userInfo,c=e.articleId,o=e.commentId,u=e.replyId,d=e.replyVisible,y=a.user,E=Object(f.useState)(""),b=Object(l.a)(E,2),C=b[0],N=b[1];function k(){if(!r.userId)return i.a.warn("\u60a8\u672a\u767b\u9646\uff0c\u8bf7\u767b\u5f55\u540e\u518d\u8bd5\u3002");h.a.post("/discuss",{userId:r.userId,articleId:c,content:C.trim(),commentId:o}).then((function(t){e.onReply({commentId:0,replyId:0}),e.setCommentList(t.rows)}))}return Object(f.useEffect)((function(){d&&N("")}),[d]),p.a.createElement(n.a,{actions:[p.a.createElement("span",{onClick:function(){e.onReply({commentId:o,replyId:u})}},"Reply to"),p.a.createElement(p.a.Fragment,null,1===r.role&&p.a.createElement(O.a,{title:"\u662f\u5426\u5220\u9664\u8be5\u7559\u8a00\uff1f",cancelText:"\u53d6\u6d88",okText:"\u786e\u8ba4",onConfirm:function(){u?h.a.delete("/discuss/reply/".concat(u)).then((function(){var t=Object(I.a)(e.commentList),a=t.find((function(e){return e.id===o}));a.replies=a.replies.filter((function(e){return e.id!==u})),e.setCommentList(t)})):h.a.delete("/discuss/comment/".concat(o)).then((function(){var t=Object(I.a)(e.commentList);t=t.filter((function(e){return e.id!==o})),e.setCommentList(t)}))}},p.a.createElement(m.a,{type:"delete",className:"icon-delete"})))],author:p.a.createElement("span",null,y&&y.username),avatar:p.a.createElement(w.a,{userInfo:y}),content:p.a.createElement("div",{className:"article-detail",dangerouslySetInnerHTML:{__html:Object(g.g)(a.content,!0)}}),datetime:p.a.createElement(v.a,{title:a.createdAt},p.a.createElement("span",null,Object(j.a)(a.createdAt).fromNow()))},d&&p.a.createElement("div",{className:"reply-form"},p.a.createElement(L,{placeholder:"\u56de\u590d".concat(a.user.username,"..."),value:C,onChange:function(e){N(e.target.value)},onKeyUp:function(e){e.ctrlKey&&13===e.keyCode&&k()}}),p.a.createElement("div",{className:"reply-form-controls"},p.a.createElement("span",{className:"tip"},"Ctrl or \u2318 + Enter"),p.a.createElement(s.a,{htmlType:"submit",type:"primary",disabled:!C.trim(),onClick:k},"\u56de\u590d"))),t)}var N=function(e){var t=Object(y.useSelector)((function(e){return e.user})),a=e.commentList,n=e.articleId,r=Object(f.useState)({commentId:0,replyId:0}),c=Object(l.a)(r,2),i=c[0],o=c[1];return p.a.createElement("div",{className:"discuss-list"},a.map((function(a){return p.a.createElement(C,{item:a,key:a.id,articleId:n,userInfo:t,commentId:a.id,setCommentList:e.setCommentList,commentList:e.commentList,onReply:o,replyVisible:i.commentId===a.id&&!i.replyId},a.replies.map((function(r){return p.a.createElement(C,{item:r,key:r.id,articleId:n,userInfo:t,commentId:a.id,replyId:r.id,setCommentList:e.setCommentList,commentList:e.commentList,onReply:o,replyVisible:i.commentId===a.id&&i.replyId===r.id})})))})))},k=a(61),S=d.a.TextArea,M=function(e){var t=e.onChange,a=e.onSubmit,n=e.submitting,r=e.value,c=e.articleId;return p.a.createElement("div",null,p.a.createElement(u.a.Item,null,p.a.createElement(S,{rows:4,placeholder:"\u8bf4\u70b9\u4ec0\u4e48...",onChange:t,value:r})),p.a.createElement(u.a.Item,null,p.a.createElement("div",{className:"controls"},p.a.createElement(m.a,{type:"info-circle",className:"controls-tip-icon"}),p.a.createElement("span",{className:"controls-tip"},"\u652f\u6301 Markdown \u8bed\u6cd5"),p.a.createElement(s.a,{className:"disscus-btn",htmlType:"submit",loading:n,onClick:a,type:"primary"},-1!==c?"\u6dfb\u52a0\u8bc4\u8bba":"\u7559\u8a00"))))};t.a=function(e){var t=Object(y.useDispatch)(),a=Object(k.b)(),s=Object(y.useSelector)((function(e){return e.user})),u=s.username,d=(s.role,e.commentList),v=e.articleId,O=Object(f.useState)(""),I=Object(l.a)(O,2),j=I[0],L=I[1],C=Object(b.a)(),S=Object(l.a)(C,2),x=S[0],R=S[1];function T(e){switch(e.key){case"login":a.emit("openSignModal","login");break;case"register":a.emit("openSignModal","register");break;case"loginout":t(Object(E.b)())}}return p.a.createElement("div",{id:"discuss"},p.a.createElement("div",{className:"discuss-header"},p.a.createElement("span",{className:"discuss-count"},Object(g.a)(d)),-1!==v?"\u6761\u8bc4\u8bba":"\u6761\u7559\u8a00",p.a.createElement("span",{className:"discuss-user"},p.a.createElement(c.a,{overlay:u?p.a.createElement(o.a,{onClick:T},p.a.createElement(o.a.Item,{key:"loginout"},"\u6ce8\u9500")):p.a.createElement(o.a,{onClick:T},p.a.createElement(o.a.Item,{key:"login"},"\u767b\u5f55"),p.a.createElement(o.a.Item,{key:"register"},"\u6ce8\u518c")),trigger:["click","hover"]},p.a.createElement("span",null,u||"\u672a\u767b\u5f55\u7528\u6237"," ",p.a.createElement(m.a,{type:"down"})))),p.a.createElement(r.a,{className:"hr"})),p.a.createElement(n.a,{avatar:u?p.a.createElement(w.a,{userInfo:s}):p.a.createElement(m.a,{type:"github",theme:"filled",style:{fontSize:40,margin:"5px 5px 0 0"}}),content:p.a.createElement(M,{onChange:function(e){return L(e.target.value)},onSubmit:function(){if(j)return s.username?void R(h.a.post("/discuss",{articleId:e.articleId,content:j,userId:s.userId})).then((function(t){L(""),e.setCommentList(t.rows)})):i.a.warn("\u60a8\u672a\u767b\u9646\uff0c\u8bf7\u767b\u5f55\u540e\u518d\u8bd5\u3002")},submitting:x,value:j,articleId:v})}),p.a.createElement(N,{commentList:d,articleId:v,setCommentList:e.setCommentList}))}},717:function(e,t,a){},752:function(e,t,a){"use strict";a.r(t);a(219);var n=a(127),r=(a(675),a(676)),c=(a(65),a(3)),i=(a(217),a(79)),o=a(70),l=a(21),s=a(0),m=a.n(s),u=(a(717),a(165)),d=a(45),f=a(40),p=a(696),y=a(697),h=a(66),g=(a(686),a(684)),E=g.a.Link;function b(e){var t=[];return e.replace(/<(h[1-6])[\s\S]+?(?=<\/\1>)/g,(function(e,a){var n=e.replace(/.*?>/,""),r=e.indexOf('"'),c=e.indexOf('">'),i="#".concat(e.slice(r+1,c));!function e(t,a){var n=t[t.length-1];n&&n.tag!==a.tag?e(n.children,a):t.push(a)}(t,{tag:a,title:n,href:i,children:[]})})),t}var v=function(e){var t=b(e.content);return m.a.createElement(g.a,{affix:!1},t.map((function e(t){var a=t.href,n=t.title,r=t.children;return m.a.createElement(E,{key:a,href:a,title:n},r.length>0&&r.map((function(t){return e(t)})))})))},O=a(703);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.default=function(e){var t=Object(p.a)(),a=Object(l.a)(t,2),g=a[0],E=a[1],b=Object(s.useState)({title:"",content:"",tags:[],categories:[],comments:[],createdAt:"",viewCount:0}),j=Object(l.a)(b,2),w=j[0],L=j[1],C=Object(s.useState)(!1),N=Object(l.a)(C,2),k=N[0],S=N[1];Object(s.useEffect)((function(){setTimeout((function(){var t=decodeURI(e.location.hash),a=document.querySelector('a[href="'.concat(t,'"]'));a&&t&&a.click()}),800)}),[]),Object(s.useEffect)((function(){E(d.a.get("/article/".concat(e.match.params.id))).then((function(e){e.content=Object(f.g)(e.content),L(e)})).catch((function(t){e.history.push("/404")}))}),[e.match.params.id]);var M=w.title,x=w.content,R=w.tags,T=w.categories,P=w.comments,A=w.createdAt,D=w.viewCount,F=parseInt(e.match.params.id),_=Object(u.useMediaQuery)({query:"(max-width: 1300px)"});return m.a.createElement(n.a,{tip:"Loading...",spinning:g},m.a.createElement("article",{className:"app-article",style:{paddingRight:_?0:275}},m.a.createElement("div",{className:"post-header"},m.a.createElement("h1",{className:"post-title"},M),m.a.createElement("div",{className:"article-desc"},m.a.createElement("span",{className:"post-time"},m.a.createElement(h.a,{type:"iconpost"}),"\xa0 Posted on \xa0",m.a.createElement("span",null,A.slice(0,10))),m.a.createElement(y.a,{tagList:R,categoryList:T}),m.a.createElement(i.a,{type:"vertical"}),m.a.createElement("a",{className:"comment-count",href:"#discuss",style:{color:"inherit"}},m.a.createElement(h.a,{type:"iconcomment"}),m.a.createElement("span",{style:{marginRight:5}}," ",Object(f.a)(P))),m.a.createElement(h.a,{type:"iconview",style:{marginRight:2}}),m.a.createElement("span",null,D))),m.a.createElement("div",{className:"article-detail",dangerouslySetInnerHTML:{__html:x}}),_?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"drawer-btn",onClick:function(e){return S(!0)}},m.a.createElement(c.a,{type:"menu-o",className:"nav-phone-icon"})),m.a.createElement(r.a,{title:M,placement:"right",closable:!1,onClose:function(e){return S(!1)},visible:k,getContainer:function(){return document.querySelector(".app-article")}},m.a.createElement("div",{className:"right-navigation"},m.a.createElement(v,{content:x})))):m.a.createElement("nav",{className:"article-navigation"},m.a.createElement(v,{content:x})),m.a.createElement(O.a,{articleId:F,commentList:P,setCommentList:function(e){L(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},w,{comments:e}))}})))}}}]);