(function(t){function e(e){for(var s,a,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)a=r[d],o[a]&&m.push(o[a][0]),o[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},o={app:0},n=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"03b9":function(t,e,i){},1:function(t,e){},"14f0":function(t,e,i){"use strict";var s=i("03b9"),o=i.n(s);o.a},1502:function(t,e,i){},"1c9c":function(t,e,i){},"246b":function(t,e,i){},"28c3":function(t,e,i){"use strict";var s=i("246b"),o=i.n(s);o.a},"51b5":function(t,e,i){"use strict";var s=i("8d51"),o=i.n(s);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-app",[i("v-content",[i("router-view")],1)],1)],1)},n=[],a=(i("5c0b"),i("2877")),r={},l=Object(a["a"])(r,o,n,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-layout",{staticClass:"px-5",attrs:{"align-center":"","justify-center":"",row:""}},[i("v-flex",{staticClass:"pt-5",attrs:{xs12:"",row:""}},[i("v-btn",{staticClass:"main",attrs:{fab:"",dark:"","x-large":"",depressed:"",color:"blue-grey darken-3"}},[i("v-icon",{staticClass:"main-icon",attrs:{dark:""}},[t._v("shopping_cart")])],1),i("h3",{staticClass:"display-1 my-5"},[t._v(t._s(t._f("toUpper")(t.title)))]),i("v-text-field",{attrs:{label:t.labelText},on:{input:function(e){t.incorrectListText=!1}},model:{value:t.listName,callback:function(e){t.listName=e},expression:"listName"}}),i("p",{directives:[{name:"show",rawName:"v-show",value:t.incorrectListText,expression:"incorrectListText"}],staticClass:"alert incorrect"},[t._v(t._s(t.noList))]),i("v-btn",{attrs:{block:"",disabled:""==t.listName},on:{click:t.openList}},[t._v("\n          "+t._s(t._f("toUpper")(t.buttonText))+"\n          "),i("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"ml-3",attrs:{indeterminate:"",color:"blue-grey darken-3",size:20,width:3}})],1)],1)],1),i("v-layout",{staticClass:"px-5",attrs:{row:"","xs-12":"","justify-center":""}},[i("p",{staticClass:"mt-5 title font-weight-light new-list-btn",on:{click:t.createNew}},[t._v(t._s(t.createListText))])])],1)},m=[],v={data:function(){return{title:"shopping list",labelText:"Your list name",noList:"List name is incorrect, please try again",incorrectListText:!1,buttonText:"let's get started!",createListText:"Have no list yet? Tap here to open one, it's easy",listName:"",loading:!1}},methods:{openList:function(){var t=this;this.loading=!0,this.$http.get("list/"+this.listName).then(function(t){return t.json()}).then(function(e){"{}"!=JSON.stringify(e)?(t.loading=!1,t.$store.commit("setListName",e.list_name),t.$router.push("/my-list")):(t.loading=!1,t.incorrectListText=!0)})},createNew:function(){this.$router.push("/create-list")}}},f=v,h=(i("990a"),Object(a["a"])(f,d,m,!1,null,"2ddc3e1c",null));h.options.__file="Welcome.vue";var p=h.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Header",{staticClass:"header",attrs:{plusShown:t.plusToggle},on:{plusClicked:t.showForm}}),i("AddItem",{directives:[{name:"show",rawName:"v-show",value:t.addForm,expression:"addForm"}],on:{hide:t.hideToolbar,show:t.showToolbar}}),i("List",{staticClass:"list",attrs:{showBar:t.plusToggle}}),i("Toolbar",{attrs:{isVisible:t.toolbarViewer}})],1)},b=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",t._b({staticClass:"mt-2"},"v-layout",t.binding,!1),[i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{label:"Enter a New Item",placeholder:"Item Name"},on:{click:t.inputClicked,blur:t.inputBlured},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}})],1),i("v-flex",{attrs:{xs12:"",md4:"","offset-md1":""}},[i("v-text-field",{attrs:{label:"Quantity",placeholder:"0",type:"number"},on:{click:t.inputClicked,blur:t.inputBlured},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),i("v-flex",{attrs:{xs12:"",md2:"","offset-md1":""}},[i("v-btn",{staticClass:"subheading",attrs:{block:"",color:"success",disabled:""==t.item||""==t.amount},on:{click:t.addToList}},[t._v(t._s(t._f("toUpper")(t.addText)))])],1)],1)],1)},k=[],x={data:function(){return{item:"",amount:"",addText:"add item"}},methods:{addToList:function(){this.$store.commit("itemAdded",{name:this.item,qty:this.amount,color:this.defaultColor,clicked:!1}),this.item="",this.amount="";var t={items:this.$store.getters.items},e=this.$store.getters.listName;this.$http.put("update-items/"+e,t)},inputClicked:function(){this.$emit("hide")},inputBlured:function(){this.$emit("show")}},computed:{binding:function(){var t={};return this.$vuetify.breakpoint.smAndDown&&(t.column=!0),t},defaultColor:function(){return this.$store.getters.defaultColor}}},C=x,y=Object(a["a"])(C,_,k,!1,null,null,null);y.options.__file="AddItem.vue";var w=y.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"spinner pt-5 mt-5",attrs:{size:"60","line-size":8,"line-fg-color":"#455A64",message:"Loading..."}}),t.listOfItems.length>0?i("div",[i("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.showBar,expression:"showBar"}],staticClass:"mb-3 sticky",attrs:{color:t.barColor,height:"10",value:t.percentage}}),i("v-list",{staticClass:"mt-3",class:t.mobile},t._l(t.listOfItems,function(e,s){return i("Item",{key:s,attrs:{item:e,itemIndex:s},on:{"update:item":function(t){e=t},edited:function(e){t.editClosed=!1},finishEditing:function(e){t.editClosed=!0}}})}))],1):t._e()],1)},N=[],L=(i("ac6a"),i("55dd"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-tile",[i("v-list-tile-content",[t.item.clicked?i("v-chip",{staticClass:"body-2",attrs:{color:"grey","text-color":"white"},on:{click:t.uncheckItem}},[i("v-avatar",{staticClass:"grey darken-3 body-2"},[i("v-icon",[t._v("done")])],1),t._v("\n                "+t._s(t.item.name)+"\n            ")],1):i("v-chip",{staticClass:"body-2",attrs:{color:t.item.color,"text-color":"white"},on:{click:t.checkItem}},[i("v-avatar",{staticClass:"darken-3 body-2",class:t.item.color},[t._v("\n                    "+t._s(t.item.qty)+"\n                ")]),t._v("\n                "+t._s(t.item.name)+"\n            ")],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[i("v-icon",{attrs:{color:"blue lighten-1"},on:{click:function(e){t.openEditDialog()}}},[t._v("edit")])],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(e){t.deleteItem()}}},[i("v-icon",{attrs:{color:"red lighten-1"}},[t._v("clear")])],1)],1)],1),i("v-layout",[i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Edit Item")]),i("v-card-text",[i("v-text-field",{attrs:{label:"Item Name"},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}}),i("v-text-field",{attrs:{label:"Quantity",type:"number"},model:{value:t.item.qty,callback:function(e){t.$set(t.item,"qty",e)},expression:"item.qty"}})],1),i("v-card-text",{staticClass:"pa-0 my-2"},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.colors,function(e,s){return i("v-flex",{key:s,attrs:{xs2:""}},[i("v-icon",{class:{selected:t.item.color==e},attrs:{medium:"",color:e},on:{click:function(i){t.item.color=e}}},[t._v("brightness_1")])],1)}))],1),i("v-btn",{on:{click:t.closeEditDialog}},[t._v("Cancel")]),i("v-btn",{attrs:{disabled:""==t.item.name||0==t.item.qty},on:{click:t.saveChanges}},[t._v("Save")])],1)],1)],1)],1)}),D=[],I=(i("7f7f"),{props:["item","itemIndex"],data:function(){return{dialog:!1,colors:["lime","amber","deep-orange","pink","deep-purple","indigo"],pickedColor:"",tempItem:{}}},methods:{deleteItem:function(){this.$store.commit("removeFromList",this.itemIndex)},openEditDialog:function(){this.tempItem.name=this.item.name,this.tempItem.qty=this.item.qty,this.tempItem.color=this.item.color,this.$emit("edited"),this.dialog=!0},closeEditDialog:function(){this.item.name=this.tempItem.name,this.item.qty=this.tempItem.qty,this.item.color=this.tempItem.color,this.$emit("finishEditing"),this.dialog=!1},changeColor:function(){},saveChanges:function(){this.$store.commit("editItem",{index:this.itemIndex,item:this.item});var t={items:this.$store.getters.items},e=this.$store.getters.listName;this.$http.put("update-items/"+e,t),this.$emit("finishEditing"),this.dialog=!1},checkItem:function(){this.item.clicked=!0,ft.$emit("itemClicked")},uncheckItem:function(){this.item.clicked=!1,ft.$emit("itemClicked")}}}),T=I,B=(i("28c3"),Object(a["a"])(T,L,D,!1,null,"717c5d61",null));B.options.__file="Item.vue";var S=B.exports,O=i("5b7e"),j=i.n(O),E={props:["showBar"],data:function(){return{loading:!0,editClosed:!0}},computed:{listOfItems:function(){var t=this.$store.getters.items;return this.$store.getters.sortByColor&&this.editClosed&&this.sortList(t).then(function(e){t=e}),t},mobile:function(){return!this.$vuetify.breakpoint.smAndDown&&{"mx-5":!0}},clickedCounter:function(){var t=this.listOfItems.filter(function(t){return 1==t.clicked});return t.length},percentage:function(){return Math.floor(this.clickedCounter/this.listOfItems.length*100)},barColor:function(){return 0==this.percentage?"#607D8B":this.percentage<20?"#B71C1C":this.percentage<40?"#F44336":this.percentage<60?"#FF9800":this.percentage<80?"#FFC107":"#00C853"}},methods:{sortList:function(t){return new Promise(function(e){t.sort(function(t,e){var i=t.color.toUpperCase(),s=e.color.toUpperCase();return i<s?-1:i>s?1:0}),e(t)})}},created:function(){var t=this,e=this.$store.getters.listName;this.$http.get("list/"+e).then(function(t){return t.json()}).then(function(e){if(e){var i=e.items,s=e.default_color,o=e.sort_by_color;t.$store.commit("setList",i),t.$store.commit("setDefaultColor",s),t.$store.commit("setSortByColor",o),t.loading=!1}else t.loading=!1}),ft.$on("uncheck",function(){t.listOfItems.forEach(function(t){return t.clicked=!1})})},components:{Item:S,Spinner:j.a}},F=E,A=(i("51b5"),Object(a["a"])(F,$,N,!1,null,"50dbaa80",null));A.options.__file="List.vue";var q=A.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("v-toolbar",{staticClass:"white--text pt-3",attrs:{color:"blue-grey darken-2",fixed:"",app:""}},[i("v-menu",{attrs:{bottom:"",left:""}},[i("v-btn",{staticClass:"pb-3",attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),i("v-list",t._l(t.menuItems,function(e,s){return i("v-list-tile",{key:s,on:{click:e.method}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.action))])],1),i("v-list-tile-title",{staticClass:"menu-item"},[t._v(t._s(e.title))])],1)}))],1),i("div",{staticClass:"headline pb-3"},[t._v("\n            "+t._s(t._f("toUpper")(t.headerText))+"\n            "),i("v-badge",{attrs:{right:"",overlap:"",color:"red"}},[i("span",{staticClass:"header-badge",attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.itemAmount))]),i("v-icon",{staticClass:"ml-2",attrs:{large:"",dark:""}},[t._v("shopping_cart")])],1),i("span",{staticClass:"body-2 ml-3"},[t._v(t._s(t.listName))])],1),i("v-spacer"),i("v-fab-transition",[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.plusShown,expression:"plusShown"}],attrs:{color:"success",fab:"",dark:"",small:"",absolute:"",bottom:"",right:""},on:{click:t.hideButton}},[i("v-icon",[t._v("add")])],1)],1)],1),i("v-snackbar",{attrs:{color:t.color,top:"top"===t.y,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n        "),i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"slide-x-reverse-transition"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.settingsDialog=!1}}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("Settings")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},on:{click:t.saveSettings}},[t._v("Save")])],1)],1),i("v-card",[i("v-card-title",{staticClass:"pb-0"},[t._v("Default Color")]),i("v-subheader",[t._v("Set the default color for the items in your list")]),i("v-layout",{staticClass:"pb-3",attrs:{row:"",wrap:""}},t._l(t.colors,function(e,s){return i("v-flex",{key:s,attrs:{xs2:"",md1:""}},[i("v-icon",{class:{selected:t.defaultColor==e},attrs:{"x-large":"",color:e},on:{click:function(i){t.changeColor(e)}}},[t._v("\n                                    brightness_1\n                                ")])],1)}))],1),i("v-card",[i("v-card-title",{staticClass:"pb-0"},[t._v("Sort By Color")]),i("v-subheader",[t._v("\n                    Sort the shopping list by item color\n                ")]),i("v-subheader",{staticClass:"mt-0"},[i("v-switch",{staticClass:"mt-0",attrs:{color:"primary"},model:{value:t.sortByColor,callback:function(e){t.sortByColor=e},expression:"sortByColor"}})],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Delete List")]),i("v-card-text",[t._v("Are you sure?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.deleteData}},[t._v("Yes, Delete")])],1)],1)],1)],1)},V=[],P={props:["plusShown"],data:function(){return{headerText:"shopping list",snackbar:!1,color:"black",y:"top",mode:"",timeout:6e3,text:"List was saved successfully",menuItems:[{title:"Save List",method:this.saveList,action:"save"},{title:"Delete List",method:this.openDeleteDialog,action:"delete"},{title:"Uncheck All",method:this.uncheckAll,action:"check_box_outline_blank"},{title:"Settings",method:this.openSettings,action:"settings"},{title:"Exit",method:this.exitList,action:"exit_to_app"}],settingsDialog:!1,colors:["lime","amber","deep-orange","pink","deep-purple","indigo"],deleteDialog:!1}},computed:{itemAmount:function(){return this.$store.getters.items.length},defaultColor:function(){return this.$store.getters.defaultColor},sortByColor:{get:function(){return this.$store.getters.sortByColor},set:function(t){this.$store.commit("setSortByColor",t)}},listName:function(){return this.$store.getters.listName}},methods:{openSettings:function(){this.settingsDialog=!0},changeColor:function(t){this.$store.commit("setDefaultColor",t)},saveSettings:function(){var t={default_color:this.$store.getters.defaultColor,sort_by_color:this.$store.getters.sortByColor},e=this.$store.getters.listName;this.$http.put("update-settings/"+e,t),this.settingsDialog=!1},saveList:function(){var t={items:this.$store.getters.items},e=this.$store.getters.listName;this.$http.put("update-items/"+e,t),this.snackbar=!0},openDeleteDialog:function(){this.deleteDialog=!0},deleteData:function(){this.deleteDialog=!1,this.$store.commit("deleteList")},hideButton:function(){this.$emit("plusClicked")},uncheckAll:function(){ft.$emit("uncheck")},exitList:function(){this.$router.push("/")}}},H=P,M=(i("a1e0"),Object(a["a"])(H,U,V,!1,null,"e2ac6668",null));M.options.__file="Header.vue";var z=M.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}]},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs1:"","offset-xs4":""}},[i("v-btn",{attrs:{fab:"",fixed:"",bottom:"",dark:"",color:"indigo lighten-1"},on:{click:t.saveData}},[i("v-icon",[t._v("save")])],1)],1),i("v-flex",{attrs:{xs1:"","offset-xs1":""}},[i("v-btn",{attrs:{fab:"",fixed:"",bottom:"",dark:"",color:"red lighten-1"},on:{click:function(e){t.dialog=!0}}},[i("v-icon",[t._v("delete")])],1)],1),i("v-snackbar",{attrs:{color:t.color,top:"top"===t.y,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n            "+t._s(t.text)+"\n            "),i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Delete List")]),i("v-card-text",[t._v("Are you sure?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.deleteData}},[t._v("Yes, Delete")])],1)],1)],1)],1)},Y=[],Q={props:["isVisible"],data:function(){return{snackbar:!1,color:"black",y:"top",mode:"",timeout:6e3,text:"List was saved successfully",dialog:!1}},methods:{saveData:function(){var t={items:this.$store.getters.items},e=this.$store.getters.listName;this.$http.put("update-items/"+e,t),this.snackbar=!0},deleteData:function(){this.dialog=!1,this.$store.commit("deleteList")}}},W=Q,G=Object(a["a"])(W,J,Y,!1,null,null,null);G.options.__file="Toolbar.vue";var K=G.exports,R={data:function(){return{toolbarViewer:!0,plusToggle:!0,addForm:!1}},methods:{hideToolbar:function(){this.toolbarViewer=!1},showToolbar:function(){this.toolbarViewer=!0},showForm:function(){var t=this;window.scrollTo(top),setTimeout(function(){t.plusToggle=!1,t.addForm=!0},50)},hideForm:function(){this.plusToggle=!0,this.addForm=!1}},components:{AddItem:w,List:q,Header:z,Toolbar:K},created:function(){var t=this;window.addEventListener("scroll",this.hideForm),ft.$on("itemClicked",function(){t.hideForm()})},destroyed:function(){window.removeEventListener("scroll",this.hideForm)}},X=R,Z=(i("ed81"),Object(a["a"])(X,g,b,!1,null,"11a585e9",null));Z.options.__file="Home.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-layout",{staticClass:"px-5",attrs:{"align-center":"","justify-center":"",row:""}},[i("v-flex",{staticClass:"pt-5",attrs:{xs12:"",row:""}},[i("v-btn",{staticClass:"main",attrs:{fab:"",dark:"","x-large":"",depressed:"",color:"blue-grey darken-3"}},[i("v-icon",{staticClass:"main-icon",attrs:{dark:""}},[t._v("shopping_cart")])],1),i("h3",{staticClass:"display-1 my-5"},[t._v(t._s(t._f("toUpper")(t.title)))]),i("v-text-field",{attrs:{label:t.labelText},on:{input:function(e){t.existingName=!1}},model:{value:t.listName,callback:function(e){t.listName=e},expression:"listName"}}),i("p",{directives:[{name:"show",rawName:"v-show",value:t.existingName,expression:"existingName"}],staticClass:"alert"},[t._v(t._s(t.existingList))]),i("v-btn",{staticClass:"mt-4",attrs:{block:"",disabled:""==t.listName},on:{click:t.checkListName}},[t._v("\n          "+t._s(t._f("toUpper")(t.buttonCreate))+"\n          "),i("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"ml-3",attrs:{indeterminate:"",color:"blue-grey darken-3",size:20,width:3}})],1)],1)],1),i("v-layout",{staticClass:"px-4",attrs:{row:"",xs12:"","justify-start":""}},[i("v-btn",{staticClass:"body-2 mt-4",attrs:{flat:"",color:"blue darken-2"},on:{click:function(e){t.$router.push("/")}}},[i("v-icon",{staticClass:"mr-1"},[t._v("arrow_back")]),t._v(" "+t._s(t.back)+"\n    ")],1)],1)],1)},it=[],st={data:function(){return{title:"shopping list",labelText:"New list name",listName:"",buttonCreate:"create",existingList:"List name has already exists, try another one",back:"Back",existingName:!1,loading:!1}},methods:{checkListName:function(){var t=this;this.loading=!0,this.$http.get("list/"+this.listName).then(function(t){return t.json()}).then(function(e){"{}"!=JSON.stringify(e)?(t.loading=!1,t.existingName=!0):t.createList()})},createList:function(){var t=this;this.$http.post("list/",{list_name:this.listName}).then(function(e){t.loading=!1,t.$store.commit("setListName",t.listName),t.$router.push("/my-list")})}}},ot=st,nt=(i("14f0"),Object(a["a"])(ot,et,it,!1,null,"56bb6b1a",null));nt.options.__file="CreateList.vue";var at=nt.exports;s["default"].use(u["a"]);var rt=new u["a"]({mode:"history",routes:[{path:"/",name:"welcome",component:p},{path:"/my-list",name:"home",component:tt},{path:"/create-list",name:"create-list",component:at}]}),lt=i("28dd"),ct=i("2f62");s["default"].use(ct["a"]);var ut=new ct["a"].Store({state:{list:[],color:"",sortByColor:!1,listName:""},getters:{items:function(t){return t.list},defaultColor:function(t){return t.color},sortByColor:function(t){return t.sortByColor},listName:function(t){return t.listName}},mutations:{setList:function(t,e){t.list=e},itemAdded:function(t,e){t.list.unshift(e)},removeFromList:function(t,e){t.list.splice(e,1)},editItem:function(t,e){t.list[e.index]=e.item},deleteList:function(t){t.list=[]},setDefaultColor:function(t,e){t.color=e},setSortByColor:function(t,e){t.sortByColor=e},setListName:function(t,e){t.listName=e}},actions:{}}),dt=i("ce5b"),mt=i.n(dt),vt=i("9483");Object(vt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("bf40");i.d(e,"EventBus",function(){return ft}),s["default"].config.productionTip=!1,s["default"].use(mt.a),s["default"].use(lt["a"]),s["default"].http.options.root="https://shopping-list-server.herokuapp.com",s["default"].filter("toUpper",function(t){return t.toUpperCase()});var ft=new s["default"];new s["default"]({router:rt,store:ut,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("5e27"),o=i.n(s);o.a},"5e27":function(t,e,i){},"5e92":function(t,e,i){},"8d51":function(t,e,i){},"990a":function(t,e,i){"use strict";var s=i("1502"),o=i.n(s);o.a},a1e0:function(t,e,i){"use strict";var s=i("5e92"),o=i.n(s);o.a},ed81:function(t,e,i){"use strict";var s=i("1c9c"),o=i.n(s);o.a}});
//# sourceMappingURL=app.bebb912a.js.map