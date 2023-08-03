import React, { useState } from 'react'

function Level2_3Stopwatch() {
  // i give up doing it without useEffect
  const stopWatchDefaultDisplay = "00:00:00"
  
  const [stopWatchActivated, setStopWatchActivated] = useState(false)
  const [stopWatchRunning, setStopWatchRunning] = useState(false)
  const [stopWatchTime, setStopWatchTime] = useState(stopWatchDefaultDisplay)
  
  const stopWatchStartHandler = () => {
    setStopWatchActivated(true)
    setStopWatchRunning(true)

    setInterval(stopWatch, 10);
  }
  const stopWatchStopHandler = () => {
    clearInterval(stopWatch)

    setStopWatchRunning(false)
  }

  const stopWatchReset = () => {
    setStopWatchActivated(false)
    setStopWatchRunning(false)
    setStopWatchTime(stopWatchDefaultDisplay)
  }

  const [time, setTime] = useState(0)
  
  const stopWatch = () => {

    const milliseconds = (time % 100).toString().padStart(2, "0")
    const seconds = Math.floor(((time % 6000) / 100)).toString().padStart(2, "0")
    const minutes = Math.floor(((time % 360000) / 100)).toString().padStart(2, "0")

    setStopWatchTime(`${minutes}:${seconds}:${milliseconds}`)
    setTime(prevTime => prevTime + 1)
  }

  return (
    <article>
      <p>{stopWatchTime}</p>
      {
      stopWatchRunning 
      ? <button onClick={stopWatchStopHandler}>Stop</button> 
      : <button onClick={stopWatchStartHandler}>Start</button>
      }
      {stopWatchActivated && <button onClick={stopWatchReset}>Reset</button>}
    </article>
  )
}

export default Level2_3Stopwatch
