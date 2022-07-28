import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Please contact to collaborate</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 (210) 302 2291
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              macosta2015@my.fit.edu
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              8081 NW 107TH CT MIAMI 33178
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Ready to work on the next big thing!</b> 
            <br>
            </br>
            Get in touch. Always available for
            freelancing if the right project comes along. me.
            
            
            {/* <a href="https://github.com/macosta2015" class="w3-xxxlarge"><i class="fa fa-home"></i> Home</a> */}

            <br></br>

            <a href="https://github.com/macosta2015" class="w3-xxxlarge"><i class="fa fa-github"></i> Github</a>
            <br></br>
            <a href="https://twitter.com/MarioAc57592312" class="w3-xxxlarge"><i class="fa fa-twitter"></i> Twitter</a>
            <br></br>
            <a href="https://www.linkedin.com/in/mario-acosta-b4337512a/" class="w3-xxxlarge"><i class="fa fa-linkedin"></i> Linkedin</a>
            <br></br>
            <a href="https://www.youtube.com/channel/UCizQh6fUOAZJ6O_OQ7K9LqQ" class="w3-xxxlarge"><i class="fa fa-youtube"></i> YouTube</a>
  

            <br></br>
          </p>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
