import { esriPromise } from 'esri-promise';
import * as React from 'react';

export interface GraphicProps {
    dataFlow?: 'oneWay' | 'oneTime';
    children?: any;
    map?: __esri.Map;
    view?: __esri.SceneView | __esri.MapView;
    layer?: __esri.GraphicsLayer | __esri.FeatureLayer;
    graphicProperties?: __esri.GraphicProperties;
    onLoad?: (instance: __esri.Graphic) => any;
    onFail?: (e: any) => any;
}

interface ComponentState {
    map?: __esri.Map;
    view?: __esri.View;
    layer?: __esri.GraphicsLayer | __esri.FeatureLayer;
    constructor: __esri.GraphicConstructor;
    instance: __esri.Graphic;
    geometry: __esri.Geometry;
    symbol: __esri.Symbol;
}

export default class Graphic extends React.Component<GraphicProps, ComponentState> {
    constructor(props) {
        super(props);
        this.state = {
            constructor: null,
            geometry: null,
            instance: null,
            layer: this.props.layer,
            map: this.props.map,
            symbol: null,
            view: this.props.view,
        };
        this.renderGraphic = this.renderGraphic.bind(this);
        this.registerSymbol = this.registerSymbol.bind(this);
        this.registerGeometry = this.registerGeometry.bind(this);
    }

    public render() {
      const childrenWithProps = React.Children.map(this.props.children, (child) => {
          const childEl = child as React.ReactElement<any>
          if (childEl) {
              return React.cloneElement(childEl,  {
                  registerGeometry: this.registerGeometry,
                  registerSymbol: this.registerSymbol,
              });
          } else {
              return null
          }
      });
      return (
        <div>
          {childrenWithProps}
        </div>
      );
    }

    public removeGraphic() {
      if (this.state.layer && (this.state.layer as __esri.GraphicsLayer).graphics !== undefined) {
        (this.state.layer as __esri.GraphicsLayer).graphics.remove(this.state.instance);
      } else if (this.state.layer && (this.state.layer as __esri.FeatureLayer).source !== undefined) {
        (this.state.layer as __esri.FeatureLayer).source.remove(this.state.instance);
      } else if (this.state.view) {
        this.state.view.graphics.remove(this.state.instance);
      }
    }
    public renderGraphic() {
      if (this.state.constructor && this.state.geometry) {
        if (this.state.instance) {
          this.removeGraphic()
        }
        const graphic = new this.state.constructor({
          geometry: this.state.geometry,
          symbol: this.state.symbol,
          ...this.props.graphicProperties
        });
        this.setState({
          instance: graphic
        });
        if (this.state.layer && (this.state.layer as __esri.GraphicsLayer).graphics !== undefined) {
          (this.state.layer as __esri.GraphicsLayer).graphics.add(graphic);
        } else if (this.state.layer && (this.state.layer as __esri.FeatureLayer).source !== undefined) {
          (this.state.layer as __esri.FeatureLayer).source.add(graphic);
        } else if (this.state.view) {
          this.state.view.graphics.add(graphic);
        }
        if (this.props.onLoad) {
          this.props.onLoad(graphic);
        }
      }
    }

    public componentDidMount() {
      esriPromise([
        'esri/Graphic'
      ]).then(([
        Graphic
      ]) => {
        this.setState({ constructor: Graphic });
        this.renderGraphic();
      }).catch((e) => {
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }

    public componentWillUnmount() {
      this.removeGraphic()
    }

    public componentWillReceiveProps(nextProps: GraphicProps) {
        if (nextProps.graphicProperties && this.props.dataFlow === 'oneWay') {
          Object.keys(nextProps.graphicProperties).forEach((key) => {
              if (this.props.graphicProperties[key] !== nextProps.graphicProperties[key]) {
                  this.state.instance.set(key, nextProps.graphicProperties[key]);
              }
          });
        }
    }

    public registerSymbol(symbol: __esri.Symbol) {
      this.setState({ symbol });
      if (this.state.instance) {
        this.removeGraphic()
      }
      // this.renderGraphic()
    }

    public registerGeometry(geometry: __esri.Geometry) {
      if (!this.state.instance) {
        this.setState({ geometry });
        this.renderGraphic();
      } else {
        this.state.instance.set('symbol', geometry)
      }
    }
}
