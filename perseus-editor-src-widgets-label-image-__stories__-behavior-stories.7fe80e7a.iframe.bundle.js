"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[2737],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/perseus-editor/src/widgets/label-image/__stories__/behavior.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_behavior__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/perseus-editor/src/widgets/label-image/behavior.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Editor/Widgets/Label Image/Behavior"},Default=args=>{const[state,setState]=react__WEBPACK_IMPORTED_MODULE_1__.useState({multipleAnswers:!1,hideChoicesFromInstructions:!1}),props={multipleAnswers:state.multipleAnswers,hideChoicesFromInstructions:state.hideChoicesFromInstructions,onChange:newState=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange")(newState),setState({...state,...newState})}};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_behavior__WEBPACK_IMPORTED_MODULE_2__.Z,props)};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  const [state, setState] = React.useState({\n    multipleAnswers: false,\n    hideChoicesFromInstructions: false\n  });\n  const props = ({\n    multipleAnswers: state.multipleAnswers,\n    hideChoicesFromInstructions: state.hideChoicesFromInstructions,\n    onChange: newState => {\n      action("onChange")(newState);\n      setState({\n        ...state,\n        ...newState\n      });\n    }\n  } as const);\n  return <Behavior {...props} />;\n}',...Default.parameters?.docs?.source}}};try{Default.displayName="Default",Default.__docgenInfo={description:"",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/widgets/label-image/__stories__/behavior.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"packages/perseus-editor/src/widgets/label-image/__stories__/behavior.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}},"./packages/perseus-editor/src/widgets/label-image/behavior.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>label_image_behavior});var src=__webpack_require__("./packages/perseus/src/index.ts"),lib=__webpack_require__("./node_modules/aphrodite/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");class HoverBehavior extends react.Component{static defaultProps={startHovered:!1,shouldUpdate:()=>!0};constructor(props){super(props),this.state={focused:!1,hovered:props.startHovered}}handleClick=e=>{this.props.disabled||(this.props.shouldUpdate()&&(this.waitingForClick=!1),this.props.onClick&&!this.props.disabled&&this.props.onClick(e))};handleMouseEnter=()=>{this.props.disabled||!this.props.shouldUpdate()||this.waitingForClick||this.setState({hovered:!0})};handleMouseLeave=()=>{this.props.disabled||!this.props.shouldUpdate()||this.waitingForClick||this.setState({hovered:!1})};handleTouchStart=()=>{!this.props.disabled&&this.props.shouldUpdate()&&this.setState({hovered:!0})};handleTouchEnd=()=>{!this.props.disabled&&this.props.shouldUpdate()&&(this.setState({hovered:!1}),this.waitingForClick=!0)};handleMouseDown=()=>{!this.props.disabled&&this.props.shouldUpdate()&&(this.setState({focused:!1}),this.focusFlag=!0)};handleBlur=()=>{!this.props.disabled&&this.props.shouldUpdate()&&this.setState({focused:!1})};handleFocus=()=>{!this.props.disabled&&this.props.shouldUpdate()&&(this.focusFlag?this.focusFlag=!1:this.setState({focused:!0}))};render(){const handlers={onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},{children}=this.props;return children?.(this.state,handlers)||null}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const{borderRadius,colors}=src.globalStyles,onChangeCheckboxNoop=event=>{};class Checkbox extends react.Component{static defaultProps={checked:!1,onChange:onChangeCheckboxNoop};render(){const{checked,disabled,appearDisabled,onChange,tabIndex,style,dataTestId,id}=this.props,checkedColor=colors.gray41;return react.createElement(HoverBehavior,null,((_ref,handlers)=>{let{focused}=_ref;return react.createElement("div",_extends({},handlers,{className:(0,lib.css)(styles.container,focused&&styles.focused),style,"data-test-id":dataTestId,"data-checked":checked}),react.createElement("svg",{className:(0,lib.css)(styles.svg,(disabled||appearDisabled)&&styles.disabled),width:sizeWithPadding,height:sizeWithPadding,viewBox:`-${padding} -${padding}\n                         ${sizeWithPadding} ${sizeWithPadding}`},react.createElement("g",{fill:"none",fillRule:"evenodd"},checked&&react.createElement("g",null,react.createElement("rect",{fill:checkedColor,width:size,height:size,x:"0",y:"0",rx:borderRadius}),react.createElement("path",{fill:colors.white,stroke:colors.white,d:"M4.98 7.41a0.58.58 0 1 0-0.81.81L6.47 10.53c0.23.23.59.23.81 0l4.55-4.55a0.58.58 0 0 0-0.81-0.81L6.88 9.31 4.98 7.41z"})),!checked&&react.createElement("rect",{fill:colors.white,stroke:colors.gray68,width:size-2*padding,height:size-2*padding,x:padding,y:padding,rx:"4",strokeWidth:borderWidth}))),react.createElement("input",{type:"checkbox",id,checked,className:(0,lib.css)(styles.checkbox,disabled&&styles.defaultCursor),disabled,onChange,tabIndex}))}))}}const size=16,padding=.5,borderWidth=1,sizeWithPadding=size+2*padding,styles=lib.StyleSheet.create({container:{position:"relative",display:"inline-block",verticalAlign:"middle",lineHeight:0,borderRadius,width:sizeWithPadding,height:sizeWithPadding,flexShrink:0},focused:{"::before":{content:'""',position:"absolute",top:-2,right:-2,bottom:-2,left:-2,borderRadius:borderRadius+2,backgroundColor:"lightblue"}},svg:{position:"absolute",left:0,top:0},checkbox:{appearance:"none",opacity:0,position:"absolute",top:padding,width:size,height:size,margin:0,outline:"none",cursor:"pointer"},disabled:{opacity:.5},defaultCursor:{cursor:"default"}});try{checkbox.displayName="checkbox",checkbox.__docgenInfo={description:"",displayName:"checkbox",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},appearDisabled:{defaultValue:null,description:"",name:"appearDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"(event: React.ChangeEvent<HTMLInputElement>) => {}"},description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"{ marginTop: number; }"}},dataTestId:{defaultValue:null,description:"",name:"dataTestId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/components/checkbox.tsx#checkbox"]={docgenInfo:checkbox.__docgenInfo,name:"checkbox",path:"packages/perseus-editor/src/components/checkbox.tsx#checkbox"})}catch(__react_docgen_typescript_loader_error){}const{colors:behavior_colors,typography}=src.globalStyles,behavior_styles=lib.StyleSheet.create({title:{...typography.bodyXsmallBold,marginBottom:6,color:behavior_colors.gray17},option:{display:"flex",padding:"6px 0"},label:{...typography.smallSubheadingMobile,marginLeft:16,color:behavior_colors.gray17}}),label_image_behavior=_ref=>{let{multipleAnswers,hideChoicesFromInstructions,onChange}=_ref;return react.createElement("div",null,react.createElement("div",{className:(0,lib.css)(behavior_styles.title)},"Behavior"),react.createElement("ul",null,react.createElement("li",{className:(0,lib.css)(behavior_styles.option)},react.createElement(Checkbox,{checked:multipleAnswers,onChange:()=>onChange({multipleAnswers:!multipleAnswers})}),react.createElement("span",{className:(0,lib.css)(behavior_styles.label)},"Allow multiple answers per marker")),react.createElement("li",{className:(0,lib.css)(behavior_styles.option)},react.createElement(Checkbox,{checked:hideChoicesFromInstructions,onChange:()=>onChange({hideChoicesFromInstructions:!hideChoicesFromInstructions})}),react.createElement("span",{className:(0,lib.css)(behavior_styles.label)},"Do not display answer choices in instructions"))))};try{behavior.displayName="behavior",behavior.__docgenInfo={description:"",displayName:"behavior",props:{multipleAnswers:{defaultValue:null,description:"",name:"multipleAnswers",required:!0,type:{name:"boolean"}},hideChoicesFromInstructions:{defaultValue:null,description:"",name:"hideChoicesFromInstructions",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(options: { multipleAnswers?: boolean | undefined; hideChoicesFromInstructions?: boolean | undefined; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/widgets/label-image/behavior.tsx#behavior"]={docgenInfo:behavior.__docgenInfo,name:"behavior",path:"packages/perseus-editor/src/widgets/label-image/behavior.tsx#behavior"})}catch(__react_docgen_typescript_loader_error){}}}]);