"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[1341],{"./packages/perseus/src/widgets/__stories__/label-image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LabelImageNumberline:()=>LabelImageNumberline,LabelWidgetWithMath:()=>LabelWidgetWithMath,LabelWidgetWithText:()=>LabelWidgetWithText,default:()=>label_image_stories});var react=__webpack_require__("./node_modules/react/index.js"),renderer_with_debug_ui=__webpack_require__("./testing/renderer-with-debug-ui.tsx");const textQuestion={content:"Carol created a chart and a bar graph to show how many of each type of vehicle were in her supermarket parking lot.\n\nVehicle Type | Number in the parking lot\n:- | :-: \nTrucks| $25$ \nVans | $5$ \nCars| $40$ \nSUVs | $10$ \n\n**Label each bar on the bar graph.**\n\n[[☃ label-image 1]]\n\n",images:{"web+graphie://ka-perseus-graphie.s3.amazonaws.com/1e28332fd2321975639ab50c9ce442e568c18421":{width:341,height:310}},widgets:{"label-image 1":{type:"label-image",alignment:"default",static:!1,graded:!0,options:{static:!1,choices:["Trucks","Vans","Cars","SUVs"],imageAlt:"A bar graph with four bar lines that shows the horizontal axis labeled Number in the parking lot and the vertical axis labeled Vehicle Type. The horizontal axis is labeled, from left to right: 0, 10, 20, 30, 40, and 50. The vertical axis has, from the bottom to the top, four unlabeled bar lines as follows: the first unlabeled bar line extends to the middle of 0 and 10, the second unlabeled bar line extends to 40, the third unlabeled bar line extends to the middle of 20 and 30, and fourth unlabeled bar line extends to 10.",imageUrl:"web+graphie://ka-perseus-graphie.s3.amazonaws.com/56c60c72e96cd353e4a8b5434506cd3a21e717af",imageWidth:415,imageHeight:314,markers:[{answers:["SUVs"],label:"The fourth unlabeled bar line.",x:25,y:17.7},{answers:["Trucks"],label:"The third unlabeled bar line.",x:25,y:35.3},{answers:["Cars"],label:"The second unlabeled bar line.",x:25,y:53},{answers:["Vans"],label:"The first unlabeled bar line.",x:25,y:70.3}],multipleAnswers:!1,hideChoicesFromInstructions:!0},version:{major:0,minor:0}}}},mathQuestion={content:"Carol created a chart and a bar graph to show how many of each type of vehicle were in her supermarket parking lot.\n\nVehicle Type | Number in the parking lot\n:- | :-: \nTrucks| $25$ \nVans | $5$ \nCars| $40$ \nSUVs | $10$ \n\n**Label each bar on the bar graph.**\n\n[[☃ label-image 1]]\n\n",images:{"web+graphie://ka-perseus-graphie.s3.amazonaws.com/1e28332fd2321975639ab50c9ce442e568c18421":{width:341,height:310}},widgets:{"label-image 1":{type:"label-image",alignment:"default",static:!1,graded:!0,options:{static:!1,choices:["$\\dfrac{1}{2}$","$\\dfrac{3}{4}$","$\\dfrac{5}{6}$","$\\dfrac{7}{8}$"],imageAlt:"A bar graph with four bar lines that shows the horizontal axis labeled Number in the parking lot and the vertical axis labeled Vehicle Type. The horizontal axis is labeled, from left to right: 0, 10, 20, 30, 40, and 50. The vertical axis has, from the bottom to the top, four unlabeled bar lines as follows: the first unlabeled bar line extends to the middle of 0 and 10, the second unlabeled bar line extends to 40, the third unlabeled bar line extends to the middle of 20 and 30, and fourth unlabeled bar line extends to 10.",imageUrl:"web+graphie://ka-perseus-graphie.s3.amazonaws.com/56c60c72e96cd353e4a8b5434506cd3a21e717af",imageWidth:415,imageHeight:314,markers:[{answers:["$\\dfrac{1}{2}$"],label:"The fourth unlabeled bar line.",x:25,y:17.7},{answers:["$\\dfrac{3}{4}$"],label:"The third unlabeled bar line.",x:25,y:35.3},{answers:["$\\dfrac{5}{6}$"],label:"The second unlabeled bar line.",x:25,y:53},{answers:["$\\dfrac{7}{8}$"],label:"The first unlabeled bar line.",x:25,y:70.3}],multipleAnswers:!1,hideChoicesFromInstructions:!0},version:{major:0,minor:0}}}},numberline={content:"**Label each point on the number line with the correct value.**\n\n[[☃ label-image 1]]",images:{},widgets:{"label-image 1":{type:"label-image",alignment:"default",static:!1,graded:!0,options:{static:!1,choices:["$-\\dfrac{7}{3}$","$-2\\dfrac{5}{8}$","$-2.9$"],imageAlt:"A number line from negative 6 halves to negative 3 halves, labeled in increments of 1 half. There are three points on the line, labeled from left to right with a, b, and c.",imageUrl:"web+graphie://ka-perseus-graphie.s3.amazonaws.com/05faa925d02e5effd3069bf24da4777e3ae1a28b",imageWidth:360,imageHeight:160,markers:[{answers:["$-2.9$"],label:"Point a is the leftmost of two points between negative 6 halves and negative 5 halves.",x:14.25,y:50},{answers:["$-2\\dfrac{5}{8}$"],label:"Point b is the rightmost of two points between negative 6 halves and negative 5 halves.",x:29.5,y:50},{answers:["$-\\dfrac{7}{3}$"],label:"Point c is between negative 5 halves and negative 4 halves.",x:45.5,y:50}],multipleAnswers:!1,hideChoicesFromInstructions:!1},version:{major:0,minor:0}}}},applyStoryArgs=(question,args)=>{const q={...question,widgets:{}};for(const[widgetId,widget]of Object.entries(question.widgets)){const modified={...widget,options:{...widget.options,preferredPopoverDirection:args.preferredPopoverDirection}};q.widgets[widgetId]={...modified}}return q},LabelWidgetWithText=args=>{const apiOptions={isMobile:args.isMobile};return react.createElement(renderer_with_debug_ui.b,{question:applyStoryArgs(textQuestion,args),apiOptions})},LabelWidgetWithMath=args=>{const apiOptions={isMobile:args.isMobile};return react.createElement(renderer_with_debug_ui.b,{question:applyStoryArgs(mathQuestion,args),apiOptions})},LabelImageNumberline=args=>{const apiOptions={isMobile:args.isMobile};return react.createElement(renderer_with_debug_ui.b,{question:applyStoryArgs(numberline,args),apiOptions})},label_image_stories={title:"Perseus/Widgets/Label Image",args:{isMobile:!1,preferredPopoverDirection:"NONE"},argTypes:{preferredPopoverDirection:{control:"select",options:["NONE","UP","DOWN","LEFT","RIGHT"]}}};LabelWidgetWithText.parameters={...LabelWidgetWithText.parameters,docs:{...LabelWidgetWithText.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  const apiOptions: APIOptions = {\n    isMobile: args.isMobile\n  };\n  return <RendererWithDebugUI question={applyStoryArgs(textQuestion, args)} apiOptions={apiOptions} />;\n}",...LabelWidgetWithText.parameters?.docs?.source}}},LabelWidgetWithMath.parameters={...LabelWidgetWithMath.parameters,docs:{...LabelWidgetWithMath.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  const apiOptions: APIOptions = {\n    isMobile: args.isMobile\n  };\n  return <RendererWithDebugUI question={applyStoryArgs(mathQuestion, args)} apiOptions={apiOptions} />;\n}",...LabelWidgetWithMath.parameters?.docs?.source}}},LabelImageNumberline.parameters={...LabelImageNumberline.parameters,docs:{...LabelImageNumberline.parameters?.docs,source:{originalSource:"(args: StoryArgs): React.ReactElement => {\n  const apiOptions: APIOptions = {\n    isMobile: args.isMobile\n  };\n  return <RendererWithDebugUI question={applyStoryArgs(numberline, args)} apiOptions={apiOptions} />;\n}",...LabelImageNumberline.parameters?.docs?.source}}};try{LabelWidgetWithText.displayName="LabelWidgetWithText",LabelWidgetWithText.__docgenInfo={description:"",displayName:"LabelWidgetWithText",props:{isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}},preferredPopoverDirection:{defaultValue:null,description:"",name:"preferredPopoverDirection",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelWidgetWithText"]={docgenInfo:LabelWidgetWithText.__docgenInfo,name:"LabelWidgetWithText",path:"packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelWidgetWithText"})}catch(__react_docgen_typescript_loader_error){}try{LabelWidgetWithMath.displayName="LabelWidgetWithMath",LabelWidgetWithMath.__docgenInfo={description:"",displayName:"LabelWidgetWithMath",props:{isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}},preferredPopoverDirection:{defaultValue:null,description:"",name:"preferredPopoverDirection",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelWidgetWithMath"]={docgenInfo:LabelWidgetWithMath.__docgenInfo,name:"LabelWidgetWithMath",path:"packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelWidgetWithMath"})}catch(__react_docgen_typescript_loader_error){}try{LabelImageNumberline.displayName="LabelImageNumberline",LabelImageNumberline.__docgenInfo={description:"",displayName:"LabelImageNumberline",props:{isMobile:{defaultValue:null,description:"",name:"isMobile",required:!0,type:{name:"boolean"}},preferredPopoverDirection:{defaultValue:null,description:"",name:"preferredPopoverDirection",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelImageNumberline"]={docgenInfo:LabelImageNumberline.__docgenInfo,name:"LabelImageNumberline",path:"packages/perseus/src/widgets/__stories__/label-image.stories.tsx#LabelImageNumberline"})}catch(__react_docgen_typescript_loader_error){}},"./testing/renderer-with-debug-ui.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>RendererWithDebugUI});var _khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-button/dist/es/index.js"),_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-layout/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_5__),_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/perseus/src/index.ts"),_packages_perseus_src_util_register_all_widgets_for_testing__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/perseus/src/util/register-all-widgets-for-testing.ts"),_side_by_side__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./testing/side-by-side.tsx");const RendererWithDebugUI=_ref=>{let{question,apiOptions,reviewMode=!1}=_ref;(0,_packages_perseus_src_util_register_all_widgets_for_testing__WEBPACK_IMPORTED_MODULE_7__.V)();const ref=react__WEBPACK_IMPORTED_MODULE_4__.useRef(null),[state,setState]=react__WEBPACK_IMPORTED_MODULE_4__.useState(null);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_side_by_side__WEBPACK_IMPORTED_MODULE_8__.Z,{leftTitle:"Widget",left:react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_packages_perseus_src_index__WEBPACK_IMPORTED_MODULE_6__.Th,{ref,content:question.content,images:question.images,widgets:question.widgets,problemNum:0,apiOptions,reviewMode}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_1__.G7,{style:{flexDirection:"row",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current&&setState(ref.current.guessAndScore())}},"Check"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_layout__WEBPACK_IMPORTED_MODULE_2__.x9,{size:8}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_button__WEBPACK_IMPORTED_MODULE_0__.Z,{onClick:()=>{ref.current?.showRationalesForCurrentlySelectedChoices()}},"Show Rationales")),null!=state&&react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__.Jf,{style:{marginTop:"10px"}},"Guess"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_5___default(),{quotesOnKeys:!1,enableClipboard:!1,src:state[0]}),react__WEBPACK_IMPORTED_MODULE_4__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_3__.Jf,{style:{marginTop:"10px"}},"Score"),react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_5___default(),{quotesOnKeys:!1,enableClipboard:!1,src:state[1]}))),jsonObject:question})};try{RendererWithDebugUI.displayName="RendererWithDebugUI",RendererWithDebugUI.__docgenInfo={description:"",displayName:"RendererWithDebugUI",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"PerseusRenderer"}},apiOptions:{defaultValue:null,description:"",name:"apiOptions",required:!1,type:{name:"Readonly<{ isArticle?: boolean; onInputError?: ((widgetId: any, value: string, message?: string | null) => unknown) | undefined; onFocusChange?: ((newFocusPath: FocusPath, oldFocusPath: FocusPath, keypadElement?: Element | ... 2 more ... | undefined, focusedElement?: HTMLElement | undefined) ..."}},reviewMode:{defaultValue:{value:"false"},description:"",name:"reviewMode",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/renderer-with-debug-ui.tsx#RendererWithDebugUI"]={docgenInfo:RendererWithDebugUI.__docgenInfo,name:"RendererWithDebugUI",path:"testing/renderer-with-debug-ui.tsx#RendererWithDebugUI"})}catch(__react_docgen_typescript_loader_error){}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);