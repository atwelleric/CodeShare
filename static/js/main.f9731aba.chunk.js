(this["webpackJsonpsnippet-app"]=this["webpackJsonpsnippet-app"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(11),s=a(6),i="https://codesharebackend.herokuapp.com/";a(91);var m=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],h=u[1],E=e.searchString,p=e.authToken,b=Object(n.useState)(),g=Object(s.a)(b,2),f=g[0],v=g[1];Object(n.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(){h(!0)})),fetch("".concat(i,"users/").concat(p.username)).then((function(e){return e.json()})).then((function(e){v(e),console.log(p)}))}),[p.username]);var j=c.filter((function(e){return-1!==e.title.toLowerCase().indexOf(E.toLowerCase())}));return d?r.a.createElement("div",null,"There was an error retrieving the code"):(console.log(f),r.a.createElement("div",{className:"box"},j.map((function(e){return r.a.createElement(o.b,{to:"/code/".concat(e._id),key:e._id},f?r.a.createElement("div",{className:e.author._id===f._id?"user-card":"code-card"},r.a.createElement("h2",null,e.title),r.a.createElement("img",{className:"code-card-img",src:e.img,alt:e.title}),r.a.createElement("h3",null,"Created by: ",e.author.email)):r.a.createElement("div",{className:"code-card"},r.a.createElement("h2",null,e.title),r.a.createElement("img",{className:"code-card-img",src:e.img,alt:e.title}),r.a.createElement("h3",null,"Created by: ",e.author.email)))}))))},u=a(19),d=a(17),h=a(66),E=a(67),p=a(76),b=a(74),g=(a(75),a(8)),f=(a(96),RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),v=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),fetch("".concat(i,"users/signup"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({username:n.state.userName,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){n.setState({createdUser:!0})})).catch(console.error)},n.handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value,c=Object(d.a)({},n.state.formErrors);switch(a){case"userName":c.userName=r.length<3?"minimum 3 characaters required":"";break;case"email":c.email=f.test(r)?"":"invalid email address";break;case"password":c.password=r.length<6?"minimum 6 characaters required":""}n.setState(Object(u.a)({formErrors:c},a,r))},console.log(e),n.state={userName:null,email:null,password:null,createdUser:!1,formErrors:{userName:"",email:"",password:""}},n}return Object(E.a)(a,[{key:"componentDidUpdate",value:function(){this.state.createdUser&&console.log(this.state.createdUser)}},{key:"render",value:function(){var e=this.state.formErrors;return r.a.createElement(r.a.Fragment,null,this.state.createdUser&&r.a.createElement(g.a,{to:"/login"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("button",{className:"close",onClick:this.props.handleSignUp},"X"),r.a.createElement("h1",null,"Create Account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"userName"},r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("input",{className:e.userName.length>0?"error":null,placeholder:"User Name",type:"text",name:"userName",noValidate:!0,onChange:this.handleChange}),e.userName.length>0&&r.a.createElement("span",{className:"errorMessage"},e.userName)),r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:e.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",onChange:this.handleChange}),e.email.length>0&&r.a.createElement("span",{className:"errorMessage"},e.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:e.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.password)),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit"},"Create Account"),r.a.createElement(o.b,{to:"/login"},"Already Have an Account?"))))))}}]),a}(n.Component);a(97);var j=function(e){e.authToken;var t=e.setAuthToken,a=(e.user,e.setUser,Object(n.useState)({username:"",password:""})),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(!1),h=Object(s.a)(m,2),E=h[0],p=h[1],b=Object(n.useState)(!1),f=Object(s.a)(b,2),v=f[0],j=f[1],N=function(e){e.persist(),o(Object(d.a)(Object(d.a)({},l),{},Object(u.a)({},e.target.name,e.target.value)))};return E?r.a.createElement(g.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("button",{className:"close",onClick:e.handleLogin},"X"),r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("".concat(i,"users/signin"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){t(e),p(!0)})).catch((function(e){console.log(e),j(!0)}))}},r.a.createElement("div",{className:"userName"},r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("input",{placeholder:"User Name",type:"text",name:"username",onChange:N})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",onChange:N})),r.a.createElement("div",{className:"loginAccount"},r.a.createElement("button",{type:"submit"},"Submit"))),v&&r.a.createElement("p",{className:"fail-login"},"Login Failed Try Again!"))))};a(98);var N=function(e){var t=e.searchString,a=e.setSearchString,c=e.authToken,l=e.setAuthToken,o=e.user,i=e.setUser,u=Object(n.useState)(!1),d=Object(s.a)(u,2),h=d[0],E=d[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),g=b[0],f=b[1],N=function(){E(!h)},O=function(){f(!g)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"link-container"},""!==c&&r.a.createElement("h1",null,c.username),""===c&&r.a.createElement("button",{className:"link",onClick:N},"Login"),""===c&&r.a.createElement("button",{className:"link",onClick:O},"Sign Up")),g&&r.a.createElement("div",{className:"modal"},r.a.createElement(v,{handleSignUp:O})),h&&r.a.createElement("div",{className:"modal"},r.a.createElement(j,{handleLogin:N,authToken:c,setAuthToken:l,user:o,setUser:i})),r.a.createElement("h1",null,"Home Page"),r.a.createElement(m,{searchString:t,setSearchString:a,authToken:c}))};a(99);var O=function(e){return r.a.createElement("form",{className:"code-form",encType:"multipart/form-data",onSubmit:e.handleSubmit},r.a.createElement("label",{className:"label",htmlFor:"title"},"Title"),r.a.createElement("input",{className:"title-input",type:"text",placeholder:"Code Title",value:e.code.title,onChange:e.handleChange,required:!0,id:"title",name:"title"}),r.a.createElement("label",{className:"label",htmlFor:"body"},"Code"),r.a.createElement("textarea",{className:"code-input",rows:"25",value:e.code.body,onChange:e.handleChange,placeholder:"Code",name:"body",id:"body"}),r.a.createElement("label",{className:"label",htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"description-input",value:e.code.description,onChange:e.handleChange,placeholder:"Code Description",name:"description",id:"description"}),r.a.createElement("label",{className:"label",htmlFor:"image"},"Image"),r.a.createElement("input",{className:"image-input",type:"file",onChange:e.handleChange,placeholder:"Code image",name:"img",id:"img"}),e.notLoggedIn&&r.a.createElement("p",{className:"not-login"},"You must be logged in"),r.a.createElement("button",{className:"submit-button",type:"submit"},"Submit"))};var S=function(e){var t=e.authToken,a=Object(n.useState)({title:"",body:"",description:"",img:""}),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(null),h=Object(s.a)(m,2),E=h[0],p=h[1],b=Object(n.useState)(!1),f=Object(s.a)(b,2),v=f[0],j=f[1];return E?r.a.createElement(g.a,{to:"/code/".concat(E)}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Create a new code snippet"),r.a.createElement(O,{code:l,handleChange:function(e){e.persist(),o(Object(d.a)(Object(d.a)({},l),{},Object(u.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault();var a=new FormData(e.target);null!==t?fetch(i,{method:"POST",headers:{Authorization:"Bearer ".concat(t.token)},body:a}).then((function(e){return e.json()})).then((function(e){p(e._id)})).catch():j(!0)},notLoggedIn:v}))},C=a(142),w=a(153),k=a(117),y=a(136),T=a(138),F=a(139),D=a(140),x=a(141),U=Object(k.a)({root:{"& .MuiBottomNavigationAction-root":{minWidth:0,maxWidth:250},"& .MuiSvgIcon-root":{fill:"black","&:hover":{fontSize:"1.8rem"}}}});var A=function(e){var t=U();return r.a.createElement(y.a,{width:"auto",style:{background:"#DDDDDD"}},r.a.createElement(T.a,{className:t.root,style:{padding:0},icon:r.a.createElement(F.a,null)}),r.a.createElement(T.a,{className:t.root,style:{padding:0},icon:r.a.createElement(D.a,null)}),r.a.createElement(T.a,{className:t.root,style:{padding:0},icon:r.a.createElement(x.a,null)}))};a(100);var I=function(e){var t=e.searchString,a=e.setSearchString,n=Object(g.g)();return r.a.createElement("form",{onSubmit:function(e){console.log(n),e.preventDefault(),console.log(t),n.push("/")},className:"form-horizontal"},r.a.createElement("input",{type:"text",name:"searchString",required:!0,placeholder:"Search",onChange:function(e){e.persist(),a(e.target.value)},value:t}))},L=a(154),P=a(145),z=a(146),_=a(155),B=a(147),M=a(148),q=a(149),J=a(150),W=a(151),H=a(55),Z=a(143),$=a(144),X=a(152),R=Object(C.a)((function(e){return{menuSliderContainer:{width:250,background:"#DDDDDD",height:"100%"},listTextColor:{color:"#000000"}}})),V=[{listIcon:r.a.createElement(Z.a,null),listText:"Home",listPath:"/"},{listIcon:r.a.createElement($.a,null),listText:"Create Code",listPath:"/create"}];var Y=function(e){var t,a=Object(n.useState)({left:!1}),c=Object(s.a)(a,2),l=c[0],i=c[1],m=function(e,t){return function(){i(Object(d.a)(Object(d.a)({},l),{},Object(u.a)({},e,t)))}},h=R();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{component:"nav"},r.a.createElement(q.a,{position:"static",style:{background:"#0074D9"}},r.a.createElement(J.a,null,r.a.createElement(W.a,{onClick:m("left",!0)},r.a.createElement(X.a,{style:{color:"#FFFFFF"}})),r.a.createElement(I,{searchString:e.searchString,setSearchString:e.setSearchString}),r.a.createElement(H.a,{variant:"h5",style:{color:"#FFFFFF"}}),r.a.createElement(w.a,{anchor:"left",open:l.left,onClose:m("left",!1)},(t="left",r.a.createElement(L.a,{className:h.menuSliderContainer,component:"div",onClick:m(t,!1)},r.a.createElement(P.a,null),r.a.createElement(z.a,null,V.map((function(e,t){return r.a.createElement(_.a,{button:!0,key:t,component:o.b,to:e.listPath},r.a.createElement(B.a,{className:h.listTextColor},e.listIcon),r.a.createElement(M.a,{className:h.listTextColor,primary:e.listText}))}))))),r.a.createElement(A,null))))))},G=(a(101),a(61));var K=function(e){var t=e.authToken,a=Object(n.useState)(null),c=Object(s.a)(a,2),l=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),h=d[0],E=d[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),f=b[0],v=b[1];return Object(n.useEffect)((function(){fetch("".concat(i,"show/").concat(e.codeId)).then((function(e){return e.json()})).then((function(e){m(e),v(!0)}))}),[]),h?r.a.createElement(g.a,{to:"/"}):f?r.a.createElement("div",{className:"code-info-snip"},r.a.createElement("h1",null,"Code Snippet"),r.a.createElement("h2",null,l.title),r.a.createElement(G.a,{text:l.body,language:"javascript",theme:G.b,wrapLines:!0,className:"hello"}),r.a.createElement("p",null,l.description),r.a.createElement("img",{className:"code-info-image",src:l.img,alt:l.description}),r.a.createElement("div",{className:"button-horizontal"},r.a.createElement(o.b,{to:"".concat(l._id,"/edit"),className:"button"},"Edit"),r.a.createElement("button",{className:"button",onClick:function(a){fetch("".concat(i).concat(e.codeId),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(){E(!0)}))}},"Delete"))):r.a.createElement("div",null,"Loading...")};var Q=function(e){var t=e.codeId,a=e.authToken,c=Object(n.useState)(null),l=Object(s.a)(c,2),o=l[0],m=l[1],h=Object(n.useState)(null),E=Object(s.a)(h,2),p=E[0],b=E[1],f=Object(n.useState)(!1),v=Object(s.a)(f,2),j=v[0];return v[1],Object(n.useEffect)((function(){fetch("".concat(i,"show/").concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),m(e)}))}),[]),p?r.a.createElement(g.a,{to:"/code/".concat(p)}):o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Edit Code"),r.a.createElement(O,{code:o,handleChange:function(e){e.persist(),m(Object(d.a)(Object(d.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),console.log(o);var n=new FormData(e.target);fetch("".concat(i).concat(t),{method:"PUT",headers:{Authorization:"Bearer ".concat(a.token)},body:n}).then((function(e){return e.json()})).then((function(e){b(e._id),console.log(e)})).catch(console.error)},notLoggedIn:j})):r.a.createElement("div",null,"Loading...")};var ee=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),h=d[0],E=d[1];return r.a.createElement("div",{className:"main"},r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement(Y,{searchString:a,setSearchString:c})}}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{searchString:a,setSearchString:c,authToken:i,setAuthToken:m,setUser:E,user:h})}}),r.a.createElement(g.b,{path:"/create",render:function(){return r.a.createElement(S,{authToken:i})}}),r.a.createElement(g.b,{exact:!0,path:"/code/:id",render:function(e){return r.a.createElement(K,{codeId:e.match.params.id,authToken:i})}}),r.a.createElement(g.b,{exact:!0,path:"/code/:id/edit",render:function(e){return r.a.createElement(Q,{codeId:e.match.params.id,authToken:i})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(113);l.a.render(r.a.createElement(o.a,{basename:"/front-end-group"},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(114)},91:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[86,152,153]]]);
//# sourceMappingURL=main.f9731aba.chunk.js.map