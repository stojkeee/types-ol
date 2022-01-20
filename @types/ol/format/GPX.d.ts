import Feature from '../Feature';
import { Coordinate } from '../coordinate';
import Geometry from '../geom/Geometry';
import GeometryLayout from '../geom/GeometryLayout';
import LineString from '../geom/LineString';
import { ReadOptions, WriteOptions } from './Feature';
import XMLFeature from './XMLFeature';

export interface LayoutOptions {
    hasZ?: boolean;
    hasM?: boolean;
}
export interface Options {
    readExtensions?: (p0: Feature<Geometry>, p1: Node) => void;
}
export default class GPX extends XMLFeature {
    constructor(opt_options?: Options);
    readFeatureFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>;
    readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
    /**
     * Encode an array of features in the GPX format as an XML node.
     * LineString geometries are output as routes (<rte>), and MultiLineString
     * as tracks (<trk>).
     */
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
}
