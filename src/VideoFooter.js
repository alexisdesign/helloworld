import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MessageIcon from "@mui/icons-material/Message";

function VideoFooter({ channel, description, song }) {

  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
            
          <div className='videoFooter_ticker'>
            <MusicNoteIcon className='videoFooter_icon'/>
        
            <p>{song}</p>
          </div>

        </div>
     
        <img 
        className='videoFooter_record' 
        src='https://static.thenounproject.com/png/934821-200.png'
        />

    
        
    </div>
  )
}

export default VideoFooter