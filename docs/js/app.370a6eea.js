(function(t){function e(e){for(var a,o,c=e[0],u=e[1],i=e[2],p=0,l=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);m&&m(e);while(l.length)l.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/koikoi/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"030d":function(t,e,n){"use strict";var a=n("09ff"),r=n.n(a);r.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"08a1":function(t,e,n){},"09ff":function(t,e,n){},1:function(t,e){},2809:function(t,e,n){"use strict";var a=n("08a1"),r=n.n(a);r.a},"2ef9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Room")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("game",{staticClass:"game"}),n("chat",{staticClass:"chat"})],1)},c=[],u=n("8055"),i=n.n(u),m=i.a.connect("https://shielded-ridge-48598.herokuapp.com/"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("Table",{staticClass:"table",attrs:{cards:t.tableCards}}),n("Hand",{staticClass:"hand",attrs:{cards:t.handCards}})],1)},l=[],f=[{month:1,number:1,type:["hikari"]},{month:1,number:2,type:["tan","akatan"]},{month:1,number:3,type:["kasu"]},{month:1,number:4,type:["kasu"]},{month:2,number:1,type:["tane"]},{month:2,number:2,type:["tan","akatan"]},{month:2,number:3,type:["kasu"]},{month:2,number:4,type:["kasu"]},{month:3,number:1,type:["hikari"]},{month:3,number:2,type:["tan","akatan"]},{month:3,number:3,type:["kasu"]},{month:3,number:4,type:["kasu"]},{month:4,number:1,type:["tane"]},{month:4,number:2,type:["tan"]},{month:4,number:3,type:["kasu"]},{month:4,number:4,type:["kasu"]},{month:5,number:1,type:["tane"]},{month:5,number:2,type:["tan"]},{month:5,number:3,type:["kasu"]},{month:5,number:4,type:["kasu"]},{month:6,number:1,type:["tane","inoshikacho"]},{month:6,number:2,type:["tan","aotan"]},{month:6,number:3,type:["kasu"]},{month:6,number:4,type:["kasu"]},{month:7,number:1,type:["tane","inoshikacho"]},{month:7,number:2,type:["tan"]},{month:7,number:3,type:["kasu"]},{month:7,number:4,type:["kasu"]},{month:8,number:1,type:["hikari"]},{month:8,number:2,type:["tane"]},{month:8,number:3,type:["kasu"]},{month:8,number:4,type:["kasu"]},{month:9,number:1,type:["tane"]},{month:9,number:2,type:["tan","aotan"]},{month:9,number:3,type:["kasu"]},{month:9,number:4,type:["kasu"]},{month:10,number:1,type:["tane","inoshikacho"]},{month:10,number:2,type:["tan","aotan"]},{month:10,number:3,type:["kasu"]},{month:10,number:4,type:["kasu"]},{month:11,number:1,type:["hikari","ame"]},{month:11,number:2,type:["tane"]},{month:11,number:3,type:["tan"]},{month:11,number:4,type:["kasu"]},{month:12,number:1,type:["hikari"]},{month:12,number:2,type:["kasu"]},{month:12,number:3,type:["kasu"]},{month:12,number:4,type:["kasu"]}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},t._l(t.cards,(function(e,a){return n("card",{key:a,staticClass:"card",attrs:{card:e},on:{click:function(e){return t.selectTable(a)}}})})),1)},d=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:function(e){return t.$emit("click")}}},[n("img",{staticClass:"img",attrs:{src:"images/"+t.card.month+"-"+t.card.number+".png"}})])},y=[],k={name:"Card",props:{card:Object}},v=k,g=(n("f9e8"),n("2877")),_=Object(g["a"])(v,b,y,!1,null,"69a74709",null),C=_.exports,O={name:"Table",components:{Card:C},props:{cards:Array}},x=O,w=(n("cd07"),Object(g["a"])(x,h,d,!1,null,"0e142382",null)),j=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hand"},t._l(t.cards,(function(e,a){return n("card",{key:a,staticClass:"card",attrs:{card:e},on:{click:function(e){return t.selectHand(a)}}})})),1)},P=[],$={name:"Hand",components:{Card:C},props:{cards:Array}},M=$,E=(n("030d"),Object(g["a"])(M,S,P,!1,null,"57a168b3",null)),T=E.exports,J={name:"Game",components:{Table:j,Hand:T},data:function(){return{socket:m,hanafudaPack:f,handCards:[],tableCards:[]}},created:function(){m.on("s2c_game-start",this.gameStart),m.on("s2c_play_response",this.receiveResponse),m.on("s2c_play_broadcast",this.receiveBroadcast)},methods:{gameStart:function(t){console.log(this.messages);var e=t.turn;0===e&&this.init()},init:function(){this.send({operation:"add-cards-to-deck",next:0,cards:f});for(var t=0;t<8;t++)this.send({operation:"draw-expose",next:0});for(var e=0;e<8;e++)this.send({operation:"draw",next:0});this.send({operation:"pass",next:1})},send:function(t){m.emit("c2s_play",t)},receiveResponse:function(t){var e=t.operation;switch(e){case"draw":this.handCards.push(t.card);break;case"draw-expose":this.tableCards.push(t.card);break}},receiveBroadcast:function(t){var e=t.operation;switch(e){case"draw":break;case"draw-expose":this.tableCards.push(t.card);break}}}},H=J,N=(n("f241"),Object(g["a"])(H,p,l,!1,null,"f8b6624e",null)),R=N.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[t._l(t.messages,(function(e,a){return n("p",{key:a},[t._v(" "+t._s(e.from+"> "+e.message)+" ")])})),n("input",{directives:[{name:"model",rawName:"v-model",value:t.draft,expression:"draft"}],domProps:{value:t.draft},on:{input:function(e){e.target.composing||(t.draft=e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(e){return t.sendMessage()}}},[t._v("送信")])],2)},B=[],G={name:"Chat",data:function(){return{messages:[{from:"Alice",message:"Hello"},{from:"Bob",message:"こんにちは"}],draft:"",socket:m,enabled:!1}},created:function(){m.on("s2c_chat",this.receiveMessage)},methods:{sendMessage:function(){m.emit("c2s_chat",{message:this.draft}),this.messages.push({from:"You",message:this.draft}),this.draft=""},receiveMessage:function(t){console.log(this.messages),this.messages.push(t)}}},q=G,D=(n("f7f6"),Object(g["a"])(q,A,B,!1,null,"3372a3b4",null)),I=D.exports,Y={name:"Room",components:{Game:R,Chat:I},data:function(){return{socket:m}},created:function(){m.on("s2c_error",(function(t){alert(JSON.stringify(t))})),m.on("s2c_created-room",(function(t){alert(JSON.stringify(t))})),m.on("s2c_joined-room",(function(t){alert(JSON.stringify(t))})),m.on("s2c_game-start",(function(t){alert(JSON.stringify(t))})),m.emit("c2s_request-matching",{gameID:0,nickname:"anonymous"})}},z=Y,F=(n("2809"),Object(g["a"])(z,o,c,!1,null,"cb1cc10a",null)),K=F.exports,L={name:"App",components:{Room:K}},Q=L,U=(n("034f"),Object(g["a"])(Q,r,s,!1,null,null,null)),V=U.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(V)}}).$mount("#app")},"5cf1":function(t,e,n){},"85ec":function(t,e,n){},"8bb1":function(t,e,n){},cd07:function(t,e,n){"use strict";var a=n("e55e"),r=n.n(a);r.a},e55e:function(t,e,n){},f241:function(t,e,n){"use strict";var a=n("2ef9"),r=n.n(a);r.a},f7f6:function(t,e,n){"use strict";var a=n("8bb1"),r=n.n(a);r.a},f9e8:function(t,e,n){"use strict";var a=n("5cf1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.370a6eea.js.map