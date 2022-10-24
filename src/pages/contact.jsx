import React from 'react';
// import ReactWhatsapp from 'react-whatsapp';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function Contact() {


    return (
        <div id='contact' className='container'>
            {/* <div class="container">
                <div class="row ">
                    <div class="col-lg-7 mx-auto">
                        <div class="card mt-2 mx-auto p-4 bg-light">
                            <div class="card-body bg-light">
                                <div class="container">
                                    <div class="controls">
                                        <div className='form-group'>
                                            <label for="form_email">Email *</label>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                        </div>
                                        <div class="form-group">
                                            <label for="form_subject">Subject *</label>
                                            <input id="form_subject" type="text" name="subject" class="form-control" placeholder="Write your subject here.*" required="required" data-error="Subject is required." />
                                        </div>
                                        <div class="form-group">
                                            <label for="form_message">Message *</label>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message." />
                                        </div>
                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Send Mail" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <FloatingWhatsApp
                phoneNumber='+972526898575'
                accountName='Oriya Hajbi'
                avatar='/photos/me.jpeg'
                statusMessage='Full Stack Developer'
                chatMessage="Hello there 😀, Let's talk!."
                allowClickAway="true"
            />
        </div>


    );
}

export default Contact;

