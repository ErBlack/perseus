"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[721],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/perseus-editor/src/components/__stories__/blur-input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_blur_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/perseus-editor/src/components/blur-input.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Editor/Components/Blur Input"},Default=()=>{const[value,setValue]=react__WEBPACK_IMPORTED_MODULE_1__.useState("");return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_blur_input__WEBPACK_IMPORTED_MODULE_2__.Z,{value,onChange:newValue=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onChange")(newValue),setValue(newValue)}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(): React.ReactElement => {\n  const [value, setValue] = React.useState("");\n  return <BlurInput value={value} onChange={newValue => {\n    action("onChange")(newValue);\n    setValue(newValue);\n  }} />;\n}',...Default.parameters?.docs?.source}}}},"./packages/perseus-editor/src/components/blur-input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");class BlurInput extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={value:this.props.value}}UNSAFE_componentWillReceiveProps(nextProps){this.setState({value:nextProps.value})}handleChange=e=>{this.setState({value:e.target.value})};handleBlur=e=>{this.props.onChange(e.target.value)};render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:this.props.className,style:this.props.style,type:"text",value:this.state.value,onChange:this.handleChange,onBlur:this.handleBlur})}}const __WEBPACK_DEFAULT_EXPORT__=BlurInput;try{BlurInput.displayName="BlurInput",BlurInput.__docgenInfo={description:"",displayName:"BlurInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(arg1: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/components/blur-input.tsx#BlurInput"]={docgenInfo:BlurInput.__docgenInfo,name:"BlurInput",path:"packages/perseus-editor/src/components/blur-input.tsx#BlurInput"})}catch(__react_docgen_typescript_loader_error){}}}]);