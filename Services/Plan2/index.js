import React from 'react'
import ServicesHeader from '../../../components/ServicesHeader';

const Plan2 = () => {
    return (
        <div>
        <ServicesHeader/>
            <section className="space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="wide-heading">Charles, let’s help you with your Gap Assessment.</div>
                            <div className="question-steps">
                                <div className="pages-show ">(2 to 11)</div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "15%",ariaValuenow:"25" ,ariavaluemin:"0",Ariavaluemax:"100"}}></div>
                                </div>
                            </div>
                            <div className="all-question">
                                <div className="question-heading">Work and Service Relationship</div>
                                <div className="qustion-short-heading"><b>MOTIVATIONAL FACTORS:</b> My current work/ service is challenging, has opportunities for recognition, responsibility, and personal growth.</div>
                                <div className="optional-question">
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        <label className ="form-check-label" htmlFor="inlineRadio1">Good at this time</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label className ="form-check-label" htmlFor="inlineRadio2">May need future attention</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                        <label className ="form-check-label" htmlFor="inlineRadio3">Requires attention</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3"/>
                                        <label className ="form-check-label" htmlFor="inlineRadio4">Not reviewed at this time</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-12">
                            <div className="qustion-short-heading">MOTIVATIONAL FACTORS: My current work/ service</div>
                            <div className="table-responsive">
                                <table className="table table-custom">
                                    <thead>
                                        <tr className="table-even top-heading-table">
                                            <th></th>
                                            <th>Requires attention</th>
                                            <th>May need future attention</th>
                                            <th>Good at this time</th>
                                            <th>Not reviewed at this time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-odd">
                                            <th>Is challenging and engaging</th>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio5"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio6"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio7"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio8"></label>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr className="table-even">
                                            <th>Gives me opportunities for recognition</th>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio5"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio6"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio7"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio8"></label>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr className="table-odd">
                                            <th>Invest my time and finances on a monthly basis</th>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio5"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio6"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio7"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio8"></label>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr className="table-even">
                                            <th>Gives me responsibility in my area of work</th>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio5"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio6"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio7"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio8"></label>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr className="table-odd">
                                            <th>Gives me opportunities to improve my personal growth</th>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio5"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio6"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option7"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio7"></label>
                                            </div>
                                            </td>
                                            <td><div className="form-check">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"/>
                                                <label className ="form-check-label" htmlFor="inlineRadio8"></label>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="pre-nxt-qst">
                                <button type="submit" className="btn next-button">Next</button>
                                <button type="submit" className="btn prev-button">Previous</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Plan2
