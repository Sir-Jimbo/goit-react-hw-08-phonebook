(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{117:function(e,t,r){},118:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(0),a=r(24),o=r.n(a),u=r(19),s=r(13),i=r(61),b=r(47),j=r(48),l=r(50),O=r(49),f=r(8),d=r(20),g=Object(s.b)((function(e){return{isAuthenticated:d.a.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(n.jsxs)("nav",{className:"nav",children:[!t&&Object(n.jsx)(u.b,{to:"/",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Home"}),t&&Object(n.jsx)(u.b,{to:"/contacts",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Phonebook"})]})})),h=r(41),p=r.n(h),v=r(34),x=r.p+"static/media/default-avatar.e44fc4e2.png",m=r(134),k=r(136),C=Object(m.a)({root:{background:"linear-gradient(45deg, #f44336 30%, #f44336 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:36,padding:"0 20px"}});function S(e){var t=e.onClick,r=C();return Object(n.jsx)(k.a,{onClick:t,className:r.root,children:"Logout"})}var E,U,y,_,N,R,q,w,A={onLogout:v.a.logOut},T=Object(s.b)((function(e){return{name:d.a.getUsername(e),avatar:x}}),A)((function(e){var t=e.avatar,r=e.name,c=e.onLogout;return Object(n.jsxs)("div",{className:p.a.container,children:[Object(n.jsx)("img",{src:t,alt:"",width:"32",className:p.a.avatar}),Object(n.jsxs)("span",{className:p.a.name,children:["Welcome, ",r]}),Object(n.jsx)(S,{onClick:c})]})})),L=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u.b,{to:"/register",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Sign up"}),Object(n.jsx)(u.b,{to:"/login",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Log in"})]})},z=r(62),P=r.n(z),I=Object(s.b)((function(e){return{isAuthenticated:d.a.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(n.jsxs)("header",{className:P.a.container,children:[Object(n.jsx)(g,{}),t?Object(n.jsx)(T,{}):Object(n.jsx)(L,{})]})})),M=function(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)("main",{children:t})]})},H=r(63),F=r.n(H),G=function(e){var t=e.children;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:F.a.container,children:t})})},B=r(26),D=r(40),J=Object(s.b)((function(e){return{token:d.a.getToken(e)}}))((function(e){var t=e.component,r=e.token,c=e.redirectTo,a=Object(D.a)(e,["component","token","redirectTo"]);return Object(n.jsx)(f.b,Object(B.a)(Object(B.a)({},a),{},{render:function(e){return r?Object(n.jsx)(t,Object(B.a)({},e)):Object(n.jsx)(f.a,{to:c})}}))})),W=Object(s.b)((function(e){return{token:d.a.getToken(e)}}))((function(e){var t=e.component,r=e.token,c=e.redirectTo,a=Object(D.a)(e,["component","token","redirectTo"]);return Object(n.jsx)(f.b,Object(B.a)(Object(B.a)({},a),{},{render:function(e){return r&&a.restricted?Object(n.jsx)(f.a,{to:c}):Object(n.jsx)(t,Object(B.a)({},e))}}))})),Q=r(33),X=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,151))})),Y=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,152))})),Z=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,153))})),K=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,154))})),V=function(e){Object(l.a)(r,e);var t=Object(O.a)(r);function r(){return Object(b.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(n.jsx)(M,{children:Object(n.jsx)(G,{children:Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)(Q.a,{}),children:Object(n.jsxs)(f.d,{children:[Object(n.jsx)(W,{exact:!0,path:"/",restricted:!0,redirectTo:"/contacts",component:X}),Object(n.jsx)(W,{path:"/register",restricted:!0,redirectTo:"/contacts",component:Y}),Object(n.jsx)(W,{path:"/login",restricted:!0,redirectTo:"/contacts",component:Z}),Object(n.jsx)(J,{path:"/contacts",redirectTo:"/login",component:K})]})})})})}}]),r}(c.Component),$={onGetCurrentUser:v.a.getCurrentUser},ee=Object(s.b)(null,$)(V),te=r(39),re=r(5),ne=r(23),ce=r(65),ae=r.n(ce),oe=r(3),ue=r(10),se=r(12),ie=[],be="",je=!1,le=null,Oe=Object(re.c)(ie,(E={},Object(oe.a)(E,se.k,(function(e,t){return t.payload})),Object(oe.a)(E,se.c,(function(e,t){var r=t.payload;return[].concat(Object(te.a)(e),[r])})),Object(oe.a)(E,se.h,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),E)),fe=Object(re.c)(je,(U={},Object(oe.a)(U,se.j,(function(){return!0})),Object(oe.a)(U,se.k,(function(){return!1})),Object(oe.a)(U,se.i,(function(){return!1})),Object(oe.a)(U,se.b,(function(){return!0})),Object(oe.a)(U,se.c,(function(){return!1})),Object(oe.a)(U,se.a,(function(){return!1})),Object(oe.a)(U,se.g,(function(){return!0})),Object(oe.a)(U,se.h,(function(){return!1})),Object(oe.a)(U,se.f,(function(){return!1})),U)),de=Object(re.c)(be,Object(oe.a)({},se.d,(function(e,t){return t.payload}))),ge=function(e,t){return t.payload},he=Object(re.c)(le,(y={},Object(oe.a)(y,se.i,ge),Object(oe.a)(y,se.a,ge),Object(oe.a)(y,se.f,ge),Object(oe.a)(y,se.e,(function(){return null})),y)),pe=Object(ue.c)({contacts:Oe,filter:de,loading:fe,error:he}),ve=r(4),xe={name:null,email:null},me=Object(re.c)(xe,(_={},Object(oe.a)(_,ve.a.registerSuccess,(function(e,t){return t.payload.user})),Object(oe.a)(_,ve.a.loginSuccess,(function(e,t){return t.payload.user})),Object(oe.a)(_,ve.a.logoutSuccess,(function(){return xe})),Object(oe.a)(_,ve.a.getCurrentUserSuccess,(function(e,t){return t.payload})),_)),ke=Object(re.c)(null,(N={},Object(oe.a)(N,ve.a.registerSuccess,(function(e,t){return t.payload.token})),Object(oe.a)(N,ve.a.loginSuccess,(function(e,t){return t.payload.token})),Object(oe.a)(N,ve.a.logoutSuccess,(function(){return null})),N)),Ce=function(e,t){return t.payload},Se=Object(re.c)(null,(R={},Object(oe.a)(R,ve.a.registerError,Ce),Object(oe.a)(R,ve.a.loginError,Ce),Object(oe.a)(R,ve.a.logoutError,Ce),Object(oe.a)(R,ve.a.getCurrentUserError,Ce),Object(oe.a)(R,ve.a.clearError,(function(){return null})),R)),Ee=Object(re.c)(!1,(q={},Object(oe.a)(q,ve.a.registerSuccess,(function(){return!0})),Object(oe.a)(q,ve.a.loginSuccess,(function(){return!0})),Object(oe.a)(q,ve.a.getCurrentUserSuccess,(function(){return!0})),Object(oe.a)(q,ve.a.registerError,(function(){return!1})),Object(oe.a)(q,ve.a.loginError,(function(){return!1})),Object(oe.a)(q,ve.a.getCurrentUserError,(function(){return!1})),Object(oe.a)(q,ve.a.logoutSuccess,(function(){return!1})),q)),Ue=Object(re.c)(!1,(w={},Object(oe.a)(w,ve.a.registerSuccess,(function(){return!1})),Object(oe.a)(w,ve.a.registerRequest,(function(){return!0})),Object(oe.a)(w,ve.a.registerError,(function(){return!1})),Object(oe.a)(w,ve.a.loginSuccess,(function(){return!1})),Object(oe.a)(w,ve.a.loginRequest,(function(){return!0})),Object(oe.a)(w,ve.a.loginError,(function(){return!1})),Object(oe.a)(w,ve.a.logoutRequest,(function(){return!0})),Object(oe.a)(w,ve.a.logoutSuccess,(function(){return!1})),Object(oe.a)(w,ve.a.logoutError,(function(){return!1})),Object(oe.a)(w,ve.a.getCurrentUserRequest,(function(){return!0})),Object(oe.a)(w,ve.a.getCurrentUserSuccess,(function(){return!1})),Object(oe.a)(w,ve.a.getCurrentUserError,(function(){return!1})),Object(oe.a)(w,ve.a.clearError,(function(){return!1})),w)),ye=Object(ue.c)({user:me,isAuthenticated:Ee,token:ke,loading:Ue,error:Se}),_e=Object(te.a)(Object(re.d)({serializableCheck:{ignoredActions:[ne.a,ne.f,ne.b,ne.c,ne.d,ne.e]}})),Ne={key:"auth",storage:ae.a,whitelist:["token"]},Re=Object(re.a)({reducer:{auth:Object(ne.g)(Ne,ye),phonebook:pe},middleware:_e,devTools:!1}),qe={store:Re,persistor:Object(ne.h)(Re)};r(117);o.a.render(Object(n.jsx)(s.a,{store:qe.store,children:Object(n.jsx)(i.a,{loading:Object(n.jsx)(Q.a,{}),persistor:qe.persistor,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(ee,{})})})}),document.getElementById("root"))},12:function(e,t,r){"use strict";r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return a})),r.d(t,"i",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return j})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return f}));var n=r(5),c=Object(n.b)("contacts/fetchContactRequest"),a=Object(n.b)("contacts/fetchContactSuccess"),o=Object(n.b)("contacts/fetchContactError"),u=Object(n.b)("contacts/addContactRequest"),s=Object(n.b)("contacts/addContactSuccess"),i=Object(n.b)("contacts/addContactError"),b=Object(n.b)("contacts/deleteContactRequest"),j=Object(n.b)("contacts/deleteContactSuccess"),l=Object(n.b)("contacts/deleteContactError"),O=Object(n.b)("contacts/changeFilter"),f=Object(n.b)("contacts/clearError")},20:function(e,t,r){"use strict";var n={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUsername:function(e){return e.auth.user.name},getError:function(e){return e.auth.error},getToken:function(e){return e.auth.token},getLoading:function(e){return e.auth.loading}};t.a=n},33:function(e,t,r){"use strict";var n=r(2),c=(r(0),r(64)),a=r.n(c);t.a=function(){return Object(n.jsx)(a.a,{type:"TailSpin",color:"blue",height:100,width:100,timeout:300})}},34:function(e,t,r){"use strict";var n=r(22),c=r.n(n),a=r(32),o=r(25),u=r.n(o),s=r(4);u.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){u.a.defaults.headers.common.Authorization=""},j={register:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.registerRequest()),t.prev=1,t.next=4,u.a.post("/users/signup",e);case 4:n=t.sent,i(n.data.token),r(s.a.registerSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(s.a.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.registerRequest()),t.prev=1,t.next=4,u.a.post("/users/login",e);case 4:n=t.sent,i(n.data.token),r(s.a.loginSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(s.a.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logoutRequest()),e.prev=1,e.next=4,u.a.post("/users/logout");case 4:b(),t(s.a.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(s.a.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t,r){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),a=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return i(a),t(s.a.getCurrentUserRequest()),e.prev=5,e.next=8,u.a.get("/users/current");case 8:o=e.sent,t(s.a.getCurrentUserSuccess(o.data)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),t(s.a.getCurrentUserError(e.t0.message)),t(s.a.logoutSuccess());case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}};t.a=j},4:function(e,t,r){"use strict";var n=r(5),c={registerSuccess:Object(n.b)("auth/registerSuccess"),registerRequest:Object(n.b)("auth/registerRequest"),registerError:Object(n.b)("auth/registerError"),loginSuccess:Object(n.b)("auth/loginSuccess"),loginRequest:Object(n.b)("auth/loginRequest"),loginError:Object(n.b)("auth/loginError"),logoutRequest:Object(n.b)("auth/logoutRequest"),logoutSuccess:Object(n.b)("auth/logoutSuccess"),logoutError:Object(n.b)("auth/logoutError"),getCurrentUserRequest:Object(n.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(n.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(n.b)("auth/getCurrentUserError"),clearError:Object(n.b)("auth/clearError")};t.a=c},41:function(e,t,r){e.exports={container:"UserMenu_container__kPG7D",avatar:"UserMenu_avatar__2elQu",name:"UserMenu_name__2Zq_a",button:"UserMenu_button__3TXAx"}},62:function(e,t,r){e.exports={container:"Header_container__2yWxr",appear:"Header_appear__2AbYt",appearActive:"Header_appearActive__1f4O_"}},63:function(e,t,r){e.exports={container:"Section_container__4TNiU"}}},[[118,2,3]]]);
//# sourceMappingURL=main.bdbe0231.chunk.js.map