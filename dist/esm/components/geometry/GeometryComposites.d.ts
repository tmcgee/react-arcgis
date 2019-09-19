/// <reference types="arcgis-js-api" />
/// <reference types="react" />
import { CircleProps, ExtentProps, MultipointProps, PointProps, PolygonProps, PolylineProps, ScreenPointProps, SpatialReferenceProps } from './GeometryInterfaces';
export declare const Circle: (props: CircleProps) => JSX.Element;
export declare const Extent: (props: ExtentProps) => JSX.Element;
export declare const Multipoint: (props: MultipointProps) => JSX.Element;
export declare const Point: (props: PointProps) => JSX.Element;
export declare const Polygon: (props: PolygonProps) => JSX.Element;
export declare const Polyline: (props: PolylineProps) => JSX.Element;
export declare const ScreenPoint: (props: ScreenPointProps) => JSX.Element;
export declare const SpatialReference: (props: SpatialReferenceProps) => JSX.Element;
