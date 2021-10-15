var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../Ripple/Ripple.js"));var _ProgressCircle=_interopRequireDefault(require("../Progress/ProgressCircle/ProgressCircle.js"));var _Switch=_interopRequireDefault(require("./Switch.styles"));var _color=_interopRequireDefault(require("color"));var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/Switch/Switch.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Switch=function(_Component){(0,_inherits2.default)(Switch,_Component);function Switch(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Switch);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Switch)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{thumbTranslateX:new _reactNative.Animated.Value(0)});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getDimensions",function(width){var height=width*(8/9);return{height:height,trackDimensions:{width:width,height:height*(7/16),borderRadius:height*(5/16)},thumbRippleDimensions:{width:width*(8/9),top:height*-(9/32),left:width*-(2/9)},thumbDimensions:{width:width*(5/9),height:height*(5/8)}};});return _this;}(0,_createClass2.default)(Switch,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,checked=_this$props.checked,width=_this$props.width;var thumbTranslateX=this.state.thumbTranslateX;if(checked){var xValue=width/2;thumbTranslateX.setValue(_reactNative.I18nManager.isRTL?-xValue:xValue);}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var checked=this.props.checked;if(checked!=prevProps.checked){this.handleSwitch();}}},{key:"_renderLabel",value:function _renderLabel(){var _this$props2=this.props,label=_this$props2.label,labelPos=_this$props2.labelPos,_onPress=_this$props2.onPress;return _react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return _onPress();},__source:{fileName:_jsxFileName,lineNumber:59}},_react.default.createElement(_reactNative.View,{style:{marginLeft:labelPos=='right'?8:0,marginRight:labelPos=='left'?8:0},__source:{fileName:_jsxFileName,lineNumber:60}},label));}},{key:"handleSwitch",value:function handleSwitch(){var thumbTranslateX=this.state.thumbTranslateX;var _this$props3=this.props,checked=_this$props3.checked,width=_this$props3.width;var xValue=width/2;if(!checked){xValue=0;}_reactNative.Animated.parallel([_reactNative.Animated.timing(thumbTranslateX,{toValue:_reactNative.I18nManager.isRTL?-xValue:xValue,duration:300,useNativeDriver:true})]).start();}},{key:"render",value:function render(){var thumbTranslateX=this.state.thumbTranslateX;var _this$props4=this.props,label=_this$props4.label,labelPos=_this$props4.labelPos,style=_this$props4.style,trackStyle=_this$props4.trackStyle,thumbStyle=_this$props4.thumbStyle,theme=_this$props4.theme,color=_this$props4.color,checked=_this$props4.checked,onPress=_this$props4.onPress,loading=_this$props4.loading,testID=_this$props4.testID,width=_this$props4.width,rest=(0,_objectWithoutProperties2.default)(_this$props4,["label","labelPos","style","trackStyle","thumbStyle","theme","color","checked","onPress","loading","testID","width"]);var trackColor=color?(0,_color.default)(color).alpha(0.54):(0,_color.default)(theme.primary.main).alpha(0.54);var thumbColor=color?color:theme.primary.main;var _this$getDimensions=this.getDimensions(width),height=_this$getDimensions.height,trackDimensions=_this$getDimensions.trackDimensions,thumbRippleDimensions=_this$getDimensions.thumbRippleDimensions,thumbDimensions=_this$getDimensions.thumbDimensions;return _react.default.createElement(_reactNative.View,(0,_extends2.default)({style:[_Switch.default.container,style],testID:testID},rest,{__source:{fileName:_jsxFileName,lineNumber:142}}),labelPos=='left'&&label?this._renderLabel():null,_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:[_Switch.default.track,_objectSpread({backgroundColor:checked&&!loading?trackColor:'rgba(0, 0, 0, 0.3)'},trackDimensions),trackStyle],onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:144}},_react.default.createElement(_Ripple.default,{rippleContainerBorderRadius:100,style:[_Switch.default.thumbRipple,_objectSpread({transform:[{translateX:thumbTranslateX}],height:height},thumbRippleDimensions)],onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:156}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:[_Switch.default.thumb,_objectSpread({backgroundColor:checked&&!loading?thumbColor:'white'},thumbDimensions),thumbStyle],__source:{fileName:_jsxFileName,lineNumber:167}},loading?_react.default.createElement(_ProgressCircle.default,{color:thumbColor,size:14,widthOfBorder:6,__source:{fileName:_jsxFileName,lineNumber:178}}):null))),labelPos=='right'&&label?this._renderLabel():null);}}]);return Switch;}(_react.Component);(0,_defineProperty2.default)(Switch,"propTypes",{checked:_propTypes.default.bool,onPress:_propTypes.default.func,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),trackStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),thumbStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),label:_propTypes.default.node,labelPos:_propTypes.default.string,theme:_propTypes.default.object,color:_propTypes.default.string,loading:_propTypes.default.bool,testID:_propTypes.default.string,width:_propTypes.default.number});(0,_defineProperty2.default)(Switch,"defaultProps",{labelPos:'right',width:36});var _default=(0,_withTheme.default)(Switch);exports.default=_default;