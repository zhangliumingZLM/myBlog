(window["webpackJsonpguodada-react-blog"]=window["webpackJsonpguodada-react-blog"]||[]).push([[13],{694:function(e,a,t){"use strict";t(361);var n=t(223),c=t(0),r=t.n(c),l=t(165);function i(e){var a=e.total,t=e.current,c=e.onChange,i=e.pageSize,o=e.style,s=void 0===o?{}:o,m=Object(l.useMediaQuery)({query:"(max-width: 736px)"});return r.a.createElement("div",{className:"app-pagination",style:s},r.a.createElement(n.a,{hideOnSinglePage:!0,current:t,onChange:c,total:a,pageSize:i,simple:m}))}i.defaultProps={pageSize:10},a.a=i},718:function(e,a,t){},742:function(e,a,t){"use strict";t.r(a);t(219);var n=t(127),c=(t(65),t(3)),r=(t(677),t(680)),l=t(0),i=t.n(l),o=(t(718),t(221)),s=t(40),m=t(27),p=t(694),u=t(222);a.default=function(e){var a=Object(u.a)({requestUrl:"/article/list",queryParams:{pageSize:o.a},fetchDependence:[e.location.pathname,e.location.search]}),t=a.dataList,d=a.loading,g=a.pagination,E=Object(s.e)(t,(function(e){return e.createdAt.slice(0,4)}));return i.a.createElement("div",{className:"app-archives"},i.a.createElement(n.a,{tip:"Loading...",spinning:d,delay:500},i.a.createElement(r.a,null,E.map((function(e,a){return i.a.createElement(l.Fragment,{key:a},0===a&&i.a.createElement(r.a.Item,null,i.a.createElement("span",{className:"desc"},"Nice! ".concat(g.total," posts in total. Keep on posting.")),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement(r.a.Item,{dot:i.a.createElement(c.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},i.a.createElement("div",{className:"year"},e[0].createdAt.slice(0,4),"..."),i.a.createElement("br",null)),e.map((function(e){return i.a.createElement(r.a.Item,{key:e.id},i.a.createElement("span",{style:{fontSize:"13px",marginRight:"16px"}},e.createdAt.slice(5,10)),i.a.createElement(m.b,{to:"/article/".concat(e.id)},e.title))})))}))),i.a.createElement(p.a,Object.assign({},g,{style:{float:"initial",marginTop:10}}))))}}}]);