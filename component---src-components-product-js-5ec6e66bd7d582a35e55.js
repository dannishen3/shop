(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Al62:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var n=function(e,t){void 0===t&&(t="USD");var a=e.toFixed(2);return new Intl.NumberFormat(["en-US"],{style:"currency",currency:t,currencyDisplay:"symbol"}).format(a)};function l(e){var t;return"active"===e.status?e.on_sale&&(t="On Sale"):"sold-out"===e.status?t="Sold out":"coming-soon"===e.status&&(t="Coming soon"),t}},vian:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("vrFN"),r=a("Wbzz"),i=a("Bl7J"),s=a("Al62");t.default=function(e){var t=e.pageContext,a=t.product,n=t.previous_product,o=t.next_product,u=Object(s.b)(a),p=l.a.createElement("aside",{class:"related-products-container wrapper","aria-label":"Related products"},(!!n||!!o)&&l.a.createElement("ul",{class:"prev-next-products"},!!n&&l.a.createElement("li",null,l.a.createElement(r.Link,{to:n},"Previous Product")),!!o&&l.a.createElement("li",null,l.a.createElement(r.Link,{to:o},"Next Product"))));return l.a.createElement(i.a,{bodyClass:"main",bodyId:"product_page",aside:p},l.a.createElement(c.a,{title:"Product"}),l.a.createElement("div",{class:"product-page"},l.a.createElement("div",{class:"product-page-headings"},!!u&&l.a.createElement("span",{class:"product-status"},u),!!a.inventory&&l.a.createElement("span",{class:"product-status"},a.inventory),l.a.createElement("h1",{class:"product-title has-dash"},a.name),l.a.createElement("div",{class:"product-price"},a.xvariable_pricing?Object(s.a)(a.xmin_price)+" - "+Object(s.a)(a.xmax_price):""+Object(s.a)(a.default_price))),l.a.createElement("div",{class:"product-images"+(a.images.length>1?" product-images-slideshow":"")},l.a.createElement("ul",{class:"slides"},a.images.map((function(e){return l.a.createElement("li",null,l.a.createElement("img",{alt:a.name,class:"product-image",src:e.childImageSharp.fluid.src,srcSet:e.childImageSharp.fluid.srcSet}))})))),l.a.createElement("div",{class:"product-details"},!!a.description&&l.a.createElement("div",{class:"product-description"},a.description),"active"===a.status&&l.a.createElement("div",null,l.a.createElement("input",{type:"hidden",name:"utf8",value:"✓"}),a.paypal_id&&l.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post"},l.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),l.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:a.paypal_id}),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"hidden",name:"on0",value:a.options_label}),a.options_value)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{class:"select"},l.a.createElement("select",{class:"product_option_select",name:"os0","aria-label":"Select option"},a.options.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))),l.a.createElement("svg",{viewBox:"0 0 15 7.6","enable-background":"new 0 0 15 7.6"},l.a.createElement("path",{d:"M15 1.1l-7.5 6.5-7.5-6.3 1-1.2 6.5 5.5 6.5-5.6z"})))))),l.a.createElement("input",{type:"hidden",name:"currency_code",value:"USD"}),l.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}),l.a.createElement("img",{class:"paypal-pixel",alt:"",border:"0",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))))))}}}]);
//# sourceMappingURL=component---src-components-product-js-5ec6e66bd7d582a35e55.js.map