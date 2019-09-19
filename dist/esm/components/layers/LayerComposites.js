var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import Layer from './LayerBase';
export var CSVLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/CSVLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var ElevationLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/ElevationLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map', 'ground', 'layers'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var FeatureLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/FeatureLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var GeoRSSLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/GeoRSSLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var GraphicsLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/GraphicsLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var GroupLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/GroupLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var ImageryLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/ImageryLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var IntegratedMeshLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/IntegratedMeshLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var MapImageLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/MapImageLayer", layerProperties: __assign({}, props.layerProperties), addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var OpenStreetMapLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/OpenStreetMapLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var PointCloudLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/PointCloudLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var SceneLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/SceneLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var StreamLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/StreamLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var TileLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/TileLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var VectorTileLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/VectorTileLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
export var WebTileLayer = function (props) { return (React.createElement(Layer, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/layers/WebTileLayer", addLocation: ['map'], eventMap: {
        onLayerviewCreate: 'layerview-create',
        onLayerviewDestroy: 'layerview-destroy'
    } }))); };
//# sourceMappingURL=LayerComposites.js.map