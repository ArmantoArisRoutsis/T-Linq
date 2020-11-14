import styled from "styled-components";
import styles from '../../styles/Video.module.css'

export default function MainVideoLayout() {

    return (
        <>  
            <head>
                
            </head>
            
            <main className={styles.main}>
                <div className={styles.box1}>
                    <video
                        id="my-video"
                        className={styles.videojs}
                        controls
                        preload="auto"
                        width="640"
                        height="264"
                        poster="MY_VIDEO_POSTER.jpg"
                        data-setup="{}">
                        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                        <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
                        <p className="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                        </p>
                    </video>
                </div>
                    <div className={styles.box2}>
                        <h1>Chat-Box</h1>
                    </div>
                    <div className={styles.box3}>
                        <div class={styles.viewer}>
                            <h1>Viewer 1</h1>
                            <span className={styles.buttons}>
                                <button type="button" className="btn btn-outline-dark">
                                    <span class="iconify" data-icon="carbon:video-off-filled" data-inline="false"></span>
                                </button>
                                <button type="button" className="btn btn-outline-dark"> 
                                    <span class="iconify" data-icon="si-glyph:sound-mute" data-inline="false"></span>
                                </button>
                            </span>
                        </div>
                        <div class={styles.viewer}>
                            <h1>Viewer 2</h1>
                            <span className={styles.buttons}>
                                <button type="button" className="btn btn-outline-dark">
                                    <span class="iconify" data-icon="carbon:video-off-filled" data-inline="false"></span>
                                </button>
                                <button type="button" className="btn btn-outline-dark"> 
                                    <span class="iconify" data-icon="si-glyph:sound-mute" data-inline="false"></span>
                                </button>
                            </span>
                        </div>
                        <div class={styles.viewer}>
                            <h1>Viewer 3</h1>
                            <span className={styles.buttons}>
                                <button type="button" className="btn btn-outline-dark">
                                    <span class="iconify" data-icon="carbon:video-off-filled" data-inline="false"></span>
                                </button>
                                <button type="button" className="btn btn-outline-dark"> 
                                    <span class="iconify" data-icon="si-glyph:sound-mute" data-inline="false"></span>
                                </button>
                            </span>
                        </div>
                        <div class={styles.viewer}>
                            <h1>Viewer 4</h1>
                            <span className={styles.buttons}>
                                <button type="button" className="btn btn-outline-dark">
                                    <span class="iconify" data-icon="carbon:video-off-filled" data-inline="false"></span>
                                </button>
                                <button type="button" className="btn btn-outline-dark"> 
                                    <span class="iconify" data-icon="si-glyph:sound-mute" data-inline="false"></span>
                                </button>
                            </span>
                        </div>
                    </div>
            </main>
            <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
            <script src="https://vjs.zencdn.net/7.8.4/video.js"></script>

        </>
    )
}
