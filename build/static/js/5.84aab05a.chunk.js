(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{139:function(e,t,n){"use strict";var a=n(36),r=function(e){return e.phonebook.filter},o=function(e){return e.phonebook.contacts},i={getLoading:function(e){return e.phonebook.loading},getFilter:r,getVisibleContacts:Object(a.a)([o,r],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),getAllContacts:o,getError:function(e){return e.phonebook.error}};t.a=i},140:function(e,t,n){"use strict";var a=n(2),r=n(47),o=n(48),i=n(50),s=n(49),c=n(0),u=n(155),l=n(12),p=n(139),b=n(20),h=n(4),m=n(13),f=n(141),g=n.n(f),j=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;this.props.errorAuth?setTimeout((function(){e.props.clearErrorAuth(e.state)}),2500):this.props.errorPb&&setTimeout((function(){e.props.clearErrorPb(e.state)}),2500)}},{key:"render",value:function(){return Object(a.jsx)(u.a,{in:this.props.message,timeout:250,classNames:g.a,unmountOnExit:!0,children:Object(a.jsx)("div",{className:g.a.overlay,children:Object(a.jsx)("p",{className:g.a.message,children:this.props.message})})})}}]),n}(c.Component);t.a=Object(m.b)((function(e){return{errorPb:p.a.getError(e),errorAuth:b.a.getError(e)}}),(function(e){return{clearErrorPb:function(){return e(l.e())},clearErrorAuth:function(){return e(h.a.clearError())}}}))(j)},141:function(e,t,n){e.exports={overlay:"Notification_overlay__vCLZg",message:"Notification_message__3r6L5",enter:"Notification_enter__3r5QL",enterActive:"Notification_enterActive__1-Fbs",exit:"Notification_exit__2Fg2g",exitActive:"Notification_exitActive__1iop4"}},145:function(e,t,n){e.exports={form:"LoginPage_form__USB3I",label:"LoginPage_label__2JPJ4",input:"LoginPage_input__28S4j",button:"LoginPage_button__10O9f"}},153:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),o=n(47),i=n(48),s=n(50),c=n(49),u=n(0),l=n(13),p=n(34),b=n(155),h=n(20),m=n(140),f=n(33),g=n(145),j=n.n(g),d=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(r.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{in:!0,appear:!0,timeout:500,classNames:j.a,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:j.a.title,children:"Enter your data"})}),Object(a.jsx)(m.a,{message:this.props.error}),this.props.isLoadingAuth&&Object(a.jsx)(f.a,{}),Object(a.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(a.jsx)("label",{htmlFor:"email",className:j.a.label,children:"Email "}),Object(a.jsx)("input",{className:j.a.input,type:"email",name:"email",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"password",className:j.a.label,children:"Password"}),Object(a.jsx)("input",{className:j.a.input,type:"password",name:"password",value:n,onChange:this.handleChange}),Object(a.jsx)("button",{className:j.a.button,type:"submit",children:"Login"})]})]})}}]),n}(u.Component),_={onLogin:p.a.logIn};t.default=Object(l.b)((function(e){return{error:h.a.getError(e),isLoadingAuth:h.a.getLoading(e)}}),_)(d)}}]);
//# sourceMappingURL=5.84aab05a.chunk.js.map