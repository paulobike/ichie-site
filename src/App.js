import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './utils/routes';
import {Suspense} from 'react';
import PricingContext from './context/pricingContext';

function App() {
  const [pricingState, setPricingState] = useState({
    regular: [],
    vip: []
  });

  useEffect(() => {
    import('./utils/pricing')
    .then(data => {
      const pricing = {...data.default};
      setPricingState(pricing);
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
          <div className="main-content-wrapper">            
            <Suspense fallback={<div>Loading...</div>}>
              <PricingContext.Provider value={pricingState}>
                <Switch>
                  {
                  routes.map(route => {
                    return <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
                  })
                }
                </Switch>
              </PricingContext.Provider>
              
            </Suspense>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
