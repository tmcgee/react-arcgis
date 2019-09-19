/// <reference types="arcgis-js-api" />
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
    constructor(props: LayerProps);
    render(): JSX.Element | null;
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: LayerProps): void;
    private renderLayer;
}
export {};
