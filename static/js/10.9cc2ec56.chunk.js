(this["webpackJsonpaee-front"]=this["webpackJsonpaee-front"]||[]).push([[10],{259:function(e,n,t){(function(n){var t="Expected a function",r=9007199254740991,a="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")();function l(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}function f(e,n){for(var t=-1,r=n.length,a=e.length;++t<r;)e[a+t]=n[t];return e}var p=Object.prototype,m=p.hasOwnProperty,d=p.toString,g=u.Symbol,b=p.propertyIsEnumerable,h=g?g.isConcatSpreadable:void 0,v=Math.max;function y(e){return O(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}(e.length)&&!function(e){var n=function(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}(e)?d.call(e):"";return n==o||n==i}(e)}(e)}(e)&&m.call(e,"callee")&&(!b.call(e,"callee")||d.call(e)==a)}(e)||!!(h&&e&&e[h])}var O=Array.isArray;var j=function(e){return n=function(n){var r=(n=function e(n,t,r,a,o){var i=-1,c=n.length;for(r||(r=y),o||(o=[]);++i<c;){var s=n[i];t>0&&r(s)?t>1?e(s,t-1,r,a,o):f(o,s):a||(o[o.length]=s)}return o}(n,1)).length,a=r;for(e&&n.reverse();a--;)if("function"!=typeof n[a])throw new TypeError(t);return function(){for(var e=0,t=r?n[e].apply(this,arguments):arguments[0];++e<r;)t=n[e].call(this,t);return t}},r=v(void 0===r?n.length-1:r,0),function(){for(var e=arguments,t=-1,a=v(e.length-r,0),o=Array(a);++t<a;)o[t]=e[r+t];t=-1;for(var i=Array(r+1);++t<r;)i[t]=e[t];return i[r]=o,l(n,this,i)};var n,r}(!0);e.exports=j}).call(this,t(74))},265:function(e,n,t){"use strict";t.d(n,"e",(function(){return l})),t.d(n,"d",(function(){return f})),t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(260),a=t(261);function o(){var e=Object(r.a)(["\n  mutation deleteUser($id: String!){\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  mutation addUser(\n    $id: String!,\n    $name: String\n    $email: String\n    $profession: String\n    $password: String\n  ){\n    updateUser (id: $id,name: $name, email: $email, profession: $profession password: $password) {\n      id\n      name\n      email\n      profession\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  mutation addUser(\n    $name: String! \n    $email: String! \n    $profession: String! \n    $password: String! \n  ){\n    createUser (name: $name, email: $email, profession: $profession password: $password){\n      id\n      name\n      email\n      profession\n    }\n  }\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n  query ($id: String!){\n    user(id: $id) {\n      id\n      name\n      email\n      profession\n    }\n  }\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  {\n    users {\n      id,\n      name,\n      email,\n      profession,\n    }\n  }\n"]);return u=function(){return e},e}var l=Object(a.a)(u()),f=Object(a.a)(s()),p=Object(a.a)(c()),m=Object(a.a)(i()),d=Object(a.a)(o())},284:function(e,n,t){"use strict";t.r(n);var r=t(90),a=t.n(r),o=t(96),i=t(10),c=t(30),s=t(0),u=t.n(s),l=t(95),f=t(231),p=t(250),m=t(232),d=t(222),g=t(17),b=t(61),h=t(89),v=t(123),y=Object(v.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.background}},title:{marginBottom:e.spacing(4),fontSize:48,color:e.palette.text.hint,fontWeight:"bold",textAlign:"center"},layout:Object(i.a)({borderRadius:e.spacing(1),width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3),marginBottom:e.spacing(10)},e.breakpoints.up(600+2*e.spacing(2)),{width:480,marginLeft:"auto",marginRight:"auto"}),paper:{borderRadius:e.spacing(1),backgroundColor:e.palette.background.paper,marginBottom:e.spacing(2),padding:e.spacing(1)},form:{margin:e.spacing(2,4)},button:{marginTop:e.spacing(5)},link:{textDecoration:"none"}}}));function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=t(277),E=t(259),S=t(265),$=E(Object(w.a)(S.d,{name:"getUser",options:function(e){return{errorPolicy:"all",notifyOnNetworkStatusChange:!0,variables:{id:e.match.params.id}}}}),Object(w.a)(S.c,{name:"onEdit",options:{errorPolicy:"all",notifyOnNetworkStatusChange:!0}}))((function(e){var n=e.onEdit,t=e.getUser,r=t.loading,v=t.user,O=e.history,w=e.match.params.id,E=Object(s.useState)({name:"",email:"",profession:"",password:""}),S=Object(c.a)(E,2),$=S[0],x=S[1],k=function(){return O.push("/")},P=function(e){return function(n){return x(j({},$,Object(i.a)({},e,n.target.value)))}},C=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n({variables:j({},$,{id:w})});case 3:e.sent&&k();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){v&&x(j({},$,{},v))}),[v]);var N=y();return r?u.a.createElement(b.i,null):u.a.createElement("main",{className:N.layout},u.a.createElement(l.a,{className:N.paper},u.a.createElement(f.a,null),u.a.createElement(p.a,{textAlign:"center",fontWeight:600,fontSize:32,m:2},"Novo usu\xe1rio"),u.a.createElement(g.ValidatorForm,{className:N.form,onSubmit:C,onError:function(e){return console.log(e)}},u.a.createElement(g.TextValidator,{name:"name",label:"Nome",value:$.name,onChange:P("name"),validators:["required"],errorMessages:[h.b],color:"secondary",margin:"normal",autoFocus:!0,fullWidth:!0}),u.a.createElement(g.TextValidator,{name:"email",label:"Email",value:$.email,onChange:P("email"),validators:["required","isEmail"],errorMessages:[h.b,h.a],color:"secondary",margin:"normal",fullWidth:!0}),u.a.createElement(g.TextValidator,{name:"profession",label:"Profiss\xe3o",value:$.profession,onChange:P("profession"),validators:["required"],errorMessages:[h.b],color:"secondary",margin:"normal",fullWidth:!0}),u.a.createElement(g.TextValidator,{name:"password",label:"Senha",value:$.password,type:"password",onChange:P("password"),color:"secondary",margin:"normal",fullWidth:!0}),u.a.createElement(m.a,{container:!0,spacing:2,justify:"flex-end"},u.a.createElement(m.a,{item:!0},u.a.createElement(d.a,{onClick:k,color:"primary",fullWidth:!0,variant:"outlined",className:N.button},"Cancelar")),u.a.createElement(m.a,{item:!0},u.a.createElement(d.a,{type:"submit",color:"primary",fullWidth:!0,variant:"contained",className:N.button},"Adicionar"))))))}));n.default=$}}]);
//# sourceMappingURL=10.9cc2ec56.chunk.js.map