class videoManipulator {
    
    static slowPlaySpeed(queryString) { 
        const videoElement = document.querySelector(queryString)
        videoElement.playbackRate = 0.5
    } 
    
    static normalPlaySpeed(queryString) { 
        const videoElement = document.querySelector(queryString)
        videoElement.playbackRate = 1
    } 
    
    static fastPlaySpeed(queryString) { 
        const videoElement = document.querySelector(queryString)
        videoElement.playbackRate = 2
    }
}
