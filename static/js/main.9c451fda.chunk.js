(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(22),a(1)),u=(a(23),a(7)),i=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{marginTop:"15%"}},"Sudoku Game"),r.a.createElement("p",null,"Click the button to play a New Game"),r.a.createElement(u.b,{to:"/game"},r.a.createElement("button",{className:"button"},"New Game")))},m=a(12),s=[],f=[],h=[],d=function(e){var t=r.a.useState(function e(){for(var t=[],a=0;a<9;a++){for(var n=[],r=0;r<9;r++)n.push(0);t.push(n)}var o=0;for(;o<20;){var l=Math.floor(9*Math.random())+1,c=Math.floor(9*Math.random()),u=Math.floor(9*Math.random());0===t[c][u]&&i(t,c,u,l)&&(t[c][u]=l,o+=1)}return!1===function e(t){for(var a=0;a<9;a++)for(var n=0;n<9;n++)if(0===t[a][n]){for(var r=1;r<=9;r++)if(i(t,a,n,r)){if(t[a][n]=r,e(t))return t;t[a][n]=0}return!1}return t}(t)?e():t}()),a=Object(m.a)(t,2),n=a[0],o=(a[1],r.a.useState([])),l=Object(m.a)(o,2),c=l[0],u=l[1];function i(e,t,a,n){for(var r=0;r<9;r++){var o=3*Math.floor(t/3)+Math.floor(r/3),l=3*Math.floor(a/3)+r%3;if(e[t][r]===n||e[r][a]===n||e[o][l]===n)return!1}return!0}var d=function(e){(e.target.value<"1"||e.target.value>"9")&&0!==e.target.value.length&&(e.target.value="",e.target.focus(),alert("Only Numbers[1-9] are Allowed"))};if(0===s.length){for(var v=0,p=0;p<9;p++){for(var g=[],E=0;E<9;E++)g.push(0);h.push(g)}for(var b=0;b<9;b++){for(var y=[],w=0;w<9;w++)v<25&&Math.random()>.65&&0===h[b][w]?(y.push(r.a.createElement("td",null,r.a.createElement("input",{type:"text",maxlength:"1",size:"1",value:n[b][w],onChange:d,disabled:!0}))),v+=1,h[b][w]=1):y.push(r.a.createElement("td",null,r.a.createElement("input",{type:"text",maxlength:"1",size:"1",onChange:d})));f.push(y)}for(;v<25;){var k=Math.floor(9*Math.random()),M=Math.floor(9*Math.random());0===h[k][M]&&(h[k][M]=1,f[k][M]=r.a.createElement("td",null,r.a.createElement("input",{type:"text",maxlength:"1",size:"1",value:n[k][M],onChange:d,disabled:!0})),v+=1)}for(var x=0;x<9;x++)s.push(r.a.createElement("tr",null,f[x]));u(s)}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Play Sudoku")),r.a.createElement("div",{style:{margin:"7% auto",width:"70%",display:"flex"}},r.a.createElement("div",{style:{width:"70%"}},r.a.createElement("table",{id:"gametable"},r.a.createElement("tbody",null,c))),r.a.createElement("div",{style:{width:"30%",marginTop:"10%"}},r.a.createElement("div",{style:{float:"left"}},r.a.createElement("button",{className:"button",style:{height:"fit-content",padding:"5%"},onClick:function(){window.location.reload()}},"New Game")),r.a.createElement("div",{style:{float:"left"}},r.a.createElement("button",{className:"button",style:{height:"fit-content",marginLeft:"5%",padding:"5%"},onClick:function(){for(var e=document.getElementById("gametable"),t=0,a=0,r=[],o=0;o<9;o++){for(var l=[],c=0;c<9;c++){if(!e.rows[o].cells[c].children[0].value){alert("Incomplete. Please Complete the Game."),t=1;break}l.push(parseInt(e.rows[o].cells[c].children[0].value))}if(1===t)break;r.push(l)}if(0==t){for(var u=0;u<9;u++){for(var i=0;i<9;i++)if(r[u][i]!=n[u][i]){alert("Wrong Solution. Try Again."),a=1;break}if(1==a)break}0==a&&alert("Correct Solution")}}},"Check Solution")))))};var v=Object(c.f)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:i}),r.a.createElement(c.a,{path:"/game",exact:!0,component:d})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(u.a,{basename:"".concat("/Sudoku-WebApp","/")},r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9c451fda.chunk.js.map