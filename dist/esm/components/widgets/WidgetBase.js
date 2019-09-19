var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { loadModules } from 'esri-loader';
import * as React from 'react';
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            instance: undefined,
            map: _this.props.map,
            scriptUri: _this.props.scriptUri,
            view: _this.props.view,
        };
        _this.renderWidget = _this.renderWidget.bind(_this);
        return _this;
    }
    Widget.prototype.render = function () {
        return null;
    };
    Widget.prototype.componentDidMount = function () {
        var _this = this;
        loadModules([
            this.props.scriptUri
        ]).then(function (_a) {
            var Widget = _a[0];
            _this.renderWidget(Widget);
            if (_this.props.onLoad && _this.state.instance) {
                _this.props.onLoad(_this.state.instance);
            }
        }).catch(function (e) {
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    Widget.prototype.componentWillUnmount = function () {
        if (this.state.view && this.state.instance) {
            this.state.view.ui.remove(this.state.instance);
        }
    };
    Widget.prototype.renderWidget = function (Widget) {
        var _this = this;
        var widgetProperties = __assign({ view: this.state.view }, this.props.widgetProperties);
        var position = this.props.position ? this.props.position : 'manual';
        var instance = new Widget(widgetProperties);
        Object.keys(this.props.eventMap).forEach(function (key) {
            if (_this.props[key]) {
                instance.on(_this.props.eventMap[key], _this.props[key]);
            }
        });
        this.setState({ instance: instance });
        if (this.state.view) {
            this.state.view.ui.add(instance, position);
        }
    };
    Widget.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.widgetProperties) {
            Object.keys(nextProps.widgetProperties).forEach(function (key) {
                if (_this.state.instance && nextProps.widgetProperties) {
                    if (_this.state.instance.get(key) !== nextProps.widgetProperties[key]) {
                        _this.state.instance.set(key, nextProps.widgetProperties[key]);
                    }
                }
            });
        }
    };
    return Widget;
}(React.Component));
export default Widget;
;
//# sourceMappingURL=WidgetBase.js.map