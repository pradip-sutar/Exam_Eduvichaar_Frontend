import React from 'react'

const Pricingplan = () => {
  return (
    <>
        <main id="body-content ">   
                <section className=" section-padding ">            
            <div className="container">
                <div className="row">
                <div className="col-md-9 col-xl-5 mx-auto text-center">
                    <div className="section-title text-center">
                    <span  style={{ color: "#1d92c6" }}>Our Pricing Plan Suits Every Need</span>
                    <h2 className="wow CreatePrice">Pricing are Made Simple <strong>Suites to your needs</strong></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-wrap alternate-version">
                    <div className="pricing-saving-wrap">
                        <span className="pricing-saving" style={{backgroundColor:'#ffe0ce94', color: 'black'}}>
                        Save Upto 100%
                        </span>
                    </div>
                    <div className="plan-name" style={{color:'#f75d15'}}>
                        Free Plan
                    </div>
                    <h2 className="plan-price">
                        <sup>$</sup> 00.0
                    </h2>
                    <p className="pricing-info">
                        Best for one-man bands, web creators, and freelancers.
                    </p>
                    <hr className="divider-default" />
                    <ul className="list-unstyled icons-listing theme-primary tick mb-0">
                        <li>3 projects</li>
                        <li>10 GB storage</li>
                    </ul>
                    <ul className="list-unstyled icons-listing theme-primary tick not-included">
                        <li>13 Collaborators</li>
                        <li>100 Accounts</li>
                        <li>No team members</li>
                    </ul>
                    <div className="text-center">
                        <a href="our-pricing.html" className="text-uppercase btn btn-secondary"><span className="outer-wrap"><span data-text="Try this Package">Try this Package</span></span></a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-wrap popular-plan alternate-version" style={{backgroundColor:'#fe8947'}}>
                    <div className="pricing-saving-wrap ">
                        <span className="pricing-saving   ">
                        Save Upto 60%
                        </span>
                        <span className="pricing-saving popular-saving"style={{backgroundColor:'#ffe0ce94', color: 'black'}}>
                        Popular
                        </span>
                    </div>
                    <div className="plan-name text-white">
                        Starter Plan
                    </div>
                    <h2 className="plan-price text-white">
                        <sup >$</sup> 29.0
                    </h2>
                    <p className="pricing-info text-white">
                        Best for one-man bands, web creators, and freelancers.
                    </p>
                    <hr className="divider-default" />
                    <ul className="list-unstyled icons-listing theme-white txt-light tick mb-0 ">
                        <li className='text-white'>3 projects</li>
                        <li className='text-white'>10 GB storage</li>
                        <li className='text-white'>13 Collaborators</li>
                    </ul>
                    <ul className="list-unstyled icons-listing theme-white txt-light tick not-included">
                        <li className='text-white'>100 Accounts</li>
                        <li className='text-white'>No team members</li>
                    </ul>
                    <div className="text-center">
                        <a href="our-pricing.html" className="text-uppercase btn btn-outline-light"><span className="outer-wrap"><span data-text="Try this Package">Try this Package</span></span></a>
                    </div>
                    </div>
                </div>
                <div className="w-100 spacer-30 d-none d-md-block d-lg-block d-xl-none d-sm-none" />
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-wrap alternate-version">
                    <div className="pricing-saving-wrap">
                        <span className="pricing-saving"style={{backgroundColor:'#ffe0ce94', color: 'black'}}>
                        Save Upto 80%
                        </span>
                    </div>
                    <div className="plan-name" style={{color:'#f75d15'}}>
                        Professional Plan
                    </div>
                    <h2 className="plan-price">
                        <sup>$</sup> 79.0
                    </h2>
                    <p className="pricing-info">
                        Best for one-man bands, web creators, and freelancers.
                    </p>
                    <hr className="divider-default" />
                    <ul className="list-unstyled icons-listing theme-primary tick">
                        <li>3 projects</li>
                        <li>10 GB storage</li>
                        <li>13 Collaborators</li>
                        <li>100 Accounts</li>
                        <li>3 team members</li>
                    </ul>
                    <div className="text-center">
                        <a href="our-pricing.html" className="text-uppercase btn btn-secondary"><span className="outer-wrap"><span data-text="Try this Package">Try this Package</span></span></a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pricing-wrap alternate-version">
                    <div className="pricing-saving-wrap">
                        <span className="pricing-saving"style={{backgroundColor:'#ffe0ce94', color: 'black'}}>
                        Save Upto 90%
                        </span>
                    </div>
                    <div className="plan-name" style={{color:'#f75d15'}}>
                        Platinum Plan
                    </div>
                    <h2 className="plan-price">
                        <sup>$</sup> 159.0
                    </h2>
                    <p className="pricing-info">
                        Best for one-man bands, web creators, and freelancers.
                    </p>
                    <hr className="divider-default" />
                    <ul className="list-unstyled icons-listing theme-primary tick">
                        <li>3 projects</li>
                        <li>10 GB storage</li>
                        <li>13 Collaborators</li>
                        <li>100 Accounts</li>
                        <li>10 team members</li>
                    </ul>
                    <div className="text-center">
                        <a href="our-pricing.html" className="text-uppercase btn btn-secondary"><span className="outer-wrap"><span data-text="Try this Package">Try this Package</span></span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

</main>
    </>
  )
}

export default Pricingplan
