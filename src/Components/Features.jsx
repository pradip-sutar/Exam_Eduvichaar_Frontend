import React from 'react'

 const Features = () => {
  return (
    <>
     <main id="body-content ">   
  <section className="section-spacing bg-light-blue section-padding">
  <div className="container pos-rel">
    <div className="row">
      <div className="col-xl-6 col-lg-7 mx-auto">
        <div className="section-title text-center">
          <span style={{color:'#1d92c6'}}> Features </span>
          <h2 className="wow CreateDig">The tools you get with <strong>Our Platform services</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>
    </div>
    <ul className="nav nav-pills theme-tabbing nav-fill bordered mb-4" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="pills-analytics-fill-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics-fill" type="button" role="tab" aria-controls="pills-analytics-fill" aria-selected="true">Analytics Monitor Growth</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-traffic-fill-tab" data-bs-toggle="pill" data-bs-target="#pills-traffic-fill" type="button" role="tab" aria-controls="pills-traffic-fill" aria-selected="false">Traffic Rank</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-monitoring-fill-tab" data-bs-toggle="pill" data-bs-target="#pills-monitoring-fill" type="button" role="tab" aria-controls="pills-monitoring-fill" aria-selected="false">App Monitoring</button>
      </li>
    </ul>
    <div className="tab-content home-services-tabs" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-analytics-fill" role="tabpanel" aria-labelledby="pills-analytics-fill-tab">
        <div className="img-abstract">
          &nbsp;
        </div>
        <div className="row align-items-center">
          <div className="col-xl-65 col-lg-6">                        
            <div className="tab-img">
              <img src="assets/images/tab-img.png" alt />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-start">
            <div className="section-title">
              <h5 className="fw-7">Advanced analytic monitor growth</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor
                dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <ul className="list-unstyled icons-listing theme-primary mb-4 check">
              <li>Enjoy lifetime free updates.</li>
              <li>Cross browser and cross platform compatibility.</li>
              <li>Friendly and effective support team.</li>
            </ul>
            <div className="mt-5">
              <a href="our-services.html" className="btn btn-primary" style={{backgroundColor: '#f75d15', border: '#f75d15'}}><span className="outer-wrap"><span data-text="View All Services">View All Services</span></span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-traffic-fill" role="tabpanel" aria-labelledby="pills-traffic-fill-tab">
        <div className="img-abstract">
          &nbsp;
        </div>
        <div className="row align-items-center">
          <div className="col-xl-65 col-lg-6">                        
            <div className="tab-img">
              <img src="assets/images/tabbing_img.png" alt />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-start">
            <div className="section-title">
              <h5 className="fw-7">Advanced analytic monitor growth</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor
                dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <ul className="list-unstyled icons-listing theme-primary mb-4 check">
              <li>Enjoy lifetime free updates.</li>
              <li>Cross browser and cross platform compatibility.</li>
              <li>Friendly and effective support team.</li>
            </ul>
            <div className="mt-5">
              <a href="our-services.html" className="btn btn-primary" style={{backgroundColor: '#f75d15', border: '#f75d15'}}><span className="outer-wrap"><span data-text="View All Services">View All Services</span></span></a>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-monitoring-fill" role="tabpanel" aria-labelledby="pills-monitoring-fill-tab">
        <div className="img-abstract">
          &nbsp;
        </div>
        <div className="row align-items-center">
          <div className="col-xl-65 col-lg-6">                        
            <div className="tab-img">
              <img src="assets/images/card_img_1.png" alt />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-start">
            <div className="section-title">
              <h5 className="fw-7">Advanced analytic monitor growth</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor
                dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <ul className="list-unstyled icons-listing theme-primary mb-4 check">
              <li>Enjoy lifetime free updates.</li>
              <li>Cross browser and cross platform compatibility.</li>
              <li>Friendly and effective support team.</li>
            </ul>
            <div className="mt-5">
              <a href="our-services.html" className="btn " style={{backgroundColor: '#f75d15', border: '#f75d15'}}><span className="outer-wrap" ><span data-text="View All Services">View All Services</span></span></a>
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
export default Features