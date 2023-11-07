"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[1781],{"./packages/perseus/src/components/__stories__/button-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonsWithNoTitles:()=>ButtonsWithNoTitles,ButtonsWithTitles:()=>ButtonsWithTitles,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button_group__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/perseus/src/components/button-group.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Components/Button Group"},HarnassedButtonGroup=props=>{const[value,updateValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_group__WEBPACK_IMPORTED_MODULE_1__.Z,{buttons:props.buttons,value,onChange:newValue=>{updateValue(newValue)}})},ButtonsWithNoTitles=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(HarnassedButtonGroup,{buttons:[{value:"One",content:"Item #1"},{value:"Two",content:"Item #2"},{value:"Three",content:"Item #3"}]}),ButtonsWithTitles=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(HarnassedButtonGroup,{buttons:[{value:"One",content:"Item #1",title:"The first item"},{value:"Two",content:"Item #2",title:"The second item"},{value:"Three",content:"Item #3",title:"The third item"}]});ButtonsWithNoTitles.parameters={...ButtonsWithNoTitles.parameters,docs:{...ButtonsWithNoTitles.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  return <HarnassedButtonGroup buttons={[{\n    value: "One",\n    content: "Item #1"\n  }, {\n    value: "Two",\n    content: "Item #2"\n  }, {\n    value: "Three",\n    content: "Item #3"\n  }]} />;\n}',...ButtonsWithNoTitles.parameters?.docs?.source}}},ButtonsWithTitles.parameters={...ButtonsWithTitles.parameters,docs:{...ButtonsWithTitles.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  return <HarnassedButtonGroup buttons={[{\n    value: "One",\n    content: "Item #1",\n    title: "The first item"\n  }, {\n    value: "Two",\n    content: "Item #2",\n    title: "The second item"\n  }, {\n    value: "Three",\n    content: "Item #3",\n    title: "The third item"\n  }]} />;\n}',...ButtonsWithTitles.parameters?.docs?.source}}};try{ButtonsWithNoTitles.displayName="ButtonsWithNoTitles",ButtonsWithNoTitles.__docgenInfo={description:"",displayName:"ButtonsWithNoTitles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/button-group.stories.tsx#ButtonsWithNoTitles"]={docgenInfo:ButtonsWithNoTitles.__docgenInfo,name:"ButtonsWithNoTitles",path:"packages/perseus/src/components/__stories__/button-group.stories.tsx#ButtonsWithNoTitles"})}catch(__react_docgen_typescript_loader_error){}try{ButtonsWithTitles.displayName="ButtonsWithTitles",ButtonsWithTitles.__docgenInfo={description:"",displayName:"ButtonsWithTitles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/button-group.stories.tsx#ButtonsWithTitles"]={docgenInfo:ButtonsWithTitles.__docgenInfo,name:"ButtonsWithTitles",path:"packages/perseus/src/components/__stories__/button-group.stories.tsx#ButtonsWithTitles"})}catch(__react_docgen_typescript_loader_error){}}}]);