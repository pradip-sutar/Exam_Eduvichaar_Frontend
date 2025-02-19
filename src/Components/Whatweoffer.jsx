import React, { useEffect, useState } from 'react'
const Whatweoffer = () => { 
    const [fstProgressBar,setFstPrograssBar] = useState(0)
    const [secProgressBar,setSecPrograssBar] = useState(0)
    useEffect(()=>{
        setFstPrograssBar('60%');
        setSecPrograssBar('40%')
    },[])
  return (
    <>
      <main id="body-content ">   
      <section className="section-spacing pt-0">            
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-0">
        <div className="img-gradient">
          <img src="assets/images/about_us_img.jpg" alt />
        </div>
        <div className="years-started wow fadeInUp">
          <div className="years">
            10<sup>+</sup>
            <span>Years</span>
          </div>
          <div className="content fun-fact">
            <h1>                                    
              <span className="timer" data-to={2010} data-speed={2000}>2010</span>
              <span>Making Business Since</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <div className="section-title text-start">
          <span style={{color:'#1d92c6'}}>What We Offer</span>
          <h2 className="wow CreateDig">Discover effortless <strong>Business and Marketing in one</strong></h2>
          <p>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. The Vesti at bulum nec odio aea the dumm ipsumm ipsum dolocons is suada a and fadolorit to the consectetur elit. Grursus mal suada faci lisis Lorem dolarorit the ametion consectetur elit. 
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-8 col-sm-7 mb-0">                                
            {/* Progress Bar Start */}
            <div className="progress-wrap">
              <h6>Project delivered on time</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: fstProgressBar, transition: 'ease-in 2s' }} role="progressbar" data-width={90}>
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="progress-wrap">
              <h6>Availability</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: secProgressBar }} role="progressbar" data-width={70}>
                  <span>70%</span>
                </div>
              </div>
            </div>
            {/* End Progressbar */}
          </div>                           
          <div className="col-md-4 col-sm-5">
            <ul className="list-unstyled icons-listing theme-dark mb-0 check">
              <li>Intregrations</li>
              <li>Business Strategy</li>
              <li>Business Setup</li>
              <li>Easy Documentation</li>
            </ul>
          </div>
        </div>
        <p className="mt-4">Let’s Come Up With a <strong>Start Free Trial 30-Day Money Back Guarantee</strong> For New Purchases​. </p>
        <div className="mt-5 mt-lg-0">
                        <a href="contact.html" className="btn btn-square btn-primary" style={{backgroundColor: '#f75d15', border: '#f75d15'}}><span className="outer-wrap"><span data-text="Read More">Read More</span></span></a>
                        </div>
        {/* <a href="contact.html" className="btn btn-default"><span className="outer-wrap"><span data-text="Read more">Read more</span></span></a> */}
      </div>
    </div>               
  </div>
</section>
</main>
    </>
  )
}

export default Whatweoffer
