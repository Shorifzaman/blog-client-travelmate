import React from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';

const About = () => {
    return (
        <>
<div class="container">
    <div class="row align-items-center py-3">
    <SectionTitle text={'About us'} />
    <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
                <h2 class="font-weight-bold mb-3"><SectionTitle text={'Aidup Charity'} /></h2>
                
                <h4 class="title mb-4">
                    Our mission is to <br />
                    make your life easier.
                </h4>
                <p class="text-muted mb-0">The practice of charity means the voluntary giving of help to those in need, as a humanitarian act. There are a number of philosophies about charity, often associated with religion. Effective altruism is the use of evidence and reasoning to determine</p>

                <div class="row">
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-play h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Donate for helpless</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Save the Humanity</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-user h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Support Humanity</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 pt-2">
                        <div class="media align-items-center rounded shadow p-3">
                            <i class="fa fa-image h4 mb-0 text-custom"></i>
                            <h6 class="ml-3 mb-0">Development</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* --------- */}
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://codexlayer.com/html/ayuda/images/resource/about-1.jpg" class="img-fluid" alt="img" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        

                        <div class="col-12">
                            <div class="mt-4 pt-2 text-right">
                                <a href="/blog" class="btn btn-info">Read More <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                 
                </div>
               

                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://codexlayer.com/html/ayuda/images/resource/about-2.jpg" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                     

                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="http://primehostingindia.com/templatemonster/react/aidup/assets/img/about5.png" class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
              
            </div>
          
        </div>  
    </div>
   
</div>
        </>
    );
};

export default About;