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
var Geometry = /** @class */ (function (_super) {
    __extends(Geometry, _super);
    function Geometry(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            graphic: _this.props.graphic,
            instance: undefined,
            scriptUri: _this.props.scriptUri,
        };
        _this.createGeometry = _this.createGeometry.bind(_this);
        return _this;
    }
    Geometry.prototype.render = function () {
        return null;
    };
    Geometry.prototype.componentDidMount = function () {
        var _this = this;
        loadModules([
            this.props.scriptUri
        ]).then(function (_a) {
            var Geometry = _a[0];
            _this.createGeometry(Geometry);
            if (_this.props.onLoad && _this.state.instance) {
                _this.props.onLoad(_this.state.instance);
            }
        }).catch(function (e) {
            if (_this.props.onFail) {
                _this.props.onFail(e);
            }
        });
    };
    Geometry.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.dataFlow === 'oneWay' && this.state.instance && nextProps.geometryProperties) {
            Object.keys(nextProps.geometryProperties).forEach(function (key) {
                if (_this.state.instance && nextProps && nextProps.geometryProperties) {
                    if (_this.state.instance.get(key) != nextProps.geometryProperties[key]) {
                        _this.state.instance.set(key, nextProps.geometryProperties[key]);
                    }
                }
            });
        }
    };
    Geometry.prototype.createGeometry = function (Geometry) {
        var instance = new Geometry(this.props.geometryProperties);
        this.setState({ instance: instance });
        if (this.props.registerGeometry) {
            this.props.registerGeometry(instance);
        }
    };
    return Geometry;
}(React.Component));
export default Geometry;
//# sourceMappingURL=GeometryBase.js.map