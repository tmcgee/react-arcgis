/// <reference types="arcgis-js-api" />
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
    constructor(props: GeometryProps);
    render(): null;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: GeometryProps): void;
    private createGeometry;
}
export {};
