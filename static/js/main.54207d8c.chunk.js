(this["webpackJsonpmtg-rulebook"]=this["webpackJsonpmtg-rulebook"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(10),c=r.n(s),i=(r(16),r(2)),o=r(3),u=r(7),h=r(6),l=(r(17),r(4)),d=r(11),p=function e(t,r){Object(i.a)(this,e),this.chapterKey=t,this.ruleKey=r},f=function(){function e(t){Object(i.a)(this,e),this.name=t,this.rules=new Map}return Object(o.a)(e,[{key:"addRule",value:function(e,t){this.rules.set(e,t)}}]),e}(),b=function(){function e(){Object(i.a)(this,e),this.chapters=new Map}return Object(o.a)(e,[{key:"isEmpty",value:function(){return!this.chapters||0===this.chapters.size}},{key:"includes",value:function(e){var t,r=[],a=Object(l.a)(this.chapters.keys());try{for(a.s();!(t=a.n()).done;){var n,s=t.value,c=Object(l.a)(this.chapters.get(s).rules.entries());try{for(c.s();!(n=c.n()).done;){var i=Object(d.a)(n.value,2),o=i[0];i[1].toLowerCase().includes(e)&&r.push(new p(s,o))}}catch(u){c.e(u)}finally{c.f()}}}catch(u){a.e(u)}finally{a.f()}return r}},{key:"includesSpecific",value:function(e,t){var r,a=[],n=Object(l.a)(t);try{for(n.s();!(r=n.n()).done;){var s=r.value;this.chapters.get(s.chapterKey).rules.get(s.ruleKey).toLowerCase().includes(e)&&a.push(s)}}catch(c){n.e(c)}finally{n.f()}return a}},{key:"addChapter",value:function(e,t){this.chapters.set(e,new f(t))}},{key:"addRule",value:function(e,t,r){this.chapters.get(r).addRule(e,t)}}]),e}(),j=function e(t,r){Object(i.a)(this,e),this.id=t,this.text=r},v=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"parse",value:function(e){var t,r=new b,a=this.trimToLines(e),n=Object(l.a)(a);try{for(n.s();!(t=n.n()).done;){var s=t.value,c=this.tokenize(s),i=this.extractChapterId(c.id);if(!isNaN(i)){var o=this.extractRuleId(c.id);void 0===o?r.addChapter(i,c.text):r.addRule(o,c.text,i)}}}catch(u){n.e(u)}finally{n.f()}return r}},{key:"trim",value:function(e,t,r){var a=e.indexOf(t),n=e.indexOf(r,a);return e.slice(a,n)}},{key:"trimToLines",value:function(e){return this.trim(e,"1. Game Concepts\r\n\r\n","Glossary").split(/\r?\n/)}},{key:"tokenize",value:function(e){var t=(e=e.trimStart()).indexOf(" ");return new j(e.substring(0,t),e.substring(t))}},{key:"extractChapterId",value:function(e){return parseInt(e.substring(0,e.indexOf(".")))}},{key:"extractRuleId",value:function(e){var t=e.split(".");return t.length>1&&""!==t[1]?t[1]:void 0}}]),e}(),O=r(5),k=r(0);var y=function(e){var t=Array.from(e.rulebook.chapters.keys()).map((function(t){var r=e.rulebook.chapters.get(t),a=!!e.searchedTuples.find((function(e){return e.chapterKey===t})),n=0===r.rules.size;return Object(k.jsxs)("div",{className:"MenuItem ".concat(n?"Part":"Chapter"," ").concat(a?"Searched":""),onClick:function(r){return e.onChapterClicked(t,r)},children:[Object(k.jsx)("span",{children:t}),Object(k.jsx)("span",{children:r.name})]},t)}));return Object(k.jsx)("div",{className:"TableOfContents",children:t})};var C=function(e){var t=e.rulebook.chapters.get(e.chapterKey),r=Array.from(t.rules.keys()).map((function(r){var a=!1;return e.searchedTuples.find((function(t){return t.ruleKey===r&&t.chapterKey===e.chapterKey}))&&(a=!0),Object(k.jsxs)("div",{className:"MenuItem Rule ".concat(a?"Searched":""),children:[Object(k.jsx)("span",{children:r}),Object(k.jsx)("span",{children:t.rules.get(r)})]},r)})),a=e.chapterKey+". "+t.name;return Object(k.jsxs)("div",{className:"SelectedChapter",children:[Object(k.jsx)("h2",{className:"ChapterTitle",children:a}),r]})};var m=function(e){return Object(k.jsx)("div",{className:"SearchBar",children:Object(k.jsx)("input",{type:"text",placeholder:"Search for rules",onChange:function(t){return e.onSearchChange(t.target.value.toLowerCase())}})})},g=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).onChapterClicked=a.onChapterClicked.bind(Object(O.a)(a)),a.onSearchChange=a.onSearchChange.bind(Object(O.a)(a)),a.state={selectedChapterKey:100,searchString:"",searchedTuples:[]},a}return Object(o.a)(r,[{key:"onChapterClicked",value:function(e,t){this.setState({selectedChapterKey:e})}},{key:"onSearchChange",value:function(e){var t;t=e?this.state.searchString&&e.includes(this.state.searchString)?this.props.rulebook.includesSpecific(e,this.state.searchedTuples):this.props.rulebook.includes(e):[],this.setState({searchString:e,searchedTuples:t})}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Main",children:[Object(k.jsxs)("div",{className:"Header",children:[Object(k.jsx)("h1",{children:"MtG Rulebook"}),Object(k.jsx)(m,{onSearchChange:this.onSearchChange})]}),Object(k.jsxs)("div",{className:"Rulebook",children:[Object(k.jsx)(y,{rulebook:this.props.rulebook,onChapterClicked:this.onChapterClicked,searchedTuples:this.state.searchedTuples}),Object(k.jsx)(C,{rulebook:this.props.rulebook,chapterKey:this.state.selectedChapterKey,searchedTuples:this.state.searchedTuples})]}),Object(k.jsx)("div",{className:"Footer",children:Object(k.jsx)("p",{children:"\u201cMtG Rulebook is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. \xa9Wizards of the Coast LLC.\u201d"})})]})}}]),r}(n.a.Component);var x=function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Loading..."}),Object(k.jsx)("span",{children:e.message})]})},w=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).parser=new v,a.state={view:"paster",rulebook:null,errorParsing:!1},a}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.fetchRawData()}},{key:"fetchRawData",value:function(){var e=this;fetch("https://api.allorigins.win/get?url=https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt").then((function(e){return e.ok||alert("There was a problem with fetching the data"),e.json()})).then((function(t){return e.handleRawData(t.contents)}))}},{key:"handleRawData",value:function(e){this.parser.parse(e).isEmpty()?alert("There was a problem parsing the fetched data"):this.setState({rulebook:this.parser.parse(e),view:"rulebook"})}},{key:"render",value:function(){var e;return e="rulebook"===this.state.view?Object(k.jsx)(g,{rulebook:this.state.rulebook}):Object(k.jsx)(x,{message:"Fetching data"}),Object(k.jsx)("div",{className:"App",children:e})}}]),r}(n.a.Component),S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(w,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.54207d8c.chunk.js.map