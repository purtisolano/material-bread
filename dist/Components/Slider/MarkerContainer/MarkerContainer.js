var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _MarkerContainer=_interopRequireDefault(require("./MarkerContainer.styles"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Marker=_interopRequireDefault(require("../Marker/Marker"));var _jsxFileName="/Users/gerard/dev/reciclos/repos/material-bread/src/Components/Slider/MarkerContainer/MarkerContainer.js";var MarkerContainer=function(_Component){(0,_inherits2.default)(MarkerContainer,_Component);function MarkerContainer(){(0,_classCallCheck2.default)(this,MarkerContainer);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(MarkerContainer).apply(this,arguments));}(0,_createClass2.default)(MarkerContainer,[{key:"render",value:function render(){var _this$props=this.props,sliderLength=_this$props.sliderLength,position=_this$props.position,pressed=_this$props.pressed,disabled=_this$props.disabled,color=_this$props.color,panResponder=_this$props.panResponder,onPress=_this$props.onPress,markerSize=_this$props.markerSize,trackHeight=_this$props.trackHeight;return _react.default.createElement(_reactNative.View,{style:[_MarkerContainer.default.markerContainer,{top:-markerSize*2+trackHeight/2,right:sliderLength-position-markerSize*2,height:markerSize*4,width:markerSize*4}],__source:{fileName:_jsxFileName,lineNumber:36}},_react.default.createElement(_reactNative.View,(0,_extends2.default)({style:[_MarkerContainer.default.touch]},panResponder,{__source:{fileName:_jsxFileName,lineNumber:46}}),_react.default.createElement(_Marker.default,{pressed:pressed,disabled:disabled,color:color,onPress:onPress,markerSize:markerSize,__source:{fileName:_jsxFileName,lineNumber:47}})));}}]);return MarkerContainer;}(_react.Component);(0,_defineProperty2.default)(MarkerContainer,"propTypes",{pressed:_propTypes.default.bool,disabled:_propTypes.default.bool,color:_propTypes.default.string,theme:_propTypes.default.object,sliderLength:_propTypes.default.number,position:_propTypes.default.number,panResponder:_propTypes.default.object,onPress:_propTypes.default.func,markerSize:_propTypes.default.number,trackHeight:_propTypes.default.number});var _default=(0,_withTheme.default)(MarkerContainer);exports.default=_default;