var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _reactNative=require("react-native");var _=require("../..");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/AppbarBottom/AppbarBottom.stories.js";var store=new _storybookState.Store({isOpen:false,isOpenPermanent:true});var pageWidth=_reactNative.Platform.OS=='web'?600:_reactNative.Dimensions.get('window').width;var _default=(0,_storiesOf.storiesOf)('Components|AppbarBottom',module).addParameters({jest:['AppbarBottom']}).add('Center Fab',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:34}},_react.default.createElement(_Header.default,{title:'Center Fab',__source:{fileName:_jsxFileName,lineNumber:35}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:37}}),color:'#6E2CFA',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:36}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:42}}),fabCutout:true,color:'#6E2CFA',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:41}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'change-history',backgroundColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:48}}),fabPosition:'center',navigation:'menu',color:'#E91E63',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:47}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'change-history',backgroundColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:55}}),fabCutout:true,fabPosition:'center',navigation:'menu',color:'#E91E63',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:54}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'drafts',backgroundColor:'#8BC34A',__source:{fileName:_jsxFileName,lineNumber:63}}),fabPosition:'center',navigation:'arrow-back',actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#9C27B0',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:62}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'drafts',backgroundColor:'#8BC34A',__source:{fileName:_jsxFileName,lineNumber:74}}),fabCutout:true,fabPosition:'center',navigation:'arrow-back',actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#9C27B0',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:73}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'favorite',backgroundColor:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:86}}),fabPosition:'center',navigation:'menu',actionItems:[_react.default.createElement(_.Badge,{key:1,containerStyle:{marginRight:16,flex:1},color:'#e10050',textColor:'white',size:14,content:77,__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement(_.IconButton,{name:"favorite",size:24,color:'white',__source:{fileName:_jsxFileName,lineNumber:97}})),{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#009688',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:85}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'favorite',backgroundColor:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:106}}),fabPosition:'center',fabCutout:true,navigation:'menu',actionItems:[_react.default.createElement(_.Badge,{key:1,containerStyle:{marginRight:16,flex:1},color:'#e10050',textColor:'white',size:14,content:77,__source:{fileName:_jsxFileName,lineNumber:111}},_react.default.createElement(_.IconButton,{name:"favorite",size:24,color:'white',__source:{fileName:_jsxFileName,lineNumber:118}})),{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#009688',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:105}}));}).add('End Fab',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:129}},_react.default.createElement(_Header.default,{title:'End Fab',__source:{fileName:_jsxFileName,lineNumber:130}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:132}}),fabPosition:'end',color:'#6E2CFA',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:131}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:138}}),fabCutout:true,fabPosition:'end',color:'#6E2CFA',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:137}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'change-history',backgroundColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:145}}),fabPosition:'end',navigation:'menu',color:'#E91E63',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:144}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'change-history',backgroundColor:'#009688',__source:{fileName:_jsxFileName,lineNumber:152}}),fabCutout:true,fabPosition:'end',navigation:'menu',color:'#E91E63',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:151}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'drafts',backgroundColor:'#8BC34A',__source:{fileName:_jsxFileName,lineNumber:160}}),fabPosition:'end',navigation:'arrow-back',actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#9C27B0',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:159}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'drafts',backgroundColor:'#8BC34A',__source:{fileName:_jsxFileName,lineNumber:171}}),fabCutout:true,fabPosition:'end',navigation:'arrow-back',actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#9C27B0',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:170}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'favorite',backgroundColor:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:183}}),fabPosition:'end',navigation:'menu',actionItems:[_react.default.createElement(_.Badge,{key:1,containerStyle:{marginRight:16,flex:1},color:'#e10050',textColor:'white',size:14,content:77,__source:{fileName:_jsxFileName,lineNumber:187}},_react.default.createElement(_.IconButton,{name:"favorite",size:24,color:'white',__source:{fileName:_jsxFileName,lineNumber:194}})),{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#009688',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:182}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{icon:'favorite',backgroundColor:'#E91E63',__source:{fileName:_jsxFileName,lineNumber:203}}),fabPosition:'end',fabCutout:true,navigation:'menu',actionItems:[_react.default.createElement(_.Badge,{key:1,containerStyle:{marginRight:16,flex:1},color:'#e10050',textColor:'white',size:14,content:77,__source:{fileName:_jsxFileName,lineNumber:208}},_react.default.createElement(_.IconButton,{name:"favorite",size:24,color:'white',__source:{fileName:_jsxFileName,lineNumber:215}})),{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#009688',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:202}}));}).add('No Fab',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:226}},_react.default.createElement(_Header.default,{title:'No Fab',__source:{fileName:_jsxFileName,lineNumber:227}}),_react.default.createElement(_.AppbarBottom,{color:'#6E2CFA',style:{marginBottom:50},actionItems:[{name:'add'},{name:'edit'},{name:'archive'},{name:'delete'}],__source:{fileName:_jsxFileName,lineNumber:228}}),_react.default.createElement(_.AppbarBottom,{fabStyles:{backgroundColor:'#009688'},navigation:'menu',color:'#E91E63',style:{marginBottom:50},actionItems:[{name:'add'},{name:'edit'},{name:'archive'},{name:'delete'}],__source:{fileName:_jsxFileName,lineNumber:239}}),_react.default.createElement(_.AppbarBottom,{navigation:'arrow-back',actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#9C27B0',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:252}}),_react.default.createElement(_.AppbarBottom,{navigation:'menu',actionItems:[_react.default.createElement(_.Badge,{key:1,containerStyle:{marginRight:16,flex:1},color:'#e10050',textColor:'white',size:14,content:77,__source:{fileName:_jsxFileName,lineNumber:265}},_react.default.createElement(_.IconButton,{name:"favorite",size:24,color:'white',__source:{fileName:_jsxFileName,lineNumber:272}})),{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],color:'#009688',style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:262}}));}).add('with speeddial',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:283}},_react.default.createElement(_Header.default,{title:'SpeedDial',__source:{fileName:_jsxFileName,lineNumber:284}}),_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.FabSpeedDial,{actions:actions,fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:290}}),__source:{fileName:_jsxFileName,lineNumber:288}}),color:'#6E2CFA',fabCutout:true,fabPosition:'end',navigation:'arrow-back',fabStyles:{},actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],style:{marginTop:300},__source:{fileName:_jsxFileName,lineNumber:286}}));}).add('open sidebar',function(){return _react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:307}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:309}},_react.default.createElement(_.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:400,drawerContent:_react.default.createElement(DrawerContent,{__source:{fileName:_jsxFileName,lineNumber:314}}),onClose:function onClose(){return store.set({isOpen:false});},animationTime:250,opacity:0.33,__source:{fileName:_jsxFileName,lineNumber:310}},_react.default.createElement(_reactNative.View,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:318}},_react.default.createElement(PageContent,{__source:{fileName:_jsxFileName,lineNumber:319}}),_react.default.createElement(_.AppbarBottom,{color:'#6E2CFA',fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:322}}),fabCutout:true,fabPosition:'center',navigation:'menu',onNavigation:function onNavigation(){return store.set({isOpen:!state.isOpen});},actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],__source:{fileName:_jsxFileName,lineNumber:320}}))));});}).add('open drawer bottom',function(){return _react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:339}},function(state){return _react.default.createElement(_reactNative.View,{style:{height:500,position:'relative'},__source:{fileName:_jsxFileName,lineNumber:341}},_react.default.createElement(_.AppbarBottom,{fab:_react.default.createElement(_.Fab,{backgroundColor:'#04D5BF',__source:{fileName:_jsxFileName,lineNumber:343}}),fabCutout:true,color:'#6E2CFA',fabPosition:'center',navigation:'menu',style:{marginTop:300},onNavigation:function onNavigation(){return store.set({isOpenBottom:!state.isOpenBottom});},actionItems:[{name:'search',onPress:function onPress(){return console.log('onSearch');}},{name:'more-vert'}],__source:{fileName:_jsxFileName,lineNumber:342}}),_react.default.createElement(_.DrawerBottom,{visible:state.isOpenBottom,onBackdropPress:function onBackdropPress(){return store.set({isOpenBottom:false});},onSwipeDown:function onSwipeDown(){return store.set({isOpenBottom:false});},__source:{fileName:_jsxFileName,lineNumber:357}},_react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:361}},_react.default.createElement(_.DrawerHeader,{title:'Jon Snow',subtitle:'Knows nothing',__source:{fileName:_jsxFileName,lineNumber:362}}),_react.default.createElement(_.DrawerSection,{bottomDivider:true,__source:{fileName:_jsxFileName,lineNumber:363}},_react.default.createElement(_.DrawerItem,{text:'Inbox',icon:'mail',active:true,__source:{fileName:_jsxFileName,lineNumber:364}}),_react.default.createElement(_.DrawerItem,{text:'Outbox',icon:'send',__source:{fileName:_jsxFileName,lineNumber:365}}),_react.default.createElement(_.DrawerItem,{text:'Favorites',icon:'favorite',__source:{fileName:_jsxFileName,lineNumber:366}})))));});});exports.default=_default;var DrawerContent=function DrawerContent(){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:377}},_react.default.createElement(_.DrawerHeader,{title:'Jon Snow',subtitle:'Knows nothing',__source:{fileName:_jsxFileName,lineNumber:378}}),_react.default.createElement(_.DrawerSection,{bottomDivider:true,__source:{fileName:_jsxFileName,lineNumber:379}},_react.default.createElement(_.DrawerItem,{text:'Inbox',icon:'mail',active:true,__source:{fileName:_jsxFileName,lineNumber:380}}),_react.default.createElement(_.DrawerItem,{text:'Outbox',icon:'send',__source:{fileName:_jsxFileName,lineNumber:381}}),_react.default.createElement(_.DrawerItem,{text:'Favorites',icon:'favorite',__source:{fileName:_jsxFileName,lineNumber:382}})));};var PageContent=function PageContent(){return _react.default.createElement(_reactNative.View,{style:{marginTop:20,alignItems:'center',height:325},__source:{fileName:_jsxFileName,lineNumber:390}},_react.default.createElement(_.Heading,{type:4,style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:391}},"This is a page"),_react.default.createElement(_.BodyText,{text:"Click the menu button to open the drawer",__source:{fileName:_jsxFileName,lineNumber:394}}),_react.default.createElement(_.BodyText,{text:"Click outside the drawer to close it",__source:{fileName:_jsxFileName,lineNumber:395}}));};var actions=[_react.default.createElement(_.Fab,{key:1,backgroundColor:'#E91E63',icon:'archive',__source:{fileName:_jsxFileName,lineNumber:401}}),_react.default.createElement(_.Fab,{key:2,backgroundColor:'#F44336',icon:'delete',__source:{fileName:_jsxFileName,lineNumber:402}}),_react.default.createElement(_.Fab,{key:3,backgroundColor:'#009688',icon:'edit',__source:{fileName:_jsxFileName,lineNumber:403}}),_react.default.createElement(_.Fab,{key:4,backgroundColor:'black',icon:'attach-money',__source:{fileName:_jsxFileName,lineNumber:404}})];var styles=_reactNative.StyleSheet.create({container:{zIndex:1,position:'relative'},body:{width:pageWidth,height:400}});