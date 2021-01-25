import React, {useEffect, useState} from 'react';
import Pricing from '../../Components/Pricing/Pricing';

const Home = () => {
    const [cryptoPrices, setCryptoPrices] = useState({});
    // useEffect(() => {
    //     axios('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbitcoin-cash%2Clitecoin%2Ctron%2Ctether&vs_currencies=usd')
    //     .then(response => {
    //         setCryptoPrices(response.data);
    //     })
    // }, []);
    return (
        <>
            <section data-settings="particles-1" className="main-section crumina-flying-balls particles-js bg-1 medium-padding120 responsive-align-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                            <img className="responsive-width-50" src="img/main.png" alt="image" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                            <header className="crumina-module crumina-heading heading--h1 heading--with-decoration">
                                <h1 className="heading-title f-size-90 weight-normal no-margin">Cryptocurrency
                                    <span className="weight-bold"> investments</span></h1>
                                <h2 className="c-primary">you can trust</h2>
                            </header>
                            <a data-scroll href="#details" className="btn btn--large btn--transparent btn--secondary">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-1">
                <div className="container">
                    <div className="row medium-padding120">
                        <div className="crumina-module crumina-featured-block">
                            <div className="image-block">
                                <img src="img/pc.png" alt="phone" />
                            </div>
                            <div className="text-block">
                                <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                                    <h2 className="heading-title weight-normal">Intelligent Portfollio
                                        <span className="weight-bold">  on Digital Assets</span>
                                    </h2>
                                    <div className="heading-text">Ichie investments, the first and safest crypto asset investment firm, was established to provide intelligent portfolios with its expert investors, customer-priority approach, safe and high-tech investment tools. Eliminating the risk factor to earn from digital assets, the platform is created to offer exclusive interest return.</div>
                                </header>
                            </div>
                        </div>
                    </div>
                    <hr className="divider" />
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="row medium-padding80">
                        <div id="details" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="crumina-module crumina-module-slider crumina-slider--info-boxes">
                                <div className="swiper-btn-wrap">
                                    <div className="swiper-btn-next">
                                        <svg className="woox-icon icon-line-arrow-right" dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-line-arrow-right"></use>'}}>
                                            
                                        </svg>
                                    </div>

                                    <div className="swiper-btn-prev">
                                        <svg className="woox-icon icon-line-arrow-left" dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-line-arrow-left"></use>'}}>
                                            
                                        </svg>
                                    </div>
                                </div>

                                <div className="swiper-container auto-height" data-show-items="5" data-prev-next="1">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="crumina-module crumina-info-box info-box--style2">
                                                <div className="info-box-thumb">
                                                    <svg className="woox-icon" data-name="Layer 1" viewBox="0 0 26.97 35.33">
                                                        <path d="M14.05 35.33l-3.92-.98 1.2-4.84-1.38-.35L8.75 34l-3.93-.97 1.22-4.92-5.47-1.38L0 26.6l1.87-4.32.42.1c.64.18 1.35.36 1.75.46l.38.08a.99.99 0 0 0 .23.03c.1 0 .37 0 .54-.43L8.5 9.27c.03-.55-.29-.93-1-1.1l-.34-.1-1.8-.44-.5-.11 1.02-4.14.49.12 5.47 1.36L13.05 0l3.92.98-1.19 4.75c.47.1.94.21 1.4.33l1.18-4.73 3.93.98-1.22 4.9c2.93 1.06 6.45 2.97 5.82 7.19a5.24 5.24 0 0 1-3.07 4.4c2.45 1.67 3.1 4.03 1.99 7.2-1.13 3.24-3.37 4.75-7.04 4.75a20.42 20.42 0 0 1-3.49-.35zm-2.7-1.7l1.98.49 1.21-4.88.47.1a20.58 20.58 0 0 0 3.77.4c3.22 0 5.1-1.25 6.09-4.07 1.08-3.09.31-5.1-2.48-6.56l-1.2-.63 1.32-.3a4.22 4.22 0 0 0 3.4-3.93c.42-2.85-1.3-4.77-5.6-6.25l-.43-.15 1.2-4.82-1.99-.49-1.18 4.73-.48-.12c-.77-.2-1.57-.38-2.36-.56l-.5-.11 1.2-4.77-2-.5-1.2 4.85-.48-.11-5.48-1.36-.54 2.18c.9.2 1.4.32 1.66.42a2.08 2.08 0 0 1 1.75 2.23l-3.33 13.4a1.57 1.57 0 0 1-1.9 1.08c-.12-.01-.46-.08-1.8-.44L1.38 25.9l5.38 1.36.48.13-1.22 4.9 1.98.5 1.22-4.87.49.13c.8.22 1.58.42 2.35.61l.48.13zM16 26.45a20.76 20.76 0 0 1-5.02-.85l-1.05-.27 1.87-7.47.48.12.72.16c2.06.46 5.51 1.24 6.77 3.28a3.13 3.13 0 0 1 .35 2.48c-.29 1.17-1.24 2.55-4.12 2.55zm-4.86-1.84l.1.02a19.97 19.97 0 0 0 4.76.82c1.82 0 2.85-.58 3.15-1.79a2.13 2.13 0 0 0-.23-1.72c-1.04-1.68-4.36-2.42-6.14-2.82l-.25-.06zm6.18-7.82a16.35 16.35 0 0 1-4.06-.7l-.96-.24L14 8.98l.5.13.6.13c1.68.38 4.51 1 5.6 2.77a2.99 2.99 0 0 1 .33 2.38c-.27 1.1-1.14 2.4-3.7 2.4zm-3.81-1.66h.01a15.57 15.57 0 0 0 3.8.65c2.09 0 2.57-.94 2.74-1.65a2 2 0 0 0-.2-1.6c-.87-1.4-3.54-2-4.98-2.32l-.14-.03z" data-name="Bitcoin BTC" />
                                                    </svg>
                                                </div>
                                                <div className="info-box-content">
                                                    <h5 className="info-box-title">Bitcoin</h5>
                                                    <ul className="pricing-tables-position pricing-tables-position--inline">
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Price: </h6>
                                                                <h6 className="value">$8,109.70</h6>
                                                            </div>
                                                        </li>
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Cap: </h6>
                                                                <h6 className="value">$136,657,260,244.00</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="growth">25.94%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="crumina-module crumina-info-box info-box--style2">
                                                <div className="info-box-thumb">
                                                    <svg className="woox-icon"   data-name="Layer 1" viewBox="0 0 22.62 36.84">
                                                        <g id="Ethereum_ETH" data-name="Ethereum ETH">
                                                            <path d="M32 15.52L41.93 32 32 37.86 22.07 32 32 15.52zm0-1.94L20.69 32.34 32 39.02l11.3-6.68L32 13.58z" className="cls-1" transform="translate(-20.69 -13.58)" />
                                                            <path d="M32 28.67l9.09 3.82L32 37.86l-9.09-5.37L32 28.67zm0-1.09l-11.31 4.76L32 39.02l11.3-6.68L32 27.58z" className="cls-1" transform="translate(-20.69 -13.58)" />
                                                            <path d="M39.78 37.73L32 48.7l-7.78-10.96 7.27 4.3.5.3.52-.3 7.27-4.3zm3.53-3.24L32 41.16 20.7 34.5 32 50.41l11.31-15.94z" className="cls-1" transform="translate(-20.69 -13.58)" />
                                                            <path d="M10.81 1.88h1v22.79h-1zM10.81 27.75h1v7.87h-1z" className="cls-1" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="info-box-content">
                                                    <h5 className="info-box-title">Ethereum</h5>
                                                    <ul className="pricing-tables-position pricing-tables-position--inline">
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Price:</h6>
                                                                <h6 className="value">$830.50</h6>
                                                            </div>
                                                        </li>
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Cap:</h6>
                                                                <h6 className="value">$80,945,193,726</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="growth">30.68%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="crumina-module crumina-info-box info-box--style2">
                                                <div className="info-box-thumb">
                                                    <svg className="woox-icon"   data-name="Layer 1" viewBox="0 0 32.69 20">
                                                        <g id="Dash_DASH" data-name="Dash DASH">
                                                            <path d="M38.42 42H16.27l1.84-6h19.37l2.72-8H20.86l1.84-6h21.73a4.34 4.34 0 0 1 1.87.53 2.84 2.84 0 0 1 1.4 1.38 3.9 3.9 0 0 1 .52 1.73 3.73 3.73 0 0 1-.28 2.1l-2.82 8.87a10.88 10.88 0 0 1-1 1.9 9.85 9.85 0 0 1-1.64 1.69 13.19 13.19 0 0 1-1.94 1.27l-.2.08a5.6 5.6 0 0 1-1.92.45zm-20.8-1h20.8a4.78 4.78 0 0 0 1.57-.4l.13-.05a12.63 12.63 0 0 0 1.73-1.14 8.86 8.86 0 0 0 1.45-1.48 10.09 10.09 0 0 0 .87-1.66L47 27.4a2.92 2.92 0 0 0 .22-1.64 3.05 3.05 0 0 0-.4-1.37 1.94 1.94 0 0 0-.92-.94 3.55 3.55 0 0 0-1.47-.44h-21l-1.22 4h19.38L38.2 37H18.85z" className="cls-1" transform="translate(-15.57 -22)" />
                                                            <path d="M28.13 35H15.57l1.83-6h12.43zm-11.21-1h10.45l1.13-4H18.16z" className="cls-1" transform="translate(-15.57 -22)" />
                                                        </g>
                                                    </svg>

                                                </div>
                                                <div className="info-box-content">
                                                    <h5 className="info-box-title">Dash</h5>
                                                    <ul className="pricing-tables-position pricing-tables-position--inline">
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Price:</h6>
                                                                <h6 className="value">$554.26</h6>
                                                            </div>
                                                        </li>
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Cap:</h6>
                                                                <h6 className="value">$4,361,904,309</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="drop">- 6.38%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="crumina-module crumina-info-box info-box--style2">
                                                <div className="info-box-thumb">
                                                    <svg className="woox-icon" data-name="Layer 1" viewBox="0 0 27.248 29">
                                                        <path d="M25.451 29H1.081l2.288-8.436L0 21.964l1.443-5.43 3.38-1.234L8.898 0h9.805L15.69 11.341l4.275-1.567-1.342 5.393-4.36 1.653L12.65 23h14.6zM2.387 28h22.319l1.2-4H11.355l2.07-7.933 4.357-1.651.759-3.055-4.311 1.579L17.402 1H9.666L5.652 16.066 2.275 17.3l-.789 2.969 3.381-1.4z" data-name="Litecoin LTC" />
                                                    </svg>
                                                </div>
                                                <div className="info-box-content">
                                                    <h5 className="info-box-title">Litecoin</h5>
                                                    <ul className="pricing-tables-position pricing-tables-position--inline">
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Price:</h6>
                                                                <h6 className="value">$152.51</h6>
                                                            </div>
                                                        </li>
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Cap:</h6>
                                                                <h6 className="value">$8,404,897,705</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="growth">31.14%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="crumina-module crumina-info-box info-box--style2">
                                                <div className="info-box-thumb">
                                                    <svg className="woox-icon" data-name="Layer 1" viewBox="0 0 29.098 31.372">
                                                        <path d="M22.248 31.372a6.778 6.778 0 0 1-3.427-.949 6.924 6.924 0 0 1-3.424-5.952 7.569 7.569 0 0 1 1.006-3.651 2.135 2.135 0 0 0-.763-2.736 1.891 1.891 0 0 0-2.717.761 6.955 6.955 0 0 1-2.657 2.774 6.788 6.788 0 0 1-6.842-.005 6.9 6.9 0 0 1 0-11.917 6.777 6.777 0 0 1 6.854 0 11.248 11.248 0 0 1 2.731 2.717 2.056 2.056 0 0 0 2.751.811 1.691 1.691 0 0 0 1.025-1.3 2.618 2.618 0 0 0-.274-1.455 7.517 7.517 0 0 1-1.113-3.631A6.94 6.94 0 0 1 18.821.885a6.483 6.483 0 0 1 3.386-.886 6.6 6.6 0 0 1 3.479.9 6.887 6.887 0 0 1-.013 11.9 7.892 7.892 0 0 1-3.78.893 1.967 1.967 0 1 0 0 3.933 7.566 7.566 0 0 1 3.771.887 6.889 6.889 0 0 1 .009 11.915 6.809 6.809 0 0 1-3.425.945zm-7.636-14.587a3.051 3.051 0 0 1 1.53.436 3.119 3.119 0 0 1 1.142 4.064 6.608 6.608 0 0 0-.89 3.186 5.923 5.923 0 0 0 2.93 5.09 5.753 5.753 0 0 0 5.84 0 5.89 5.89 0 0 0 0-10.186 6.6 6.6 0 0 0-3.274-.754 2.966 2.966 0 1 1 0-5.933 6.89 6.89 0 0 0 3.284-.761 5.887 5.887 0 0 0-.01-10.175 5.56 5.56 0 0 0-2.922-.755 5.616 5.616 0 0 0-2.9.741 5.943 5.943 0 0 0-2.943 5.1 6.61 6.61 0 0 0 1 3.163 3.6 3.6 0 0 1 .381 2.063 2.63 2.63 0 0 1-1.535 2.036 2.785 2.785 0 0 1-1.423.383 3.1 3.1 0 0 1-2.639-1.514 9.809 9.809 0 0 0-2.435-2.425 5.777 5.777 0 0 0-5.816.014 5.9 5.9 0 0 0 0 10.193 5.763 5.763 0 0 0 5.839 0 6.017 6.017 0 0 0 2.282-2.4 3.058 3.058 0 0 1 2.559-1.566z" data-name="Ripple XRP" />
                                                    </svg>
                                                </div>
                                                <div className="info-box-content">
                                                    <h5 className="info-box-title">Ripple</h5>
                                                    <ul className="pricing-tables-position pricing-tables-position--inline">
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Price:</h6>
                                                                <h6 className="value">$0.785075</h6>
                                                            </div>
                                                        </li>
                                                        <li className="position-item">
                                                            <div className="currency-details-item">
                                                                <h6 className="title">Cap:</h6>
                                                                <h6 className="value">$30,625,160,124</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="growth">31.14%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="text-block">
                        <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                            <h2 className="heading-title weight-normal">
                                View our plans
                            </h2>
                        </header>
                    </div>
                    <Pricing />
                    <hr className="divider" />
                </div>
            </section>


            <section className="medium-padding120 responsive-align-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                                <div className="heading-sup-title">Investment Made Easy & Secure.   </div>
                                <h2 className="heading-title weight-normal">Stable return &
                                    <span className="weight-bold"> Money back guarantee</span></h2>
                                <div className="heading-text">Enjoy stable daily interest rates with well-diversified intelligent portfolios that generates secure revenue.
                                </div>
                            </header>

                            <p>The money is yours. So is the control. At the end of your investment, you can withdraw your initial investment along with your profits.
                            </p>

                            <div className="btn-market-wrap mt60">
                                <a href="#" className="btn btn--market btn--apple btn--with-icon btn--icon-left">
                                    <svg className="woox-icon icon-search" dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-next-2"></use>'}}>
                                        
                                    </svg>
                                    <div className="text">
                                        {/* <span className="sup-title">download on</span> */}
                                        <span className="title">Find out more</span>
                                    </div>
                                </a>

                                <a href="#" className="btn btn--market btn--google btn--with-icon btn--icon-left">
                                    <svg className="woox-icon icon-if-59-play-843782" dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-arrow-down"></use>'}}>
                                        
                                    </svg>
                                    <div className="text">
                                        {/* <span className="sup-title">download on</span> */}
                                        <span className="title">Get started</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
                            <img className="responsive-width-50" src="img/phone.png" alt="phone" />
                        </div>
                    </div>
                </div>
            </section>
        </>    
    );
};

export default Home;