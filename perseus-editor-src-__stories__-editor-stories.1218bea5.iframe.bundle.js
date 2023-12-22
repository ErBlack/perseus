"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[3632],{"./packages/perseus-editor/src/__stories__/editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,DemoInteractiveGraph:()=>DemoInteractiveGraph,default:()=>editor_stories});var src=__webpack_require__("./packages/perseus/src/index.ts"),es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),perseus_editor_src=__webpack_require__("./packages/perseus-editor/src/index.ts"),side_by_side=__webpack_require__("./testing/side-by-side.tsx");const question1={content:"A sequence is defined recursively as follows:\n\n\n$\\qquad\\displaystyle{{a}_{n}}=-\\frac{1}{a_{n-1}-1} \n~~~~~~\\text{ with}\\qquad\\displaystyle{{a}_{0}}=\\frac{1}{2}\\,$\n\n\nFind the term $a_3$ in the sequence.\n\n[[☃ input-number 1]]",images:{},widgets:{"input-number 1":{graded:!0,version:{major:0,minor:0},static:!1,type:"input-number",options:{maxError:.1,inexact:!1,value:.5,simplify:"required",answerType:"number",size:"normal"},alignment:"default"}}};(0,__webpack_require__("./packages/perseus-editor/src/util/register-all-widgets-and-editors-for-testing.ts").r)();const editor_stories={title:"Perseus/Editor/Editor"},Demo=()=>react.createElement(perseus_editor_src.ML,{apiOptions:src._E.defaults,content:question1.content,placeholder:"",widgets:question1.widgets,images:question1.images,disabled:!1,widgetEnabled:!0,immutableWidgets:!1,showWordCount:!0,warnNoPrompt:!0,warnNoWidgets:!0,onChange:props=>{}}),DemoInteractiveGraph=()=>{const editorRef=react.useRef(null),[options,setOptions]=react.useState({}),[content,setContent]=react.useState("[[☃ interactive-graph 1]]"),[images,setImages]=react.useState({}),[widgets,setWidgets]=react.useState({"interactive-graph 1":{options:{labels:["x","y"],range:[[-10,10],[-10,10]],gridStep:[1,1],snapStep:[1,1],step:[1,1],backgroundImage:{url:null},markings:"graph",showProtractor:!1,showRuler:!1,showTooltips:!1,rulerLabel:"",rulerTicks:10,graph:{type:"linear",coords:[[1,1],[5,5]]},correct:{type:"linear"}},type:"interactive-graph",version:{major:0,minor:0}}});return react.createElement("div",{className:"framework-perseus"},react.createElement(side_by_side.Z,{leftTitle:"Editor",left:react.createElement(es.G7,{style:{width:"360px",margin:"20px"}},react.createElement(perseus_editor_src.ML,{ref:editorRef,apiOptions:src._E.defaults,content,placeholder:"",widgets,images,disabled:!1,widgetEnabled:!0,immutableWidgets:!1,showWordCount:!0,warnNoPrompt:!1,warnNoWidgets:!0,onChange:props=>{(0,dist.aD)("onChange")(props),props.content?setContent(props.content):props.widgets?setWidgets(props.widgets):props.images&&setImages(props.images),setTimeout((()=>{setOptions(editorRef.current?.serialize()||{})}),0)}})),rightTitle:"Serialized Widget Options",jsonObject:options}))};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'(): React.ReactElement => {\n  return <Editor apiOptions={ApiOptions.defaults} content={question1.content} placeholder="" widgets={question1.widgets} images={question1.images} disabled={false} widgetEnabled={true} immutableWidgets={false} showWordCount={true} warnNoPrompt={true} warnNoWidgets={true} onChange={props => {}} />;\n}',...Demo.parameters?.docs?.source}}},DemoInteractiveGraph.parameters={...DemoInteractiveGraph.parameters,docs:{...DemoInteractiveGraph.parameters?.docs,source:{originalSource:'(): React.ReactElement => {\n  const editorRef = React.useRef<Editor>(null);\n  const [options, setOptions] = React.useState({});\n  const [content, setContent] = React.useState("[[\\u2603 interactive-graph 1]]");\n  const [images, setImages] = React.useState<PerseusRenderer["images"]>({});\n  const [widgets, setWidgets] = React.useState<PerseusRenderer["widgets"]>({\n    "interactive-graph 1": {\n      options: {\n        labels: ["x", "y"],\n        range: [[-10, 10], [-10, 10]],\n        gridStep: [1, 1],\n        snapStep: [1, 1],\n        step: [1, 1],\n        backgroundImage: {\n          url: null\n        },\n        markings: "graph",\n        showProtractor: false,\n        showRuler: false,\n        showTooltips: false,\n        rulerLabel: "",\n        rulerTicks: 10,\n        graph: {\n          type: "linear",\n          coords: [[1, 1], [5, 5]]\n        },\n        correct: {\n          type: "linear"\n        }\n      },\n      type: "interactive-graph",\n      version: {\n        major: 0,\n        minor: 0\n      }\n    }\n  });\n  return (\n    // Many of the editor components use scoped CSS that requires this\n    // class to be above it.\n    // TODO: Refactor to aphrodite styles instead of scoped CSS in Less.\n    <div className="framework-perseus">\n            <SideBySide leftTitle="Editor" left={<View style={{\n        width: "360px",\n        margin: "20px"\n      }}>\n                        <Editor ref={editorRef} apiOptions={ApiOptions.defaults} content={content} placeholder="" widgets={widgets} images={images} disabled={false} widgetEnabled={true} immutableWidgets={false} showWordCount={true} warnNoPrompt={false} warnNoWidgets={true} onChange={(props: Partial<PerseusRenderer>) => {\n          action("onChange")(props);\n          if (props.content) {\n            setContent(props.content);\n          } else if (props.widgets) {\n            setWidgets(props.widgets);\n          } else if (props.images) {\n            setImages(props.images);\n          }\n          // We need to wait for one tick so that the editor\n          // has been re-rendered with the changed props. If\n          // we don\'t wait, we get the values from the n-1\n          // render and miss the latest change.\n          setTimeout(() => {\n            setOptions(editorRef.current?.serialize() || {});\n          }, 0);\n        }} />\n                    </View>} rightTitle="Serialized Widget Options" jsonObject={options} />\n        </div>\n  );\n}',...DemoInteractiveGraph.parameters?.docs?.source}}}},"./testing/side-by-side.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-typography/dist/es/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-json-view/dist/main.js"),react_json_view__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_3__);const styles={sideBySide:{display:"flex",flexDirection:"row"},leftPanel:{paddingRight:"30px",flexGrow:1},rightPanel:{flexGrow:1,maxWidth:"50%",padding:"5px"},code:{fontSize:"10pt",marginTop:"22px",fontFamily:"monospace"}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{leftTitle="Renderer",left,rightTitle="Perseus JSON",jsonObject}=_ref;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.sideBySide},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.leftPanel,className:"framework-perseus"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,leftTitle),left),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_core__WEBPACK_IMPORTED_MODULE_0__.G7,{style:styles.rightPanel},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_khanacademy_wonder_blocks_typography__WEBPACK_IMPORTED_MODULE_1__.TE,null,rightTitle),react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_json_view__WEBPACK_IMPORTED_MODULE_3___default(),{style:{marginTop:"10px"},quotesOnKeys:!1,enableClipboard:!1,collapsed:5,src:jsonObject})))};try{sidebyside.displayName="sidebyside",sidebyside.__docgenInfo={description:"",displayName:"sidebyside",props:{leftTitle:{defaultValue:{value:"Renderer"},description:"",name:"leftTitle",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},rightTitle:{defaultValue:{value:"Perseus JSON"},description:"",name:"rightTitle",required:!1,type:{name:"string"}},jsonObject:{defaultValue:null,description:"",name:"jsonObject",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["testing/side-by-side.tsx#sidebyside"]={docgenInfo:sidebyside.__docgenInfo,name:"sidebyside",path:"testing/side-by-side.tsx#sidebyside"})}catch(__react_docgen_typescript_loader_error){}}}]);