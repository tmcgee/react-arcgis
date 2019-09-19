import { loadModules } from 'esri-loader';
import * as React from 'react';

export interface SymbolProps {
    dataFlow: 'oneWay' | 'oneTime';
    scriptUri: string;
    graphic?: __esri.Graphic;
    symbolProperties?: {
      [propName: string]: any;
    };
    registerSymbol?: (intance?: __esri.Symbol) => any;
    onLoad?: (instance: __esri.Symbol) => any;
    onFail?: (e: any) => any;
}

interface ComponentState {
    scriptUri: string;
    graphic?: __esri.Graphic;
    instance?: __esri.Symbol;
}

export default class Symbol extends React.Component<SymbolProps, ComponentState> {
  constructor(props: SymbolProps) {
      super(props);
      this.state = {
          graphic: this.props.graphic,
          instance: undefined,
          scriptUri: this.props.scriptUri,
      }
      this.createSymbol = this.createSymbol.bind(this);
  }

  public render() {
      return null;
  }

  public componentDidMount() {
    loadModules([
      this.props.scriptUri
    ]).then(([
      Symbol
    ]) => {
      this.createSymbol(Symbol);
      if (this.props.onLoad && this.state.instance) {
        this.props.onLoad(this.state.instance);
      }
    }).catch((e) => {
      if (this.props.onFail) {
        this.props.onFail(e);
      }
    });
  }
  public componentWillUnmount() {
    if (this.state.instance) {
      if (this.props.registerSymbol) {
        this.props.registerSymbol();
      }
      this.state.instance.destroy();
    }
  }

  public componentWillReceiveProps(nextProps: SymbolProps) {
      let changed = false
      if (this.props.dataFlow === 'oneWay' && this.state.instance) {
        if (nextProps.symbolProperties) {
          Object.keys(nextProps.symbolProperties).forEach((key: string) => {
            if (this.props.symbolProperties && nextProps.symbolProperties && this.state.instance) {
              if (this.props.symbolProperties[key] !== nextProps.symbolProperties[key]) {
                this.state.instance.set(key, nextProps.symbolProperties[key]);
                changed = true
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
  }

  private createSymbol(Symbol: __esri.SymbolConstructor) {
    const instance = new Symbol(this.props.symbolProperties);
    this.setState({ instance });
    if (this.props.registerSymbol) {
        this.props.registerSymbol(instance);
    }
  }
};
