(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){e.exports=n(88)},53:function(e,t,n){},54:function(e,t,n){},81:function(e,t){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),s=n.n(o),c=(n(53),n(7)),i=n(8),u=n(10),l=n(9),m=n(11),p=n(45),h=n(5),d=(n(54),{baseUrl:"http://localhost:3000",api:"/api",messagesRoute:"/messages",messageRoute:"/message"}),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleLogin=function(e,t){e.preventDefault();var a={username:n.username.value,password:n.password.value},r=d.baseUrl+d.api+t,o={method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},mode:"cors"};fetch(r,o).then(function(e){return e.json()}).then(function(e){return n.props.onLogin(e)}).then(function(){return n.props.history.push("/chat")}).catch(function(e){return console.log("Error:",e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to the Chat."),r.a.createElement("h3",null,"Please login"),r.a.createElement("form",{id:"login-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"username",ref:function(t){return e.username=t}}),r.a.createElement("input",{type:"password",placeholder:"password",ref:function(t){return e.password=t}}),r.a.createElement("button",{id:"login-btn",onClick:function(t){return e.handleLogin(t,"/login")}},"Login"),r.a.createElement("button",{id:"signup-btn",onClick:function(t){return e.handleLogin(t,"/signup")}},"Signup")))}}]),t}(a.Component),g=function(e){return new Date(e).toLocaleString()},v=function(e){var t=e.username,n=e.timeStamp,a=e.message;return r.a.createElement("li",{className:"message-li"},r.a.createElement("div",{className:"username"},t),r.a.createElement("div",{className:"timeStamp"},g(n)),r.a.createElement("div",{className:"message-text"},a))},b=n(44),E=n.n(b)()(d.baseUrl),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t={userId:n.props.creds.userId,token:n.props.creds.token,message:n.message.value};console.log(t);var a=d.baseUrl+d.api+d.messageRoute,r={method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"},mode:"cors"};n.form.current.reset(),fetch(a,r).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log("Error: ",e)})},n.form=r.a.createRef(),n.state={messages:[]},E.on("msg",function(e){n.setState({messages:e})}),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Creds in chat: ",this.props.creds);var t=d.baseUrl+d.api+d.messagesRoute,n={method:"GET",headers:{"Content-type":"application/json",token:this.props.creds.token},mode:"cors"};fetch(t,n).then(function(e){return e.json()}).then(function(t){"error"in t||e.setState({messages:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Chat"),r.a.createElement("ul",{id:"messages"},this.state.messages.map(function(e){return r.a.createElement(v,{username:e.username,timeStamp:e.timeStamp,message:e.message,key:e.id})})),r.a.createElement("form",{id:"chat-message-form",onSubmit:function(e){return e.preventDefault()},ref:this.form},r.a.createElement("input",{id:"message-input-field",type:"text",placeholder:"Spread the word.",ref:function(t){return e.message=t}}),r.a.createElement("button",{id:"send-message-btn",onClick:this.handleSubmit},"Send")))}}]),t}(a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleLogin=function(t){console.log(t),e.setState({userId:t.id,username:t.username,token:t.token.token,validThru:t.token.validThru})},e.state={},console.log("Props.",e.props),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(f,Object.assign({},t,{onLogin:e.handleLogin}))}}),r.a.createElement(h.a,{path:"/chat",render:function(t){return r.a.createElement(j,Object.assign({},t,{creds:e.state}))}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.35cb0d11.chunk.js.map