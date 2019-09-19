/// <reference types="arcgis-js-api" />
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
    constructor(props: GraphicProps);
    render(): JSX.Element;
    removeGraphic(): void;
    renderGraphic(stateUpdate?: {}): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: GraphicProps): void;
    registerSymbol(symbol: __esri.Symbol): void;
    registerGeometry(geometry: __esri.Geometry): void;
}
export {};
