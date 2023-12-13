"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[8821],{"./packages/perseus/src/components/__stories__/graphie.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PieChartGraphieLabels:()=>PieChartGraphieLabels,SquareBoxSizeAndOtherwiseEmpty:()=>SquareBoxSizeAndOtherwiseEmpty,default:()=>graphie_stories});var react=__webpack_require__("./node_modules/react/index.js"),server_item_renderer_with_debug_ui=__webpack_require__("./testing/server-item-renderer-with-debug-ui.tsx"),perseus_types=__webpack_require__("./packages/perseus/src/perseus-types.ts");const itemWithPieChart={answerArea:Object.fromEntries(perseus_types.vW.map((extra=>[extra,!1]))),hints:[],itemDataVersion:{major:0,minor:1},question:{content:"[[☃ image 1]]",images:{},widgets:{"image 1":{alignment:"block",graded:!0,options:{alt:"This chart presents a pie graph divided into 2 sectors: 28 percent are unsuccessful and 72 percent are successful.",backgroundImage:{height:210,url:"web+graphie://cdn.kastatic.org/ka-perseus-graphie/7c0a5afb8670fad738df800ffe16c5e516b48777",width:210},box:[210,210],caption:"Source: NASA “Current and Past Missions”",labels:[],range:[[0,10],[0,10]],static:!1,title:"Percentage of Successful Cometary Missions (1978-2014)"},static:!1,type:"image",version:{major:0,minor:0}}}},_multi:null,answer:null};var graphie=__webpack_require__("./packages/perseus/src/components/graphie.tsx");const graphie_stories={title:"Perseus/Components/Graphie"},SquareBoxSizeAndOtherwiseEmpty=args=>react.createElement(graphie.default,{box:[200,200],setDrawingAreaAvailable:()=>{},setup:()=>{}}),PieChartGraphieLabels=args=>react.createElement(server_item_renderer_with_debug_ui.Z,{item:itemWithPieChart});SquareBoxSizeAndOtherwiseEmpty.parameters={...SquareBoxSizeAndOtherwiseEmpty.parameters,docs:{...SquareBoxSizeAndOtherwiseEmpty.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <Graphie box={[size, size]} setDrawingAreaAvailable={() => {}} setup={() => {}} />;\n}",...SquareBoxSizeAndOtherwiseEmpty.parameters?.docs?.source}}},PieChartGraphieLabels.parameters={...PieChartGraphieLabels.parameters,docs:{...PieChartGraphieLabels.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <ServerItemRendererWithDebugUI item={itemWithPieChart} />;\n}",...PieChartGraphieLabels.parameters?.docs?.source}}};try{SquareBoxSizeAndOtherwiseEmpty.displayName="SquareBoxSizeAndOtherwiseEmpty",SquareBoxSizeAndOtherwiseEmpty.__docgenInfo={description:"",displayName:"SquareBoxSizeAndOtherwiseEmpty",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/graphie.stories.tsx#SquareBoxSizeAndOtherwiseEmpty"]={docgenInfo:SquareBoxSizeAndOtherwiseEmpty.__docgenInfo,name:"SquareBoxSizeAndOtherwiseEmpty",path:"packages/perseus/src/components/__stories__/graphie.stories.tsx#SquareBoxSizeAndOtherwiseEmpty"})}catch(__react_docgen_typescript_loader_error){}try{PieChartGraphieLabels.displayName="PieChartGraphieLabels",PieChartGraphieLabels.__docgenInfo={description:"",displayName:"PieChartGraphieLabels",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/graphie.stories.tsx#PieChartGraphieLabels"]={docgenInfo:PieChartGraphieLabels.__docgenInfo,name:"PieChartGraphieLabels",path:"packages/perseus/src/components/__stories__/graphie.stories.tsx#PieChartGraphieLabels"})}catch(__react_docgen_typescript_loader_error){}},"./testing/ke-score-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{score}=_ref;return null==score?null:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("table",{style:{marginTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",{style:{fontWeight:"bold"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Empty"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Correct"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",{style:{width:"100%"}},"Message"))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.empty.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.correct.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.message)))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"Guess"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.guess}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"State"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.state}))};try{kescoreui.displayName="kescoreui",kescoreui.__docgenInfo={description:"",displayName:"kescoreui",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"KEScore | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/ke-score-ui.tsx#kescoreui"]={docgenInfo:kescoreui.__docgenInfo,name:"kescoreui",path:"testing/ke-score-ui.tsx#kescoreui"})}catch(__react_docgen_typescript_loader_error){}},"./testing/server-item-renderer-with-debug-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ServerItemRendererWithDebugUI});var _khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-button/dist/es/index.js"),_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-layout/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/perseus/src/index.ts"),_ke_score_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./testing/ke-score-ui.tsx"),_side_by_side__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./testing/side-by-side.tsx"),_test_dependencies__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./testing/test-dependencies.tsx");const ServerItemRendererWithDebugUI=_ref=>{let{item,apiOptions,keypadElement}=_ref;const ref=react__WEBPACK_IMPORTED_MODULE_3__.useRef(null),[state,setState]=react__WEBPACK_IMPORTED_MODULE_3__.useState(null),options=apiOptions||Object.freeze({});return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_side_by_side__WEBPACK_IMPORTED_MODULE_6__.Z,{leftTitle:"Renderer",left:react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_4__.UT,{ref,problemNum:0,apiOptions:options,item,dependencies:_test_dependencies__WEBPACK_IMPORTED_MODULE_7__.bM,keypadElement}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__.G7,{style:{flexDirection:"row",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current&&setState(ref.current.scoreInput())}},"Check"),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__.x9,{size:8}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current?.showRationalesForCurrentlySelectedChoices()}},"Show Rationales")),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ke_score_ui__WEBPACK_IMPORTED_MODULE_5__.Z,{score:state})),jsonObject:item})};try{ServerItemRendererWithDebugUI.displayName="ServerItemRendererWithDebugUI",ServerItemRendererWithDebugUI.__docgenInfo={description:"",displayName:"ServerItemRendererWithDebugUI",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"PerseusItem"}},apiOptions:{defaultValue:null,description:"",name:"apiOptions",required:!1,type:{name:"Readonly<{ isArticle?: boolean; onInputError?: ((widgetId: any, value: string, message?: string | null) => unknown) | undefined; onFocusChange?: ((newFocusPath: FocusPath, oldFocusPath: FocusPath, keypadElement?: Element | ... 2 more ... | undefined, focusedElement?: HTMLElement | undefined) ..."}},keypadElement:{defaultValue:null,description:"",name:"keypadElement",required:!1,type:{name:"KeypadAPI | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/server-item-renderer-with-debug-ui.tsx#ServerItemRendererWithDebugUI"]={docgenInfo:ServerItemRendererWithDebugUI.__docgenInfo,name:"ServerItemRendererWithDebugUI",path:"testing/server-item-renderer-with-debug-ui.tsx#ServerItemRendererWithDebugUI"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);