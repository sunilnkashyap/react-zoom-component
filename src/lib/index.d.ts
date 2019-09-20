import React from "react";
export interface Props {
    img: string;
    zoomImgSrc?: string;
    alt?: any;
    imgWidth?: number;
    imgHeight?: number;
    zoomLevel?: number;
    zoomPosition?: {
        top: number;
        left: number;
    };
    outputWidgth?: number;
    outputHeight?: number;
}
declare const ZoomComponent: React.FC<Props>;
export default ZoomComponent;
