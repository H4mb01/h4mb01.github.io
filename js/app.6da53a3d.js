(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6a0069c7"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1ca0":function(e,t,n){"use strict";n("841c")},2082:function(e,t,n){},3938:function(e,t,n){"use strict";n("c201")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/Wuppern"}},[e._v("Wuppern")])],1),n("router-view")],1)},s=[],o=(n("034f"),n("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var m=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},p=[],f={name:"Home",components:{}},h=f,g=Object(o["a"])(h,d,p,!1,null,null,null),v=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wuppern"},[e._e(),n("Spielfeld")],1)},b=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spielfeld"},[""===e.room?n("JoinGame",{attrs:{create:e.create},on:{"change-room":function(t){return e.changeRoom(t)},"toggle-create-game":function(t){return e.toggleCreateGame()},"create-game":function(t){return e.createGame(t)}}}):e._e(),e.isLoggedIn||""===e.room?e._e():n("div",[n("div",{staticClass:"joinContainer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameInput,expression:"usernameInput"}],attrs:{type:"text",name:"name",id:"name",placeholder:"dein Name",autofocus:"",required:""},domProps:{value:e.usernameInput},on:{input:[function(t){t.target.composing||(e.usernameInput=t.target.value)},function(t){return e.joinPossible()}]}}),n("p",{staticClass:"possible"},[e._v(e._s(this.possibleText))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.stay,expression:"stay"}],attrs:{type:"checkbox",name:"stay",id:"stay"},domProps:{checked:Array.isArray(e.stay)?e._i(e.stay,null)>-1:e.stay},on:{change:function(t){var n=e.stay,a=t.target,r=!!a.checked;if(Array.isArray(n)){var s=null,o=e._i(n,s);a.checked?o<0&&(e.stay=n.concat([s])):o>-1&&(e.stay=n.slice(0,o).concat(n.slice(o+1)))}else e.stay=r}}}),n("label",{staticClass:"stay",attrs:{for:"stay"}},[e._v("eingeloggt bleiben?")]),n("br"),n("button",{attrs:{id:"play"},on:{click:function(t){return e.joinGame("player")}}},[e._v("Spielen")]),n("button",{attrs:{id:"watch"},on:{click:function(t){return e.joinGame("watcher")}}},[e._v("Zuschauen")])])]),e.isLoggedIn&&!e.isStarted?n("div",[n("button",{attrs:{id:"logout"},on:{click:function(t){return e.logout()}}}),n("div",{staticClass:"players"},e._l(e.players,(function(t){return n("div",{key:t,staticClass:"player"},[n("div",{staticClass:"avatar"}),n("div",{staticClass:"playername"},[e._v(e._s(t.name))])])})),0),n("div",{staticClass:"reihenfolge"},[n("ol",e._l(e.reihenfolge,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),n("div",{staticClass:"randomise"},[n("button",{on:{click:function(t){return e.randomOrder()}}},[e._v("⚅ zufällig")])]),n("button",{staticClass:"start",class:this.creator===this.username?"creator":"",on:{click:function(t){return e.startGame()}}},[e._v("Start")])]):e._e(),e.isLoggedIn&&e.isStarted&&!e.isEnded?n("div",[n("button",{attrs:{id:"logout"},on:{click:function(t){return e.logout()}}}),n("h3",[e._v("Runde "+e._s(e.runde.aktuell)+" / "+e._s(e.runde.maximal))]),n("p",[e._v(" "+e._s(this.gamestate.anDerReihe)+" ist an der Reihe.")]),n("div",{staticClass:"tisch"},[e.ansagen.isAnsagen?n("div",{staticClass:"ansagen",class:{spezial:1===e.runde.aktuell||e.runde.aktuell===e.runde.maximal}},[n("h2",[e._v(" "+e._s(e.ansagen.aktuell)+" muss ansagen! ")]),e.ansagen.aktuell===e.username?n("div",{staticClass:"moeglichkeitenContainer"},e._l(e.ansagen.optionen,(function(t){return n("div",{key:t,staticClass:"option",on:{click:function(n){return e.sagAn(t)}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]):e._e()]),n("Spieler",{attrs:{players:e.players,playedCards:e.playedCards,dran:e.dran,fuehrung:e.fuehrung,username:e.username}}),n("Handkarten",{attrs:{ownCards:e.ownCards,dran:e.dran},on:{playCard:function(t){return e.playCard(t)}}})],1):e._e(),e.isEnded?n("div",[n("button",{attrs:{id:"logout"},on:{click:function(t){return e.logout()}}}),n("div",{staticClass:"endscreen"},[e._v(" "+e._s(e.fuehrung)+" hat gewonnen! "),e._m(0)])]):e._e()],1)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pokal"},[e._v(" 1 "),n("div",{staticClass:"pokalfuss"})])}],C=n("5530"),G=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"kartencontainer"},e._l(e.ownCards,(function(t){return n("div",{key:t,staticClass:"karte",class:"♦"===t.farbe||"♥"===t.farbe?"rot":"schwarz",on:{click:function(n){return e.playCard(t)}}},[n("div",{staticClass:"oben"},[e._v(" "+e._s(t.zahl)+" "),n("i",{staticClass:"farbe"},[e._v(" "+e._s(t.farbe)+" ")])]),n("div",{staticClass:"mitte"},[e._v(" "+e._s(t.zahl))]),n("div",{staticClass:"mitteBackground"},[e._v(" "+e._s(t.farbe)+" ")]),n("div",{staticClass:"unten"},[e._v(" "+e._s(t.zahl)+" "),n("i",{staticClass:"farbe"},[e._v(" "+e._s(t.farbe)+" ")])])])})),0)}),w=[],j={name:"Handkarten",props:{ownCards:Array,dran:String},data:function(){return{username:"Manuel"}},methods:{playCard:function(e){console.log({zahl:e.zahl,farbe:e.farbe}),this.$emit("playCard",e)},isred:function(e){return"♦"==e||"♥"==e?"{color: red}":"{color: purple}"}}},I=j,S=(n("6040"),Object(o["a"])(I,G,w,!1,null,"3dabeee2",null)),O=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upper"},e._l(e.players,(function(t){return n("div",{key:t,staticClass:"spielercontainer"},[n("div",{staticClass:"avatar",class:{dran:e.dran===t.name}},[n("div",{class:t.name===e.fuehrung?"führung":""})]),e.username===t.name?n("div",{staticClass:"du"},[e._v("DU")]):e._e(),n("div",{staticClass:"spieler"},[n("span",{staticClass:"b"},[e._v(e._s(t.name)+":")]),e._v(" "+e._s(t.punkte)+" "),n("br"),n("span",{class:t.aktuell===t.angesagt?"korrekt":"inkorrekt"},[e._v(e._s(t.aktuell))]),e._v("/"+e._s(t.angesagt)+" ")]),n("GespielteKarte",{attrs:{playedCards:e.playedCards,playerName:t.name}})],1)})),0)},$=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gespielteKarte"},e._l(e.playedCards,(function(t){return n("div",{key:t},[t.player===e.playerName?n("div",{staticClass:"karte played",class:"♦"===t.farbe||"♥"===t.farbe?"rot":"schwarz"},[n("div",{staticClass:"oben"},[e._v(" "+e._s(t.zahl)+" "),n("i",{staticClass:"farbe"},[e._v(" "+e._s(t.farbe)+" ")])]),n("div",{staticClass:"mitte"},[e._v(" "+e._s(t.zahl)+" ")]),n("div",{staticClass:"mitteBackground"},[e._v(" "+e._s(t.farbe)+" ")]),n("div",{staticClass:"unten"},[e._v(" "+e._s(t.zahl)+" "),n("i",{staticClass:"farbe"},[e._v(" "+e._s(t.farbe)+" ")])])]):e._e()])})),0)},A=[],N={name:"GespielteKarte",props:{playedCards:Array,playerName:String}},P=N,T=(n("5aa9"),Object(o["a"])(P,E,A,!1,null,"2160c8fc",null)),z=T.exports,R={name:"Spieler",components:{GespielteKarte:z},props:{players:Array,playedCards:Array,dran:String,fuehrung:String,username:String},methods:{pointColor:function(e){return e.aktuell===e.angesagt?"green":e.aktuell>e.angesagt?"red":"yellow"}}},B=R,L=(n("1ca0"),Object(o["a"])(B,x,$,!1,null,"17cb59ca",null)),U=L.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"joinGame"},[n("button",{staticClass:"createGame",on:{click:function(t){return e.toggleCreateGame()}}},[e._v("+ Neues Spiel")]),n("button",{on:{click:function(t){return e.getAllGames()}}},[e._v("🗘 AKTUALISIEREN")]),n("GameOverview",{attrs:{create:e.create,allGames:e.allGames},on:{"change-room":function(t){return e.changeRoom(t)},"create-game":function(t){return e.createGame(t)}}})],1)},J=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gameOverview"},[n("table",[e._m(0),e.create?n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.roomInput,expression:"roomInput"}],attrs:{type:"text",name:"roomInput",id:"roomInput"},domProps:{value:e.roomInput},on:{input:function(t){t.target.composing||(e.roomInput=t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameInput,expression:"nameInput"}],attrs:{type:"text",name:"nameInput",id:"nameInput",placeholder:"dein Name"},domProps:{value:e.nameInput},on:{input:function(t){t.target.composing||(e.nameInput=t.target.value)}}})]),n("td"),n("td",[n("button",{staticClass:"button",on:{click:function(t){return e.createGame()}}},[e._v("erstellen")])])]):e._e(),e._l(e.allGames,(function(t){return n("tr",{key:t.name},[n("td",[e._v(" "+e._s(t.room)+" ")]),n("td",[e._v(" "+e._s(t.players)+" ")]),t.isStarted?n("td",[e._v(" ✓ ")]):e._e(),t.isStarted?e._e():n("td",[e._v(" ✗ ")]),t.isStarted?e._e():n("td",[n("button",{staticClass:"button",on:{click:function(n){return e.room(t)}}},[e._v("mitspielen ⏩")])]),t.isStarted?n("td",[n("button",{staticClass:"button grau",on:{click:function(n){return e.room(t)}}},[e._v("zuschauen ⏩")])]):e._e()])}))],2)])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name des Spiels")]),n("th",[e._v("Spieler")]),n("th",[e._v("läuft")]),n("th",[e._v("mitspielen")])])}],F={name:"GameOverview",props:{allGames:Array,create:Boolean},data:function(){return{nameInput:"",roomInput:""}},methods:{room:function(e){this.$emit("change-room",e.room)},createGame:function(){console.log("create-game",this.roomInput,this.nameInput),this.$emit("create-game",{room:this.roomInput,name:this.nameInput})}}},W=F,q=(n("5b39"),Object(o["a"])(W,K,M,!1,null,"b4a66a96",null)),D=q.exports,Z={name:"joinGame",components:{GameOverview:D},props:{create:Boolean},data:function(){return{allGames:[]}},methods:{getAllGames:function(){var e=this;fetch("https://wuppern.herokuapp.com/getAllGames",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){t.json().then((function(t){console.log(t),e.allGames=t.allGames}))}))},changeRoom:function(e){this.$emit("change-room",e)},toggleCreateGame:function(){this.$emit("toggle-create-game")},createGame:function(e){this.$emit("create-game",e)}},mounted:function(){this.getAllGames()},computed:{}},Q=Z,V=(n("3938"),Object(o["a"])(Q,H,J,!1,null,"e02772e4",null)),X=V.exports,Y=n("8e27"),ee=n.n(Y),te=n("2f62"),ne={name:"Spielfeld",components:{Handkarten:O,Spieler:U,JoinGame:X},props:{game:Object},data:function(){return{socket:{},create:!1,gamestate:{},usernameInput:"",username:"",isLoggedIn:!1,stay:!1,possible:!1,possibleText:"",room:"",runde:{},dran:"",fuehrung:"",creator:"",ansagen:{},reihenfolge:[],players:[],ownCards:[],playedCards:[]}},created:function(){this.socket=ee()("https://wuppern.herokuapp.com/")},mounted:function(){var e=this;localStorage.getItem("username")&&(this.username=localStorage.getItem("username"),this.usernameInput=localStorage.getItem("username"),this.joinPossible()),this.socket.on("gamestate",(function(t){e.handleGamestate(t)})),this.socket.on("refresh",(function(t){t&&e.socket.emit("refresh",!0)})),this.socket.on("joinRoomError",(function(t){e.possibleText=t})),this.socket.on("isLoggedIn",(function(t){e.isLoggedIn=t})),this.game&&(this.room=this.$route.params),this.socket.on("joinRoom",(function(t,n){e.room=t,e.usernameInput=n,e.joinGame("player")}))},methods:Object(C["a"])(Object(C["a"])({playCard:function(e){this.socket.emit("playCard",this.room,this.username,e)}},Object(te["b"])(["setGamestate"])),{},{joinPossible:function(){var e=this;fetch("https://wuppern.herokuapp.com/joinPossible",{method:"POST",body:JSON.stringify({room:this.room,name:this.usernameInput}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){t.json().then((function(t){e.possible=t.possible,e.possibleText=t.error}))})).catch((function(e){return console.log("Error: ",e)}))},joinGame:function(e){"player"===e?".watcher"!==this.usernameInput?(this.socket.emit("joinPossible",this.usernameInput,this.room),this.possible&&(this.socket.emit("joinRoom",this.usernameInput,this.room),this.socket.emit("addPlayer",this.usernameInput,this.room),this.username=this.usernameInput,!0===this.stay&&localStorage.setItem("username",this.username))):this.possibleText="verbotener Name":"watcher"===e&&(this.socket.emit("joinRoom",".watcher",this.room),this.username=".watcher")},handleGamestate:function(e){if(e){var t=JSON.parse(e);this.gamestate=t,this.$store.dispatch("setGamestate",t),this.players=this.$store.getters.getGamestate.players,this.playedCards=this.$store.getters.getGamestate.playedCards,this.runde=this.$store.getters.getGamestate.runde,this.ownCards=this.$store.getters.getGamestate.handkarten,this.dran=this.$store.getters.getGamestate.anDerReihe,this.fuehrung=this.$store.getters.getGamestate.fuehrung,this.isStarted=this.$store.getters.getGamestate.isStarted,this.isEnded=this.$store.getters.getGamestate.isEnded,this.creator=this.$store.getters.getGamestate.creator,this.reihenfolge=this.$store.getters.getGamestate.reihenfolge,this.ansagen=this.$store.getters.getGamestate.ansagen}},logout:function(){location.reload()},startGame:function(){this.socket.emit("startgame",this.room,!0,this.username)},changeRoom:function(e){this.room=e,this.joinPossible()},toggleCreateGame:function(){this.create=!this.create},createGame:function(e){this.socket.emit("createNewGame",e.room,e.name)},randomOrder:function(){this.socket.emit("randomOrder",this.username,this.room)},sagAn:function(e){this.socket.emit("ansagen",this.room,this.username,e)}})},ae=ne,re=(n("8435"),n("6db2"),Object(o["a"])(ae,y,k,!1,null,"22f5096f",null)),se=re.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setUsername"},[n("input",{attrs:{type:"text",name:"name",id:"name",placeholder:"dein Name",onload:"fillName()"}}),n("input",{attrs:{type:"button",value:"play"},on:{click:function(t){return e.logmein()}}})])},ie=[],ce={name:"SetUsername",props:{login:Boolean},methods:{fillName:function(){localStorage&&(document.getElementById("name").value=localStorage.username)},logmein:function(){document.getElementById("name").value?(localStorage.setItem("username",document.getElementById("name").value),window.location.reload()):alert("bitte gib einen Namen ein")}}},ue=ce,le=(n("7699"),Object(o["a"])(ue,oe,ie,!1,null,"03acf08e",null)),me=le.exports,de={name:"Wuppern",data:function(){return{login:!1}},components:{Spielfeld:se,SetUsername:me},computed:{loggedIn:function(){return!!localStorage.username}}},pe=de,fe=Object(o["a"])(pe,_,b,!1,null,null,null),he=fe.exports;a["a"].use(m["a"]);var ge=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/wuppern",name:"Wuppern",component:he,props:!0}],ve=new m["a"]({routes:ge}),_e=ve,be={gamestate:{}},ye={getGamestate:function(e){return e.gamestate}},ke={setGamestate:function(e,t){e.commit("setGamestate",t)}},Ce={setGamestate:function(e,t){e.gamestate=t}},Ge={state:be,getters:ye,actions:ke,mutations:Ce};a["a"].use(te["a"]);var we=new te["a"].Store({modules:{game:Ge}});a["a"].config.productionTip=!1,new a["a"]({router:_e,store:we,render:function(e){return e(u)}}).$mount("#app")},"5aa9":function(e,t,n){"use strict";n("7b42")},"5b39":function(e,t,n){"use strict";n("e229")},6040:function(e,t,n){"use strict";n("eb75")},"66eb":function(e,t,n){},"6db2":function(e,t,n){"use strict";n("66eb")},7198:function(e,t,n){},7699:function(e,t,n){"use strict";n("7198")},"7b42":function(e,t,n){},"841c":function(e,t,n){},8435:function(e,t,n){"use strict";n("2082")},"85ec":function(e,t,n){},c201:function(e,t,n){},e229:function(e,t,n){},eb75:function(e,t,n){}});
//# sourceMappingURL=app.6da53a3d.js.map