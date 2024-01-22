import React from 'react'

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact-form container-fluid">
                    <h4 className='display-4 text-center'>Get In Touch With Me</h4>
                    <form
                        id="fs-frm"
                        name="simple-contact-form"
                        acceptCharset="utf-8"
                        action="https://formspree.io/f/mjvdjoeg"
                        method="post">
                        <br />
                        <input
                            type="text"
                            name="name"
                            id="full-name"
                            placeholder="Enter Your Name "
                            required
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            name="_replyto"
                            id="email-address"
                            placeholder="abc@gmail.com"
                            required
                        />
                        <br />
                        <br />
                        <textarea
                            rows={5}
                            name="message"
                            id="message"
                            placeholder="Leave a message here and click submit button. Your message will be received through e-mail."
                            required
                            defaultValue={""}
                        />
                        <br />
                        <button className='btn' type='submit'>Submit <i class="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact