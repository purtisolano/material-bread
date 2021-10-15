var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _MenuItem=_interopRequireDefault(require("./MenuItem.styles"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple.js"));var _Hoverable=_interopRequireDefault(require("../../../Utils/Hoverable/Hoverable.js"));var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/Menu/MenuItem/MenuItem.js";var MenuItem=function(_Component){(0,_inherits2.default)(MenuItem,_Component);function MenuItem(props){var _this;(0,_classCallCheck2.default)(this,MenuItem);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(MenuItem).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{stateBackgroundColor:null});return _this;}(0,_createClass2.default)(MenuItem,[{key:"handleHover",value:function handleHover(toggle){var disabled=this.props.disabled;var implementedColor=toggle?'rgba(0,0,0,.12)':null;if(disabled)implementedColor=null;this.setState({stateBackgroundColor:implementedColor});}},{key:"_renderIcon",value:function _renderIcon(){var icon=this.props.icon;return _react.default.cloneElement(icon,{size:24,color:'rgba(0, 0, 0, 0.54)'});}},{key:"_renderKeyboardCommand",value:function _renderKeyboardCommand(){var keyboardCommand=this.props.keyboardCommand;return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:51}},_react.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:52}}),keyboardCommand);}},{key:"_renderText",value:function _renderText(){var _this$props=this.props,disabled=_this$props.disabled,textStyle=_this$props.textStyle,text=_this$props.text,icon=_this$props.icon;return _react.default.createElement(_reactNative.Text,{ellipsizeMode:_reactNative.Platform.OS==='ios'?'clip':'tail',numberOfLines:1,style:[_MenuItem.default.title,{color:disabled?'rgba(0,0,0,.50)':'rgba(0,0,0,.87)',marginLeft:icon?20:0},textStyle],__source:{fileName:_jsxFileName,lineNumber:61}},text);}},{key:"render",value:function render(){var _this2=this;var _this$props2=this.props,children=_this$props2.children,disabled=_this$props2.disabled,onPress=_this$props2.onPress,style=_this$props2.style,icon=_this$props2.icon,keyboardCommand=_this$props2.keyboardCommand;var stateBackgroundColor=this.state.stateBackgroundColor;return _react.default.createElement(_Hoverable.default,{onHoverIn:function onHoverIn(){return _this2.handleHover(true);},onHoverOut:function onHoverOut(){return _this2.handleHover(false);},__source:{fileName:_jsxFileName,lineNumber:89}},_react.default.createElement(_Ripple.default,{disabled:disabled,onPress:onPress,style:[_MenuItem.default.container,{backgroundColor:stateBackgroundColor},style],__source:{fileName:_jsxFileName,lineNumber:92}},icon?this._renderIcon():null,children?children:this._renderText(),keyboardCommand?this._renderKeyboardCommand():null));}}]);return MenuItem;}(_react.Component);(0,_defineProperty2.default)(MenuItem,"propTypes",{children:_propTypes.default.node,disabled:_propTypes.default.bool,onPress:_propTypes.default.func,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),textStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),icon:_propTypes.default.node,keyboardCommand:_propTypes.default.node,text:_propTypes.default.string});(0,_defineProperty2.default)(MenuItem,"defaultProps",{disabled:false,disabledTextColor:'#BDBDBD',underlayColor:'#E0E0E0'});var _default=(0,_withTheme.default)(MenuItem);exports.default=_default;