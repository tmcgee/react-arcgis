import * as MapViews from './components/MapComposites';
import * as WebViews from './components/WebComposites';
import * as GeometryImport from './components/geometry/GeometryComposites';
import GraphicImport from './components/graphics/Graphic';
import * as LayersImport from './components/layers/LayerComposites';
import PopupImport from './components/popup/Popup';
import * as SymbolsImport from './components/symbols/SymbolComposites';
import * as WidgetsImport from './components/widgets/WidgetComposites';
import { loadModules, ILoadScriptOptions } from 'esri-loader';
export { loadModules } from 'esri-loader';

const ReactArcGIS = {
    Map: MapViews.Map,
    Scene: MapViews.Scene,
    WebMap: WebViews.WebMap,
    WebScene: WebViews.WebScene,
    Geometry: GeometryImport,
    Graphic: GraphicImport,
    Layers: LayersImport,
    Popup: PopupImport,
    Symbols: SymbolsImport,
    Widgets: WidgetsImport,
    esriPromise: loadModules
};

export default ReactArcGIS;

export const WebMap = ReactArcGIS.WebMap;
export const WebScene = ReactArcGIS.WebScene;
export const Map = ReactArcGIS.Map;
export const Scene = ReactArcGIS.Scene;
export const Geometry = ReactArcGIS.Geometry;
export const Graphic = ReactArcGIS.Graphic;
export const Layers = ReactArcGIS.Layers;
export const Popup = ReactArcGIS.Popup;
export const Symbols = ReactArcGIS.Symbols;
export const Widgets = ReactArcGIS.Widgets;
export const esriPromise = loadModules;
