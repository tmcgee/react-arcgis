import { loadModules } from 'esri-loader';
import * as React from 'react';

export interface GeometryProps {
  dataFlow: 'oneWay' | 'oneTime';
  scriptUri: string;
  graphic?: __esri.Graphic;
  geometryProperties?: {
    [propName: string]: any;
  };
  registerGeometry?: (intance: __esri.Geometry) => any;
  onLoad?: (instance: __esri.Geometry) => any;
  onFail?: (e: any) => any;
}

interface ComponentState {
  scriptUri: string;
  graphic?: __esri.Graphic;
  instance?: __esri.Geometry;
}

export default class Geometry extends React.Component<GeometryProps, ComponentState> {
    constructor(props: GeometryProps) {
        super(props);
        this.state = {
            graphic: this.props.graphic,
            instance: undefined,
            scriptUri: this.props.scriptUri,
        }
        this.createGeometry = this.createGeometry.bind(this);
    }

    public render() {
        return null;
    }

    public componentDidMount() {
      loadModules([
        this.props.scriptUri
      ]).then(([
        Geometry
      ]) => {
        this.createGeometry(Geometry);
        if (this.props.onLoad && this.state.instance) {
          this.props.onLoad(this.state.instance);
        }
      }).catch((e) => {
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }

    public componentWillReceiveProps(nextProps: GeometryProps) {
      if (this.props.dataFlow === 'oneWay' && this.state.instance && nextProps.geometryProperties) {
          Object.keys(nextProps.geometryProperties).forEach((key: string) => {
            if (this.state.instance && nextProps && nextProps.geometryProperties) {
              if (this.state.instance.get(key) != nextProps.geometryProperties[key]) {
                this.state.instance.set(key, nextProps.geometryProperties[key]);
              }
            }
        });
      }
    }

    private createGeometry(Geometry: __esri.GeometryConstructor) {
      const instance = new Geometry(this.props.geometryProperties);
      this.setState({ instance });
      if (this.props.registerGeometry) {
        this.props.registerGeometry(instance);
      }
    }
}
