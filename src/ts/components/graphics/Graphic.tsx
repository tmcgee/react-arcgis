import { loadModules } from 'esri-loader';
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
    index?: number;
}

interface ComponentState {
    map?: __esri.Map;
    view?: __esri.View;
    layer?: __esri.GraphicsLayer | __esri.FeatureLayer;
    constructor?: __esri.GraphicConstructor;
    instance?: __esri.Graphic;
    geometry?: __esri.Geometry;
    symbol?: __esri.Symbol;
}

export default class Graphic extends React.Component<GraphicProps, ComponentState> {
    constructor(props: GraphicProps) {
        super(props);
        this.state = {
            constructor: undefined,
            layer: this.props.layer,
            map: this.props.map,
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
      if (this.state.instance) {
        if (this.state.layer && (this.state.layer as __esri.GraphicsLayer).graphics !== undefined) {
          (this.state.layer as __esri.GraphicsLayer).graphics.remove(this.state.instance);
        } else if (this.state.layer && (this.state.layer as __esri.FeatureLayer).source !== undefined) {
          (this.state.layer as __esri.FeatureLayer).applyEdits({
            deleteFeatures: [this.state.instance]
          }).catch((error) => {
              console.error('[ Graphic.removeGraphic applyEdits ] ERROR: ', error);
          })
        } else if (this.state.view) {
          this.state.view.graphics.remove(this.state.instance);
        }
        this.state.instance.destroy()
      }
      this.setState({
        instance: undefined
      })
    }
    public renderGraphic(stateUpdate = {}) {
      const newState = {
        ...this.state,
        ...stateUpdate
      }
      this.setState(newState);

      if (newState.constructor && newState.geometry) {
        if (newState.instance && this.state.layer && (this.state.layer as __esri.FeatureLayer).applyEdits === undefined) {
          this.removeGraphic()
        }

        const graphic = new newState.constructor({
          geometry: newState.geometry,
          symbol: newState.symbol,
          layer: this.state.layer,
          ...this.props.graphicProperties
        })
        this.setState({
          instance: graphic
        });
        if (this.state.layer && (this.state.layer as __esri.GraphicsLayer).graphics !== undefined) {
          (this.state.layer as __esri.GraphicsLayer).graphics.add(graphic, this.props.index);
        } else if (this.state.layer && (this.state.layer as __esri.FeatureLayer).applyEdits !== undefined) {
          (this.state.layer as __esri.FeatureLayer).applyEdits({
            addFeatures: (newState.instance) ? [] : [graphic],
            updateFeatures: (newState.instance) ? [graphic] : [],
          }).catch((error: any) => {
            console.error('[ Graphic.renderGraphic applyEdits ] ERROR: ', error);
          });
        } else if (this.state.view) {
          this.state.view.graphics.add(graphic, this.props.index);
        }
        if (this.props.onLoad) {
          this.props.onLoad(graphic);
        }
      }
    }

    public componentDidMount() {
      loadModules([
        'esri/Graphic'
      ]).then(([
        Graphic
      ]) => {
        this.renderGraphic({ constructor: Graphic });
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
          let updatedProp = false;
          Object.keys(nextProps.graphicProperties).forEach((key) => {
            if (this.props.graphicProperties && nextProps.graphicProperties) {
              if (this.props.graphicProperties[key] !== nextProps.graphicProperties[key]) {
                  if (key === 'index') {
                    this.renderGraphic()
                  } else {
                    if (this.state.instance) {
                      this.state.instance.set(key, nextProps.graphicProperties[key]);
                    }
                    updatedProp = true;
                  }
              }
            }
          });

          if (updatedProp && this.state.layer && (this.state.layer as __esri.FeatureLayer).applyEdits !== undefined) {
            (this.state.layer as __esri.FeatureLayer).applyEdits({
              updateFeatures: (this.state.instance) ? [this.state.instance] : []
            }).catch((error: any) => {
              console.error('[ Graphic.componentWillReceiveProps applyEdits ] ERROR: ', error);
            });
          }
        }
    }

    public registerSymbol(symbol: __esri.Symbol) {
      this.renderGraphic({ symbol })
    }

    public registerGeometry(geometry: __esri.Geometry) {
      this.renderGraphic({ geometry })
    }
}
