import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import Forms from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


class Landpage extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (

        //Container
      <div className="main">
        <div className="container">
          <header className="head">
            <img
              style={{ width: "20%", marginLeft: "4px" }}
              src="/Images/logo.JPG"
            />

            <h1> Welcome to Agrishared </h1>
          </header>
        </div>
        <hr /> 
        
        {/* // MARGUEE STROLLING TEXT FROM RIGHT TO LEFT */}
        <marquee behavior="scroll" direction="left">
          Agrishared is the comsumer and farmer's friend
        </marquee>
        <div
          style={{
            backgroundColor: "green",
            height: "20px",
            marginBottom: "10px"
          }}
        />
        {/* CONTAINER WITH ABOUT US BUTTON */}
        <div className="picnform">
          <button
            style={{
              backgroundColor: "green",
              fontSize: 11,
              color: "#ffff"
            }}
          >
            About Us
          </button>

          {/* USING Carousel AS IMAGE SLIDER */}
                <Carousel style={{ width: '300px' }}>
                    <Carousel.Item>
                        <img style={{ width: "100%", height: '180px' }} src="/Images/agrick.JPG" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{ width: "100%", height: '180px ' }} src="/Images/agric1.JPG"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{ width: "100%", height: '180%' }} src="/Images/logo.JPG"
                       />
                    </Carousel.Item>
                </Carousel>
                   
          {/* SIGNUP  FORM on the landing page */}
          <div className="form1">
            <Forms />
          </div>
          
         
        </div>

        {/* //picture and text on the left of the form on the landing page */}
        <div className='newNow'>
        <img style={{ width: "30%",height:'20%', marginTop:'10px',marginLeft:'10px' }} src="/Images/aggy.JPG"
                       />
                       <p  style={{ width: "160px", fontSize:11, marginLeft:'20px' }}>Good morning all, our training and capacity building program is coming off on the 
                        17-24th July with fail. We are here to demystify innovative agricultural technology 
                        for development of rural communities. We are introducing to you innovative, productive 
                        and profitable technologies that would change the face of agriculture in Ghana, however 
                        our targeted interest are to reach out to more women and youths. My perception...</p>
                </div>
        
        {/* FOOTER with inline style */}
        <footer
          style={{
            marginTop: "50px",
            backgroundColor: "#06B440",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            textAlign: "center",
            color: "#fff",
            height: "40px",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            fontSize: 11
          }}
        >
          
          ©2019 Instapage, Inc.All Rights Reserved. <br />
          Empowering African farmers to feed the world
        </footer>
      </div>
    );
  }
}
export default Landpage;
