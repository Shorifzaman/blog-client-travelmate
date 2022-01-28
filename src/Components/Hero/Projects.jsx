import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Projectdata from './ProjectsData'
import Button from '@material-ui/core/Button';
import SwiperCore, {
    Autoplay,EffectCoverflow,Pagination
  } from 'swiper/core';
import { BsHeart } from 'react-icons/bs';
import { Grid } from '@material-ui/core';
// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow,Pagination]);

function Projects() {

    const [projectItem, setProjectItem] = useState(Projectdata)
    return (
        <>
<Grid container spacing={2}>
  <Grid item xs={8}  sm={12} md={4}>
    <h1>222222</h1>
  </Grid>
  {/* <Grid item xs={4}>
  <h1>222222</h1>
  </Grid>
  <Grid item xs={4}>
  <h1>222222</h1>
  </Grid>
  <Grid item xs={8}>
  <h1>222222</h1>
  </Grid> */}
</Grid>




        <div className="col-12 mx-auto">                           
            <Swiper effect={'coverflow'}
                grabCursor={true} 
                centeredSlides={false}
                // slidesPerView={3} 
                coverflowEffect={{ "rotate": 0, "stretch": 0, "depth": 300, "modifier": 1, "slideShadows": false }}
                // coverflowEffect={{"rotate": 50,"stretch": 0,"depth": 100,"modifier": 1,"slideShadows": true}} pagination={true} loop={false}
                // autoplay={{"delay": 2500}}
                // breakpoints={{
                //     // when window width is >= 640px
                //     668: {
                //       width: 668,
                //       slidesPerView: 1,
                //     },
                //     // when window width is >= 768px
                //     768: {
                //       maxWidth: 768,
                //       slidesPerView: 3,
                //     },
                //   }}
                //   slidesPerView={3} // slide responsive 
                 breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                    425: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }}
className="mySwiper">


           
                {projectItem.map((value, index) => {

                return (
                    <SwiperSlide >
                        <div className="d-flex flex-row" key={index}>
                            <div className="card shadow p-3 mb-1 bg-body rounded  bd-highlight mb-0 border">
                                <img src={value.image} className="card-img-top" style={{height: "250px"}} alt="cardimg" />
                                <div  style={{height: "250px", width:"100%"}} className="card-body  bd-highlight mb-0 border">
                                    <h5 className="card-title">{value.projectTitle}</h5>
                                    <p className="card-text">Tools & Technology : {value.projectTools}</p>
                                    <a href={value.liveDemo} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                                        <Button className="btn btn-outline-info">Donate</Button>
                                    </a>
                                    <a href={value.github} className="btn btn-outline-info" target="_blank" rel="noreferrer">
                                        <BsHeart/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                        )
                    })}


           

            </Swiper>
                           

        </div>
        </>
    );
}

export default Projects;