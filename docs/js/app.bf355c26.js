(function(t){function e(e){for(var a,o,c=e[0],i=e[1],u=e[2],h=0,m=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/koikoi/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0c26":function(t,e,n){"use strict";var a=n("a6c1"),r=n.n(a);r.a},1:function(t,e){},"395c":function(t,e,n){},"492a":function(t,e,n){"use strict";var a=n("d051"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Room")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("game",{staticClass:"game"}),n("chat",{staticClass:"chat"})],1)},c=[],i=n("8055"),u=n.n(i),d=u.a.connect("https://shielded-ridge-48598.herokuapp.com/"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("Table",{staticClass:"table",attrs:{cards:t.tableCards}}),n("Hand",{staticClass:"hand",attrs:{cards:t.handCards}})],1)},m=[],p=(n("99af"),[{month:1,number:1,type:["hikari"]},{month:1,number:2,type:["tan","akatan"]},{month:1,number:3,type:["kasu"]},{month:1,number:4,type:["kasu"]},{month:2,number:1,type:["tane"]},{month:2,number:2,type:["tan","akatan"]},{month:2,number:3,type:["kasu"]},{month:2,number:4,type:["kasu"]},{month:3,number:1,type:["hikari"]},{month:3,number:2,type:["tan","akatan"]},{month:3,number:3,type:["kasu"]},{month:3,number:4,type:["kasu"]},{month:4,number:1,type:["tane"]},{month:4,number:2,type:["tan"]},{month:4,number:3,type:["kasu"]},{month:4,number:4,type:["kasu"]},{month:5,number:1,type:["tane"]},{month:5,number:2,type:["tan"]},{month:5,number:3,type:["kasu"]},{month:5,number:4,type:["kasu"]},{month:6,number:1,type:["tane","inoshikacho"]},{month:6,number:2,type:["tan","aotan"]},{month:6,number:3,type:["kasu"]},{month:6,number:4,type:["kasu"]},{month:7,number:1,type:["tane","inoshikacho"]},{month:7,number:2,type:["tan"]},{month:7,number:3,type:["kasu"]},{month:7,number:4,type:["kasu"]},{month:8,number:1,type:["hikari"]},{month:8,number:2,type:["tane"]},{month:8,number:3,type:["kasu"]},{month:8,number:4,type:["kasu"]},{month:9,number:1,type:["tane"]},{month:9,number:2,type:["tan","aotan"]},{month:9,number:3,type:["kasu"]},{month:9,number:4,type:["kasu"]},{month:10,number:1,type:["tane","inoshikacho"]},{month:10,number:2,type:["tan","aotan"]},{month:10,number:3,type:["kasu"]},{month:10,number:4,type:["kasu"]},{month:11,number:1,type:["hikari","ame"]},{month:11,number:2,type:["tane"]},{month:11,number:3,type:["tan"]},{month:11,number:4,type:["kasu"]},{month:12,number:1,type:["hikari"]},{month:12,number:2,type:["kasu"]},{month:12,number:3,type:["kasu"]},{month:12,number:4,type:["kasu"]}]);function l(t){var e=t.concat(t),n=e.concat(e),a=n.concat(n);return a}var f=l([{operation:"draw-expose",next:0}]).concat(l([{operation:"discard-expose",next:0}])),b=l([{operation:"draw",next:0}]),y=l([{operation:"draw",next:1}]),k=[{operation:"pass",next:0}],v=[{operation:"pass",next:1}],x=[{operation:"add-cards-to-deck",next:0}].concat(f,b,v,y,k),g=[{operation:"discard-expose",next:0},{operation:"draw-expose",next:0},{operation:"discard-expose",next:1}],C=[{operation:"discard-expose",next:1},{operation:"draw-expose",next:1},{operation:"discard-expose",next:0}],_=g.concat(C),w=x.concat(l(_)),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},t._l(t.cards,(function(e,a){return n("card",{key:a,staticClass:"card",attrs:{card:e},on:{click:function(e){return t.selectTable(a)}}})})),1)},j=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:function(e){return t.$emit("click")}}},[n("img",{staticClass:"img",attrs:{src:"images/"+t.card.month+"-"+t.card.number+".png"}})])},T=[],M={name:"Card",props:{card:Object}},S=M,$=(n("f9e8"),n("2877")),E=Object($["a"])(S,P,T,!1,null,"69a74709",null),J=E.exports,H={name:"Table",components:{Card:J},props:{cards:Array}},N=H,R=(n("0c26"),Object($["a"])(N,O,j,!1,null,"601951d8",null)),A=R.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hand"},t._l(t.cards,(function(e,a){return n("card",{key:a,staticClass:"card",attrs:{card:e},on:{click:function(e){return t.selectHand(a)}}})})),1)},G=[],q={name:"Hand",components:{Card:J},props:{cards:Array}},D=q,I=(n("492a"),Object($["a"])(D,B,G,!1,null,"ce30dca6",null)),Y=I.exports,z={name:"Game",components:{Table:A,Hand:Y},data:function(){return{handCards:[],tableCards:[],initPhase:!0,turn:void 0,cntCommand:0}},created:function(){d.on("s2c_game-start",this.gameStart),d.on("s2c_play_response",this.receiveResponse),d.on("s2c_play_broadcast",this.receiveBroadcast)},methods:{gameStart:function(t){this.turn=t.turn,0===this.turn&&this.send({operation:"add-cards-to-deck",next:0,cards:p})},dealHand:function(){for(var t=0;t<8;t++)this.send({operation:"draw",next:this.turn})},send:function(t){console.log("send c2s_play:"+JSON.stringify(t)),d.emit("c2s_play",t)},dealMe:function(){this.send({operation:"draw",next:this.turn})},pass:function(){this.send({operation:"pass",next:1-this.turn})},dealTable:function(){console.assert(0===this.turn),this.send({operation:"draw-expose",next:this.turn})},discardTable:function(){console.assert(0===this.turn),console.assert(this.handCards.length>=1),this.send({operation:"discard-expose",next:this.turn,card:this.handCards.shift()})},verifyProtocol:function(t,e){console.assert(w[this.cntCommand].operation===t,"\nexpected:"+w[this.cntCommand].operation+"\nactual:"+t),console.assert(w[this.cntCommand].next===e,"\nexpected:"+w[this.cntCommand].next+"\nactual:"+e),this.cntCommand+=1},receiveResponse:function(t){var e=t.operation,n=t.next;if(this.verifyProtocol(e,n),this.initPhase)switch(e){case"add-cards-to-deck":this.dealTable();break;case"draw-expose":this.tableCards.push(t.card),this.handCards.push(t.card),this.tableCards.length<8?this.dealTable():this.discardTable();break;case"discard-expose":this.handCards.length>=1?this.discardTable():this.dealMe();break;case"draw":this.handCards.push(t.card),this.handCards.length<8?this.dealMe():this.pass();break;case"pass":0===t.next&&(this.initPhase=!1);break}else switch(e){case"add-cards-to-deck":break;case"draw":this.handCards.push(t.card);break;case"draw-expose":this.tableCards.push(t.card);break}},receiveBroadcast:function(t){var e=t.operation,n=t.next;if(this.verifyProtocol(e,n),this.initPhase)switch(e){case"add-cards-to-deck":console.assert(t.cards===p);break;case"draw-expose":this.tableCards.push(t.card);break;case"pass":0===t.next?this.initPhase=!1:this.dealMe();break}else switch(e){case"add-cards-to-deck":console.assert(t.card===p);break;case"draw":break;case"draw-expose":this.tableCards.push(t.card);break}}}},F=z,K=(n("b227"),Object($["a"])(F,h,m,!1,null,"01831764",null)),L=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[t._l(t.messages,(function(e,a){return n("p",{key:a},[t._v(" "+t._s(e.from+"> "+e.message)+" ")])})),n("input",{directives:[{name:"model",rawName:"v-model",value:t.draft,expression:"draft"}],domProps:{value:t.draft},on:{input:function(e){e.target.composing||(t.draft=e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(e){return t.sendMessage()}}},[t._v("送信")])],2)},U=[],V={name:"Chat",data:function(){return{messages:[{from:"Alice",message:"Hello"},{from:"Bob",message:"こんにちは"}],draft:"",socket:d,enabled:!1}},created:function(){d.on("s2c_chat",this.receiveMessage)},methods:{sendMessage:function(){d.emit("c2s_chat",{message:this.draft}),this.messages.push({from:"You",message:this.draft}),this.draft=""},receiveMessage:function(t){console.log(this.messages),this.messages.push(t)}}},W=V,X=(n("f7f6"),Object($["a"])(W,Q,U,!1,null,"3372a3b4",null)),Z=X.exports,tt={name:"Room",components:{Game:L,Chat:Z},data:function(){return{socket:d}},created:function(){d.on("s2c_error",(function(t){alert(JSON.stringify(t))})),d.on("s2c_created-room",(function(t){alert(JSON.stringify(t))})),d.on("s2c_joined-room",(function(t){alert(JSON.stringify(t))})),d.on("s2c_game-start",(function(t){alert(JSON.stringify(t))})),d.emit("c2s_request-matching",{gameID:0,nickname:"anonymous"})}},et=tt,nt=(n("577d"),Object($["a"])(et,o,c,!1,null,"222d715b",null)),at=nt.exports,rt={name:"App",components:{Room:at}},st=rt,ot=(n("034f"),Object($["a"])(st,r,s,!1,null,null,null)),ct=ot.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(ct)}}).$mount("#app")},"577d":function(t,e,n){"use strict";var a=n("6698"),r=n.n(a);r.a},"5cf1":function(t,e,n){},6698:function(t,e,n){},"85ec":function(t,e,n){},"8bb1":function(t,e,n){},a6c1:function(t,e,n){},b227:function(t,e,n){"use strict";var a=n("395c"),r=n.n(a);r.a},d051:function(t,e,n){},f7f6:function(t,e,n){"use strict";var a=n("8bb1"),r=n.n(a);r.a},f9e8:function(t,e,n){"use strict";var a=n("5cf1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.bf355c26.js.map