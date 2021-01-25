const PricingItem = (props) => {

    return (        
        <div className="crumina-module crumina-pricing-table pricing-table--small" style={{marginBottom: '1px'}}>
            <div className="pricing-thumb">
                <img src={props.priceImage || 'img/logo-primary.png'} className="woox-icon" alt='icon' />
                <h5 className="pricing-title">{props.priceName}</h5>
            </div>
            <h5 className="pricing-title" style={{textAlign: 'center', marginBottom: '15px'}}>${props.minPrice} - ${props.maxPrice}</h5>
            <div className="price">
                <div className="price-value">Duration:
                    <div className="growth">{props.duration} hours</div>
                </div>
                <div className="price-value">Return:
                    <div className="growth">+ {props.roi} %</div>
                </div>
            </div>
            <a href="005_coin_market.html" className="btn btn--large btn--dark-lighter btn--transparent full-width">Invest Now!</a>
        </div>
    );
}

export default PricingItem;