"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[3327],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./packages/perseus/src/widgets/__stories__/expression.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Desktop:()=>Desktop,DesktopKitchenSink:()=>DesktopKitchenSink,ExpressionItem2:()=>ExpressionItem2,ExpressionItem3:()=>ExpressionItem3,Mobile:()=>Mobile,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/math-input/src/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_testing_server_item_renderer_with_debug_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./testing/server-item-renderer-with-debug-ui.tsx"),_testdata_expression_testdata__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/perseus/src/widgets/__testdata__/expression.testdata.ts"),_expression__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/perseus/src/widgets/expression.tsx"),_test_keypad_context_wrapper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/perseus/src/widgets/__stories__/test-keypad-context-wrapper.tsx");const WrappedKeypadContext=_ref=>{let{item,customKeypad,isMobile=!1}=_ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_test_keypad_context_wrapper__WEBPACK_IMPORTED_MODULE_5__.Z,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__.i_.Consumer,null,(_ref2=>{let{keypadElement}=_ref2;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_testing_server_item_renderer_with_debug_ui__WEBPACK_IMPORTED_MODULE_2__.Z,{item,keypadElement,apiOptions:{isMobile,customKeypad}})})))},DesktopKitchenSink=args=>{const keypadConfiguration={keypadType:_khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__.H5.EXPRESSION,extraKeys:["x","y","z"]};return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{padding:"2rem"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_expression__WEBPACK_IMPORTED_MODULE_4__.Z.widget,{alignment:null,value:"",containerSizeClass:"small",findWidgets:callback=>[],isLastUsedWidget:!1,onChange:()=>{},problemNum:1,static:!1,trackInteraction:()=>{},widgetId:"expression",reviewModeRubric:{functions:["f","g","h"],times:!0,answerForms:[],buttonSets:["basic","basic+div","trig","prealgebra","logarithms","basic relations","advanced relations"]},keypadConfiguration}))},Desktop=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedKeypadContext,{item:_testdata_expression_testdata__WEBPACK_IMPORTED_MODULE_3__.PH,customKeypad:!1}),Mobile=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",null,"MathInput uses touch events;"," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:"https://developer.chrome.com/docs/devtools/device-mode/"},"emulate mobile")," ","to use the custom keypad."),react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedKeypadContext,{item:_testdata_expression_testdata__WEBPACK_IMPORTED_MODULE_3__.PH,customKeypad:!0,isMobile:!0})),ExpressionItem2=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedKeypadContext,{item:_testdata_expression_testdata__WEBPACK_IMPORTED_MODULE_3__.hB,customKeypad:args.customKeypad}),ExpressionItem3=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedKeypadContext,{item:_testdata_expression_testdata__WEBPACK_IMPORTED_MODULE_3__.PH,customKeypad:args.customKeypad}),__WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Widgets/Expression",argTypes:{customKeypad:{control:"boolean"}}};DesktopKitchenSink.parameters={...DesktopKitchenSink.parameters,docs:{...DesktopKitchenSink.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  const reviewModeRubric = {\n    functions: ["f", "g", "h"],\n    times: true,\n    answerForms: [],\n    buttonSets: (["basic", "basic+div", "trig", "prealgebra", "logarithms", "basic relations", "advanced relations"] as LegacyButtonSets)\n  };\n  const keypadConfiguration = {\n    keypadType: KeypadType.EXPRESSION,\n    extraKeys: (["x", "y", "z"] as Array<Key>)\n  };\n  return <div style={{\n    padding: "2rem"\n  }}>\n            <expressionExport.widget alignment={null} value="" containerSizeClass="small" findWidgets={callback => []} isLastUsedWidget={false} onChange={() => {}} problemNum={1} static={false} trackInteraction={() => {}} widgetId="expression" reviewModeRubric={reviewModeRubric} keypadConfiguration={keypadConfiguration} />\n        </div>;\n}',...DesktopKitchenSink.parameters?.docs?.source}}},Desktop.parameters={...Desktop.parameters,docs:{...Desktop.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <WrappedKeypadContext item={expressionItem3} customKeypad={false} />;\n}",...Desktop.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  return <div>\n            <p>\n                MathInput uses touch events;{" "}\n                <a href="https://developer.chrome.com/docs/devtools/device-mode/">\n                    emulate mobile\n                </a>{" "}\n                to use the custom keypad.\n            </p>\n            <WrappedKeypadContext item={expressionItem3} customKeypad isMobile />\n        </div>;\n}',...Mobile.parameters?.docs?.source}}},ExpressionItem2.parameters={...ExpressionItem2.parameters,docs:{...ExpressionItem2.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <WrappedKeypadContext item={expressionItem2} customKeypad={args.customKeypad} />;\n}",...ExpressionItem2.parameters?.docs?.source}}},ExpressionItem3.parameters={...ExpressionItem3.parameters,docs:{...ExpressionItem3.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  return <WrappedKeypadContext item={expressionItem3} customKeypad={args.customKeypad} />;\n}",...ExpressionItem3.parameters?.docs?.source}}};try{DesktopKitchenSink.displayName="DesktopKitchenSink",DesktopKitchenSink.__docgenInfo={description:"",displayName:"DesktopKitchenSink",props:{customKeypad:{defaultValue:null,description:"",name:"customKeypad",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/expression.stories.tsx#DesktopKitchenSink"]={docgenInfo:DesktopKitchenSink.__docgenInfo,name:"DesktopKitchenSink",path:"packages/perseus/src/widgets/__stories__/expression.stories.tsx#DesktopKitchenSink"})}catch(__react_docgen_typescript_loader_error){}try{Desktop.displayName="Desktop",Desktop.__docgenInfo={description:"",displayName:"Desktop",props:{customKeypad:{defaultValue:null,description:"",name:"customKeypad",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/expression.stories.tsx#Desktop"]={docgenInfo:Desktop.__docgenInfo,name:"Desktop",path:"packages/perseus/src/widgets/__stories__/expression.stories.tsx#Desktop"})}catch(__react_docgen_typescript_loader_error){}try{Mobile.displayName="Mobile",Mobile.__docgenInfo={description:"",displayName:"Mobile",props:{customKeypad:{defaultValue:null,description:"",name:"customKeypad",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/expression.stories.tsx#Mobile"]={docgenInfo:Mobile.__docgenInfo,name:"Mobile",path:"packages/perseus/src/widgets/__stories__/expression.stories.tsx#Mobile"})}catch(__react_docgen_typescript_loader_error){}try{ExpressionItem2.displayName="ExpressionItem2",ExpressionItem2.__docgenInfo={description:"",displayName:"ExpressionItem2",props:{customKeypad:{defaultValue:null,description:"",name:"customKeypad",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/expression.stories.tsx#ExpressionItem2"]={docgenInfo:ExpressionItem2.__docgenInfo,name:"ExpressionItem2",path:"packages/perseus/src/widgets/__stories__/expression.stories.tsx#ExpressionItem2"})}catch(__react_docgen_typescript_loader_error){}try{ExpressionItem3.displayName="ExpressionItem3",ExpressionItem3.__docgenInfo={description:"",displayName:"ExpressionItem3",props:{customKeypad:{defaultValue:null,description:"",name:"customKeypad",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/expression.stories.tsx#ExpressionItem3"]={docgenInfo:ExpressionItem3.__docgenInfo,name:"ExpressionItem3",path:"packages/perseus/src/widgets/__stories__/expression.stories.tsx#ExpressionItem3"})}catch(__react_docgen_typescript_loader_error){}},"./packages/perseus/src/widgets/__stories__/test-keypad-context-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/math-input/src/index.ts"),_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),aphrodite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/aphrodite/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js");const Footer=()=>react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__.G7,{style:styles.keypadContainer},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__.i_.Consumer,null,(_ref=>{let{setKeypadElement,renderer}=_ref;return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__.IA,{onElementMounted:setKeypadElement,onDismiss:()=>renderer&&renderer.blur(),style:styles.keypad,onAnalyticsEvent:async e=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onAnalyticsEvent")(e)}})}))),__WEBPACK_DEFAULT_EXPORT__=props=>react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_math_input__WEBPACK_IMPORTED_MODULE_0__.h1,null,props.children,react__WEBPACK_IMPORTED_MODULE_4__.createElement(Footer,null)),styles=aphrodite__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({keypad:{position:"absolute",pointerEvents:"all"},keypadContainer:{position:"absolute",width:"100%",bottom:0,overflow:"hidden",pointerEvents:"none",height:240}});try{testkeypadcontextwrapper.displayName="testkeypadcontextwrapper",testkeypadcontextwrapper.__docgenInfo={description:"",displayName:"testkeypadcontextwrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/test-keypad-context-wrapper.tsx#testkeypadcontextwrapper"]={docgenInfo:testkeypadcontextwrapper.__docgenInfo,name:"testkeypadcontextwrapper",path:"packages/perseus/src/widgets/__stories__/test-keypad-context-wrapper.tsx#testkeypadcontextwrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/perseus/src/widgets/__testdata__/expression.testdata.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PH:()=>expressionItem3,UN:()=>randomExpressionGenerator,hB:()=>expressionItem2});var _perseus_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/perseus/src/perseus-types.ts"),_randomizers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/perseus/src/widgets/__testdata__/randomizers.ts");const createItemJson=(widgetOptions,version)=>({question:{content:"[[☃ expression 1]]",images:{},widgets:{"expression 1":{type:"expression",graded:!0,options:widgetOptions,version}}},_multi:null,answer:null,answerArea:Object.fromEntries(_perseus_types__WEBPACK_IMPORTED_MODULE_0__.vW.map((extra=>[extra,!1]))),itemDataVersion:{major:0,minor:1},hints:[]}),expressionItem2=createItemJson({answerForms:[{considered:"correct",form:!1,simplify:!1,value:"123-x"},{considered:"correct",form:!1,simplify:!1,value:"x-123"}],times:!1,buttonSets:["basic"],functions:["f","g","h"],buttonsVisible:"always"},{major:1,minor:0}),expressionItem3=createItemJson({answerForms:[{considered:"ungraded",form:!1,simplify:!1,value:"x+1"},{considered:"wrong",form:!1,simplify:!1,value:"y+1"},{considered:"correct",form:!1,simplify:!1,value:"z+1"}],times:!1,buttonSets:["basic"],functions:["f","g","h"],buttonsVisible:"focused"},{major:1,minor:0}),randomExpressionGenerator=()=>{const randomButtonSet=["basic","basic+div","trig","prealgebra","logarithms","basic relations","advanced relations"].sort((()=>(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)()?1:-1)).slice(0,(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.LU)(1,6)),randomFunctionSet=(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.Xv)((0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.LU)(0,6)).map(_randomizers__WEBPACK_IMPORTED_MODULE_1__.Nt);return{content:`${(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.Xf)(20)} [[☃ expression 1]]`,images:{},widgets:{"expression 1":{type:"expression",graded:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),version:{major:1,minor:0},static:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(.05),options:{answerForms:[{considered:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.AY)(["correct","wrong","ungraded"]),form:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),simplify:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),value:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.iJ)()},{considered:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.AY)(["correct","wrong","ungraded"]),form:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),simplify:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),value:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.iJ)()}],times:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.nB)(),buttonSets:randomButtonSet,functions:randomFunctionSet,buttonsVisible:(0,_randomizers__WEBPACK_IMPORTED_MODULE_1__.AY)(["always","never","focused",void 0]),alignment:"default"}}}}}},"./packages/perseus/src/widgets/__testdata__/randomizers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AY:()=>randomElement,LU:()=>randomInteger,Nt:()=>randomLetter,Xf:()=>randomSentence,Xv:()=>arrayOfLength,iJ:()=>randomWord,nB:()=>randomBoolean});const randomLetter=()=>{const characters="abcdefghijklmnopqrstuvwxyz".split("").concat(["🍇","🍈","🍌"]).concat(["ツ","デ","ト","ド","ナ","ぁ","あ"]);return characters[randomInteger(0,characters.length-1)]},randomWord=()=>{const numLetters=randomInteger(3,11);return arrayOfLength(numLetters).map(randomLetter).join("")},randomSentence=maxWords=>{const numWords=randomInteger(5,Math.max(maxWords,5));return arrayOfLength(numWords).map(randomWord).join(" ")},randomBoolean=rateTrue=>{let threshold=rateTrue;return null==threshold&&(threshold=.5),Math.random()<threshold},randomInteger=(min,max)=>Math.floor(Math.random()*(max+1-min))+min,arrayOfLength=length=>Array.from(Array(length).keys());function randomElement(items){if(items.length>0)return items[randomInteger(0,items.length-1)]}},"./testing/ke-score-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{score}=_ref;return null==score?null:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("table",{style:{marginTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",{style:{fontWeight:"bold"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Empty"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Correct"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",{style:{width:"100%"}},"Message"))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.empty.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.correct.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.message)))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"Guess"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.guess}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"State"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.state}))};try{kescoreui.displayName="kescoreui",kescoreui.__docgenInfo={description:"",displayName:"kescoreui",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"KEScore | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/ke-score-ui.tsx#kescoreui"]={docgenInfo:kescoreui.__docgenInfo,name:"kescoreui",path:"testing/ke-score-ui.tsx#kescoreui"})}catch(__react_docgen_typescript_loader_error){}},"./testing/server-item-renderer-with-debug-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ServerItemRendererWithDebugUI});var _khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-button/dist/es/index.js"),_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-layout/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/perseus/src/index.ts"),_ke_score_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./testing/ke-score-ui.tsx"),_side_by_side__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./testing/side-by-side.tsx"),_test_dependencies__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./testing/test-dependencies.tsx");const ServerItemRendererWithDebugUI=_ref=>{let{item,apiOptions,keypadElement}=_ref;const ref=react__WEBPACK_IMPORTED_MODULE_3__.useRef(null),[state,setState]=react__WEBPACK_IMPORTED_MODULE_3__.useState(null),options=apiOptions||Object.freeze({});return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_side_by_side__WEBPACK_IMPORTED_MODULE_6__.Z,{leftTitle:"Renderer",left:react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement(_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_4__.UT,{ref,problemNum:0,apiOptions:options,item,dependencies:_test_dependencies__WEBPACK_IMPORTED_MODULE_7__.bM,keypadElement}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__.G7,{style:{flexDirection:"row",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current&&setState(ref.current.scoreInput())}},"Check"),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__.x9,{size:8}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current?.showRationalesForCurrentlySelectedChoices()}},"Show Rationales")),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ke_score_ui__WEBPACK_IMPORTED_MODULE_5__.Z,{score:state})),jsonObject:item})};try{ServerItemRendererWithDebugUI.displayName="ServerItemRendererWithDebugUI",ServerItemRendererWithDebugUI.__docgenInfo={description:"",displayName:"ServerItemRendererWithDebugUI",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"PerseusItem"}},apiOptions:{defaultValue:null,description:"",name:"apiOptions",required:!1,type:{name:"Readonly<{ isArticle?: boolean; onInputError?: ((widgetId: any, value: string, message?: string | null) => unknown) | undefined; onFocusChange?: ((newFocusPath: FocusPath, oldFocusPath: FocusPath, keypadElement?: Element | ... 2 more ... | undefined, focusedElement?: HTMLElement | undefined) ..."}},keypadElement:{defaultValue:null,description:"",name:"keypadElement",required:!1,type:{name:"KeypadAPI | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/server-item-renderer-with-debug-ui.tsx#ServerItemRendererWithDebugUI"]={docgenInfo:ServerItemRendererWithDebugUI.__docgenInfo,name:"ServerItemRendererWithDebugUI",path:"testing/server-item-renderer-with-debug-ui.tsx#ServerItemRendererWithDebugUI"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);