import emailjs from 'emailjs-com'
import React, {useState} from 'react'
import  './Contact.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zjxkw1g', 'template_htzec69', e.target, 'user_jMQ6BMrWWCP1zIKhDe4ND')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         setEmail('')
         setName('')
         setSubject('')
         setMessage('')
    }

    return (
        <div className="contact" id="contact">
            <div className="contact__head">
                <MailOutlineIcon  style={{ fontSize:60 }}/>
            <h2>Contact Me</h2>

            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} name="name"/> <br/>
                <label>Email</label><br/>
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} name="email" /> <br/>
                <label>Subject</label><br/>
                <input type="text" value={subject} onChange={(event)=>setSubject(event.target.value)} name="subject" /> <br/>
                <label>Message</label><br/>
                <textarea maxLength="200" rows="10" cols="40" type="text" value={message} onChange={(event)=>setMessage(event.target.value)} name="message"/> <br/>
                <button type="submit"><span>Submit</span></button>
            </form>
        </div>
    )
}

export default Contact
