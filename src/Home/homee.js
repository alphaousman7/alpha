import React from 'react'
import ReactPlayer from 'react-player'//importion de reactplayer pour integrer les videos
export default function Homefunc() {
  const msstermi = () => {
    alert('video terminé')
  }
  
  const exte='mesvideos/duo.mp4'

  return (
    <div className='flex '>
       <h1>La page homee </h1>
      <div  className='my-3  '>
 
          </div>
          <div  className='my-3 border-y-2 border-spacing-2'>
         <ReactPlayer url={exte}
         controls
         playing
         width="400px"
         height="300"
         onEnded={msstermi}
         /></div>
  
    </div>
  )
}

