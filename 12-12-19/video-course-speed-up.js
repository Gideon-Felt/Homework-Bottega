class videoManipulator {
    constructor(queryString) {
        this.videoElement = document.querySelector(queryString)
    }


    slowPlaySpeed() { 
        this.videoElement.playbackRate = 0.5
    } 
    
    normalPlaySpeed() { 
        this.videoElement.playbackRate = 1
    } 
    
    fastPlaySpeed() { 
        this.videoElement.playbackRate = 2
    }
}

// ".vjs-tech" for bottegas html5 video's