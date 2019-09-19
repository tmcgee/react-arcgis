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
import * as React from 'react';
;
;
;
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            map: _this.props.map,
            mounted: false,
            view: _this.props.view,
        };
        return _this;
    }
    Popup.prototype.render = function () {
        var _this = this;
        if (this.props.children) {
            return (React.createElement("div", null,
                React.createElement("div", { ref: function (ref) { if (ref)
                        _this.content = ref; } }, this.props.children)));
        }
        return null;
    };
    Popup.prototype.componentDidMount = function () {
        if (this.props.popupProperties) {
            var popupProps = __assign({ content: this.content }, this.props.popupProperties);
            if (this.state.view) {
                this.state.view.popup.open(popupProps);
                if (this.props.onTriggerAction) {
                    this.state.view.popup.on('trigger-action', this.props.onTriggerAction);
                }
            }
            this.setState({
                mounted: true
            });
        }
        else {
            console.warn('React-arcgis attempted to display a popup without any content. Please include popupProperties in order to see the popup.');
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.state.mounted) {
            if (this.state.view) {
                this.state.view.popup.close();
            }
            this.setState({
                mounted: false
            });
        }
    };
    Popup.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.popupProperties && this.state.mounted && nextProps.popupProperties !== this.props.popupProperties) {
            if (this.state.view) {
                this.state.view.popup.close();
                this.state.view.popup.open(nextProps.popupProperties);
            }
        }
    };
    return Popup;
}(React.Component));
export default Popup;
//# sourceMappingURL=Popup.js.map