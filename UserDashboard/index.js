import React from 'react';
import UserHeader from '../../components/UserHeader';
const User = () => {
    return (
        <div>  
        <UserHeader/>
      <section className="plan-page parxeller-image">
        <div className="container">
           
           <div className="space-parller">
              <div className="row">
                 <div className="col-lg-8 col-md-6">
                    <div className="heading-bold">
                       <h1>Charles, let's create your<span className="theme-text">Life Plan.</span></h1>
                    </div>
                    <div className="">
                        <div className="hero-image side-img">
                            <img src="images/plan.png" className="img-fluid" alt=""/>
                         </div>
                    </div>
                   
                 </div>
                 <div className="col-lg-4 col-md-6">
                    <div className="plan-list">
                        <ul>
                            <li className="active"><em className="plan-list-icon"><img src="images/user-icon.svg"/></em>Personal Information</li>
                            <li><em className="plan-list-icon"><img src="images/lifegap-icon.svg"/></em>Life Gap</li>
                            <li><em className="plan-list-icon"><img src="images/calling-icon.svg"/></em>Calling</li>
                            <li><em className="plan-list-icon"><img src="images/brain-icon.svg"/></em>Dreaming & Character</li>
                            <li><em className="plan-list-icon"><img src="images/goal.svg"/></em>Goals & Social Outcomes</li>
                        </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </section>
        </div>
    )
}

export default User
