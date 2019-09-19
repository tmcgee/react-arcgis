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
import { loadModules } from 'esri-loader';
import * as React from 'react';
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            map: _this.props.map,
            scriptUri: _this.props.scriptUri,
            status: 'loading',
            view: _this.props.view,
        };
        _this.renderLayer = _this.renderLayer.bind(_this);
        return _this;
    }
    Layer.prototype.render = function () {
        var _this = this;
        if (this.state.status === 'loaded') {
            var childrenWithProps = React.Children.map(this.props.children, function (child) {
                var childEl = child;
                return React.cloneElement(childEl, {
                    layer: _this.state.instance
                });
            });
            return (React.createElement("div", null, childrenWithProps));
        }
        return null;
    };
    Layer.prototype.componentWillUnmount = function () {
        if (this.state.map && this.state.instance) {
            this.state.map.remove(this.state.instance);
        }
    };
    Layer.prototype.componentDidMount = function () {
        var _this = this;
        loadModules([
            this.props.scriptUri
        ]).then(function (_a) {
            var Layer = _a[0];
            _this.renderLayer(Layer);
            _this.setState({ status: 'loaded' });
            if (_this.props.onLoad && _this.state.instance) {
                _this.props.onLoad(_this.state.instance);
            }
        }).catch(function (e) {
            _this.setState({ status: 'failed' });
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    Layer.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.dataFlow === 'oneWay' && this.state.instance && nextProps.layerProperties) {
            Object.keys(nextProps.layerProperties).forEach(function (key) {
                if (_this.props.layerProperties && _this.state.instance && nextProps && nextProps.layerProperties) {
                    if (_this.props.layerProperties[key] !== nextProps.layerProperties[key]) {
                        _this.state.instance.set(key, nextProps.layerProperties[key]);
                    }
                }
            });
        }
    };
    Layer.prototype.renderLayer = function (Layer) {
        var _this = this;
        var instance = new Layer(this.props.layerProperties);
        Object.keys(this.props.eventMap).forEach(function (key) {
            if (_this.props[key]) {
                instance.on(_this.props.eventMap[key], _this.props[key]);
            }
        });
        this.setState({
            instance: instance
        });
        var parent = this.props.addLocation.reduce(function (p, c) { return p[c]; }, this.state);
        parent.add(instance, this.props.index);
    };
    return Layer;
}(React.Component));
export default Layer;
;
//# sourceMappingURL=LayerBase.js.map