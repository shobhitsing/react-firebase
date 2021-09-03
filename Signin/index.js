import React, { useState } from 'react';
import './style.scss'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import firebase from 'firebase';
import Loader from '../../components/Loader';
import $ from 'jquery';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true)
        firebase
            .auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                swal({
                    text: "Your are successfully logged in!.",
                    icon: "success",
                }).then(() => {
                    $("#exampleModalCenter").hide();
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();
                });
            }).catch((error) => {
                console.log(error)
                swal({
                    text: 'Invalid username or password.',
                    icon: "error",
                });
            }).finally(() => {
                setIsLoading(false)
            });
        reset();
    };
    return (
        <div>
            <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="parxeller-bg">
                                        <div className="signin-logo">
                                            <img src="images/logo-border.svg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="signin-heading">
                                            Discover An Easy Way To Manage Time
                                        </div>
                                        <div className="singin-img">
                                            <img src="images/manage-time.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 ">
                                    <div className="parxeller-bg-space">
                                        <div className="form-heding">
                                            Sign In
                                        </div>
                                        <div className="form-sub-heading">Welcome Back!</div>
                                        <div className="signin-form-destiny">
                                            <form className="form-format" onSubmit={handleSubmit(onSubmit)}>
                                                {/* onSubmit={handleSubmit(onSubmit)} */}
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    {/* <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control custom-form-control" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        autoComplete="off"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter email"
                                                        className={`form-control ${errors.email && "invalid"}`}
                                                        {...register("email", {
                                                            required: "Email is Required",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Invalid email address",
                                                            }

                                                        })}
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        // onKeyUp={() => {
                                                        //     trigger("email");
                                                        // }}
                                                    />
                                                    {errors.email && (
                                                        <small className="text-danger">{errors.email.message}</small>
                                                    )}
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        autoComplete="off"
                                                        className="form-control custom-form-control" aria-describedby="emailHelp"
                                                        placeholder="Enter password"
                                                        className={`form-control ${errors.name && "invalid"}`}
                                                        {...register("password", { required: "Password is required" })}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        // onKeyUp={() => {
                                                        //     trigger("password");
                                                        // }}
                                                    />
                                                    {errors.password && (
                                                        <small className="text-danger">{errors.password.message}</small>
                                                    )}

                                                </div>
                                                <div className="form-btn text-center">
                                                    <button type="submit" className="btn signin-btn">Sign In</button>
                                                    <div className="suggest-text">Don’t have an account?<a href="/register" className="link-color">Sign up Here</a></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader isLoading={isLoading}/>
        </div>

    )
}

export default Signin
















