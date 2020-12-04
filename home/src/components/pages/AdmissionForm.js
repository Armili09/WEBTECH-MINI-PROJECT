import React, { Component } from "react"; 
import './AdmissionForm.css'   

class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNumber: '',    
            city: 'select',
            boardmath: '',  
            boardphy: '',
            boardchem: '', 
            kcetmath: '',
            kcetphy: '',
            kcetchem: '',
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
}    
    
    handleFormValidation() {    
        const { studName, emailId, dob, gender, phoneNumber, city, boardmath, boardphy, boardchem, kcetmath, kcetphy, kcetchem } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //City    
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "Select city.";    
        }    

        //12math
        if (!boardmath) {    
          formIsValid = false;    
          formErrors["bmathErr"] = "Marks is required.";    
        }
        else {
          if(boardmath>100 || boardmath<0) {
            formIsValid = false;    
            formErrors["bmathErr"] = "Invalid marks.";  
          }
        } 
        
        //12phy
        if (!boardphy) {    
          formIsValid = false;    
          formErrors["bphyErr"] = "Marks is required.";    
        }
        else {
          if(boardphy>100 || boardphy<0) {
            formIsValid = false;    
            formErrors["bphyErr"] = "Invalid marks.";  
          }
        } 
        
        //12chem
        if (!boardchem) {    
          formIsValid = false;    
          formErrors["bchemErr"] = "Marks is required.";    
        }
        else {
          if(boardchem>100 || boardchem<0) {
            formIsValid = false;    
            formErrors["bchemErr"] = "Invalid marks.";  
          }
        } 
        
        //kcetmath
        if (!kcetmath) {    
          formIsValid = false;    
          formErrors["kmathErr"] = "Marks is required.";    
        }
        else {
          if(kcetmath>100 || kcetmath<0) {
            formIsValid = false;    
            formErrors["kmathErr"] = "Invalid marks.";  
          }
        } 
        
        //kcetphy
        if (!kcetphy) {    
          formIsValid = false;    
          formErrors["kphyErr"] = "Marks is required.";    
        }
        else {
          if(kcetphy>100 || kcetphy<0) {
            formIsValid = false;    
            formErrors["kphyErr"] = "Invalid marks.";  
          }
        } 

        //kcetchem
        if (!kcetchem) {    
          formIsValid = false;    
          formErrors["kchemErr"] = "Marks is required.";    
        }
        else {
          if(kcetchem>100 || kcetchem<0) {
            formIsValid = false;    
            formErrors["kchemErr"] = "Invalid marks.";  
          }
        } 
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')
            this.setState(this.initialState)    
        } 
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, cityErr, bmathErr, bphyErr, bchemErr, kmathErr, kphyErr, kchemErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center" }} >Student Admission Form </ h1><br/><br/>    
                <div>    
                    <form action='/test'>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}     
                                className={studNameErr ? ' showError' : ''} /> 
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
                        </div><br/>      
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}      
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
                        </div>  
                        <table className='dobgen'>
                        <tr>
                            <td><div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div></td>   
                        <td><div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div></td>  
                        <td><div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}      
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div></td>   
                        <td><div>    
                            <label htmlFor="city">City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Bangalore">Bangalore</option>    
                                <option value="Mumbai">Mumbai</option>    
                                <option value="Hyderabad">Hyderabad</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div></td>
                        </tr>
                        </table>   
                        <div><br/><br/>
                        <h3>12th Board Marks</h3><br/>
                        </div> 
                        <div>    
                            <label htmlFor="boardmath">Maths</label>    
                            <input type="text" name="boardmath"    
                                onChange={this.handleChange}    
                                value={this.state.boardmath}    
                                className={bmathErr ? ' showError' : ''} />    
                            {bmathErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bmathErr}</div>    
                            }
                        </div>
                        <div>    
                            <label htmlFor="boardphy">Physics</label>    
                            <input type="text" name="boardphy"    
                                onChange={this.handleChange}    
                                value={this.state.boardphy}    
                                className={bphyErr ? ' showError' : ''} />    
                            {bphyErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bphyErr}</div>    
                            }
                        </div> 
                        <div>    
                            <label htmlFor="boardchem">Chemistry</label>    
                            <input type="text" name="boardchem"    
                                onChange={this.handleChange}    
                                value={this.state.boardchem}    
                                className={bchemErr ? ' showError' : ''} />    
                            {bchemErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bchemErr}</div>    
                            }
                        </div>  
                        <div><br/><br/>
                          <h3>KCET Marks</h3><br/>
                        </div>
                        <div>    
                            <label htmlFor="kcetmath">Maths</label>   
                            <input type="text" name="kcetmath"    
                                onChange={this.handleChange}    
                                value={this.state.kcetmath}    
                                className={kmathErr ? ' showError' : ''} />    
                            {kmathErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{kmathErr}</div>    
                            }
                        </div>  
                        <div>    
                            <label htmlFor="kcetphy">Physics</label>    
                            <input type="text" name="kcetphy"    
                                onChange={this.handleChange}    
                                value={this.state.kcetphy}     
                                className={kphyErr ? ' showError' : ''} />    
                            {kphyErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{kphyErr}</div>    
                            }
                        </div>  
                        <div>    
                            <label htmlFor="kcetchem">Chemistry</label>    
                            <input type="text" name="kcetchem"    
                                onChange={this.handleChange}    
                                value={this.state.kcetchem}    
                                className={kchemErr ? ' showError' : ''} />
                            {kchemErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{kchemErr}</div>    
                            }
                        </div><br/><br/><br/> 
                        <input type="submit" value="Submit" />   
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default AdmissionForm;