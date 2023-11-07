"use strict";(self.webpackChunkperseus=self.webpackChunkperseus||[]).push([[3041],{"./packages/perseus/src/components/__stories__/zoomable-tex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexKaTeX:()=>ComplexKaTeX,KaTeX:()=>KaTeX,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_zoomable_tex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/perseus/src/components/zoomable-tex.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Perseus/Components/Zoomable Tex"},ForceZoomWrapper=_ref=>{let{children}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Click on equation to zoom/unzoom"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"50px"}},children))},KaTeX=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ForceZoomWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_zoomable_tex__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"\\sum_{i=1}^\\infty\\frac{1}{n^2} =\\frac{\\pi^2}{6}"})),ComplexKaTeX=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ForceZoomWrapper,null," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_zoomable_tex__WEBPACK_IMPORTED_MODULE_1__.Z,{children:"\\begin{aligned}h\\blueE{v_1} \\left(\\dfrac{\\partial f}{\\partial x}(x_0, y_0) \\right) + h\\greenE{v_2}\\left( \\dfrac{\\partial f}{\\partial y}(x_0 \\redD{+ h\\blueE{v_1}}, y_0)\\right)\\end{aligned}"}));KaTeX.parameters={...KaTeX.parameters,docs:{...KaTeX.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  return <ForceZoomWrapper>\n            <ZoomableTex children="\\sum_{i=1}^\\infty\\frac{1}{n^2} =\\frac{\\pi^2}{6}" />\n        </ForceZoomWrapper>;\n}',...KaTeX.parameters?.docs?.source}}},ComplexKaTeX.parameters={...ComplexKaTeX.parameters,docs:{...ComplexKaTeX.parameters?.docs,source:{originalSource:'(args: StoryArgs): React.ReactElement => {\n  return <ForceZoomWrapper>\n            {" "}\n            <ZoomableTex children="\\begin{aligned}h\\blueE{v_1} \\left(\\dfrac{\\partial f}{\\partial x}(x_0, y_0) \\right) + h\\greenE{v_2}\\left( \\dfrac{\\partial f}{\\partial y}(x_0 \\redD{+ h\\blueE{v_1}}, y_0)\\right)\\end{aligned}" />\n        </ForceZoomWrapper>;\n}',...ComplexKaTeX.parameters?.docs?.source}}};try{KaTeX.displayName="KaTeX",KaTeX.__docgenInfo={description:"",displayName:"KaTeX",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/zoomable-tex.stories.tsx#KaTeX"]={docgenInfo:KaTeX.__docgenInfo,name:"KaTeX",path:"packages/perseus/src/components/__stories__/zoomable-tex.stories.tsx#KaTeX"})}catch(__react_docgen_typescript_loader_error){}try{ComplexKaTeX.displayName="ComplexKaTeX",ComplexKaTeX.__docgenInfo={description:"",displayName:"ComplexKaTeX",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/perseus/src/components/__stories__/zoomable-tex.stories.tsx#ComplexKaTeX"]={docgenInfo:ComplexKaTeX.__docgenInfo,name:"ComplexKaTeX",path:"packages/perseus/src/components/__stories__/zoomable-tex.stories.tsx#ComplexKaTeX"})}catch(__react_docgen_typescript_loader_error){}}}]);