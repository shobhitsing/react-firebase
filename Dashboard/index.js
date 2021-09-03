import React,{useEffect}from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import Signin from '../Signin'

const Dashboard = () => {

  useEffect(() => {
     startAnimation()
  }, []);
  const startAnimation = () => {
    // $('.overlay2').fadeOut(1500, function(){
    //     $('.overlay1').fadeIn(1500, function() {
    //         $('.overlay1').fadeOut(1500, function() {
    //             $('.overlay2').fadeIn(1500)
    //             startAnimation()
    //         });
    //     });
    // });

    $('.overlay1').fadeIn()
    setTimeout(() => {
        $('.overlay1').fadeOut(1000)
        $('.overlay2').fadeIn(1500)
        setTimeout(() => {
            $('.overlay2').fadeOut(1000)
            $('.overlay1').fadeIn(1500)
            startAnimation()
        }, 5000);
    }, 5000);

  }
    return (
        <div>
            <section className="parxeller-image ">
                <div className="container">
                    <div className="space-divider">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="logo-index">
                                    <img src="images/logo.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="login-signup ml-auto">
                                    <Link to="/register">
                                        <button type="button" className="btn btn-signup" data-toggle="modal">Sign up</button>
                                    </Link>
                                    <button type="button" className="btn btn-signin" data-toggle="modal" data-target="#exampleModalCenter">Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-parller">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="heading-bold">
                                    <h1>Discover An Easy Way To <span className="theme-text">Manage Time</span></h1>
                                </div>
                                <div className="para-text">
                                    <p>Achieve success by clarifying your life’s
                                        vision, customize your life plan based on
                                        your calling, take a relationship assessment,
                                        while tracking and executing on your
                                        goals – it’s FREE!
                                    </p>
                                </div>
                                <div className="assign-btn">
                                   
                                        <button type="button" className="btn btn-signup"> Take the Assessment Here</button>
                                  
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="overlay">
                                        <img src="images/circle.png" id="" className="img-fluid" alt="" />
                                </div>
                                <div className="overlay1">
                                        <img src="images/hapiness.png" id="navigation-item-1" className="img-fluid" alt="" />
                                </div>
                                <div className="overlay2" style={{display:'none'}}>
                                        <img src="images/hapiness1.png" id="navigation-item-2" className="img-fluid" alt="" />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <Signin />
        </div>
    )
}
export default Dashboard;


