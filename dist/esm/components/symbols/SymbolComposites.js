var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import Symbol from './SymbolBase';
export var Font = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/Font", symbolProperties: __assign({}, props.symbolProperties) }))); };
export var PictureFillSymbol = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/PictureFillSymbol", symbolProperties: __assign({}, props.symbolProperties) }))); };
export var PictureMarkerSymbol = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/PictureMarkerSymbol", symbolProperties: __assign({}, props.symbolProperties) }))); };
export var SimpleFillSymbol = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/SimpleFillSymbol", symbolProperties: __assign({}, props.symbolProperties) }))); };
export var SimpleLineSymbol = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/SimpleLineSymbol", symbolProperties: __assign({}, props.symbolProperties) }))); };
export var SimpleMarkerSymbol = function (props) { return (React.createElement(Symbol, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/symbols/SimpleMarkerSymbol", symbolProperties: __assign({}, props.symbolProperties) }))); };
//# sourceMappingURL=SymbolComposites.js.map