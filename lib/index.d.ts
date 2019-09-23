import React from "react";
export interface Props {
    Image: string;
    FullImage?: string;
    ImageAlt?: any;
    Width?: number;
    Height?: number;
    Magnification?: number;
    ImageClass?: string;
    LensClass?: string;
    ResultClass?: string;
    ResultContainer?: {
        Top?: number;
        Right?: number;
        Bottom?: number;
        Left?: number;
        Width?: number;
        Height?: number;
    };
}
declare const ZoomComponent: React.FC<Props>;
export default ZoomComponent;
