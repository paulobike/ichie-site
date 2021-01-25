import React from 'react';
import useScript from '../../hooks/useScript';

const Footer = () => {
    useScript('js/main.js');
    useScript('js/js-plugins/crum-mega-menu.js');
    return (
        <footer id="site-footer" className="footer ">
            <canvas id="can"></canvas>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
                        <div className="widget w-info">
                            <a href="index-2.html" className="site-logo" style={{fontWeight: 'bolder', letterSpacing: '2px', fontSize: '1.3rem'}}>
                                <img src="img/logo-primary.png" alt="Woox" />
                                LOGO
                            </a>
                            <p>Please ensure you read our terms and conditions before making any operation in our trading platform all rights reserved. Ichie eze limited and it's agents are registered and provide all services on the USA territory</p>
                            <p>Copyright &copy; 2020</p>
                        </div>

                        <div className="widget w-contacts">
                            <ul className="socials socials--white">
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
                                        <i className="fab fa-linkedin-in woox-icon"></i>
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

            <a className="back-to-top" href="#">
                <svg className="woox-icon icon-top-arrow" dangerouslySetInnerHTML={{__html: '<use  xlink:href="#icon-top-arrow"></use>'}}></svg>
            </a>
        </footer>
    );
};

export default Footer;