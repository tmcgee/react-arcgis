import { loadModules } from 'esri-loader';
import * as React from 'react';

export interface WidgetProps {
  dataFlow: 'oneWay' | 'oneTime';
  scriptUri: string;
  map?: __esri.Map;
  view?: __esri.SceneView | __esri.MapView;
  position?: string;
  widgetProperties?: {
    [propName: string]: any;
  };
  onLoad?: (instance: __esri.Widget) => any;
  onFail?: (e: any) => any;
  [propName: string]: any;
}

interface ComponentState {
  scriptUri: string;
  map?: __esri.Map;
  view?: __esri.View;
  instance?: __esri.Widget;
}

export default class Widget extends React.Component<WidgetProps, ComponentState> {
    constructor(props: WidgetProps) {
        super(props);
        this.state = {
            instance: undefined,
            map: this.props.map,
            scriptUri: this.props.scriptUri,
            view: this.props.view,
        }
        this.renderWidget = this.renderWidget.bind(this);
    }

    public render() {
        return null;
    }

    componentDidMount() {
      loadModules([
        this.props.scriptUri
      ]).then(([
        Widget
      ]) => {
        this.renderWidget(Widget);
        if (this.props.onLoad && this.state.instance) {
          this.props.onLoad(this.state.instance);
        }
      }).catch((e) => {
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }

    componentWillUnmount() {
      if (this.state.view && this.state.instance) {
        this.state.view.ui.remove(this.state.instance);
      }
    }

    private renderWidget(Widget: __esri.WidgetConstructor) {
      const widgetProperties = { view: this.state.view, ...this.props.widgetProperties };
      const position = this.props.position ? this.props.position : 'manual';
      const instance = new Widget(widgetProperties as __esri.WidgetProperties);
      Object.keys(this.props.eventMap).forEach((key) => {
        if (this.props[key]) {
          instance.on(this.props.eventMap[key], this.props[key]);
        }
      });
      this.setState({ instance });
      if (this.state.view) {
        this.state.view.ui.add(instance, position);
      }
    }

    public componentWillReceiveProps(nextProps: WidgetProps) {
      if (nextProps.widgetProperties) {
        Object.keys(nextProps.widgetProperties).forEach((key: string) => {
          if (this.state.instance && nextProps.widgetProperties) {
            if (this.state.instance.get(key) !== nextProps.widgetProperties[key]) {
              this.state.instance.set(key, nextProps.widgetProperties[key]);
            }
          }
        });
      }
    }
};
