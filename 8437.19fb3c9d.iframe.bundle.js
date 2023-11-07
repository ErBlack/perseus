"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[8437],{"./packages/perseus-editor/src/widgets/expression-editor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>expression_editor});var src=__webpack_require__("./packages/kas/src/index.js"),perseus_src=__webpack_require__("./packages/perseus/src/index.ts"),es=__webpack_require__("./node_modules/@khanacademy/wonder-stuff-core/dist/browser/es/index.js"),hubble=__webpack_require__("./vendor/hubble/hubble.js"),hubble_default=__webpack_require__.n(hubble),react=__webpack_require__("./node_modules/react/index.js"),index_all=__webpack_require__("./node_modules/underscore/modules/index-all.js"),create_react_class=__webpack_require__("./node_modules/create-react-class/index.js"),create_react_class_default=__webpack_require__.n(create_react_class),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const PT=prop_types_default(),SortableArea=create_react_class_default()({displayName:"SortableArea",propTypes:{className:PT.string,components:PT.arrayOf(PT.node).isRequired,onReorder:PT.func.isRequired,style:PT.any,verify:PT.func},getDefaultProps:function(){return{verify:()=>!0}},getInitialState:function(){return{dragging:null,components:this.props.components}},componentDidMount:function(){this._setDragEvents()},UNSAFE_componentWillReceiveProps:function(nextProps){this.setState({components:nextProps.components})},componentDidUpdate:function(){this._setDragEvents()},onDragStart:function(startIndex){this.setState({dragging:startIndex})},onDrop:function(){this.setState({dragging:null}),this.props.onReorder(this.state.components)},onDragEnter:function(enterIndex){if(this.state.dragging===enterIndex)return;const newComponents=this.state.components.slice(),removed=newComponents.splice(this.state.dragging,1);newComponents.splice(enterIndex,0,removed[0]);const verified=this.props.verify(newComponents);return verified&&this.setState({dragging:enterIndex,components:newComponents}),verified},_listenEvent:function(e){e.dataTransfer.setData("hackhackhack","because browsers!")},_cancelEvent:function(e){e.preventDefault()},_setDragEvents:function(){this._dragItems=this._dragItems||[];const items=react_dom.findDOMNode(this).querySelectorAll("[draggable=true]"),oldItems=[],newItems=[];for(let i=0;i<this._dragItems.length;i++){const item=this._dragItems[i];items.indexOf(item)<0&&oldItems.push(item)}for(let i=0;i<items.length;i++){const item=items[i];this._dragItems.indexOf(item)<0&&newItems.push(item)}for(let i=0;i<newItems.length;i++){const dragItem=newItems[i];dragItem.addEventListener("dragstart",this._listenEvent),dragItem.addEventListener("drop",this._cancelEvent)}for(let i=0;i<oldItems.length;i++){const dragItem=oldItems[i];dragItem.removeEventListener("dragstart",this._listenEvent),dragItem.removeEventListener("drop",this._cancelEvent)}},render:function(){const sortables=this.state.components.map(((component,index)=>react.createElement(SortableItem,{index,component,area:this,key:component.key,draggable:component.props.draggable,dragging:index===this.state.dragging})));return react.createElement("ol",{className:this.props.className,style:this.props.style},sortables)}}),SortableItem=create_react_class_default()({displayName:"SortableItem",propTypes:{area:PT.shape({onDragEnter:PT.func.isRequired,onDragStart:PT.func.isRequired,onDrop:PT.func.isRequired}),component:PT.node.isRequired,dragging:PT.bool.isRequired,draggable:PT.bool.isRequired,index:PT.number.isRequired},handleDragStart:function(e){e.nativeEvent.dataTransfer.effectAllowed="move",this.props.area.onDragStart(this.props.index)},handleDrop:function(){this.props.area.onDrop(this.props.index)},handleDragEnter:function(e){const verified=this.props.area.onDragEnter(this.props.index);e.nativeEvent.dataTransfer.effectAllowed=verified?"move":"none"},handleDragOver:function(e){e.preventDefault()},render:function(){let dragState="sortable-disabled";return this.props.dragging?dragState="sortable-dragging":this.props.draggable&&(dragState="sortable-enabled"),react.createElement("li",{draggable:this.props.draggable,className:dragState,onDragStart:this.handleDragStart,onDrop:this.handleDrop,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver},this.props.component)}}),components_sortable=SortableArea;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{InfoTip,PropCheckBox,TexButtons}=perseus_src.components,{getDependencies}=perseus_src.Dependencies,parseAnswerKey=_ref=>{let{key}=_ref;const parsedKey=Number.parseInt(key??"");if(Number.isNaN(parsedKey))throw new Error(`Invalid answer key: ${key}`);return parsedKey},_makeNewKey=answerForms=>{const usedKeys=[];answerForms.forEach((ans=>{usedKeys[parseAnswerKey(ans)]=!0}));for(let i=0;i<usedKeys.length;i++)if(!usedKeys[i])return i;return usedKeys.length};class ExpressionEditor extends react.Component{static widgetName="expression";static defaultProps={answerForms:[],times:!1,buttonSets:["basic"],functions:["f","g","h"]};constructor(props){let isTex;super(props),isTex=0===props.answerForms.length||props.answerForms.some((form=>{const{value}=form;return-1!==value.indexOf("\\")||-1!==value.indexOf("{")})),this.state={isTex}}change(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return perseus_src.ye.m.apply(this,args)}render(){const answerOptions=this.props.answerForms.map((ans=>{const key=parseAnswerKey(ans),expressionProps={times:this.props.times,functions:this.props.functions,buttonSets:this.props.buttonSets,buttonsVisible:"focused",form:ans.form,simplify:ans.simplify,value:ans.value,onChange:props=>this.updateForm(key,props),trackInteraction:()=>{},widgetId:this.props.widgetId+"-"+ans.key};return hubble_default()(ans).merge([],{draggable:!0,onChange:props=>this.updateForm(Number.parseInt(ans.key??""),props),onDelete:()=>this.handleRemoveForm(key),expressionProps}).freeze()})).map((obj=>react.createElement(AnswerOption,_extends({key:obj.key},obj)))),sortable=react.createElement(components_sortable,{components:answerOptions,onReorder:this.handleReorder,className:"answer-options-list"}),buttonSetChoices=Object.keys(TexButtons.buttonSets).map((name=>{const isFirst="basic"===name,checked=this.props.buttonSets.includes(name)||isFirst,className=isFirst?"button-set-label-float":"button-set-label";return react.createElement("label",{className,key:name},react.createElement("input",{type:"checkbox",checked,disabled:isFirst,onChange:()=>this.handleButtonSet(name)}),name)})),{TeX}=getDependencies();return buttonSetChoices.splice(1,1,react.createElement("label",{key:"show-div"},react.createElement("input",{type:"checkbox",onChange:this.handleToggleDiv}),react.createElement("span",{className:"show-div-button"},"show ",react.createElement(TeX,null,"\\div")," button"))),react.createElement("div",{className:"perseus-widget-expression-editor"},react.createElement("h3",{className:"expression-editor-h3"},"Global Options"),react.createElement("div",null,react.createElement(PropCheckBox,{times:this.props.times,onChange:this.props.onChange,labelAlignment:"right",label:"Use × for rendering multiplication instead of a center dot."}),react.createElement(InfoTip,null,react.createElement("p",null,"For pre-algebra problems this option displays multiplication as \\times instead of \\cdot in both the rendered output and the acceptable formats examples."))),react.createElement("div",null,react.createElement("label",null,"Function variables: ",react.createElement("input",{type:"text",defaultValue:this.props.functions.join(" "),onChange:this.handleFunctions})),react.createElement(InfoTip,null,react.createElement("p",null,'Single-letter variables listed here will be interpreted as functions. This let us know that f(x) means "f of x" and not "f times x".'))),react.createElement("div",null,react.createElement("div",null,"Button sets:"),buttonSetChoices),this.state.isTex&&react.createElement(TexButtons,{className:"math-input-buttons",sets:this.props.buttonSets,convertDotToTimes:this.props.times,onInsert:this.handleTexInsert}),react.createElement("h3",{className:"expression-editor-h3"},"Answers"),react.createElement("p",{style:{margin:"4px 0"}},"student responses area matched against these from top to bottom"),sortable,react.createElement("div",null,react.createElement("button",{className:"simple-button orange",style:{fontSize:13},onClick:this.newAnswer,type:"button"},"Add new answer")))}serialize=()=>{const formSerializables=["value","form","simplify","considered","key"],serializables=["answerForms","buttonSets","functions","times"],answerForms=this.props.answerForms.map((form=>(0,index_all.ZP)(form).pick(formSerializables)));return hubble_default()(this.props).set(["answerForms"],answerForms).mod([],(props=>(0,index_all.ZP)(props).pick(serializables))).freeze()};getSaveWarnings=()=>{const issues=[];if(0===this.props.answerForms.length)issues.push("No answers specified");else{this.props.answerForms.some((form=>"correct"===form.considered))||issues.push("No correct answer specified"),(0,index_all.ZP)(this.props.answerForms).each(((form,ix)=>{if(""===this.props.value)issues.push(`Answer ${ix+1} is empty`);else{const expression=src.Qc(form.value,{functions:this.props.functions});expression.parsed?form.simplify&&!expression.expr.isSimplified()&&issues.push(`${form.value} isn't simplified, but is required" +\n                            " to be`):issues.push(`Couldn't parse ${form.value}`)}}))}return issues};_newEmptyAnswerForm=()=>({considered:"correct",form:!1,key:_makeNewKey(this.props.answerForms),simplify:!1,value:""});newAnswer=()=>{const answerForms=this.props.answerForms.slice();answerForms.push(this._newEmptyAnswerForm()),this.change({answerForms})};handleRemoveForm=i=>{const answerForms=this.props.answerForms.slice();answerForms.splice(i,1),this.change({answerForms})};updateForm=(i,props)=>{const answerForms=hubble_default()(this.props.answerForms).merge([i],props).freeze();this.change({answerForms})};handleReorder=components=>{const answerForms=components.map((component=>{const form=(0,index_all.ZP)(component.props).pick("considered","form","simplify","value");return form.key=component.key,form}));this.change({answerForms})};handleButtonSet=changingName=>{const buttonSets=Object.keys(TexButtons.buttonSets).filter((set=>this.props.buttonSets.includes(set)!==(set===changingName)));this.props.onChange({buttonSets})};handleToggleDiv=()=>{let keep,remove;this.props.buttonSets.includes("basic+div")?(keep="basic",remove="basic+div"):(keep="basic+div",remove="basic");const buttonSets=this.props.buttonSets.filter((set=>set!==remove)).concat(keep);this.change("buttonSets",buttonSets)};handleTexInsert=str=>{this.refs.expression.insert(str)};handleFunctions=e=>{const newProps={};newProps.functions=e.target.value.split(/[ ,]+/).filter(es.fQ),this.props.onChange(newProps)}}class AnswerOption extends react.Component{state={deleteFocused:!1};handleDeleteBlur=()=>{this.setState({deleteFocused:!1})};change=(()=>{var _this=this;return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return perseus_src.ye.m.apply(_this,args)}})();render(){let removeButton=null;return removeButton=this.state.deleteFocused?react.createElement("button",{type:"button",className:"simple-button orange",onClick:this.handleImSure,onBlur:this.handleDeleteBlur},"I'm sure!"):react.createElement("button",{type:"button",className:"simple-button orange",onClick:this.handleDelete},"Delete"),react.createElement("div",{className:"expression-answer-option"},react.createElement("div",{className:"answer-handle"}),react.createElement("div",{className:"answer-body"},react.createElement("div",{className:"answer-considered"},react.createElement("div",{onClick:this.toggleConsidered,className:"answer-status "+this.props.considered},this.props.considered),react.createElement("div",{className:"answer-expression"},react.createElement(perseus_src.A2,this.props.expressionProps))),react.createElement("div",{className:"answer-option"},react.createElement(PropCheckBox,{form:this.props.form,onChange:this.props.onChange,labelAlignment:"right",label:"Answer expression must have the same form."}),react.createElement(InfoTip,null,react.createElement("p",null,"The student's answer must be in the same form. Commutativity and excess negative signs are ignored."))),react.createElement("div",{className:"answer-option"},react.createElement(PropCheckBox,{simplify:this.props.simplify,onChange:this.props.onChange,labelAlignment:"right",label:"Answer expression must be fully expanded and simplified."}),react.createElement(InfoTip,null,react.createElement("p",null,'The student\'s answer must be fully expanded and simplified. Answering this equation (x^2+2x+1) with this factored equation (x+1)^2 will render this response "Your answer is not fully expanded and simplified."'))),react.createElement("div",{className:"remove-container"},removeButton)))}handleImSure=()=>{this.props.onDelete()};handleDelete=()=>{this.setState({deleteFocused:!0})};toggleConsidered=()=>{const newVal=function(arr,val){let ix=arr.indexOf(val);return ix=(ix+1)%arr.length,arr[ix]}(perseus_src.v5,this.props.considered);this.change({considered:newVal})}}const expression_editor=ExpressionEditor;try{ExpressionEditor.displayName="ExpressionEditor",ExpressionEditor.__docgenInfo={description:"",displayName:"ExpressionEditor",props:{widgetId:{defaultValue:null,description:"",name:"widgetId",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},buttonSets:{defaultValue:{value:'["basic"]'},description:"",name:"buttonSets",required:!1,type:{name:"LegacyButtonSets"}},functions:{defaultValue:{value:'["f", "g", "h"]'},description:"",name:"functions",required:!1,type:{name:"readonly string[]"}},times:{defaultValue:{value:"false"},description:"",name:"times",required:!1,type:{name:"boolean"}},answerForms:{defaultValue:{value:"[]"},description:"",name:"answerForms",required:!1,type:{name:"readonly PerseusExpressionAnswerForm[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: { [key: string]: any; }, callback?: (() => unknown) | undefined, silent?: boolean | undefined) => unknown"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/widgets/expression-editor.tsx#ExpressionEditor"]={docgenInfo:ExpressionEditor.__docgenInfo,name:"ExpressionEditor",path:"packages/perseus-editor/src/widgets/expression-editor.tsx#ExpressionEditor"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);