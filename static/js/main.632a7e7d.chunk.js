(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(14),n(1)),s=n(2),u=n(4),l=n(3),d=n(5),v=(n(15),[{id:1,name:"witbir",votes:0},{id:2,name:"stout",votes:0},{id:3,name:"hefe-waizen",votes:0},{id:4,name:"bestbiter",votes:0},{id:5,name:"IPA",votes:0},{id:6,name:"pils",votes:0}]),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={beer:[]},n.handleEvent=function(e){var t=n.state.beer.map(function(t){return t.id===e?Object.assign({},t,{votes:t.votes+1}):t});n.setState({beer:t})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({beer:v})}},{key:"render",value:function(){var e=this;return this.state.beer.map(function(t){return o.a.createElement(h,{name:t.name,key:t.id,id:t.id,votes:t.votes,onVote:e.handleEvent})})}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){return n.props.onVote(n.props.id)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",null,this.props.name,o.a.createElement("button",{onClick:this.handleClick},"+"),this.props.votes))}}]),t}(a.Component),m=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.632a7e7d.chunk.js.map