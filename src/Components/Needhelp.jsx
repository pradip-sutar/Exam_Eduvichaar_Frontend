import React from 'react'

const Needhelp = () => {
  return (
    <>
    <main id="body-content "> 
       <section className="faqs-bg section-spacing home-software-abstract pt-5">          
  <div className="container pos-rel">
    <div className="row">
      <div className="col-xl-5 col-lg-6">
        <div className="home-services-imgs">
          <img src="assets/images/home-default-img-1.png" alt />
          <img src="assets/images/home-default-img-2.png" className="off-pattern" alt />
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 text-start">
        <div className="section-title">
          <span style={{color:'#f75d15'}}>Need Help With Our Services</span>
          <h2 className="wow CreateDig">Are you looking for <strong> <br />Our services or want to try it for free?</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
        <div className="btn-set">
          <a href="javascript:" className="btn btn-primary"style={{backgroundColor: '#f75d15', border: '#f75d15'}} data-trigger="#signup"><span className="outer-wrap"><span data-text="Get A Free Quote">Get A Free Quote</span></span></a>
          <a href="#" className="btn btn-secondary"><span className="outer-wrap"><span data-text="Contact us">Contact us</span></span></a>
        </div>
      </div>
    </div>
    <div className="img-abstract">
      &nbsp;
    </div>
  </div>
</section>
</main>
    </>
  )
}

export default Needhelp
