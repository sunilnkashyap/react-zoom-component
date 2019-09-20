
import React from 'react';

import ZoomComponent from '../library';

import sampleImage from './assets/SampleJPGImage_500kbmb.jpg';

export default class Demo extends React.Component<{}, {}> {
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <>
            <div className="container">
                <h1>React Zoom Component</h1>
                <h3>Basic Initialization</h3>
                {/* <img src={sampleImage} /> */}
                <ZoomComponent Width={500} Height={500} Image={sampleImage} />
            </div>               
            </>
        )
    }
}