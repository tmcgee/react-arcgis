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
var ReactArcGIS = {
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
export var WebMap = ReactArcGIS.WebMap;
export var WebScene = ReactArcGIS.WebScene;
export var Map = ReactArcGIS.Map;
export var Scene = ReactArcGIS.Scene;
export var Geometry = ReactArcGIS.Geometry;
export var Graphic = ReactArcGIS.Graphic;
export var Layers = ReactArcGIS.Layers;
export var Popup = ReactArcGIS.Popup;
export var Symbols = ReactArcGIS.Symbols;
export var Widgets = ReactArcGIS.Widgets;
export var esriPromise = loadModules;
//# sourceMappingURL=index.js.map