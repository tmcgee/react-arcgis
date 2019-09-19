import { loadModules } from 'esri-loader';
import * as React from 'react';

export interface LayerProps {
    children?: any;
    dataFlow: 'oneWay' | 'oneTime';
    addLocation: string[];
    scriptUri: string;
    map?: __esri.Map;
    view?: __esri.SceneView | __esri.MapView;
    layerProperties?: {
      [propName: string]: any;
    };
    onLoad?: (instance: __esri.Layer) => any;
    onFail?: (e: any) => any;
    onLayerviewCreate?: (e: any) => any;
    onLayerviewDestroy?: (e: any) => any;
    eventMap: {
      [propName: string]: string;
    };
    index?: number;
}

interface ComponentState {
    scriptUri: string;
    map?: __esri.Map;
    view?: __esri.View;
    instance?: __esri.Layer;
    status: string;
}

export default class Layer extends React.Component<LayerProps, ComponentState> {
    constructor(props: LayerProps) {
        super(props);
        this.state = {
            map: this.props.map,
            scriptUri: this.props.scriptUri,
            status: 'loading',
            view: this.props.view,
        };
        this.renderLayer = this.renderLayer.bind(this);
    }

    public render() {
      if (this.state.status === 'loaded') {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
          const childEl = child as React.ReactElement<any>
          return React.cloneElement(childEl, {
            layer: this.state.instance
          });
        });
        return (
          <div>
            {childrenWithProps}
          </div>
        );
      }
      return null;
    }

    public componentWillUnmount() {
      if (this.state.map && this.state.instance) {
        this.state.map.remove(this.state.instance);
      }
    }

    public componentDidMount() {
      loadModules([
        this.props.scriptUri
      ]).then(([
        Layer
      ]) => {
        this.renderLayer(Layer);
        this.setState({ status: 'loaded' });
        if (this.props.onLoad && this.state.instance) {
          this.props.onLoad(this.state.instance);
        }
      }).catch((e) => {
        this.setState({ status: 'failed' });
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }

    public componentWillReceiveProps(nextProps: LayerProps) {
      if (this.props.dataFlow === 'oneWay' && this.state.instance && nextProps.layerProperties) {
        Object.keys(nextProps.layerProperties).forEach((key) => {
          if (this.props.layerProperties && this.state.instance && nextProps && nextProps.layerProperties) {
            if (this.props.layerProperties[key] !== nextProps.layerProperties[key]) {
                this.state.instance.set(key, nextProps.layerProperties[key]);
            }
          }
        });
      }
    }

    private renderLayer(Layer: __esri.LayerConstructor) {
      const instance = new Layer(this.props.layerProperties);
      Object.keys(this.props.eventMap).forEach((key) => {
        if (this.props[key]) {
          instance.on(this.props.eventMap[key], this.props[key]);
        }
      });
      this.setState({
        instance
      });
      const parent = this.props.addLocation.reduce((p, c) => p[c], this.state) as any;
      parent.add(instance, this.props.index);
    }
};
