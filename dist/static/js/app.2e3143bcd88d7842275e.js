webpackJsonp([1],{"JZh/":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var e=a("VU/8")({name:"App"},c,!1,function(t){a("s347")},null,null).exports,n=a("/ocq"),r=a("Dd8w"),o=a.n(r),l=a("NYxO"),d={name:"Board",data:function(){return{cardInHand:[]}},computed:o()({},Object(l.b)(["usermember","usercount","username","whoseTurn"]),{currentVal:function(){var t=0;return this.cardInHand.forEach(function(s){t+=s.value}),t}}),methods:{hitCard:function(){this.whoseTurn===this.username&&this.$socket.emit("hit",{username:this.username})},stand:function(){this.$socket.emit("stand",{username:this.username})}},sockets:{drawCard:function(t){console.log(t)},standingBy:function(t){console.log(t),console.log("standing by")},opponentDraw:function(t){console.log(t.username+" has drawn a card")},opponentStand:function(t){console.log(t.username+" is standing by")}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"mb-4"}),t._v(" "),a("div",{staticClass:"row justify-content-center",attrs:{id:"control"}},[a("div",{staticClass:"col-lg"},[a("button",{staticClass:"btn",attrs:{type:"button",name:"button",id:"hit"},on:{click:t.hitCard}},[t._v("Hit")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",name:"button",id:"stand"},on:{click:t.stand}},[t._v("Stand")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",name:"button",id:"newgame"}},[t._v("Start New game")])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-2"},[a("p",[t._v("Player 1")])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("1")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("2")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("3")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("4")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("5")])])])]),t._v(" "),a("div",{staticClass:"mb-4"}),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-2"},[a("p",[t._v("Player 2")])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("1")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("2")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("3")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("4")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("5")])])])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-2"},[a("p",[t._v("Player 3")])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("1")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("2")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("3")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("4")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("5")])])])]),t._v(" "),a("div",{staticClass:"mb-4"}),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-2"},[a("p",[t._v("Player 4")])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("1")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("2")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("3")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("4")])])]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("img",{staticClass:"img-fluid card-img",attrs:{src:"#",alt:""}}),t._v(" "),a("p",[t._v("5")])])])])])])}]};var m=a("VU/8")(d,u,!1,function(t){a("JZh/")},null,null).exports,v=a("mtWM"),h=a.n(v),g={name:"HelloWorld",sockets:{connect:function(){console.log("socket connected")},userid:function(t){console.log("Hey somebody has visit this place "+t),this.userid=t},welcome:function(){console.log("welcome")},userdisconnect:function(t){for(var s=0;s<this.usermember.length;s++)this.usermember[s].userid,this.userid}},data:function(){return{username:"",currentuserid:"",userid:""}},created:function(){var t=this;h.a.get("http://localhost:3000/cards/getPlayer").then(function(s){null!==s.data.data&&t.$store.commit("getuser",s.data.data),console.log(t.usermember)})},methods:{join:function(){var t=this;""===this.username?alert("Please input username to join"):(console.log("joining room"),this.usermember.length<4&&(this.$socket.emit("joinuser",{room:"getthebunny",username:this.username}),this.$socket.on("receivemessage",function(s){var a={name:s.username,room:s.room,userid:t.userid};h.a.post("http://localhost:3000/cards/addPlayer",a).then(function(t){k.push({path:"/play"})})})))}},computed:Object(l.b)(["usermember"])},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background-home"},[a("div",{staticClass:"col-lg-2"}),t._v(" "),a("div",{staticClass:"col-lg-8"},[t._m(0),t._v(" "),a("div",{staticClass:"input-site"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control col-lg-4",attrs:{type:"text",placeholder:"Place your name"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.join}},[t._v("Join")])])]),t._v(" "),a("div",{staticClass:"col-lg-2"})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("h1",{staticClass:"title-font"},[this._v("Black Jack")])])}]};var f=a("VU/8")(g,p,!1,function(t){a("wZXt")},"data-v-f2128f8a",null).exports,C=a("bOdI"),_=a.n(C),b={data:function(){var t;return t={users:[],mycard:[]},_()(t,"users",[]),_()(t,"standStatus",!1),_()(t,"return",0),_()(t,"status",!1),t},sockets:{standingBy:function(t){console.log(t),console.log("standing by")},opponentDraw:function(t){console.log(t.username+" has drawn a card"),this.$store.dispatch("dispatchTurn")},opponentStand:function(t){console.log(t.username+" is standing by"),this.$store.dispatch("dispatchTurn"),this.$store.dispatch("dispatchStandBy")},getcards:function(t){this.$store.commit("updateuser",t)}},methods:{exitgame:function(){this.$store.commit("replaceUsername",this.username),k.push({path:"/"})},play:function(){for(var t=[],s=0;s<4;s++)if(s<2){var a=Math.ceil(Math.random()*this.cards.length);t.push(this.cards[a])}else t.push("");this.mycard=t},hitCard:function(){var t=this;if(this.$socket.emit("hit","what is my socket id"),this.$socket.on("drawCard",function(s){s.socketid===t.users[t.return]&&console.log("heyy")}),!0!==this.standStatus){var s=Math.floor(Math.random()*this.cards.length);this.cards[s]}},stand:function(){this.$socket.emit("stand",{username:this.username}),this.standStatus=!0,this.$store.dispatch("dispatchTurn"),this.$store.dispatch("dispatchStandBy")},gameplay:function(){var t=this;h.a.get("http://localhost:3000/cards/show").then(function(s){t.$store.commit("getcard",s.data.data),h.a.get("http://localhost:3000/cards/getPlayer").then(function(s){if(null===s.data.data)return k.push({path:"/"});t.$socket.emit("getrandom",t.cards),t.$store.commit("getuser",s.data.data)}).catch(function(t){res.send(t)})}).catch(function(t){res.send(t)})}},created:function(){var t=this;h.a.get("http://localhost:3000/cards/getPlayer").then(function(s){if(null===s.data.data)return k.push({path:"/"});t.$store.commit("getuser",s.data.data),console.log(t.usermember),t.users=t.usermember}).catch(function(t){res.send(t)}),this.$store.dispatch("dispatchActive")},computed:o()({},Object(l.b)(["cards","usermember","turn","whoseTurn"]),{currentVal:function(){var t=0;return this.card.forEach(function(s){t+=s.value}),t}}),watch:{}},y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background"},[a("div",{staticClass:"col-lg-1"}),t._v(" "),4===t.users.length?a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"row justify-content-center",attrs:{id:"control"}},[a("div",{staticClass:"col-lg"},[a("button",{on:{click:t.gameplay}},[t._v("Play")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",name:"button",id:"hit"},on:{click:t.hitCard}},[t._v("Hit")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",name:"button",id:"stand"},on:{click:t.stand}},[t._v("Stand")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.play}},[t._v("Ready")])]),t._v(" "),a("div",{staticClass:"content-nest"},t._l(t.usermember,function(s,i){return a("div",{key:i,staticClass:"user col-lg-6"},[a("div",{staticClass:"username"},[a("h4",{staticClass:"username-font"},[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"cards-all"},t._l(s.cards,function(t,s){return a("div",{key:s,staticClass:"cards"},[""!==t?a("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.image,alt:"Card image cap"}}):a("div")])}))])}))])]):a("div",{staticClass:"col-lg-10"},[a("h5",{staticClass:"waitinglist"},[t._v("Waiting List")]),t._v(" "),t._l(t.users,function(s,i){return a("div",{key:i,staticClass:"card col-lg-2"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(s.name))])])])})],2),t._v(" "),a("div",{staticClass:"col-lg-1"})])},staticRenderFns:[]};var w=a("VU/8")(b,y,!1,function(t){a("vIvH")},null,null).exports;i.a.use(n.a);var k=new n.a({routes:[{path:"/",name:"home",component:f},{path:"/game",name:"Board",component:m},{path:"/play",name:"play",component:w}]}),$=a("fZjL"),j=a.n($);i.a.use(l.a);var P=new l.a.Store({state:{usermember:[],activemember:0,usercount:0,username:"",turn:0,whoseTurn:"",cards:[]},mutations:{getcard:function(t,s){var a=[];j()(s).forEach(function(t,i){a.push(s[t])}),t.cards=a},getuser:function(t,s){var a=[],i=j()(s);j()(s).forEach(function(t,c){var e=s[t];e.keyfire=i[c],a.push(e)}),t.usermember=a},nextTurn:function(t,s){t.turn===t.activemember.length-1?t.turn=0:(console.log("updating turn"),t.turn+=1)},activeCount:function(t,s){t.activemember=t.usermember.length},standBy:function(t){t.activemember-=1},updateuser:function(t,s){for(var a=0;a<t.usermember.length;a++){for(var i=2*a,c=i+2,e=[],n=i;n<c;n++)e.push(s[n]);t.usermember[a].cards=e}}},actions:{dispatchTurn:function(t){var s=t.commit;t.state;s("nextTurn")},dispatchActive:function(t){var s=t.commit;t.state;s("activeCount")},dispatchStandBy:function(t){var s=t.commit;t.state;s("standBy")}}}),S=a("hMcO"),T=a.n(S);i.a.use(T.a,"http://localhost:3000"),i.a.config.productionTip=!1,new i.a({el:"#app",router:k,store:P,components:{App:e},template:"<App/>"})},s347:function(t,s){},vIvH:function(t,s){},wZXt:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2e3143bcd88d7842275e.js.map