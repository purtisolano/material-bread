var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/DrawerBottom/DrawerBottom.stories.js";var store=new _storybookState.Store({visible:false});var _default=(0,_storiesOf.storiesOf)('Components|DrawerBottom',module).addParameters({jest:['DrawerBottom']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_Header.default,{title:'DrawerBottom',__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:25}},function(state){return _react.default.createElement(_reactNative.View,{style:{flex:1,height:300},__source:{fileName:_jsxFileName,lineNumber:27}},_react.default.createElement(_.Button,{text:"Open Drawer",onPress:function onPress(){store.set({visible:true});},__source:{fileName:_jsxFileName,lineNumber:28}}),_react.default.createElement(_.DrawerBottom,{visible:state.visible,pageHeight:_reactNative.Platform.OS=='web'?400:null,onBackdropPress:function onBackdropPress(){return store.set({visible:false});},onSwipeDown:function onSwipeDown(){return store.set({visible:false});},__source:{fileName:_jsxFileName,lineNumber:34}},_react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:39}},_react.default.createElement(_.DrawerHeader,{title:'Jon Snow',subtitle:'Knows nothing',__source:{fileName:_jsxFileName,lineNumber:40}}),_react.default.createElement(_.DrawerSection,{bottomDivider:true,__source:{fileName:_jsxFileName,lineNumber:41}},_react.default.createElement(_.DrawerItem,{text:'Inbox',icon:'mail',active:true,__source:{fileName:_jsxFileName,lineNumber:42}}),_react.default.createElement(_.DrawerItem,{text:'Outbox',icon:'send',__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.DrawerItem,{text:'Favorites',icon:'favorite',__source:{fileName:_jsxFileName,lineNumber:44}})))));}));});exports.default=_default;