import React, { useState } from 'react';
import './style.scss'
import Signin from '../Signin'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from 'react-hook-form';
import swal from 'sweetalert';
import { firestore, auth } from '../../firebaseConfig';
import firebase from 'firebase';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loader from '../../components/Loader';
import { useHistory } from "react-router-dom";


const Register = () => {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
        control
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);
        firebase
            .auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                let uid = res.user.uid;
                save(uid, data);
            })
            .catch((err) => {
                console.log('err', err)
                setIsLoading(false);
                swal({
                    text: err.message,
                    icon: "error",
                });
                
            })
        
    };

    const save = (uid, data) => {
        
        const params = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            dob: data.startDate,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            updated_at: firebase.firestore.FieldValue.serverTimestamp(),
        }

        firebase.firestore()
            .collection("Users")
            .doc(uid).set(params)
            .then((save) => {
                setIsLoading(false);
                if (save) {
                    swal({
                        text: "Your are not register!.",
                        icon: "error",
                    });
                } else {
                    swal({
                        text:"Your have been successfully registered!",
                        icon: "success",
                    }).then(function() {
                        setTimeout(() => {
                            history.goBack();
                        }, 500);
                    });;
                }
        });
    }
    return (
        <div>
            <section className="bg-signup">
                <div className="container">
                    <div className="space-parller">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="parxeller-bg parxeller-text-align">
                                    <div className="signin-logo">
                                        <img src="images/logo-white.svg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="signin-heading">
                                        Welcome to DestinyAlert
                                        <ul>
                                            <li>See all your relationships in one place</li>
                                            <li>Find the best way to prioritize your time</li>
                                            <li>Your privacy and security is our priority</li>
                                        </ul>
                                    </div>
                                    <div className="singin-img">
                                        <img src="images/time-clock.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="parxeller-bg-space parxeller-current-space">
                                    <div className="form-heding">
                                        Sign up
                                    </div>
                                    <div className="form-sub-heading">Create a DestinyAlert account</div>
                                    <div className="signin-form-destiny">
                                        <form className="form-format" onSubmit={handleSubmit(onSubmit)}>
                                            {/* onSubmit={handleSubmit(onSubmit)} */}
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                {/* <input type="text" name="name"  value={name}   onChange={(e) => setName(e.target.value)} className="form-control custom-form-control"  aria-describedby="emailHelp" placeholder="Enter name" /> */}
                                                <input
                                                    type="text"
                                                    name="name"
                                                    autoComplete="off"
                                                    className="form-control custom-form-control" aria-describedby="emailHelp"
                                                    placeholder="Enter name"
                                                    className={`form-control ${errors.name && "invalid"}`}
                                                    {...register("name", { required: "Name is Required" })}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    // onBlur={() => {
                                                    //     trigger("name");
                                                    // }}
                                                />
                                                {errors.name && (
                                                    <small className="text-danger">{errors.name.message}</small>
                                                )}

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
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
                                                    // onBlur={() => {
                                                    //     trigger("email");
                                                    // }}
                                                />
                                                {errors.email && (
                                                    <small className="text-danger">{errors.email.message}</small>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="startDate">Date of Birth</label>
                                                <div className="form-icon">
                                                    {/* <DatePicker value={startDate} selected={startDate} onChange={(date) => setStartDate(date)}
                                                        className="form-control custom-form-control"
                                                        {...register("startDate", { required: "Date is Required" })}
                                                        onBlur={() => {
                                                            trigger("date");
                                                        }}
                                                    /> */}

                                                    <Controller
                                                        control={control}
                                                        name='startDate'
                                                        defaultValue={new Date()}
                                                        rules={{ required: "DOB is Required" }}
                                                        render={({ field: {value, onChange} }) => (
                                                            <DatePicker
                                                                minDate={new Date()}
                                                                selected={value || new Date()}
                                                                value={startDate}
                                                                onChange={onChange}
                                                                className="form-control custom-form-control"
                                                            />
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="phone">Phone number</label>
                                                
                                                <Controller
                                                    control={control}
                                                    name='phone'
                                                    rules={{ required: "Phone number is Required" }}
                                                    render={({ field: { value, onChange } }) => (
                                                        <PhoneInput
                                                            name="phone"
                                                            country={'in'}
                                                            name='phone'
                                                            value={value}
                                                            onChange={onChange}
                                                            inputClass={`form-control ${errors.phone && "invalid"}`}
                                                            inputStyle={{width: '100%'}}
                                                        />
                                                    )}
                                                />

                                                {errors.phone && (
                                                    <small className="text-danger">{errors.phone.message}</small>
                                                )}

                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="password">Password</label>
                                                    {/* <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control custom-form-control" aria-describedby="emailHelp" placeholder="Password" /> */}
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        autoComplete="off"
                                                        className="form-control custom-form-control" aria-describedby="emailHelp"
                                                        placeholder="Enter Password"
                                                        className={`form-control ${errors.password && "invalid"}`}
                                                        {...register("password", { 
                                                            required: "Password is Required",
                                                            minLength: {
                                                                value: 6,
                                                                message: "Password must have at least 6 characters"
                                                            }
                                                        })}
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        // onBlur={() => {
                                                        //     trigger("password");
                                                        // }}
                                                    />
                                                    {errors.password && (
                                                        <small className="text-danger">{errors.password.message}</small>
                                                    )}

                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="confirmPassword">Confirm password</label>
                                                    {/* <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control custom-form-control parxeller-shorting" placeholder="Password" /> */}
                                                    <input
                                                        type="password"
                                                        autoComplete="off"
                                                        name="confirmPassword"
                                                        className="form-control custom-form-control" aria-describedby="emailHelp"
                                                        placeholder="Enter confirm password"
                                                        className={`form-control ${errors.confirmPassword && "invalid"}`}
                                                        {...register("confirmPassword", { 
                                                            required: "Confirm password is Required",
                                                            minLength: {
                                                                value: 6,
                                                                message: "Password must have at least 6 characters"
                                                            },
                                                            validate: value =>
                                                                value === password || "The passwords do not match"
                                                        })}
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        // onBlur={() => {
                                                        //     trigger("confirmPassword");
                                                        // }}
                                                    />
                                                    {errors.confirmPassword && (
                                                        <small className="text-danger">{errors.confirmPassword.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="parxeller-divder1">
                                                <div className="suggest-text">Don’t have an account?<a href="#" data-toggle="modal" data-target="#exampleModalCenter" className="link-color">Sign in Here</a> </div>
                                                <div className="text-right"> <button type="submit" className="btn signin-btn signup-btn" value="Send message">Sign Up</button></div>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Loader isLoading={isLoading}/>
            </section>
            <Signin />
        </div>
    )
}


export default Register
