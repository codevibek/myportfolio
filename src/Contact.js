
import React, {useState} from 'react'
import  './Contact.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {

    }

    return (
        <div className="contact">
            <div className="contact__head">
                <MailOutlineIcon  style={{ fontSize:60 }}/>
            <h2>Contact Me</h2>

            </div>
            
            <form>
                <label>Name</label><br/>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/> <br/>
                <label>Email</label><br/>
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}/> <br/>
                <label>Subject</label><br/>
                <input type="text" value={subject} onChange={(event)=>setSubject(event.target.value)}/> <br/>
                <label>Message</label><br/>
                <textarea maxLength="200" rows="10" cols="40" type="text" value={message} onChange={(event)=>setMessage(event.target.value)}/> <br/>
                <button  onClick={handleSubmit}><span>Submit</span></button>
            </form>
        </div>
    )
}

export default Contact
