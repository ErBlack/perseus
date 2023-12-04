"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[3471],{"./packages/perseus-editor/src/__stories__/tex-error-view.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./packages/perseus-editor/src/tex-error-view.tsx").Z,title:"Perseus/Editor/TexErrorView"},Primary={args:{errorList:[{math:"\\x^2",message:"TeX parse error: Undefined control sequence: \\x"},{math:"\\y^2",message:"TeX parse error: Undefined control sequence: \\y"}]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    errorList: [{\n      math: "\\\\x^2",\n      message: "TeX parse error: Undefined control sequence: \\\\x"\n    }, {\n      math: "\\\\y^2",\n      message: "TeX parse error: Undefined control sequence: \\\\y"\n    }]\n  }\n}',...Primary.parameters?.docs?.source}}}},"./packages/perseus-editor/src/tex-error-view.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tex_error_view});var es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-core/dist/es/index.js"),dist_es=__webpack_require__("./node_modules/@khanacademy/wonder-blocks-icon/dist/es/index.js");const caret_right_bold_namespaceObject=__webpack_require__.p+"static/media/caret-right-bold.e8183de5.svg";var lib=__webpack_require__("./node_modules/aphrodite/lib/index.js"),react=__webpack_require__("./node_modules/react/index.js");class TexErrorView extends react.Component{state={showErrors:!1};handleToggleTexErrors=e=>{this.setState({showErrors:!this.state.showErrors})};render(){const{errorList}=this.props,{showErrors}=this.state,iconStyle=showErrors?styles.iconExpanded:styles.iconCollapsed;return react.createElement(es.G7,{style:styles.errorContainer},react.createElement(es.G7,{style:styles.title,onClick:this.handleToggleTexErrors},react.createElement(dist_es.Hj,{icon:caret_right_bold_namespaceObject,style:iconStyle}),"  TeX Errors (",errorList.length,")"),showErrors&&react.createElement(es.G7,{style:styles.errorExplanation},"If your math doesn't display correctly, these errors might help you troubleshoot. Message #content-kitchen for help."),showErrors&&errorList.map(((e,index)=>react.createElement(es.G7,{style:styles.error,key:index},react.createElement(es.G7,{style:{color:"red"}},e.math),react.createElement(es.G7,null,e.message)))))}}const styles=lib.StyleSheet.create({title:{backgroundColor:"#eee",fontSize:"1.25em",padding:"4px 10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center"},errorContainer:{border:"1px solid #ddd",borderTop:"none"},errorExplanation:{padding:"4px 10px",backgroundColor:"pink"},error:{padding:"4px 10px"},iconCollapsed:{transition:".15s"},iconExpanded:{transform:"rotate(90deg)",transition:".15s"}}),tex_error_view=TexErrorView;try{TexErrorView.displayName="TexErrorView",TexErrorView.__docgenInfo={description:"Displays a collapsable list of TeX rendering errors.",displayName:"TexErrorView",props:{errorList:{defaultValue:null,description:"",name:"errorList",required:!0,type:{name:"readonly { math: string; message: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus-editor/src/tex-error-view.tsx#TexErrorView"]={docgenInfo:TexErrorView.__docgenInfo,name:"TexErrorView",path:"packages/perseus-editor/src/tex-error-view.tsx#TexErrorView"})}catch(__react_docgen_typescript_loader_error){}}}]);