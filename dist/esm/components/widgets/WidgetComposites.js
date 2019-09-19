var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import Widget from './WidgetBase';
export var Attribution = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Attribution", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var BasemapGallery = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/BasemapGallery", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var BasemapToggle = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/BasemapToggle", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onToggle: 'toggle'
    } }))); };
export var ColorSlider = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/ColorSlider", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onDataChange: 'data-change',
        onDataValueChange: 'data-value-change',
        onHandleValueChange: 'handle-value-change'
    } }))); };
export var Compass = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Compass", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var Expand = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Expand", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var Home = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Home", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var LayerList = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/LayerList", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onTriggerAction: 'trigger-action'
    } }))); };
export var Legend = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Legend", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var Locate = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Locate", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onLocate: 'locate',
        onLocateError: 'locate-error'
    } }))); };
export var NavigationToggle = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/NavigationToggle", widgetProperties: __assign({}, props.widgetProperties) }))); };
export var Popup = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Popup", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onTriggerAction: 'trigger-action'
    } }))); };
export var Print = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Print", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var ScaleBar = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/ScaleBar", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
export var Search = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Search", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onSearchClear: 'search-clear',
        onSearchComplete: 'search-complete',
        onSearchStart: 'search-start',
        onSelectResult: 'select-result',
        onSuggestComplete: 'suggest-complete',
        onSuggestStart: 'suggest-start'
    } }))); };
export var SizeSlider = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/SizeSlider", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onDataChange: 'data-change',
        onDataValueChange: 'data-value-change',
        onHandleValueChange: 'handle-value-change'
    } }))); };
export var Track = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Track", widgetProperties: __assign({}, props.widgetProperties), eventMap: {
        onTrack: 'track',
        onTrackError: 'track-error'
    } }))); };
export var Zoom = function (props) { return (React.createElement(Widget, __assign({}, props, { dataFlow: props.dataFlow === 'oneWay' ? 'oneWay' : 'oneTime', scriptUri: "esri/widgets/Zoom", widgetProperties: __assign({}, props.widgetProperties), eventMap: {} }))); };
//# sourceMappingURL=WidgetComposites.js.map