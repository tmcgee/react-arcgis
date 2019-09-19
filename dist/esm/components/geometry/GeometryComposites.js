var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import Geometry from './GeometryBase';
export var Circle = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Circle", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var Extent = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Extent", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var Multipoint = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Multipoint", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var Point = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Point", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var Polygon = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Polygon", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var Polyline = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/Polyline", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var ScreenPoint = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/ScreenPoint", geometryProperties: __assign({}, props.geometryProperties) }))); };
export var SpatialReference = function (props) { return (React.createElement(Geometry, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/geometry/SpatialReference", geometryProperties: __assign({}, props.geometryProperties) }))); };
//# sourceMappingURL=GeometryComposites.js.map