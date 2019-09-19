/// <reference types="arcgis-js-api" />
import * as React from 'react';
export interface PopupProps {
    map?: __esri.Map;
    view?: __esri.SceneView | __esri.MapView;
    popupProperties: PopupProperties;
    onTriggerAction?: (e: any) => any;
}
interface PopupProperties extends __esri.PopupOpenOptions {
    location: __esri.Geometry | number[] | any;
}
interface ComponentState {
    map?: __esri.Map;
    mounted: boolean;
    view?: __esri.View;
}
export default class Popup extends React.Component<PopupProps, ComponentState> {
    content: HTMLElement;
    constructor(props: PopupProps);
    render(): JSX.Element | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: PopupProps): void;
}
export {};
