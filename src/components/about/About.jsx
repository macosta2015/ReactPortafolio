import "./about.css";
import Award from "../../img/FloridaTechPanther.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Some highlits</h1>
        <p className="a-sub">
          The best way to learn something is by doing it.
        </p>
        <p className="a-desc">
          I currently work as a process engineer in Miami, Fl. After work I 3D print a lot and 
          code. The biggest world problems are able to be solved by engineering
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Alma Mater: </h4>
            <h4 className="a-award-title">FLORIDA INSTITUTE OF TECHNOLOGY</h4>
            <p className="a-award-desc">
              At FloridaTech I got my bacherlor's degree as a Mechanical Engineer 
              and a minor in CS. In the school I was able to get handson experience
              with engineer. 
              <br></br>
              <br></br>
              As we were located in the Space coast, we were able to see the rocket launches from campus. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
