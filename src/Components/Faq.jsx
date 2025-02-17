import React from 'react'

const Faq = () => {
  return (
    <>
      <main id="body-content ">  
       <section className="section-spacing">            
  <div className="container pos-rel">
    <div className="row align-items-center">                    
      <div className="col-xl-7 mx-auto col-lg-8 mb-0">
        <div className="home-default-faqs-counter-wrap">
          <div className="text-center">
            <img src="assets/images/home-default-faqs.png" alt />
          </div>
          <div className="home-default-faqs-counter"style={{backgroundColor:'#1f93c6'}}>
            <div className="hstack gap-3">
              <div className="counter-text fun-fact">
                <h2>
                  <span className="timer text-white" data-to={12} data-speed={2000}>12</span><sub>K</sub>
                </h2>
                <div className="text">
                  Support Request resolved
                </div>
              </div>
              <div className="vr" />
              <div className="counter-text fun-fact">
                <h2>
                  <span className="timer text-white" data-to={97} data-speed={2000}>97.8</span><sub>%</sub>
                </h2>
                <div className="text">
                  Customer satisfaction
                </div>
              </div>
            </div>                                
          </div>
        </div>
      </div>
      <div className="mx-auto col-xl-5 col-lg-8 mt-5 mt-xl-0">
        <div className="section-title text-start">
          <span style={{color:'#1f93c6'}}>FAQ</span>
          <h2 className="wow FAQKnow">Everything you need to <strong>Know to work better</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
        <div className="theme-accordian">
          <div className="accordion accordion-flush theme-accordian" id="accordionFlushExampleSimple">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-gap-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-gap-collapseOne" aria-expanded="false" aria-controls="flush-gap-collapseOne">
                  First and foremost, you never want to go?
                </button>
              </h2>
              <div id="flush-gap-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-gap-headingOne" data-bs-parent="#accordionFlushExampleSimple">
                <div className="accordion-body">
                  Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-gap-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-gap-collapseTwo" aria-expanded="false" aria-controls="flush-gap-collapseTwo">
                  How can i customized this theme?
                </button>
              </h2>
              <div id="flush-gap-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-gap-headingTwo" data-bs-parent="#accordionFlushExampleSimple">
                <div className="accordion-body">
                  Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-gap-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-gap-collapseThree" aria-expanded="false" aria-controls="flush-gap-collapseThree">
                  Can I cancel or change my order?
                </button>
              </h2>
              <div id="flush-gap-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-gap-headingThree" data-bs-parent="#accordionFlushExampleSimple">
                <div className="accordion-body">
                  Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-gap-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-gap-collapseFour" aria-expanded="false" aria-controls="flush-gap-collapseFour">
                  How can I exchange an item bought online?
                </button>
              </h2>
              <div id="flush-gap-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-gap-headingFour" data-bs-parent="#accordionFlushExampleSimple">
                <div className="accordion-body">
                  Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Arya.
                </div>
              </div>
            </div>
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

export default Faq
