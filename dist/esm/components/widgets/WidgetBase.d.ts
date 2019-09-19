/// <reference types="arcgis-js-api" />
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
    constructor(props: WidgetProps);
    render(): null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private renderWidget;
    componentWillReceiveProps(nextProps: WidgetProps): void;
}
export {};
