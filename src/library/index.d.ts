import React from "react";
export interface Props {
    Image: string;
    FullImage?: string;
    ImageAlt?: any;
    Width?: number;
    Height?: number;
    Magnification?: number;
    ResultContainer?: {
        Top?: number;
        Left?: number;
        Width?: number;
        Height?: number;
    };
}
declare const ZoomComponent: React.FC<Props>;
export default ZoomComponent;
