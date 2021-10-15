var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/RadioButton/RadioButton.stories.js";var store=new _storybookState.Store({checked:1,checked1:2,checked2:3,checked3:1,checked4:1});var _default=(0,_storiesOf.storiesOf)('Components|Radio Button',module).addParameters({jest:['RadioButton']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:21}},_react.default.createElement(_Header.default,{title:'Radio Button',__source:{fileName:_jsxFileName,lineNumber:22}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:23}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:25}},_react.default.createElement(_.RadioButton,{checked:state.checked==1,onPress:function onPress(){return store.set({checked:1});},__source:{fileName:_jsxFileName,lineNumber:26}}),_react.default.createElement(_.RadioButton,{checked:state.checked==2,onPress:function onPress(){return store.set({checked:2});},__source:{fileName:_jsxFileName,lineNumber:30}}),_react.default.createElement(_.RadioButton,{checked:state.checked==3,onPress:function onPress(){return store.set({checked:3});},__source:{fileName:_jsxFileName,lineNumber:34}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:41}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:43}},_react.default.createElement(_.RadioButton,{checked:state.checked1==1,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:1});},__source:{fileName:_jsxFileName,lineNumber:44}}),_react.default.createElement(_.RadioButton,{checked:state.checked1==2,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:2});},__source:{fileName:_jsxFileName,lineNumber:50}}),_react.default.createElement(_.RadioButton,{checked:state.checked1==3,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:3});},__source:{fileName:_jsxFileName,lineNumber:56}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:65}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:67}},_react.default.createElement(_.RadioButton,{checked:state.checked2==1,onPress:function onPress(){return store.set({checked2:1});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:68}}),_react.default.createElement(_.RadioButton,{checked:state.checked2==2,onPress:function onPress(){return store.set({checked2:2});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:75}}),_react.default.createElement(_.RadioButton,{checked:state.checked2==3,onPress:function onPress(){return store.set({checked2:3});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:82}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:92}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:94}},_react.default.createElement(_.RadioButton,{checked:state.checked3==1,onPress:function onPress(){return store.set({checked2:1});},disabled:true,__source:{fileName:_jsxFileName,lineNumber:95}}),_react.default.createElement(_.RadioButton,{checked:state.checked3==1,onPress:function onPress(){return store.set({checked2:2});},disabled:true,__source:{fileName:_jsxFileName,lineNumber:100}}),_react.default.createElement(_.RadioButton,{checked:state.checked3==1,onPress:function onPress(){return store.set({checked2:3});},disabled:true,__source:{fileName:_jsxFileName,lineNumber:105}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:113}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:115}},_react.default.createElement(_.RadioButton,{checked:state.checked4==1,onPress:function onPress(){return store.set({checked4:1});},error:true,__source:{fileName:_jsxFileName,lineNumber:116}}),_react.default.createElement(_.RadioButton,{checked:state.checked4==2,onPress:function onPress(){return store.set({checked4:2});},error:true,__source:{fileName:_jsxFileName,lineNumber:121}}),_react.default.createElement(_.RadioButton,{checked:state.checked4==3,onPress:function onPress(){return store.set({checked4:3});},error:true,__source:{fileName:_jsxFileName,lineNumber:126}}));}));}).add('label',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:137}},_react.default.createElement(_Header.default,{title:'Radio Button',__source:{fileName:_jsxFileName,lineNumber:138}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:139}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'column',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:141}},_react.default.createElement(_.RadioButton,{checked:state.checked==1,onPress:function onPress(){return store.set({checked:1});},label:"Home",__source:{fileName:_jsxFileName,lineNumber:142}}),_react.default.createElement(_.RadioButton,{checked:state.checked==2,onPress:function onPress(){return store.set({checked:2});},label:"Work",__source:{fileName:_jsxFileName,lineNumber:147}}),_react.default.createElement(_.RadioButton,{checked:state.checked==3,onPress:function onPress(){return store.set({checked:3});},label:"Anywhere",__source:{fileName:_jsxFileName,lineNumber:152}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:160}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',flexWrap:'wrap',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:162}},_react.default.createElement(_.RadioButton,{checked:state.checked1==1,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:1});},label:"Beach",__source:{fileName:_jsxFileName,lineNumber:168}}),_react.default.createElement(_.RadioButton,{checked:state.checked1==2,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:2});},label:"Mountain",__source:{fileName:_jsxFileName,lineNumber:175}}),_react.default.createElement(_.RadioButton,{checked:state.checked1==3,radioButtonColor:'#E91E63',rippleColor:'#E91E63',onPress:function onPress(){return store.set({checked1:3});},label:"Woods",__source:{fileName:_jsxFileName,lineNumber:182}}));}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:192}},function(state){return _react.default.createElement(_reactNative.View,{style:{flexDirection:'row',marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:194}},_react.default.createElement(_.RadioButton,{checked:state.checked2==1,onPress:function onPress(){return store.set({checked2:1});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',label:"Rocky",labelPos:"left",__source:{fileName:_jsxFileName,lineNumber:195}}),_react.default.createElement(_.RadioButton,{checked:state.checked2==2,onPress:function onPress(){return store.set({checked2:2});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',label:"Mountain",labelPos:"left",__source:{fileName:_jsxFileName,lineNumber:204}}),_react.default.createElement(_.RadioButton,{checked:state.checked2==3,onPress:function onPress(){return store.set({checked2:3});},uncheckedBorderColor:'#009688',radioButtonColor:'#009688',rippleColor:'#009688',label:"High",labelPos:"left",__source:{fileName:_jsxFileName,lineNumber:213}}));}));});exports.default=_default;