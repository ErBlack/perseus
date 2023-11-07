"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[4206],{"./packages/perseus/src/multi-items/__stories__/multi-renderer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SingleItem:()=>SingleItem,default:()=>multi_renderer_stories});var es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),dist_es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-i18n/dist/es/index.js"),wonder_blocks_typography_dist_es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),lib=__webpack_require__("./node_modules/aphrodite/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js"),wonder_blocks_button_dist_es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-button/dist/es/index.js"),src=__webpack_require__("./packages/perseus/src/index.ts"),shapes=__webpack_require__("./packages/perseus/src/multi-items/shapes.ts");const simpleQuestionShape=shapes.Z.shape({blurb:shapes.Z.content,question:shapes.Z.content,hints:shapes.Z.hints}),question1__multi={blurb:{__type:"content",content:"",images:{},widgets:{}},hints:[{__type:"hint",content:"If two triangles are congruent, then they have the same side lengths and angle measures.",images:{},replace:!1,widgets:{}},{__type:"hint",content:"A triangle congruent to triangle $ABC$ must also have side lengths of $12$, $14$ and $20$.",images:{},replace:!1,widgets:{}},{__type:"hint",content:"The following triangle is congruent to triangle $ABC$:\n\n* A triangle with side lengths of $12$, $14$, and $20$",images:{},replace:!1,widgets:{}}],question:{__type:"content",content:"Triangle $ABC$ has side lengths of $12$, $14$, and $20$. Which of the following triangles is congruent to triangle $ABC$ ?\n\n[[☃ radio 1]]\n\nEnter the number 3 into this field: [[☃ input-number 1]]",widgets:{"radio 1":{alignment:"default",graded:!0,options:{choices:[{clue:"Congruent triangles have the same side lengths.",content:"A triangle with side lengths of $3$, $4$, and $5$",correct:!1},{clue:"Congruent triangles have the same side lengths.\n\nThis choice is similar to triangle $ABC$.",content:"A triangle with side lengths of $6$, $7$, and $10$",correct:!1},{clue:"Congruent triangles have the same side lengths.",content:"A triangle with side lengths of $10$, $12$, and $18$",correct:!1,isNoneOfTheAbove:!1},{clue:"Congruent triangles have the same side lengths.",content:"A triangle with side lengths of $12$, $14$, and $20$",correct:!0,isNoneOfTheAbove:!1},{clue:"Congruent triangles have the same side lengths.\n\nThis choice is similar to triangle $ABC$.",content:"A triangle with side lengths of $24$, $28$, and $40$",correct:!1,isNoneOfTheAbove:!1}],countChoices:!1,deselectEnabled:!1,displayCount:null,hasNoneOfTheAbove:!1,multipleSelect:!1,randomize:!1},static:!1,type:"radio",version:{major:1,minor:0}},"input-number 1":{type:"input-number",graded:!0,options:{answerType:"number",value:"-42",simplify:"required",size:"normal",inexact:!1,maxError:.1}}}}};var ke_score_ui=__webpack_require__("./testing/ke-score-ui.tsx"),side_by_side=__webpack_require__("./testing/side-by-side.tsx"),test_dependencies=__webpack_require__("./testing/test-dependencies.tsx");const MultiItemRendererWithDebugUI=_ref=>{let{children,simpleItem,apiOptions}=_ref;const ref=react.useRef(null),[state,setState]=react.useState(null);return react.createElement(side_by_side.Z,{leftTitle:"Multi Renderer",left:react.createElement(react.Fragment,null,react.createElement(src.KL.MultiRenderer,{item:simpleItem,shape:simpleQuestionShape,ref,dependencies:test_dependencies.bM},(renderers=>children(renderers))),react.createElement("div",{id:"workarea"}),react.createElement("div",{id:"hintsarea"}),react.createElement(es.G7,{style:{flexDirection:"row",alignItems:"center"}},react.createElement(wonder_blocks_button_dist_es.Z,{onClick:()=>{ref.current&&setState(ref.current.score())}},"Check")),react.createElement(ke_score_ui.Z,{score:state})),jsonObject:simpleItem})};try{MultiItemRendererWithDebugUI.displayName="MultiItemRendererWithDebugUI",MultiItemRendererWithDebugUI.__docgenInfo={description:"",displayName:"MultiItemRendererWithDebugUI",props:{simpleItem:{defaultValue:null,description:"",name:"simpleItem",required:!0,type:{name:"Item"}},apiOptions:{defaultValue:null,description:"",name:"apiOptions",required:!1,type:{name:"Readonly<{ isArticle?: boolean; onInputError?: ((widgetId: any, value: string, message?: string | null) => unknown) | undefined; onFocusChange?: ((newFocusPath: FocusPath, oldFocusPath: FocusPath, keypadElement?: Element | ... 2 more ... | undefined, focusedElement?: HTMLElement | undefined) ..."}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/multi-item-renderer-with-debug-ui.tsx#MultiItemRendererWithDebugUI"]={docgenInfo:MultiItemRendererWithDebugUI.__docgenInfo,name:"MultiItemRendererWithDebugUI",path:"testing/multi-item-renderer-with-debug-ui.tsx#MultiItemRendererWithDebugUI"})}catch(__react_docgen_typescript_loader_error){}const SingleItem=args=>{const item={_multi:{...question1__multi,blurb:{...question1__multi.blurb,content:"This is a short snippet to help you understand the context of the question. We call it the 'blurb'."}}};return react.createElement(MultiItemRendererWithDebugUI,{simpleItem:item},(_ref=>{let{renderers}=_ref;const{blurb,question,hints}=renderers;return react.createElement(es.G7,null,react.createElement(es.G7,{style:styles.section},react.createElement(wonder_blocks_typography_dist_es.Jf,{style:styles.heading},dist_es.lR("Blurb")),blurb),react.createElement(es.G7,{style:styles.section},react.createElement(wonder_blocks_typography_dist_es.Jf,{style:styles.heading},dist_es.lR("Question")),question),react.createElement(es.G7,{style:styles.section},react.createElement(wonder_blocks_typography_dist_es.Jf,{style:styles.heading},dist_es.lR("Hints")),react.createElement(es.G7,{style:styles.hints},hints?.firstN(2))))}))},styles=lib.StyleSheet.create({section:{backgroundColor:"#F5F5F5",padding:"5px",borderWidth:"1px",marginTop:"5px",marginBottom:"5px"},heading:{backgroundColor:"#A9A9A9",margin:"-5px",padding:"5px"},hints:{marginLeft:"50px"}}),multi_renderer_stories={title:"Perseus/Renderers/Multi Renderer"};SingleItem.parameters={...SingleItem.parameters,docs:{...SingleItem.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  const item = ({\n    _multi: {\n      ...question1._multi,\n      blurb: {\n        ...question1._multi.blurb,\n        content: "This is a short snippet to help you understand the context of the question. We call it the \'blurb\'."\n      }\n    }\n  } as const);\n  return <MultiItemRendererWithDebugUI simpleItem={item}>\n            {({\n      renderers\n    }) => {\n      const {\n        blurb,\n        question,\n        hints\n      } = renderers;\n      return <View>\n                        <View style={styles.section}>\n                            <HeadingSmall style={styles.heading}>\n                                {i18n.doNotTranslate("Blurb")}\n                            </HeadingSmall>\n                            {blurb}\n                        </View>\n                        <View style={styles.section}>\n                            <HeadingSmall style={styles.heading}>\n                                {i18n.doNotTranslate("Question")}\n                            </HeadingSmall>\n                            {question}\n                        </View>\n                        <View style={styles.section}>\n                            <HeadingSmall style={styles.heading}>\n                                {i18n.doNotTranslate("Hints")}\n                            </HeadingSmall>\n                            <View style={styles.hints}>\n                                {\n            // @ts-expect-error [FEI-5003] - TS2339 - Property \'firstN\' does not exist on type \'readonly ReactNode[]\'.\n            hints?.firstN(2)}\n                            </View>\n                        </View>\n                    </View>;\n    }}\n        </MultiItemRendererWithDebugUI>;\n}',...SingleItem.parameters?.docs?.source}}};try{SingleItem.displayName="SingleItem",SingleItem.__docgenInfo={description:"",displayName:"SingleItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/multi-items/__stories__/multi-renderer.stories.tsx#SingleItem"]={docgenInfo:SingleItem.__docgenInfo,name:"SingleItem",path:"packages/perseus/src/multi-items/__stories__/multi-renderer.stories.tsx#SingleItem"})}catch(__react_docgen_typescript_loader_error){}},"./testing/ke-score-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_2__);const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{score}=_ref;return null==score?null:react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("table",{style:{marginTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",{style:{fontWeight:"bold"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Empty"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,"Correct"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",{style:{width:"100%"}},"Message"))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.empty.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.correct.toString()),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,score.message)))),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"Guess"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.guess}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_0__.Jf,{style:{marginTop:"10px"}},"State"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_2___default(),{quotesOnKeys:!1,enableClipboard:!1,src:score.state}))};try{kescoreui.displayName="kescoreui",kescoreui.__docgenInfo={description:"",displayName:"kescoreui",props:{score:{defaultValue:null,description:"",name:"score",required:!0,type:{name:"KEScore | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/ke-score-ui.tsx#kescoreui"]={docgenInfo:kescoreui.__docgenInfo,name:"kescoreui",path:"testing/ke-score-ui.tsx#kescoreui"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);