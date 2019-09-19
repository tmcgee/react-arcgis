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
var Graphic = /** @class */ (function (_super) {
    __extends(Graphic, _super);
    function Graphic(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            constructor: undefined,
            layer: _this.props.layer,
            map: _this.props.map,
            view: _this.props.view,
        };
        _this.renderGraphic = _this.renderGraphic.bind(_this);
        _this.registerSymbol = _this.registerSymbol.bind(_this);
        _this.registerGeometry = _this.registerGeometry.bind(_this);
        return _this;
    }
    Graphic.prototype.render = function () {
        var _this = this;
        var childrenWithProps = React.Children.map(this.props.children, function (child) {
            var childEl = child;
            if (childEl) {
                return React.cloneElement(childEl, {
                    registerGeometry: _this.registerGeometry,
                    registerSymbol: _this.registerSymbol,
                });
            }
            else {
                return null;
            }
        });
        return (React.createElement("div", null, childrenWithProps));
    };
    Graphic.prototype.removeGraphic = function () {
        if (this.state.instance) {
            if (this.state.layer && this.state.layer.graphics !== undefined) {
                this.state.layer.graphics.remove(this.state.instance);
            }
            else if (this.state.layer && this.state.layer.source !== undefined) {
                this.state.layer.applyEdits({
                    deleteFeatures: [this.state.instance]
                }).catch(function (error) {
                    console.error('[ Graphic.removeGraphic applyEdits ] ERROR: ', error);
                });
            }
            else if (this.state.view) {
                this.state.view.graphics.remove(this.state.instance);
            }
            this.state.instance.destroy();
        }
        this.setState({
            instance: undefined
        });
    };
    Graphic.prototype.renderGraphic = function (stateUpdate) {
        if (stateUpdate === void 0) { stateUpdate = {}; }
        var newState = __assign({}, this.state, stateUpdate);
        this.setState(newState);
        if (newState.constructor && newState.geometry) {
            if (newState.instance && this.state.layer && this.state.layer.applyEdits === undefined) {
                this.removeGraphic();
            }
            var graphic = new newState.constructor(__assign({ geometry: newState.geometry, symbol: newState.symbol, layer: this.state.layer }, this.props.graphicProperties));
            this.setState({
                instance: graphic
            });
            if (this.state.layer && this.state.layer.graphics !== undefined) {
                this.state.layer.graphics.add(graphic, this.props.index);
            }
            else if (this.state.layer && this.state.layer.applyEdits !== undefined) {
                this.state.layer.applyEdits({
                    addFeatures: (newState.instance) ? [] : [graphic],
                    updateFeatures: (newState.instance) ? [graphic] : [],
                }).catch(function (error) {
                    console.error('[ Graphic.renderGraphic applyEdits ] ERROR: ', error);
                });
            }
            else if (this.state.view) {
                this.state.view.graphics.add(graphic, this.props.index);
            }
            if (this.props.onLoad) {
                this.props.onLoad(graphic);
            }
        }
    };
    Graphic.prototype.componentDidMount = function () {
        var _this = this;
        loadModules([
            'esri/Graphic'
        ]).then(function (_a) {
            var Graphic = _a[0];
            _this.renderGraphic({ constructor: Graphic });
        }).catch(function (e) {
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    Graphic.prototype.componentWillUnmount = function () {
        this.removeGraphic();
    };
    Graphic.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.graphicProperties && this.props.dataFlow === 'oneWay') {
            var updatedProp_1 = false;
            Object.keys(nextProps.graphicProperties).forEach(function (key) {
                if (_this.props.graphicProperties && nextProps.graphicProperties) {
                    if (_this.props.graphicProperties[key] !== nextProps.graphicProperties[key]) {
                        if (key === 'index') {
                            _this.renderGraphic();
                        }
                        else {
                            if (_this.state.instance) {
                                _this.state.instance.set(key, nextProps.graphicProperties[key]);
                            }
                            updatedProp_1 = true;
                        }
                    }
                }
            });
            if (updatedProp_1 && this.state.layer && this.state.layer.applyEdits !== undefined) {
                this.state.layer.applyEdits({
                    updateFeatures: (this.state.instance) ? [this.state.instance] : []
                }).catch(function (error) {
                    console.error('[ Graphic.componentWillReceiveProps applyEdits ] ERROR: ', error);
                });
            }
        }
    };
    Graphic.prototype.registerSymbol = function (symbol) {
        this.renderGraphic({ symbol: symbol });
    };
    Graphic.prototype.registerGeometry = function (geometry) {
        this.renderGraphic({ geometry: geometry });
    };
    return Graphic;
}(React.Component));
export default Graphic;
//# sourceMappingURL=Graphic.js.map