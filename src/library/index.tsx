import React from "react";
import { CSSProperties, useEffect } from "react";

export interface Props {
    Image: string,
    FullImage?: string,
    ImageAlt?: any,
    Width?: number,
    Height?: number,
    Magnification?: number,
    ResultContainer?: {
        Top?: number,
        Left?: number,
        Width?: number,
        Height?: number
    }    
}

const ZoomComponent: React.FC<Props> = (props) => {
    const zoomLens = React.createRef<HTMLDivElement>();
    const imgRef = React.createRef<HTMLImageElement>();
    const resultRef = React.createRef<HTMLDivElement>();
    
    const resultDivStyle: CSSProperties = {
        border: '1px solid #d4d4d4',
        width: props.ResultContainer && props.ResultContainer.Width ? props.ResultContainer.Width +'px' : '400px',
        height: props.ResultContainer && props.ResultContainer.Height ? props.ResultContainer.Height +'px' : '400px'
    };

    useEffect(() => {
      if(props.ResultContainer){
        resultRef.current!.style.position = 'absolute';
        resultRef.current!.style.top = props.ResultContainer.Top +'%';
        resultRef.current!.style.left = props.ResultContainer.Left +'%';
      }
    }, [resultRef]);
    
    useEffect( () => {
      zoomLens.current!.style.display = 'none';
    },[zoomLens])

    const zoomLensStyle: CSSProperties = {
        position: 'absolute',
        border: '1px solid #d4d4d4',
        width: props.Magnification ? props.Magnification * 20 +'px' : '40px',
        height: props.Magnification ? props.Magnification * 20 +'px' : '40px',
    };

  const getCursorPos = (e: any) => { 
    let rect: ClientRect, x = 0, y = 0;
    /*get the x and y positions of the image:*/
    rect = imgRef.current ? imgRef.current.getBoundingClientRect() : { left: 0, right: 0, width: 0, height: 0, bottom: 0, top: 0 };
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - (rect.left ? rect.left : 0);
    y = e.pageY - (rect.top ? rect.top : 0);
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  const moveCursor = (e: any) => {
    zoomLens.current!.style.display = 'block';
    let img = imgRef.current;
    let cx = resultRef.current!.offsetWidth / zoomLens.current!.offsetWidth;
    let cy = resultRef.current!.offsetHeight / zoomLens.current!.offsetHeight;
    resultRef.current!.style.backgroundImage = "url('" + (props.FullImage ? props.FullImage : img!.src) + "')";
    resultRef.current!.style.backgroundSize = (img!.width * cx) + "px " + (img!.height * cy) + "px";
    let pos, x, y;
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    const lens = zoomLens.current;
    x = pos.x - (lens!.offsetWidth / 2);
    y = pos.y - (lens!.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img!.width - lens!.offsetWidth) {x = img!.width - lens!.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img!.height - lens!.offsetHeight) {y = img!.height - lens!.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens!.style.left = x + "px";
    lens!.style.top = y + "px";
    /*display what the lens "sees":*/
    resultRef.current!.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  return (
    <div style={{position: 'relative'}}>
      <div
        ref={zoomLens}
        onMouseMove={moveCursor}
        style={zoomLensStyle}
      ></div>
      <img
        ref={imgRef}
        onMouseMove={moveCursor}
        alt={props.ImageAlt || 'Image'}
        src={props.Image}
        width={props.Width}
        height={ props.Height}
      />
      <div ref={resultRef} style={resultDivStyle}></div>
    </div>
  );
};


export default ZoomComponent;
