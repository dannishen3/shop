(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Al62:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var r=function(e,t){void 0===t&&(t="USD");var a=e.toFixed(2);return new Intl.NumberFormat(["en-US"],{style:"currency",currency:t,currencyDisplay:"symbol"}).format(a)};function c(e){var t;return"active"===e.status?e.on_sale&&(t="On Sale"):"sold-out"===e.status?t="Sold out":"coming-soon"===e.status&&(t="Coming soon"),t}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),c=a.n(r),n=a("Wbzz"),i=a("Bl7J"),l=a("vrFN"),s=a("Al62"),u=function(e){var t=e.products;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{class:"page-title visually-hidden"},"Products"),t.length>0&&c.a.createElement("div",{class:"product-list-container"},c.a.createElement("div",{class:"product-list"},t.map((function(e){var t,a,r,i;return e=e.node,c.a.createElement("div",{key:e.id,class:"product-list-thumb crop-to-square under_image"},c.a.createElement(n.Link,{class:"product-list-link",title:"View "+e.name,to:e.url},c.a.createElement("div",{class:"product-list-thumb-container"},c.a.createElement("figure",{class:"product-list-image-container"},c.a.createElement("div",{class:"image-wrapper"},c.a.createElement("img",{alt:"",class:"product-list-image image-wide",src:null===(t=e.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.childImageSharp.fluid.src,srcSet:null===(r=e.images)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.childImageSharp.fluid.srcSet})))),c.a.createElement("div",{class:"product-list-thumb-info"},c.a.createElement("div",{class:"product-list-item-background"}),c.a.createElement("div",{class:"product-list-thumb-info-headers"},c.a.createElement("div",{class:"product-list-thumb-name"},e.name),c.a.createElement("div",{class:"product-list-thumb-price"},e.xvariable_pricing?Object(s.a)(e.xmin_price)+" - "+Object(s.a)(e.xmax_price):""+Object(s.a)(e.default_price),c.a.createElement("div",{class:"product-list-thumb-status"},Object(s.b)(e)),c.a.createElement("div",{class:"product-list-thumb-status"},e.inventory))))))})))))};t.default=function(){var e=Object(n.useStaticQuery)("1746188146");return c.a.createElement(i.a,{bodyClass:"theme",bodyId:"home_page"},c.a.createElement(l.a,{title:"Home"}),c.a.createElement(u,{products:e.allProductsJson.edges}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d65c9e97e3d7e0fae88b.js.map