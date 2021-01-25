const Contact = () => {
    return (
        <>
            <section data-settings="particles-1" className="main-section crumina-flying-balls particles-js bg-1">
                <div className="container">
                    <div className="row medium-padding120 align-center">
                        <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
                            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                                <div className="heading-sup-title">CONTACTS</div>
                                <h2 className="heading-title heading--half-colored">Contact informations</h2>
                                <div className="heading-text">Investigationes demonstraverunt lectores legere elementum pulvinar etiam non quam lacus suspendisse risus nec feugiat in laoreet sit amet cursus.</div>
                            </header>
                            <a data-scroll href="#details" className="btn btn--large btn--primary">Contact Details</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row medium-padding120">
                        <div id="details" className="col-lg-8 col-md-8 col-sm-12 col-xs-12" data-mh="equal-block" style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.52231373198!2d-74.37130756216928!3d41.32919362323082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2d704a4ffc313%3A0x6fecca0e85d29209!2sFlorida%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1611563200598!5m2!1sen!2sng" width="100%" height="300" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.52231373198!2d-74.37130756216928!3d41.32919362323082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2d704a4ffc313%3A0x6fecca0e85d29209!2sFlorida%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1611563200598!5m2!1sen!2sng" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>

                        <div className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-12 col-xs-12 d-flex-align-middle mt30" data-mh="equal-block">

                            <div>
                                <header className="crumina-module crumina-heading heading--h3 heading--with-decoration">
                                    <h3 className="heading-title heading--half-colored">Contact <b>details</b></h3>
                                </header>

                                <div className="contact-item">
                                    <h4 className="contact-item-title">Find us</h4>
                                    <div className="info-wrap">
                                        <div className="info">795 South Park Avenue,</div>
                                        <span>Florida, USA</span>
                                    </div>
                                </div>

                                <div className="contact-item" data-mh="equal-block">
                                <h4 className="contact-item-title">Contact us</h4>
                                <div className="info-wrap">
                                    <div className="info">Phone: <span>8 800 567.890.11</span></div>
                                    <div className="info">Email: <a href="mailto:support@woox.com">support@logo.com</a></div>
                                </div>
                                <ul className="socials socials--double-icons">
                                    <li className="social-item">
                                        <a href="#">
                                            <i className="fab fa-twitter woox-icon"></i>
                                        </a>
                                    </li>

                                    <li className="social-item">
                                        <a href="#">
                                            <i className="fab fa-dribbble woox-icon"></i>
                                        </a>
                                    </li>

                                    <li className="social-item">
                                        <a href="#">
                                            <i className="fab fa-instagram woox-icon"></i>
                                        </a>
                                    </li>

                                    <li className="social-item">
                                        <a href="#">
                                            <i className="fab fa-facebook-square woox-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row pb120">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                                <h2 className="heading-title heading--half-colored">If you are interested in working with us, <b className="c-color">please get in touch</b></h2>
                                <div className="heading-text">Fill the form below to leave a message</div>
                            </header>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group label-floating">
                                            <label className="input-label control-label">What is your name? <abbr className="required" title="required">*</abbr></label>
                                            <input className="form-control input--squared input--dark" type="text" />
                                        </div>
                                        <div className="form-group label-floating">
                                            <label className="input-label control-label">Your email address <abbr className="required" title="required">*</abbr></label>
                                            <input className="form-control input--squared input--dark" type="email" />
                                        </div>
                                        <div className="form-group label-floating">
                                            <label className="input-label control-label">Subject</label>
                                            <input className="form-control input--squared input--dark" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group label-floating">
                                            <label className="input-label control-label">Write your message here</label>
                                            <textarea className="form-control input--squared input--dark height-170" name="message" placeholder=""></textarea>
                                        </div>
                                        <button className="btn btn--large btn--primary">Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;