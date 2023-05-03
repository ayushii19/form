import { React, useState, useEffect } from 'react';

const Homepage = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;

    useEffect(() => {
        if (name.length > 20) {
            setNameError("Name should bot be more than 20 letters")
        }
        else {
            setNameError(false)
        }
    }, [name, setName])


    // console.log(email.length === 0);
    useEffect(() => {
        if (email.length === 0) {
            setEmailError('')
        }
        // if (email.length < 2 ) {
        //     setEmailError("Too sort length")
        // }
        else if (!email.includes('@')) {
            setEmailError("Email must contain @")
        }
        else if (!email.match(validEmail)) {
            setEmailError('Please enter valid email id')
        }
        else {
            setEmailError(false)
        }
    }, [email, setEmail])



    useEffect(() => {
        if (phone.length === 0 || phone.length === 10) {
            setPhoneError('')
        }
        else if (phone.length < 10) {
            setPhoneError('must contain 10 digits')
        }
        else if (phone.length > 10) {

            setPhoneError("mobile number should be of 10 digits")
        } else {
            setPhoneError(false)
        }
    }, [phone, setPhone])


    const HandleSubmit = () => {
         
         console.log("Name :", name);
         console.log("Email :", email);
         console.log("Phone :", phone);
            
    }

    return (
        <div className='homepage'>
            <div className='homepage__content'>
                <div className='homepage__content__heading'><u>APPLICATION FORM</u></div>
                <div className='homepage__content__input'>
                    <div className='homepage__content__input__name'>
                        <div className='homepage__content__input__name__namecontent'>
                            <label className='homepage__content__input__name__namecontent__name2'>Name : </label>
                            <input className='homepage__content__input__name__namecontent__nametext' name="username" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='homepage__content__input__name__nameerror'>
                            <span className='homepage__error'>{nameError}</span>
                        </div>
                    </div>



                    <div className='homepage__content__input__email'>
                        <div className='homepage__content__input__email__emailcontent'>
                            <label className='homepage__content__input__email__emailcontent__email2'>Email : </label>
                            <input className='homepage__content__input__email__emailcontent__emailtext' name="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='homepage__content__input__email__emailerror'>
                            <div className='homepage__error'>{emailError}</div>
                        </div>
                    </div>


                    <div className='homepage__content__input__phone'>
                        <div className='homepage__content__input__phone__phonecontent'>
                            <label className='homepage__content__input__phone__phonecontent__phone2'>Phone no : </label>
                            <input className='homepage__content__input__phone__phonecontent__phonetext' name="phone" type="number" placeholder="Phone no." onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='homepage__content__input__phone__phoneerror'>
                            <div className='homepage__error'>{phoneError}</div>
                        </div>
                    </div>


                    <div className='homepage__content__input__button'>
                        <button className="homepage__content__input__button__button2" type="submit" onClick={HandleSubmit}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Homepage;
