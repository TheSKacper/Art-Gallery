import React, { useContext } from 'react';
import { MyContext } from '../../context/Context';
import './home.css';
import picture1 from '../../assets/graffiti-508272_1280 (1).jpg';
import picture2 from '../../assets/painting-1974614_1280.jpg';
import picture3 from '../../assets/still-life-562357_1280.jpg';

const Home = () => {
  const context = useContext(MyContext);
  console.log(context.data);
  return (
    <div className='home'>
      <header>
        <div className='box-home text-center text-white text-uppercase'>
          <h1 className='mb-3' data-aos='fade-up' data-aos-delay='200'>
            Welcome and thanks
          </h1>
          <p className='mb-5' data-aos='fade-up' data-aos-delay='250'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a
            href='#about'
            className='btn'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            Check more
          </a>
        </div>
        <div className='box-shadow'></div>
      </header>
      <section className='aboutCard py-5' id='about' data-aos='fade-up' data-aos-delay='200'>
        <div className='container homeContainer'>
          <h2 className='text-center'>What can you buy ? </h2>

          <div class='card-group d-lg-none'>
            <div class='card me-3 mt-5'>
              <img src={picture1} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>Head queen</h5>
                <p class='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div class='card me-3'>
              <img src={picture2} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>wild horses</h5>
                <p class='card-text'>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div class='card me-3'>
              <img src={picture3} class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>English tea</h5>
                <p class='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>

          <div
            id='carouselExampleIndicators'
            class='carousel slide mt-5 d-none d-lg-block'
          >
            <div class='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0'
                class='active'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'
              ></button>
            </div>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img src={picture1} className='w-100' alt='mask' />
              </div>
              <div class='carousel-item'>
                <img src={picture2} alt='horses' className='w-100' />
              </div>
              <div class='carousel-item'>
                <img src={picture3} alt='cup of tee' className='w-100' />
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className='order py-5' id='order' data-aos='fade-up' data-aos-delay='200'>
        <div className='container homeContainer'>
          <h2 className='text-center mb-5'>How to buy ? </h2>
          <div className='row text-center mb-5'>
            <div className='col-md-4 order-item'>
              <i class='bi bi-1-square'></i>
              <p>Log in</p>
            </div>
            <div className='col-md-4 order-item'>
              <i class='bi bi-2-square'></i>
              <p>check pictures</p>
            </div>
            <div className='col-md-4 order-item'>
              <i class='bi bi-3-square'></i>
              <p>buy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
