(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){e.exports=n(65)},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(18),s=(n(39),n(12)),u=n(13),i=n(16),m=n(14),p=n(1),d=n(15),v=n(19),E=n.n(v),h=n(32),f=n(10),b=n.n(f);var g={init:function(){},log:function(e){console.error(e)}};b.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(g.log("Logging error",e),d.b.error("An unexpected error occurred.")),Promise.reject(e)}));var y={get:b.a.get,post:b.a.post,put:b.a.put,delete:b.a.delete};var w=function(){return r.a.createElement("div",{className:"container my-4"},r.a.createElement("h3",{className:"text-center"},"GCP SERVICES"))};var j=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement(w,null),t)},k=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={services:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/api/services");case 2:t=e.sent,n=t.data,this.setState({services:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.services;return r.a.createElement(j,null,e?r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.state.services.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name))}))))):r.a.createElement("div",null,"No Data Found"))}}]),n}(a.Component),O=(n(60),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:k}),"s      ",r.a.createElement(p.a,{from:"/",exact:!0,to:"/"}),r.a.createElement(p.a,{to:"/not-found"}))," ")," ")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(64);o.a.render(r.a.createElement(l.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.aca30a93.chunk.js.map