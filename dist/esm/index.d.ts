/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import * as MapViews from './components/MapComposites';
import * as WebViews from './components/WebComposites';
import * as GeometryImport from './components/geometry/GeometryComposites';
import GraphicImport from './components/graphics/Graphic';
import * as LayersImport from './components/layers/LayerComposites';
import PopupImport from './components/popup/Popup';
import * as SymbolsImport from './components/symbols/SymbolComposites';
import * as WidgetsImport from './components/widgets/WidgetComposites';
import { loadModules } from 'esri-loader';
export { loadModules } from 'esri-loader';
declare const ReactArcGIS: {
    Map: (props: MapViews.MapProps) => JSX.Element;
    Scene: (props: MapViews.SceneProps) => JSX.Element;
    WebMap: (props: WebViews.MapProps) => JSX.Element;
    WebScene: (props: WebViews.SceneProps) => JSX.Element;
    Geometry: typeof GeometryImport;
    Graphic: typeof GraphicImport;
    Layers: typeof LayersImport;
    Popup: typeof PopupImport;
    Symbols: typeof SymbolsImport;
    Widgets: typeof WidgetsImport;
    esriPromise: typeof loadModules;
};
export default ReactArcGIS;
export declare const WebMap: (props: WebViews.MapProps) => JSX.Element;
export declare const WebScene: (props: WebViews.SceneProps) => JSX.Element;
export declare const Map: (props: MapViews.MapProps) => JSX.Element;
export declare const Scene: (props: MapViews.SceneProps) => JSX.Element;
export declare const Geometry: typeof GeometryImport;
export declare const Graphic: typeof GraphicImport;
export declare const Layers: typeof LayersImport;
export declare const Popup: typeof PopupImport;
export declare const Symbols: typeof SymbolsImport;
export declare const Widgets: typeof WidgetsImport;
export declare const esriPromise: typeof loadModules;
