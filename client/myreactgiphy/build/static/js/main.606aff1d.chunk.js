(this.webpackJsonpmyreactgiphy=this.webpackJsonpmyreactgiphy||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),r=n.n(i),c=n(12),s=n.n(c),o=(n(23),n(24),n(13)),u=n(14),h=n(17),g=n(16),l=n(15),m=n.n(l),j=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).imageArray=[],e.imageURLs=[],e.state={q:"",a:[]},e.handleChange=function(t){e.setState({q:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n={q:e.state.q};m.a.get("https://myreactgiphy.herokuapp.com/api/q",{q:n}).then((function(t){e.imageArray=t.data,console.log(e.imageArray),e.imageURLs=e.imageArray.map((function(e){return Object(a.jsx)("img",{src:e.images.fixed_height.url,alt:""})})),e.setState({a:e.imageURLs}),console.log("images url is "+e.imageURLs)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Search Query:",Object(a.jsx)("input",{type:"text",name:"q",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add"})]}),Object(a.jsx)("div",{children:this.imageURLs})]})}}]),n}(r.a.Component);var b=function(){return Object(a.jsx)(j,{})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),d()}},[[42,1,2]]]);
//# sourceMappingURL=main.606aff1d.chunk.js.map