import React,{useState,useEffect} from "react";
import './style.css';
import axios from "axios";
import {Row, Col, Container, Card,Form, Button} from "react-bootstrap" 

const HospitalLandingPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
        const data = Object.values(response.data); 

        setReviews(data[0]);

     
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log(reviews)
  


  return (
 
    <div className="hospitalLandingPage">
      <div className="groupParent">
        <div className="rectangleParent">
          <div className="rectangle" />
          <div className="rectangle1" />
        </div>
        <div className="podpayment2">©2020 PodPayment - 2020</div>
        <img className="frameChild" alt="" src="/group-26.svg" />
        <img className="group26Copy" alt="" src="/group-26-copy.svg" />
        <img
          className="group26Copy2"
          alt=""
          src="/group-26-copy-2.svg"
        />
        <b className="medicare">
          <span>Medi</span>
          <span className="care">Care+</span>
        </b>
        <div className="newsParent">
          <a href= "#"className="news">News</a>
          <a className="services">Services</a>
          <a className="about">About</a>
          <a className="home">Home</a>
        </div>
        <div className="ourServices">Our Services</div>
        <div className="weProvideThe">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </div>
        <div className="rectangle2" />
        <div className="rectangleCopy" />
        <img
          className="chevronDown4Icon"
          alt=""
          src="/chevrondown-4.svg"
        />
        <div className="learnMore">LEARN MORE</div>
        <div className="rectangleCopy3" />
        <div className="rectangleCopy5" />
        <b className="dentalCare">Dental Care</b>
        <b className="pulmonary">Pulmonary</b>
        <b className="neurological">Neurological</b>
        <b className="prediatrics">Prediatrics</b>
        <div className="rectangle3" />
        <img className="toothIcon" alt="" src="/tooth.svg" />
        <div className="rectangleCopy2" />
        <div className="rectangleCopy4" />
        <div className="rectangleCopy6" />
        <div className="oval">
          <div className="mask" />
        </div>
        <div className="rectangleCopy17" />
        <div className="rectangleCopy18" />
        <div className="whatOurCustomers">What Our Customers Say</div>
        <img className="ovalCopy2" alt="" src="/oval-copy-2.svg" />
        <div className="weHaveThe">We Have The Best Specialist</div>
        <div className="weHaveA">
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </div>
        <div className="rectangleCopy13" />
        <div className="bitmap">
          <div className="mask1" />
        </div>
        <b className="drAwaatifAl">Dr. Awaatif Al</b>
        <div className="dentalCare1">Dental Care</div>
        <div className="rectangleCopy131" />
        <div className="bitmap1">
          <div className="mask1" />
        </div>
        <b className="drFilipaGaspar">Dr. Filipa Gaspar</b>
        <div className="cardiology">Cardiology</div>
        <div className="rectangleCopy132" />
        <div className="bitmap2">
          <div className="mask1" />
        </div>
        <b className="drSukhmeetGorae">Dr. Sukhmeet Gorae</b>
        <div className="neurological1">Neurological</div>
        <div className="rectangleCopy133" />
        <div className="bitmap3">
          <div className="mask1" />
        </div>
        <b className="drSiriJakobsson">Dr. Siri Jakobsson</b>
        <div className="prediatrics1">Prediatrics</div>
        <div className="groupCopy3">
          <div className="rectangle4" />
          <b className="learnMore1">Learn More</b>
        </div>
        <div className="clinicWithInnovati">Clinic With Innovative</div>
        <div className="weProvideThe1">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </div>
        <div className="rectangleCopy7" />
        <div className="rectangleCopy9" />
        <div className="rectangleCopy14" />
        <div className="ovalParent">
          <img className="ovalIcon" alt="" src="/oval.svg" />
          <div className="div">“</div>
        </div>
        <div className="iWantedTo">
          I wanted to thanks everyone at this facility for the quality of care
          and compassion they showed during my stay.
        </div>
        <div className="jacquelineAsong">Jacqueline Asong</div>
        <div className="patient">Patient</div>
        <img className="ovalIcon1" alt="" src="/oval1@2x.png" />
        <div className="rectangleCopy141" />
        <div className="group4Copy">
          <img className="ovalIcon" alt="" src="/oval.svg" />
          <div className="div">“</div>
        </div>
        <div className="iWantedTo1">
          I wanted to thanks everyone at this facility for the quality of care
          and compassion they showed during my stay.
        </div>
        <div className="patrciaRibeiro">Patrícia Ribeiro</div>
        <div className="patient1">Patient</div>
        <img className="ovalIcon3" alt="" src="/oval2@2x.png" />
        <div className="rectangleCopy11" />
        <div className="qualifiedDoctors">Qualified Doctors</div>
        <div className="hoursService">24 Hours Service</div>
        <div className="emergencyCare">Emergency Care</div>
        <img className="doctorWomanIcon" alt="" src="/doctorwoman.svg" />
        <img
          className="doctorWomanCopyIcon"
          alt=""
          src="/doctorwoman-copy.svg"
        />
        <img
          className="doctorWomanCopy2"
          alt=""
          src="/doctorwoman-copy-2.svg"
        />
        <img className="humanBrainIcon" alt="" src="/humanbrain.svg" />
        <img className="medicalFileIcon" alt="" src="/medicalfile.svg" />
        <img className="lungs1Icon" alt="" src="/lungs-1.svg" />
        <img
          className="ovalOvalCopyMask"
          alt=""
          src="/oval--oval-copy-mask.svg"
        />
        <img className="ovalCopy3" alt="" src="/oval-copy-3.svg" />
        <div className="rectangleCopy15" />
        <div className="subscribeToNewslet">Subscribe to Newsletter</div>
        <div className="weHaveA1">
          We have a wide experience in experience design and strategy,
        </div>
        <div className="rectangleCopy16" />
        <div className="groupCopy4">
          <div className="rectangle5" />
          <b className="sendNow">Send Now</b>
        </div>
        <div className="enterYourEmail">Enter your email address</div>
        <div className="rectangle6" />
        <b className="medicare1">
          <span>Medi</span>
          <span className="care">Care+</span>
        </b>
        <div className="newsGroup">
          <div className="news">News</div>
          <div className="services">Services</div>
          <div className="about">About</div>
          <b className="home">Home</b>
        </div>
        <div className="group">
          <div className="rectangle7" />
          <b className="contact">Contact</b>
        </div>
        <div className="groupCopy">
          <div className="rectangle4" />
          <b className="makeAnAppointment">Make an Appointment</b>
        </div>
        <div className="groupCopy2">
          <div className="rectangle9" />
          <b className="departments">Departments</b>
        </div>
        <b className="welcomeToMedicare">Welcome to MediCare+ Clinic</b>
        <b className="bestSpecialists">Best Specialists</b>
        <div className="weAreOn">
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services in a
          single convenient location.
        </div>
        <div className="rectangleWrapper">
          <div className="rectangle10" />
        </div>
      </div>
    </div>

    
  );
  };

export default HospitalLandingPage;
