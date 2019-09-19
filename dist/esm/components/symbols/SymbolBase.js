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
var Symbol = /** @class */ (function (_super) {
    __extends(Symbol, _super);
    function Symbol(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            graphic: _this.props.graphic,
            instance: undefined,
            scriptUri: _this.props.scriptUri,
        };
        _this.createSymbol = _this.createSymbol.bind(_this);
        return _this;
    }
    Symbol.prototype.render = function () {
        return null;
    };
    Symbol.prototype.componentDidMount = function () {
        var _this = this;
        loadModules([
            this.props.scriptUri
        ]).then(function (_a) {
            var Symbol = _a[0];
            _this.createSymbol(Symbol);
            if (_this.props.onLoad && _this.state.instance) {
                _this.props.onLoad(_this.state.instance);
            }
        }).catch(function (e) {
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    Symbol.prototype.componentWillUnmount = function () {
        if (this.state.instance) {
            if (this.props.registerSymbol) {
                this.props.registerSymbol();
            }
            this.state.instance.destroy();
        }
    };
    Symbol.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var changed = false;
        if (this.props.dataFlow === 'oneWay' && this.state.instance) {
            if (nextProps.symbolProperties) {
                Object.keys(nextProps.symbolProperties).forEach(function (key) {
                    if (_this.props.symbolProperties && nextProps.symbolProperties && _this.state.instance) {
                        if (_this.props.symbolProperties[key] !== nextProps.symbolProperties[key]) {
                            _this.state.instance.set(key, nextProps.symbolProperties[key]);
                            changed = true;
                        }
                    }
                });
            }
        }
        if (changed) {
            if (this.props.registerSymbol && this.state.instance) {
                this.props.registerSymbol(this.state.instance);
            }
        }
    };
    Symbol.prototype.createSymbol = function (Symbol) {
        var instance = new Symbol(this.props.symbolProperties);
        this.setState({ instance: instance });
        if (this.props.registerSymbol) {
            this.props.registerSymbol(instance);
        }
    };
    return Symbol;
}(React.Component));
export default Symbol;
;
//# sourceMappingURL=SymbolBase.js.map