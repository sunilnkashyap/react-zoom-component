# react-zoom-component

[![npm version](http://img.shields.io/npm/v/react-zoom-component.svg)](https://npmjs.org/package/react-zoom-component)

## Project status

Still in early development, more features are planned and incoming. Should be in a working 
state right now but it's not tested in lots of different setups yet.

Demonstration of available features available [here](#).

## About

react-zoom-xomponent is inspired by JQuery libraries such as [jQuery Zoom](http://www.jacklmoore.com/zoom/) and
[elevateZoom-plus](http://igorlino.github.io/elevatezoom-plus/) but a pure React with typescript implementation of
similar concepts. This plugin works with both URLs to images and in-line images
([Data URI](https://en.wikipedia.org/wiki/Data_URI_scheme)).

## Available options

All settings except *img* are optional. If no *img* is provided it won't render.

Option | Default&#160;value | Description
:---:|:---:|---
Image | *none* | (Required) The smaller version of the image that will be shown when there's no interaction by the user.
FullImage | *none* | The full resolution version of the image to be used when zooming. If not supplied thumbImage will be used.
Magnification | 1 | The zoom factor to be used by default. 1 means we use the fullImage at its actual resolution. 
enableScrollZoom | false | Boolean that toggles if the mouse wheel should be captured when hovering over the image to adjust magnification.
Width | 'image width' | Width of thumb image if supplied. 
Height | 'image height' | Height of thumb image if supplied.
ImageAlt | 'Image' | Alt tag value of thumb image. Alt text will appear on hover of image.
ResultContainer | {} | Configuration of result container.
ImageClass| '' | ClassName for thumb image.
LensClass | '' | ClassName for lens. lens is the square box appears on mouse hovering.
ResultClass | '' | ClassName for result container.
### ResultContainer
Key | Description
:---:|---
Top | Top position of result div in percent. eg. if Top=0 then result container will apper on the top of the thumb image.
Left | Left position of result div in percent. eg. if Left=0 then result container will apper on the left most of the thumb image.
Width | Width of the result container.
Height | Height of the result container.

### Magnification 
Magnification is the zoom ratio of the image. 


## Installation

To install this library, run:

```bash
$ npm install react-zoom-component --save
```

## Using this library

From your React `Component`:

```typescript
import  React  from  'react';

// Import the library
import  ZoomComponent  from  'react-zoom-component';

// Import sample image
import  sampleImage  from  './assets/SampleJPGImage_500kbmb.jpg';


export  default  class  Demo  extends  React.Component<Props, State> {

	constructor(props:  Props){
		super(props);
	}
	
	render(){
		return(
			<>
				<div  className="container">
					<h1>React Zoom Component</h1>
					<h3>Basic Initialization</h3>
					<ZoomComponent  Width={500}  Height={500}  Image={sampleImage}  />
				</div>
			</>
		)
	}
}
```


## License

MIT © Sunil Kashyap
