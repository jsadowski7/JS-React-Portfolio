import './index.scss';

const Contact = () => {
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p>
                   I am interested in any opportunities that can expand my knowledge
                   in this field, and I love collaborating! 
                   I am looking for experience wherever I can get it, so please don't hesitate
                   to reach out using the contact for below!
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="Name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    required
                                    />
                            </li>
                            <li>
                                <input 
                                placeholder="Subject" 
                                type="text" 
                                name="subject" 
                                required 
                                />
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message' 
                                name='message' 
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;