import React from 'react'
import Styles from './Video.module.scss'

const Video = () => {
    return (
        <>
            <iframe
                frameBorder="0" 
                className={Styles.video}
                src="https://www.youtube.com/embed/BgfcToAjfdc" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    );
}

export default Video;
