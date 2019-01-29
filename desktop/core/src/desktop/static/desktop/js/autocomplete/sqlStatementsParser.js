// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var sqlStatementsParser=function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,7],n=[1,6],i=[1,12],s=[5,9],r=[1,13],o=[5,8,9],h={trace:function(){},yy:{},symbols_:{error:2,SqlStatementsParser:3,Statements:4,EOF:5,OneOrMoreSeparators:6,StatementParts:7,PART_OF_STATEMENT:8,";":9,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",8:"PART_OF_STATEMENT",9:";"},productions_:[0,[3,2],[3,3],[3,4],[3,3],[3,2],[3,1],[4,1],[4,3],[7,1],[7,2],[6,1],[6,2]],performAction:function(t,e,n,i,s,r,o){var a=r.length-1;switch(s){case 1:return h.removeTrailingWhiteSpace(r[a-1]),r[a-1];case 2:return h.handleLeadingStatements(r[a-2],r[a-1]),h.removeTrailingWhiteSpace(r[a-1]),r[a-1];case 3:return h.handleLeadingStatements(r[a-3],r[a-2]),h.handleTrailingStatements(r[a-2],r[a-1]),h.removeTrailingWhiteSpace(r[a-2]),r[a-2];case 4:return h.handleTrailingStatements(r[a-2],r[a-1]),h.removeTrailingWhiteSpace(r[a-2]),r[a-2];case 5:var l=[];return h.handleLeadingStatements(r[a-1],l),l;case 6:return[];case 7:h.yy.firstToken?(this.$=[{type:"statement",statement:r[a],location:o[a],firstToken:h.yy.firstToken}],h.yy.firstToken=null):this.$=[{type:"statement",statement:r[a],location:o[a]}];break;case 8:h.handleTrailingStatements(r[a-2],r[a-1]),h.yy.firstToken?(r[a-2].push({type:"statement",statement:r[a],location:o[a],firstToken:h.yy.firstToken}),h.yy.firstToken=null):r[a-2].push({type:"statement",statement:r[a],location:o[a]});break;case 10:this.$=r[a-1]+r[a];break;case 11:this.$=[o[a]];break;case 12:r[a-1].push(o[a])}},table:[{3:1,4:2,5:[1,4],6:3,7:5,8:e,9:n},{1:[3]},{5:[1,8],6:9,9:n},{4:10,5:[1,11],7:5,8:e,9:i},{1:[2,6]},t(s,[2,7],{8:r}),t(o,[2,11]),t(o,[2,9]),{1:[2,1]},{5:[1,14],7:15,8:e,9:i},{5:[1,16],6:17,9:n},{1:[2,5]},t(o,[2,12]),t(o,[2,10]),{1:[2,4]},t(s,[2,8],{8:r}),{1:[2,2]},{5:[1,18],7:15,8:e,9:i},{1:[2,3]}],defaultActions:{4:[2,6],8:[2,1],11:[2,5],14:[2,4],16:[2,2],18:[2,3]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[null],s=[],r=this.table,o="",a=0,l=0,h=0,c=s.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var m=u.yylloc;s.push(m);var f=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,d,k,S,x,b,v,T,E=function(){var t;return"number"!=typeof(t=u.lex()||1)&&(t=e.symbols_[t]||t),t},P={};;){if(d=n[n.length-1],this.defaultActions[d]?k=this.defaultActions[d]:(null==g&&(g=E()),k=r[d]&&r[d][g]),void 0===k||!k.length||!k[0]){var I="";for(x in T=[],r[d])this.terminals_[x]&&2<x&&T.push("'"+this.terminals_[x]+"'");I=u.showPosition?"Parse error on line "+(a+1)+":\n"+u.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(I,{text:u.match,token:this.terminals_[g]||g,line:u.yylineno,loc:u.yylloc,expected:T})}if(k[0]instanceof Array&&1<k.length)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+g);switch(k[0]){case 1:n.push(g),i.push(u.yytext),s.push(u.yylloc),n.push(k[1]),g=null,_?(g=_,_=null):(l=u.yyleng,o=u.yytext,a=u.yylineno,m=u.yylloc,0<h&&h--);break;case 2:if(b=this.productions_[k[1]][1],P.$=i[i.length-b],P._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},f&&(P._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(S=this.performAction.apply(P,[o,l,a,y.yy,k[1],i,s].concat(c))))return S;b&&(n=n.slice(0,-1*b*2),i=i.slice(0,-1*b),s=s.slice(0,-1*b)),n.push(this.productions_[k[1]][0]),i.push(P.$),s.push(P._$),v=r[n[n.length-2]][n[n.length-1]],n.push(v);break;case 3:return!0}}return!0},handleLeadingStatements:function(t,e){for(var n=t.length-1;0<=n;n--)e.unshift({type:"statement",statement:";",location:t[n]})},handleTrailingStatements:function(t,e){var n=t[t.length-1];if(n.statement+=";",n.location={first_line:n.location.first_line,first_column:n.location.first_column,last_line:e[0].last_line,last_column:e[0].last_column},1<e.length)for(var i=1;i<e.length;i++)t.push({type:"statement",statement:";",location:e[i]})},removeTrailingWhiteSpace:function(t){var e=t[t.length-1];/^\s+$/.test(e.statement)&&t.pop()}},a={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(20<t.length?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(20<t.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return 0<this.conditionStack.length-1?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return 0<=(t=this.conditionStack.length-1-Math.abs(t||0))?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{flex:!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("multiLineComment"),8;case 1:case 2:return 8;case 3:case 4:return this.popState(),8;case 5:return this.begin("inLineComment"),8;case 6:return 8;case 7:return this.popState(),5;case 8:return this.popState(),8;case 9:return this.begin("doubleQuote"),8;case 10:return 8;case 11:return this.popState(),5;case 12:return this.popState(),8;case 13:return this.begin("singleQuote"),8;case 14:return 8;case 15:return this.popState(),5;case 16:return this.popState(),8;case 17:return this.begin("backTick"),8;case 18:return 8;case 19:return this.popState(),5;case 20:return this.popState(),8;case 21:if(!h.yy.firstToken){var s=e.yytext.match(/[a-zA-Z_]+/);s&&(h.yy.firstToken=s[0])}return 8;case 22:case 23:return 8;case 24:return 9;case 25:return 5;case 26:break;case 27:console.log(e.yytext)}},rules:[/^(?:\/\*)/,/^(?:[^*]+)/,/^(?:[*][^\/])/,/^(?:$)/,/^(?:\*\/)/,/^(?:--)/,/^(?:[^\n]+)/,/^(?:$)/,/^(?:[\n])/,/^(?:")/,/^(?:(?:\\["]|[^"])+)/,/^(?:$)/,/^(?:")/,/^(?:')/,/^(?:(?:\\[']|[^'])+)/,/^(?:$)/,/^(?:')/,/^(?:`)/,/^(?:[^`]+)/,/^(?:$)/,/^(?:`)/,/^(?:[^"\/;'`-]+)/,/^(?:[-][^;-]?)/,/^(?:[\/][^;*]?)/,/^(?:;)/,/^(?:$)/,/^(?:.)/,/^(?:.)/],conditions:{multiLineComment:{rules:[1,2,3,4],inclusive:!1},inLineComment:{rules:[6,7,8],inclusive:!1},singleQuote:{rules:[14,15,16],inclusive:!1},doubleQuote:{rules:[10,11,12],inclusive:!1},backTick:{rules:[18,19,20],inclusive:!1},INITIAL:{rules:[0,5,9,13,17,21,22,23,24,25,26,27],inclusive:!0}}};function l(){this.yy={}}return h.lexer=a,new((l.prototype=h).Parser=l)}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=sqlStatementsParser,exports.Parser=sqlStatementsParser.Parser,exports.parse=function(){return sqlStatementsParser.parse.apply(sqlStatementsParser,arguments)},exports.main=function(t){t[1]||(console.log("Usage: "+t[0]+" FILE"),process.exit(1));var e=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(e)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));