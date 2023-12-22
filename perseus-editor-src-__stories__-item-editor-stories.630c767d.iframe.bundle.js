"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[4683],{"./packages/perseus-editor/src/__stories__/item-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_item_extras_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/perseus-editor/src/item-extras-editor.tsx");__webpack_require__("./packages/perseus-editor/src/styles/perseus-editor.less");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Wrapper=props=>{const{onChange,...rest}=props,[extras,setExtras]=react__WEBPACK_IMPORTED_MODULE_0__.useState(rest);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_extras_editor__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({},extras,{onChange:e=>{props.onChange?.(e),setExtras((prevExtras=>({...prevExtras,...e})))}}))},__WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Editor/Item Extras Editor",component:_item_extras_editor__WEBPACK_IMPORTED_MODULE_1__.Z,render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,args),argTypes:{onChange:{action:"changed"}}},Default={args:{..._item_extras_editor__WEBPACK_IMPORTED_MODULE_1__.Z.defaultProps}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...ItemExtrasEditor.defaultProps\n  }\n}",...Default.parameters?.docs?.source}}}},"./packages/perseus-editor/src/item-extras-editor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_perseus__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/perseus/src/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const{InfoTip}=_khanacademy_perseus__WEBPACK_IMPORTED_MODULE_0__.components;class ItemExtrasEditor extends react__WEBPACK_IMPORTED_MODULE_1__.Component{static defaultProps={calculator:!1,chi2Table:!1,financialCalculatorMonthlyPayment:!1,financialCalculatorTotalAmount:!1,financialCalculatorTimeToPayOff:!1,periodicTable:!1,periodicTableWithKey:!1,tTable:!1,zTable:!1};state={financialCalculatorOptionsExpanded:!1};componentDidUpdate(prevProps){!this.state.financialCalculatorOptionsExpanded||this.props.financialCalculatorMonthlyPayment||this.props.financialCalculatorTotalAmount||this.props.financialCalculatorTimeToPayOff||this.setState({financialCalculatorOptionsExpanded:!1})}serialize=()=>{const data={...ItemExtrasEditor.defaultProps};for(const key of _khanacademy_perseus__WEBPACK_IMPORTED_MODULE_0__.vW)data[key]=!!this.props[key];return data};render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"perseus-answer-editor"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"perseus-answer-options"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show calculator:",infoTip:"Use the calculator when completing difficult calculations is NOT the intent of the question. DON’T use the calculator when testing the student’s ability to complete different types of computations.",checked:this.props.calculator,onChange:e=>{this.props.onChange({calculator:e.target.checked})}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show financial calculator:",infoTip:"This provides the student with the ability to view a financial calculator, e.g., for answering financial questions. Once checked, requires at least one of the three options below to be checked.",checked:this.state.financialCalculatorOptionsExpanded,onChange:e=>{this.setState({financialCalculatorOptionsExpanded:e.target.checked}),this.props.onChange({financialCalculatorMonthlyPayment:e.target.checked,financialCalculatorTotalAmount:e.target.checked,financialCalculatorTimeToPayOff:e.target.checked})}}),this.state.financialCalculatorOptionsExpanded&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Include monthly payment:",infoTip:"This provides the student with the ability to view a monthly payment calculator; e.g., given a loan amount, interest rate, and term, what is the monthly payment?",checked:this.props.financialCalculatorMonthlyPayment,onChange:e=>{this.props.onChange({financialCalculatorMonthlyPayment:e.target.checked})},indent:!0}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Include total amount:",infoTip:"This provides the student with the ability to view a total amount calculator; e.g., given a monthly payment, interest rate, and term, what is the total amount to be paid?",checked:this.props.financialCalculatorTotalAmount,onChange:e=>{this.props.onChange({financialCalculatorTotalAmount:e.target.checked})},indent:!0}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Include time-to-pay-off:",infoTip:"This provides the student with the ability to view a time to pay off calculator; e.g., given a loan amount, interest rate, and monthly payment, how long will it take to pay off the loan?",checked:this.props.financialCalculatorTimeToPayOff,onChange:e=>{this.props.onChange({financialCalculatorTimeToPayOff:e.target.checked})},indent:!0})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show periodic table:",infoTip:"This provides the student with the ability to view a periodic table of the elements, e.g., for answering chemistry questions.",checked:this.props.periodicTable,onChange:e=>{this.props.onChange({periodicTable:e.target.checked,periodicTableWithKey:!1})}}),this.props.periodicTable&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Include key/legend with periodic table:",infoTip:"Include a key for HS courses; omit for AP chemistry.",checked:this.props.periodicTableWithKey,onChange:e=>{this.props.onChange({periodicTableWithKey:e.target.checked})},indent:!0}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show z table (statistics):",infoTip:"This provides the student with the ability to view a table of critical values for the z distribution, e.g. for answering statistics questions.",checked:this.props.zTable,onChange:e=>{this.props.onChange({zTable:e.target.checked})}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show t table (statistics):",infoTip:"This provides the student with the ability to view a table of critical values for the Student's t distribution, e.g. for answering statistics questions.",checked:this.props.tTable,onChange:e=>{this.props.onChange({tTable:e.target.checked})}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemExtraCheckbox,{label:"Show chi-squared table (statistics):",infoTip:"This provides the student with the ability to view a table of critical values for the chi-squared distribution, e.g. for answering statistics questions.",checked:this.props.chi2Table,onChange:e=>{this.props.onChange({chi2Table:e.target.checked})}})))}}const ItemExtraCheckbox=props=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{marginLeft:props.indent?"10px":"0px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("label",null,props.label,react__WEBPACK_IMPORTED_MODULE_1__.createElement("input",{type:"checkbox",checked:props.checked,onChange:props.onChange})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoTip,null,props.infoTip)),__WEBPACK_DEFAULT_EXPORT__=ItemExtrasEditor;try{ItemExtrasEditor.displayName="ItemExtrasEditor",ItemExtrasEditor.__docgenInfo={description:"",displayName:"ItemExtrasEditor",props:{calculator:{defaultValue:{value:"false"},description:"",name:"calculator",required:!1,type:{name:"boolean"}},chi2Table:{defaultValue:{value:"false"},description:"",name:"chi2Table",required:!1,type:{name:"boolean"}},financialCalculatorMonthlyPayment:{defaultValue:{value:"false"},description:"",name:"financialCalculatorMonthlyPayment",required:!1,type:{name:"boolean"}},financialCalculatorTotalAmount:{defaultValue:{value:"false"},description:"",name:"financialCalculatorTotalAmount",required:!1,type:{name:"boolean"}},financialCalculatorTimeToPayOff:{defaultValue:{value:"false"},description:"",name:"financialCalculatorTimeToPayOff",required:!1,type:{name:"boolean"}},periodicTable:{defaultValue:{value:"false"},description:"",name:"periodicTable",required:!1,type:{name:"boolean"}},periodicTableWithKey:{defaultValue:{value:"false"},description:"",name:"periodicTableWithKey",required:!1,type:{name:"boolean"}},tTable:{defaultValue:{value:"false"},description:"",name:"tTable",required:!1,type:{name:"boolean"}},zTable:{defaultValue:{value:"false"},description:"",name:"zTable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(props: Partial<PerseusAnswerArea>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/item-extras-editor.tsx#ItemExtrasEditor"]={docgenInfo:ItemExtrasEditor.__docgenInfo,name:"ItemExtrasEditor",path:"packages/perseus-editor/src/item-extras-editor.tsx#ItemExtrasEditor"})}catch(__react_docgen_typescript_loader_error){}}}]);