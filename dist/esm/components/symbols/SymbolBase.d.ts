/// <reference types="arcgis-js-api" />
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
    constructor(props: SymbolProps);
    render(): null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: SymbolProps): void;
    private createSymbol;
}
export {};
