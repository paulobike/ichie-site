import {useContext} from 'react';
import PricingItem from './PricingItem/PricingItem';
import PricingContext from '../../context/pricingContext';

const Pricing = () => {
    const plans = useContext(PricingContext);
    return (
        <>
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <div className="heading-sup-title">Regular plans.</div>
            </header>
            <div className="row medium-padding100" style={{paddingTop: '50px'}}>
                {
                    plans.regular.map(item => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item.priceName} data-mh="pricing-item" style={{marginBottom: '10px'}}>
                            <PricingItem priceImage={item.priceImage} 
                            priceName={item.priceName}
                            minPrice={item.minPrice}
                            maxPrice={item.maxPrice}
                            duration={item.duration}
                            roi={item.roi} />
                        </div>
                    ))
                }
                
            </div>
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <div className="heading-sup-title">VIP plans.</div>
            </header>
            <div className="row medium-padding100" style={{paddingTop: '50px'}}>
                {
                    plans.vip.map(item => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item.priceName} data-mh="pricing-item" style={{marginBottom: '10px'}}>
                            <PricingItem priceImage={item.priceImage} 
                            priceName={item.priceName}
                            minPrice={item.minPrice}
                            maxPrice={item.maxPrice}
                            duration={item.duration}
                            roi={item.roi} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Pricing;