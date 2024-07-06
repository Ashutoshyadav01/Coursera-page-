import React from 'react'
import  {useState} from 'react'

const Content3 = () => {
    const [isHovered,setHovered]= useState(false);
  const style3={
    color:'#635191',
    fontWeight:'bold',
    textDecoration:isHovered?'underline':'none',
    cursor:isHovered?'pointer':'none',
  }
  
    return (
    <div className='cont-3'>
      <h1 className="wul3">Details to know</h1>
      <div className="Content-3">
        <div>
            <div><img src="\31ebcba3851b87d1d8609abf15d0ff7e.png" alt="" /></div>
            <div>Shareable certificate</div>
            <div>Add to your LinkedIn profile</div>
        </div>
        <div>
            <div><img src="/workspace_premium_FILL0_wght400_GRAD0_opsz24.png" alt="" /></div>
            <div>Industry certification</div>
            <div style={style3} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>Learn More</div>
        </div>
      </div>
    </div>
  )
}

export default Content3
