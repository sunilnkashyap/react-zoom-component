import React, { useEffect } from "react";
const ZoomComponent = (props) => {
    const zoomLens = React.createRef();
    const imgRef = React.createRef();
    const resultRef = React.createRef();
    const resultDivStyle = {
        border: '1px solid #d4d4d4',
        width: props.outputWidgth ? props.outputWidgth + 'px' : '400px',
        height: props.outputHeight ? props.outputHeight + 'px' : '400px'
    };
    useEffect(() => {
        if (props.zoomPosition) {
            resultRef.current.style.position = 'absolute';
            resultRef.current.style.top = props.zoomPosition.top + '%';
            resultRef.current.style.left = props.zoomPosition.left + '%';
        }
    }, [resultRef]);
    const zoomLensStyle = {
        position: 'absolute',
        border: '1px solid #d4d4d4',
        width: props.zoomLevel ? props.zoomLevel * 20 + 'px' : '40px',
        height: props.zoomLevel ? props.zoomLevel * 20 + 'px' : '40px',
    };
    const getCursorPos = (e) => {
        let rect, x = 0, y = 0;
        /*get the x and y positions of the image:*/
        rect = imgRef.current ? imgRef.current.getBoundingClientRect() : { left: 0, right: 0, width: 0, height: 0, bottom: 0, top: 0 };
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - (rect.left ? rect.left : 0);
        y = e.pageY - (rect.top ? rect.top : 0);
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    };
    const moveCursor = (e) => {
        let img = imgRef.current;
        let cx = resultRef.current.offsetWidth / zoomLens.current.offsetWidth;
        let cy = resultRef.current.offsetHeight / zoomLens.current.offsetHeight;
        resultRef.current.style.backgroundImage = "url('" + (props.zoomImgSrc ? props.zoomImgSrc : img.src) + "')";
        resultRef.current.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        let pos, x, y;
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        const lens = zoomLens.current;
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        resultRef.current.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    };
    return (React.createElement("div", { style: { position: 'relative' } },
        React.createElement("div", { ref: zoomLens, onMouseMove: moveCursor, style: zoomLensStyle }),
        React.createElement("img", { ref: imgRef, onMouseMove: moveCursor, alt: props.alt || 'Sample Image', src: props.img, width: props.imgWidth || 500, height: props.imgHeight || 500 }),
        React.createElement("div", { ref: resultRef, style: resultDivStyle })));
};
export default ZoomComponent;
