var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _storiesOf=require("../../../storybook/helpers/storiesOf");var _=require("../../..");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/Button/ContainedButton/ContainedButton.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Buttons/Contained Button',module).addParameters({jest:['Button']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:12}},_react.default.createElement(_Header.default,{title:'Simple Contained Button',__source:{fileName:_jsxFileName,lineNumber:13}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_.Button,{text:'Text',type:"contained",__source:{fileName:_jsxFileName,lineNumber:23}}),_react.default.createElement(_.Button,{text:'Button',color:'#E91E63',type:"contained",__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.Button,{text:'Buy',color:'#FF5722',type:"contained",__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.Button,{text:'Click Here',color:'#673AB7',type:"contained",__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.Button,{text:'Do not click',color:'#009688',type:"contained",__source:{fileName:_jsxFileName,lineNumber:27}})));}).add('with left icon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:32}},_react.default.createElement(_Header.default,{title:'Left Icon Contained Button',__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:35}},_react.default.createElement(_.Button,{text:'Home',icon:_react.default.createElement(_.Icon,{name:"home",__source:{fileName:_jsxFileName,lineNumber:43}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:49}}),__source:{fileName:_jsxFileName,lineNumber:44}}),_react.default.createElement(_.Button,{text:'Settings',icon:_react.default.createElement(_.Icon,{name:"settings",__source:{fileName:_jsxFileName,lineNumber:53}}),color:'#FF5722',radius:20,type:"contained",__source:{fileName:_jsxFileName,lineNumber:51}}),_react.default.createElement(_.Button,{text:'Buy',color:'#673AB7',density:-2,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:62}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:58}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:68}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:65}})));}).add('with right icon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:75}},_react.default.createElement(_Header.default,{title:'Right Icon Contained Button',__source:{fileName:_jsxFileName,lineNumber:76}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:78}},_react.default.createElement(_.Button,{text:'Home',icon:_react.default.createElement(_.Icon,{name:"home",__source:{fileName:_jsxFileName,lineNumber:88}}),type:"contained",iconPosition:'right',__source:{fileName:_jsxFileName,lineNumber:86}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:97}}),iconPosition:'right',__source:{fileName:_jsxFileName,lineNumber:92}}),_react.default.createElement(_.Button,{text:'Settings',icon:_react.default.createElement(_.Icon,{name:"settings",__source:{fileName:_jsxFileName,lineNumber:102}}),color:'#FF5722',radius:20,type:"contained",iconPosition:'right',__source:{fileName:_jsxFileName,lineNumber:100}}),_react.default.createElement(_.Button,{text:'Buy',color:'#673AB7',density:-2,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:112}}),type:"contained",iconPosition:'right',__source:{fileName:_jsxFileName,lineNumber:108}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:119}}),type:"contained",iconPosition:'right',__source:{fileName:_jsxFileName,lineNumber:116}})));}).add('radius',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:127}},_react.default.createElement(_Header.default,{title:'Radius Contained Button',__source:{fileName:_jsxFileName,lineNumber:128}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:130}},_react.default.createElement(_.Button,{text:'Home',radius:20,type:"contained",__source:{fileName:_jsxFileName,lineNumber:138}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,radius:40,icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:144}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:139}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',radius:60,type:"contained",__source:{fileName:_jsxFileName,lineNumber:147}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-2,radius:0,icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:158}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:153}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',radius:0,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:165}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:161}})));}).add('density',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:172}},_react.default.createElement(_Header.default,{title:'Density Contained Button',__source:{fileName:_jsxFileName,lineNumber:173}}),_react.default.createElement(_.BodyText,{text:'Density -1: 32px',style:{marginBottom:15},__source:{fileName:_jsxFileName,lineNumber:175}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:30},__source:{fileName:_jsxFileName,lineNumber:176}},_react.default.createElement(_.Button,{text:'Home',density:-1,type:"contained",__source:{fileName:_jsxFileName,lineNumber:184}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,density:-1,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:191}}),__source:{fileName:_jsxFileName,lineNumber:185}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',density:-1,radius:60,type:"contained",__source:{fileName:_jsxFileName,lineNumber:193}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-1,radius:0,type:"contained",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:206}}),__source:{fileName:_jsxFileName,lineNumber:200}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',density:-1,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:212}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:208}})),_react.default.createElement(_.BodyText,{text:'Density -2: 28px',style:{marginBottom:15},__source:{fileName:_jsxFileName,lineNumber:217}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:30},__source:{fileName:_jsxFileName,lineNumber:218}},_react.default.createElement(_.Button,{text:'Home',density:-2,type:"contained",__source:{fileName:_jsxFileName,lineNumber:226}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,density:-2,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:233}}),__source:{fileName:_jsxFileName,lineNumber:227}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',density:-2,radius:60,type:"contained",__source:{fileName:_jsxFileName,lineNumber:235}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-2,radius:0,type:"contained",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:248}}),__source:{fileName:_jsxFileName,lineNumber:242}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',density:-2,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:254}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:250}})),_react.default.createElement(_.BodyText,{text:'Density -3: 24px',style:{marginBottom:15},__source:{fileName:_jsxFileName,lineNumber:259}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:30},__source:{fileName:_jsxFileName,lineNumber:260}},_react.default.createElement(_.Button,{text:'Home',density:-3,type:"contained",__source:{fileName:_jsxFileName,lineNumber:268}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,density:-3,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:275}}),__source:{fileName:_jsxFileName,lineNumber:269}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',density:-3,radius:60,type:"contained",__source:{fileName:_jsxFileName,lineNumber:277}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-3,radius:0,type:"contained",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:290}}),__source:{fileName:_jsxFileName,lineNumber:284}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',density:-3,icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:296}}),type:"contained",__source:{fileName:_jsxFileName,lineNumber:292}})));}).add('loading',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:303}},_react.default.createElement(_Header.default,{title:'Loading Contained Button',__source:{fileName:_jsxFileName,lineNumber:304}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:306}},_react.default.createElement(_.Button,{text:'Home',loading:true,hideLabel:true,type:"contained",__source:{fileName:_jsxFileName,lineNumber:314}}),_react.default.createElement(_.Button,{text:'Favorite',color:'#E91E63',borderSize:2,loading:true,hideLabel:true,type:"contained",icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:322}}),__source:{fileName:_jsxFileName,lineNumber:315}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',loading:true,hideLabel:true,radius:60,type:"contained",__source:{fileName:_jsxFileName,lineNumber:324}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-2,radius:0,loading:true,hideLabel:true,type:"contained",__source:{fileName:_jsxFileName,lineNumber:332}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',loading:true,hideLabel:true,type:"contained",icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:347}}),__source:{fileName:_jsxFileName,lineNumber:341}})));}).add('disabled',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:353}},_react.default.createElement(_Header.default,{title:'Disabled Contained Button',__source:{fileName:_jsxFileName,lineNumber:354}}),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:356}},_react.default.createElement(_.Button,{text:'Home',disabled:true,type:"contained",__source:{fileName:_jsxFileName,lineNumber:364}}),_react.default.createElement(_.Button,{color:'#E91E63',borderSize:2,loading:true,disabled:true,type:"contained",__source:{fileName:_jsxFileName,lineNumber:365}}),_react.default.createElement(_.Button,{text:'Settings',color:'#FF5722',type:"contained",disabled:true,radius:60,__source:{fileName:_jsxFileName,lineNumber:372}}),_react.default.createElement(_.Button,{text:'Buy',tcolor:'#673AB7',density:-2,radius:0,disabled:true,type:"contained",icon:_react.default.createElement(_.Icon,{name:"attach-money",__source:{fileName:_jsxFileName,lineNumber:386}}),__source:{fileName:_jsxFileName,lineNumber:379}}),_react.default.createElement(_.Button,{text:'Archive',color:'#009688',disabled:true,type:"contained",icon:_react.default.createElement(_.Icon,{name:"archive",__source:{fileName:_jsxFileName,lineNumber:393}}),__source:{fileName:_jsxFileName,lineNumber:388}})));}).add('full width',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:399}},_react.default.createElement(_Header.default,{title:'Full Width Contained Button',__source:{fileName:_jsxFileName,lineNumber:400}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Contained',type:"contained",containerStyle:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:401}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Radius',color:'#009688',type:"contained",containerStyle:{marginBottom:8},radius:40,__source:{fileName:_jsxFileName,lineNumber:408}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Icon',color:'#E91E63',type:"contained",containerStyle:{marginBottom:8},icon:_react.default.createElement(_.Icon,{name:"favorite",__source:{fileName:_jsxFileName,lineNumber:422}}),__source:{fileName:_jsxFileName,lineNumber:416}}),_react.default.createElement(_.Button,{fullWidth:true,color:'#FF5722',type:"contained",loading:true,containerStyle:{marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:424}}),_react.default.createElement(_.Button,{fullWidth:true,text:'Disabled',color:'#673AB7',type:"contained",containerStyle:{marginBottom:8},disabled:true,__source:{fileName:_jsxFileName,lineNumber:431}}));});exports.default=_default;