"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[3765],{"./packages/perseus/src/widgets/__stories__/orderer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Question1:()=>Question1,default:()=>orderer_stories});var react=__webpack_require__("./node_modules/react/index.js"),renderer_with_debug_ui=__webpack_require__("./testing/renderer-with-debug-ui.tsx");const question1={content:"**Without using a calculator, put the numbers in order  from least to greatest.**  \n\n[[☃ orderer 1]]",images:{},widgets:{"orderer 1":{version:{major:0,minor:0},type:"orderer",graded:!0,options:{otherOptions:[],layout:"horizontal",options:[{content:"$10.9$",images:{},widgets:{}},{content:"$11$",images:{},widgets:{}},{content:"$\\sqrt{120}$",images:{},widgets:{}}],correctOptions:[{content:"$10.9$",images:{},widgets:{}},{content:"$\\sqrt{120}$",images:{},widgets:{}},{content:"$11$",images:{},widgets:{}}],height:"normal"}}}},orderer_stories={title:"Perseus/Widgets/Orderer"},Question1=args=>react.createElement(renderer_with_debug_ui.b,{question:question1});Question1.parameters={...Question1.parameters,docs:{...Question1.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <RendererWithDebugUI question={question1} />;\n}",...Question1.parameters?.docs?.source}}};try{Question1.displayName="Question1",Question1.__docgenInfo={description:"",displayName:"Question1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/orderer.stories.tsx#Question1"]={docgenInfo:Question1.__docgenInfo,name:"Question1",path:"packages/perseus/src/widgets/__stories__/orderer.stories.tsx#Question1"})}catch(__react_docgen_typescript_loader_error){}},"./testing/renderer-with-debug-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>RendererWithDebugUI});var _khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-button/dist/es/index.js"),_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-layout/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_5__),_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/perseus/src/index.ts"),_packages_perseus_src_util_register_all_widgets_for_testing__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/perseus/src/util/register-all-widgets-for-testing.ts"),_side_by_side__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./testing/side-by-side.tsx");const RendererWithDebugUI=_ref=>{let{question,apiOptions,reviewMode=!1}=_ref;(0,_packages_perseus_src_util_register_all_widgets_for_testing__WEBPACK_IMPORTED_MODULE_7__.V)();const ref=react__WEBPACK_IMPORTED_MODULE_4__.useRef(null),[state,setState]=react__WEBPACK_IMPORTED_MODULE_4__.useState(null);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_side_by_side__WEBPACK_IMPORTED_MODULE_8__.Z,{leftTitle:"Widget",left:react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_6__.Th,{ref,content:question.content,images:question.images,widgets:question.widgets,problemNum:0,apiOptions,reviewMode}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__.G7,{style:{flexDirection:"row",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current&&setState(ref.current.guessAndScore())}},"Check"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__.x9,{size:8}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current?.showRationalesForCurrentlySelectedChoices()}},"Show Rationales")),null!=state&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__.Jf,{style:{marginTop:"10px"}},"Guess"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_5___default(),{quotesOnKeys:!1,enableClipboard:!1,src:state[0]}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__.Jf,{style:{marginTop:"10px"}},"Score"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_5___default(),{quotesOnKeys:!1,enableClipboard:!1,src:state[1]}))),jsonObject:question})};try{RendererWithDebugUI.displayName="RendererWithDebugUI",RendererWithDebugUI.__docgenInfo={description:"",displayName:"RendererWithDebugUI",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"PerseusRenderer"}},apiOptions:{defaultValue:null,description:"",name:"apiOptions",required:!1,type:{name:"Readonly<{ isArticle?: boolean; onInputError?: ((widgetId: any, value: string, message?: string | null) => unknown) | undefined; onFocusChange?: ((newFocusPath: FocusPath, oldFocusPath: FocusPath, keypadElement?: Element | ... 2 more ... | undefined, focusedElement?: HTMLElement | undefined) ..."}},reviewMode:{defaultValue:{value:"false"},description:"",name:"reviewMode",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/renderer-with-debug-ui.tsx#RendererWithDebugUI"]={docgenInfo:RendererWithDebugUI.__docgenInfo,name:"RendererWithDebugUI",path:"testing/renderer-with-debug-ui.tsx#RendererWithDebugUI"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);