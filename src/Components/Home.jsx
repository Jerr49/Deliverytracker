import React from 'react'
import "../Styles/Home.css"
import BgL from "../Images/headerbg.png"

const Home = () => {
  return (
    <div>
        <img src={BgL} alt="" width={"100%"} height={"140px"}/>
        <div className='track'>
            <h2>Track</h2>
        </div>
        <div className='track_link'><p><a href="/#">ROYAL EXPRESS DELIVERY</a> <span> {'>'} Track</span></p></div>
        
        <div className='form_bg'>
            <form action="">
               <h1>Enter the consignment No.</h1>
               <div className="track_pro">
                <input type="text" placeholder='Enter Tracking Number' required/>
                <button>TRACK RESULT</button>
               <p>Ex: 12345</p>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Home