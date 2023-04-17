import React from 'react'
import "./Stylesheet/BlazeScreenshot.css"

const BlazeScreenshot = () => {
  return (
    <section class="screenshot" id="sshots">
  <p>Some Snaps Of <span class="snaps" style={{color: "#3379d4"}}>Blaze</span></p>
    <div class="boxDesign">
      <div class="box">
        <img src={"images/Screenshots/home.jpg"}/>
      </div>
      <div class="box">
        <img src={"images/Screenshots/Settings.jpg"}/>
      </div>
      <div class="box">
        <img src={"images/Screenshots/about.jpg"}/>
      </div>
      <div class="box">
        <img src={"images/Screenshots/recent.jpg"}/>
      </div>
    </div>
    <p class="blazeScreenshot">Get More Of Blaze Screenshots <a href="https://t.me/projectblazeupdates/98" class="sslink"><b>Here</b></a></p>
</section>
  )
}

export default BlazeScreenshot
