(function(e){function t(t){for(var a,o,c=t[0],l=t[1],i=t[2],d=0,_=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(_.length)_.shift()();return n.push.apply(n,i||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,c=1;c<s.length;c++){var l=s[c];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},r={app:0},n=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0491":function(e,t,s){},"161f":function(e,t,s){e.exports=s.p+"img/metaTable.450b1941.png"},"1b37":function(e,t,s){"use strict";s("0491")},2467:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a15b"),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__),ant_design_vue_es_radio_RadioButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("c0e4");function generateSymbols(e,t){var s=[];switch(e){case"random":for(var a=0;a<t;a++){var r=Math.random();s.push(r>=.5?"+":"-")}break;case"+":for(var n=0;n<t;n++)s.push("+");break;case"-":for(var o=0;o<t;o++)s.push("-");break}return s}function generateElements(e,t){var s=[];switch(e){case 1:for(var a=0;a<t;a++){var r=10*Math.random();s.push(String(r)[0])}break;case 2:for(var n=0;n<t;n++){var o=100*Math.random();s.push(String(o).slice(0,2).replace(".",""))}break;case 3:for(var c=0;c<t;c++){var l=1e3*Math.random();s.push(String(l).slice(0,3).replace(".",""))}break;case 4:for(var i=0;i<t;i++){var u=1e4*Math.random();s.push(String(u).slice(0,4).replace(".",""))}break}return s}__webpack_exports__["a"]={name:"mathStudy",components:{ARadioButton:ant_design_vue_es_radio_RadioButton__WEBPACK_IMPORTED_MODULE_4__["a"]},data:function(){return{questionQuant:30,option:"plusOnly",elementLengthGroup:[{label:"≤10",value:1},{label:"≤100",value:2},{label:"≤1000",value:3},{label:"≤10000",value:4}],elementLength:1,questions:null,answers:null}},mounted:function(){},watch:{},methods:{modeChange:function(e){this.option=e.target.value},freshQuests:function freshQuests(){var that=this,symbols_1=[],symbols_2=[];switch(this.option){case"plusOnly":symbols_1=generateSymbols("+",parseInt(that.questionQuant)),symbols_2=symbols_1;break;case"minusOnly":symbols_1=generateSymbols("-",parseInt(that.questionQuant)),symbols_2=symbols_1;break;case"combined":symbols_1=generateSymbols("random",parseInt(that.questionQuant)),symbols_2=generateSymbols("random",parseInt(that.questionQuant));break}for(var elements_1=generateElements(this.elementLength,parseInt(that.questionQuant)),elements_2=generateElements(this.elementLength,parseInt(that.questionQuant)),elements_3=generateElements(this.elementLength,parseInt(that.questionQuant)),equations_toCal=[],i=0;i<that.questionQuant;i++){var cache_toCal=[elements_1[i],symbols_1[i],elements_2[i],symbols_2[i],elements_3[i]];eval(cache_toCal.join(" "))<0&&(console.log(),cache_toCal[0]=String(Math.ceil(parseInt(cache_toCal[0])-eval(cache_toCal.join(" "))+10*Math.random()))),equations_toCal.push(cache_toCal)}var answers=[];for(var _i6 in equations_toCal)answers.push(eval(equations_toCal[_i6].join("")));console.log(answers),equations_toCal.forEach((function(e,t){equations_toCal[t]=e.join(" ")+" = "})),that.questions=equations_toCal,that.answers=answers}},computed:{},filters:{}}},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("9b9a"),s("4922"),s("3781"),s("fddd");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("a-layout",{style:e.windowLayoutClass},[s("a-layout-sider",{style:e.windowLayoutSiderClass},[s("a-menu",{attrs:{"default-selected-keys":["Chinese"]}},[s("a-menu-item",{key:"Chinese",on:{click:function(t){return e.changeSelectedMenuItem(t)}}},[e._v("语文")]),s("a-menu-item",{key:"Math",on:{click:function(t){return e.changeSelectedMenuItem(t)}}},[e._v("数学")])],1)],1),"Chinese"===e.selectedMenuItemName?s("a-layout-content",[s("chineseStudy")],1):"Math"===e.selectedMenuItemName?s("a-layout-content",[s("mathStudy")],1):e._e()],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"chineseStudy"}},[s("a-row",{staticStyle:{margin:"20px"}},[s("a-space",{attrs:{direction:"horizontal"}},[s("a-input",{staticStyle:{width:"120px","text-align":"center"},attrs:{"addon-before":"Scaler"},model:{value:e.scaleCoefCache,callback:function(t){e.scaleCoefCache=t},expression:"scaleCoefCache"}}),s("a-input",{staticStyle:{width:"120px","text-align":"center"},attrs:{"addon-before":"Duplicate"},model:{value:e.duplicateCache,callback:function(t){e.duplicateCache=t},expression:"duplicateCache"}}),s("span",[s("input",{staticStyle:{width:"180px"},attrs:{id:"file",type:"file"}}),s("a-button",{on:{click:e.refreshStoreBySelectedFile}},[e._v("上传配置")]),s("a-button",{on:{click:e.openDemoDrawer}},[e._v("查看文件")])],1)],1)],1),s("a-tabs",{staticStyle:{"margin-left":"20px"}},e._l(e.tabQuant,(function(e){return s("a-tab-pane",{key:e,attrs:{tab:"Tab "+e}},[s("homework-content",{attrs:{"tab-index":e}})],1)})),1),s("a-drawer",{attrs:{width:"800",title:"Demo",placement:"right",closable:!0,visible:e.visibleSwitch},on:{close:e.closeDemoDrawer}},[s("div",[s("p",[e._v('{ "record_1": { "spells": [ ], "words": ["一","二","三","十","木","禾","上","下","土","个","八","入","大","天","人","火","文","六","七","儿","九"], "selectAllWords": "全选", "selectedWords": [] }, "record_2": { "spells": [ ], "words": ["无","口","日","中","了","子","门","月","不","开","四","五","目","耳","头","米","见","白","田","电","也"], "selectAllWords": "全选", "selectedWords": [] }, "record_3": { "spells": [ ], "words": ["长","山","出","飞","马","鸟","云","公","车","牛","羊","小","少","巾","牙","尺","毛","卜","又","心","风"], "selectAllWords": "全选", "selectedWords": [] }, }')])])])],1)},c=[],l=(s("b64b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"homeworkContent"}},[s("a-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[s("a-space",{attrs:{direction:"vertical"}},[s("a-input",{staticStyle:{width:"1000px","text-align":"left"},attrs:{"addon-before":"Spells"},model:{value:e.spellsCache,callback:function(t){e.spellsCache=t},expression:"spellsCache"}}),s("a-input",{staticStyle:{width:"1000px","text-align":"left"},attrs:{"addon-before":"Words"},model:{value:e.wordsCache,callback:function(t){e.wordsCache=t},expression:"wordsCache"}})],1)],1),s("div",{style:e.cardBackDiv},[s("a-card",{attrs:{title:"看字写拼音"}},e._l(e.maximumElementQuant,(function(t,a){return s("span",{key:t},[s("span",{staticStyle:{float:"left"},style:e.blackboard},[s("a-row",{style:e.spellClass},[e._v(e._s(e.spellsCache[a]))]),s("a-row",{style:e.wordClass},[s("span",[e._v(e._s(e.wordsCache[a]))])])],1)])})),0)],1),s("div",{style:e.cardBackDiv},[s("a-card",{attrs:{title:"组词"}},[s("a-button",{on:{click:e.switchSelectAllWordsStatus}},[e._v(e._s(e.$store.getters.getSelectAllWordsSwitchStatus("record_"+e.tabIndex)))]),s("a-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},e._l(e.$store.getters.getSelectedWords("record_"+e.tabIndex),(function(t,a){return s("span",{key:"key_"+a},[s("a-button",{on:{click:function(s){return e.DeleteSelectedWordByTagContent(t)}}},[e._v(e._s(t))])],1)})),0),s("a-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},e._l(e.$store.getters.getSelectedWords("record_"+e.tabIndex),(function(t){return s("div",{key:t,staticStyle:{float:"left","margin-right":"50px","margin-top":"20px"}},[s("span",{style:e.phrasingSection},[e._v(" "+e._s(t)+"： "),s("span",e._l(e.$store.getters.getDuplicate,(function(a){return s("span",{key:a},[e._v("_____"+e._s(t)+"_____ ；")])})),0)])])})),0)],1)],1)],1)}),i=[],u={name:"homeworkContent",props:{tabIndex:{default:null},spells:{default:null}},data:function(){return{SelectAllWordsCache:null,phraseQuant:null,cache:null}},mounted:function(){var e=this;this.spellsCache=this.spells,this.wordsCache=this.$store.getters.getWords("record_"+e.tabIndex),this.SelectAllWordsCache=this.$store.getters.getSelectAllWords["record_"+String(e.tabIndex)],this.phraseQuant=this.$store.getters.getPhraseQuant},watch:{},methods:{switchSelectAllWordsStatus:function(){var e=this,t=e.$store.getters.getSelectAllWordsSwitchStatus("record_"+e.tabIndex);if("全选"===t){var s=JSON.parse(JSON.stringify(e.wordsCache));this.$store.commit("updateSelectedWords",{key:"record_"+e.tabIndex,value:s}),this.$store.commit("updateSelectAllWordsSwitchStatus",{key:"record_"+e.tabIndex,value:"全不选"})}else this.$store.commit("updateSelectedWords",{key:"record_"+e.tabIndex,value:[]}),this.$store.commit("updateSelectAllWordsSwitchStatus",{key:"record_"+e.tabIndex,value:"全选"})},DeleteSelectedWordByTagContent:function(e){var t=this;this.$store.commit("deleteSelectedWordByContent",{recordName:"record_"+t.tabIndex,content:e})}},computed:{spellsCache:function(){var e=this;return e.$store.getters.getSpells("record_"+e.tabIndex)},wordsCache:function(){var e=this;return e.$store.getters.getWords("record_"+e.tabIndex)},maximumElementQuant:function(){var e=this;return e.spellsCache.length>=e.wordsCache.length?e.spellsCache.length:e.wordsCache.length},spellClass:function(){return{height:33*this.$store.getters.getScaleCoef+"px",lineHeight:20*this.$store.getters.getScaleCoef+"px",textAlign:"center",verticalAlign:"middle",fontSize:26*this.$store.getters.getScaleCoef+"px"}},wordClass:function(){return{height:95*this.$store.getters.getScaleCoef+"px",lineHeight:95*this.$store.getters.getScaleCoef+"px",textAlign:"center",verticalAlign:"middle",fontSize:40*this.$store.getters.getScaleCoef+"px"}},blackboard:function(){return{backgroundImage:"url("+s("161f")+")",width:100*this.$store.getters.getScaleCoef+"px",height:141*this.$store.getters.getScaleCoef+"px",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},cardBackDiv:function(){return{background:"gainsboro",marginTop:24*this.$store.getters.getScaleCoef+"px",marginBottom:24*this.$store.getters.getScaleCoef+"px",padding:24*this.$store.getters.getScaleCoef+"px"}},phrasingSection:function(){return{marginTop:24*this.$store.getters.getScaleCoef+"px",fontSize:24*this.$store.getters.getScaleCoef+"px"}}},filters:{}},d=u,_=s("a61b"),f=Object(_["a"])(d,l,i,!1,null,"7ed5242e",null),h=f.exports,p={name:"chineseStudy",components:{homeworkContent:h},data:function(){return{scaleCoefCache:null,duplicateCache:null,tabQuant:1,visibleSwitch:!1}},mounted:function(){this.scaleCoefCache=this.$store.getters.getScaleCoef,this.duplicateCache=this.$store.getters.getDuplicate,this.tabQuant=this.$store.getters.getRecordsQuant},watch:{scaleCoefCache:function(e,t){var s=parseFloat(e);this.$store.commit("updateScaleCoef",{value:s})},duplicateCache:function(e,t){var s=parseInt(e);this.$store.commit("updateDuplicate",{value:s})}},methods:{refreshStoreBySelectedFile:function(){var e=this,t=document.querySelector("#file"),s=new FileReader;s.readAsText(t.files[0]),s.onload=function(){var t=JSON.parse(s.result),a=Object.keys(t);e.tabQuant=a.length;for(var r={},n={},o={},c={},l=1;l<=e.tabQuant;l++)r["record_"+l]=t["record_"+l]["spells"],n["record_"+l]=t["record_"+l]["words"],o["record_"+l]=t["record_"+l]["selectAllWords"],c["record_"+l]=t["record_"+l]["selectedWords"];e.$store.commit("refreshStateBySelectedFile",{spells:r,words:n,selectAllSwitchStatus:o,selectedWords:c})}},openDemoDrawer:function(){var e=this;e.visibleSwitch=!0},closeDemoDrawer:function(){var e=this;e.visibleSwitch=!1}},computed:{},filters:{}},b=p,m=(s("1b37"),Object(_["a"])(b,o,c,!1,null,"4190c343",null)),g=m.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"mathStudy"}},[s("a-input",{staticClass:"inputSection",staticStyle:{width:"120px","text-align":"center"},attrs:{"addon-before":"题目数量"},model:{value:e.questionQuant,callback:function(t){e.questionQuant=t},expression:"questionQuant"}}),s("a-radio-group",{staticClass:"inputSection",attrs:{options:e.elementLengthGroup},model:{value:e.elementLength,callback:function(t){e.elementLength=t},expression:"elementLength"}}),s("a-radio-group",{staticClass:"inputSection",attrs:{"default-value":"plusOnly"},on:{change:e.modeChange}},[s("a-radio-button",{attrs:{value:"plusOnly"}},[e._v("只有加法")]),s("a-radio-button",{attrs:{value:"minusOnly"}},[e._v("只有减法")]),s("a-radio-button",{attrs:{value:"combined"}},[e._v("加减混合")])],1),s("a-button",{on:{click:e.freshQuests}},[e._v("出题")]),s("div",{staticStyle:{margin:"20px"}},e._l(e.questions,(function(e){return s("span",{key:e},[s("a-input",{staticClass:"equation",attrs:{"addon-before":e}})],1)})),0),s("div",{staticStyle:{margin:"20px"}},[e._v(" 答案："+e._s(e.answers)+" ")])],1)},v=[],y=s("2467"),S=y["a"],w=(s("bdbd"),Object(_["a"])(S,j,v,!1,null,"60fd0258",null)),C=w.exports,k={name:"App",components:{chineseStudy:g,mathStudy:C},data:function(){return{selectedMenuItemName:"Chinese"}},methods:{changeSelectedMenuItem:function(e){console.log(e.key);var t=this;t.selectedMenuItemName=e.key}},computed:{windowLayoutClass:function(){return{height:window.innerHeight+"px"}},windowLayoutSiderClass:function(){return{height:window.innerHeight+"px","text-align":"center",width:"40px"}}}},x=k,O=Object(_["a"])(x,r,n,!1,null,"5e3f2195",null),W=O.exports,E=s("f23d"),D=(s("202f"),s("a434"),s("2f62"));a["a"].use(D["a"]),a["a"].config.devtools=!0;var M=new D["a"].Store({state:{scaleCoef:.6,duplicate:3,spells:{record_1:["a","b","c"],record_2:["d","e","f"]},words:{record_1:["啊","哦","额"],record_2:["以","无","于"]},phraseQuant:3,selectAllWords:{record_1:"全选",record_2:"全选"},selectedWords:{record_1:[],record_2:[]}},mutations:{refreshStateBySelectedFile:function(e,t){var s=this;s.state.spells=t.spells,s.state.words=t.words,s.state.selectAllWords=t.selectAllSwitchStatus,s.state.selectedWords=t.selectedWords},updateScaleCoef:function(e,t){var s=this;s.state.scaleCoef=t.value},updateDuplicate:function(e,t){var s=this;s.state.duplicate=t.value},updateSelectedWords:function(e,t){var s=this;s.state.selectedWords[t.key]=t.value},updateSelectAllWordsSwitchStatus:function(e,t){var s=this;s.state.selectAllWords[t.key]=t.value},deleteSelectedWordByContent:function(e,t){var s=this,a=s.state.selectedWords[t.recordName].indexOf(t.content);s.state.selectedWords[t.recordName].splice(a,1)}},getters:{getRecordsQuant:function(e){var t=Object.keys(e.spells).length,s=Object.keys(e.words).length;return t>=s?t:s},getSpells:function(e){return function(t){return e.spells[t]}},getWords:function(e){return function(t){return e.words[t]}},getSelectAllWordsSwitchStatus:function(e){return function(t){return e.selectAllWords[t]}},getSelectedWords:function(e){return function(t){return e.selectedWords[t]}},getDuplicate:function(e){return e.duplicate},getScaleCoef:function(e){return e.scaleCoef}}});a["a"].config.productionTip=!1,a["a"].use(E["a"]),new a["a"]({store:M,render:function(e){return e(W)}}).$mount("#app")},a64a:function(e,t,s){},bdbd:function(e,t,s){"use strict";s("a64a")}});
//# sourceMappingURL=app.28761fa7.js.map