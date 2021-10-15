var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _TextFieldLabel=_interopRequireDefault(require("../TextFieldLabel/TextFieldLabel"));var _TextFieldHelperText=_interopRequireDefault(require("../TextFieldHelperText/TextFieldHelperText"));var _TextFieldOutline=_interopRequireWildcard(require("./TextFieldOutline.styles"));var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/TextField/TextFieldOutline/TextFieldOutline.js";var TextFieldOutlined=function(_Component){(0,_inherits2.default)(TextFieldOutlined,_Component);function TextFieldOutlined(props){var _this;(0,_classCallCheck2.default)(this,TextFieldOutlined);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextFieldOutlined).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{height:56});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_updateTextInputHeight",function(e){if(!_this.props.multiline)return;var nativeHeight=e.nativeEvent.contentSize.height;_this.setState({height:nativeHeight});});return _this;}(0,_createClass2.default)(TextFieldOutlined,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props=this.props,value=_this$props.value,multiline=_this$props.multiline;if(value&&value.length<1&&prevProps.value.length>0&&multiline){this.setState({height:56});}}},{key:"_renderLeadingIcon",value:function _renderLeadingIcon(){var leadingIcon=this.props.leadingIcon;var isFunc=typeof leadingIcon==='function';return _react.default.createElement(_reactNative.View,{style:{position:'absolute',left:8,top:16},__source:{fileName:_jsxFileName,lineNumber:58}},isFunc?leadingIcon():leadingIcon);}},{key:"_renderTrailingIcon",value:function _renderTrailingIcon(){var trailingIcon=this.props.trailingIcon;var isFunc=typeof trailingIcon==='function';return _react.default.createElement(_reactNative.View,{style:{position:'absolute',right:12,top:16},__source:{fileName:_jsxFileName,lineNumber:69}},isFunc?trailingIcon():trailingIcon);}},{key:"_renderPrefix",value:function _renderPrefix(){var prefix=this.props.prefix;return _react.default.createElement(_reactNative.View,{style:{position:'absolute',left:16,top:20},__source:{fileName:_jsxFileName,lineNumber:78}},_react.default.cloneElement(prefix,{color:prefix.props.color?prefix.props.color:'rgba(0, 0, 0, .57)',fontSize:prefix.props.fontSize?prefix.props.fontSize:16}));}},{key:"_renderSuffix",value:function _renderSuffix(){var suffix=this.props.suffix;return _react.default.createElement(_reactNative.View,{style:{position:'absolute',right:16,top:28},__source:{fileName:_jsxFileName,lineNumber:91}},_react.default.cloneElement(suffix,{color:suffix.props.color?suffix.props.color:'rgba(0, 0, 0, .57)',fontSize:suffix.props.fontSize?suffix.props.fontSize:12}));}},{key:"render",value:function render(){var _this2=this;var _this$props2=this.props,style=_this$props2.style,containerStyle=_this$props2.containerStyle,error=_this$props2.error,label=_this$props2.label,labelColor=_this$props2.labelColor,labelStyle=_this$props2.labelStyle,handleFocus=_this$props2.handleFocus,handleBlur=_this$props2.handleBlur,focused=_this$props2.focused,helperText=_this$props2.helperText,helperVisible=_this$props2.helperVisible,helperTextStyle=_this$props2.helperTextStyle,leadingIcon=_this$props2.leadingIcon,trailingIcon=_this$props2.trailingIcon,dense=_this$props2.dense,suffix=_this$props2.suffix,prefix=_this$props2.prefix,testID=_this$props2.testID,focusedLabelColor=_this$props2.focusedLabelColor,rest=(0,_objectWithoutProperties2.default)(_this$props2,["style","containerStyle","error","label","labelColor","labelStyle","handleFocus","handleBlur","focused","helperText","helperVisible","helperTextStyle","leadingIcon","trailingIcon","dense","suffix","prefix","testID","focusedLabelColor"]);var borderColor=focused?'rgba(33, 150, 243, 1)':'rgb(192, 192, 192)';if(error)borderColor='red';var height=rest.multiline||rest.numberOfLines>1?this.state.height:56;if(dense){height=40;}var paddingLeft=leadingIcon?44:_TextFieldOutline.OUTLINED_LEFT_PADDING;if(prefix)paddingLeft=32;var platformStyles=_reactNative.Platform.OS=='web'?{outlineWidth:0}:{};return _react.default.createElement(_reactNative.View,{style:[_TextFieldOutline.default.containerStyle,{marginBottom:helperText&&helperVisible?20:0,marginTop:8},containerStyle],__source:{fileName:_jsxFileName,lineNumber:149}},label?_react.default.createElement(_TextFieldLabel.default,{label:label,focused:focused,error:error,value:rest.value,type:'outlined',labelColor:labelColor,style:labelStyle,leadingIcon:!!leadingIcon,dense:dense,prefix:prefix,focusedLabelColor:focusedLabelColor,__source:{fileName:_jsxFileName,lineNumber:159}}):null,leadingIcon?this._renderLeadingIcon():null,prefix?this._renderPrefix():null,_react.default.createElement(_reactNative.TextInput,(0,_extends2.default)({style:[_TextFieldOutline.default.textField,_TextFieldOutline.default.outlinedInput,platformStyles,{borderWidth:focused?2:1,borderColor:borderColor,minHeight:dense?40:56,height:height,paddingBottom:rest.multiline?8:0,paddingTop:rest.multiline?20:0,paddingLeft:paddingLeft,paddingRight:trailingIcon||suffix?36:0},style],testID:testID,onContentSizeChange:function onContentSizeChange(e){return _this2._updateTextInputHeight(e);}},rest,{onFocus:handleFocus,onBlur:handleBlur,__source:{fileName:_jsxFileName,lineNumber:175}})),trailingIcon?this._renderTrailingIcon():null,suffix?this._renderSuffix():null,_react.default.createElement(_TextFieldHelperText.default,{error:error,visible:helperVisible||error,style:helperTextStyle,__source:{fileName:_jsxFileName,lineNumber:202}},helperText));}}]);return TextFieldOutlined;}(_react.Component);(0,_defineProperty2.default)(TextFieldOutlined,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),error:_propTypes.default.bool,label:_propTypes.default.string,labelColor:_propTypes.default.string,labelStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),handleFocus:_propTypes.default.func,handleBlur:_propTypes.default.func,focused:_propTypes.default.bool,helperText:_propTypes.default.string,helperVisible:_propTypes.default.bool,helperTextStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),leadingIcon:_propTypes.default.oneOfType([_propTypes.default.func,_propTypes.default.node]),trailingIcon:_propTypes.default.oneOfType([_propTypes.default.func,_propTypes.default.node]),dense:_propTypes.default.bool,value:_propTypes.default.string,multiline:_propTypes.default.bool,suffix:_propTypes.default.node,prefix:_propTypes.default.node,testID:_propTypes.default.string,focusedLabelColor:_propTypes.default.string});(0,_defineProperty2.default)(TextFieldOutlined,"defaultProps",{helperVisible:true});var _default=(0,_withTheme.default)(TextFieldOutlined);exports.default=_default;