import React from 'react';
import ServicesHeader from '../../../components/ServicesHeader';
const Plan = () => {
    return (
        <div>
           <ServicesHeader/>
            <section className="space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="wide-heading">Charles, let’s help you with your Gap Assessment.</div>
                            <div className="question-steps">
                                <div className="pages-show ">(1 to 11)</div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"100" ,ariaValuenow:"25", ariaValuemin:"0", ariaValuenow:"100%"}}></div>
                                </div>
                            </div>
                            <div className="question-heading">Discover your Life Stage</div>
                            <div className="auto-fill-form">
                                <form className="form-format">
                                    <div className="row auto-divder">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">First name</label>
                                            <input type="email" className="form-control custom-form-control" value="Rohit" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">Last name</label>
                                            <input type="email" className="form-control custom-form-control" value="Thakur" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row auto-divder">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control custom-form-control" value="rohit@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                            <div className="form-icon">
                                                <input type="email" className="form-control custom-form-control" value="01-01-2000" data-date-format="dd/mm/yyyy" id="datepicker" aria-describedby="emailHelp" placeholder="" />
                                                <span className="form-icon-position"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gender form-group">
                                        <label htmlFor="exampleInputEmail1">Date of Birth</label><br/>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" type ="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" type ="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" type ="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className=""> <button type="submit" className="btn next-button">Next</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Plan
