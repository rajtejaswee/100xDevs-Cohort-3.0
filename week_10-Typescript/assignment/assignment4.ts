// Write a function that takes another function as an input and returns it after one second

function delayedCall(anotherfn: () => void) {
    setTimeout(anotherfn, 3000)
} 

function log() {
    console.log("Hello There")
}

delayedCall(log)
    