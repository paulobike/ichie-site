const Testimonial = (props) => (
    <div className="swiper-slide">
        <div className="crumina-module crumina-testimonial-item testimonial--bordered">

            <div className="testimonial-content">
                <h6 className="testimonial-text">
                    <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-quote-icon"></use>'}} className="woox-icon icon-quote-icon quote">
                        
                    </svg>
                    <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-quote-icon2"></use>'}} className="woox-icon icon-quote-icon2 quote quote-close">
                        
                    </svg>
                    {props.body}
                </h6>

                <div className="info-rating-wrap">

                    <div className="author-block">
                        <div className="avatar avatar80">
                            <img src={props.image || "img/author2.jpg"} alt="avatar" />
                        </div>
                        <div className="author-content">
                            <a href="#" className="author-name">{props.author}</a>
                            <div className="author-prof">{props.proof} </div>
                            <ul className="rait-stars">
                                {
                                    Array.from(Array(props.stars)).map((slot, i) => (
                                        <li key={i}>
                                            <svg dangerouslySetInnerHTML={{__html: '<use xlink:href="svg-icons/sprites/icons.svg#icon-star-1"></use>'}} className="woox-icon icon-star-1">
                                                
                                            </svg>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>


                    </div>

                    <img src="img/testim-logo.png" alt="testim-logo" />
                </div>
            </div>
        </div>
    </div>				
);

export default Testimonial;