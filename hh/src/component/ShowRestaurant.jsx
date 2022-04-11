import React from 'react'
const ShowRestaurant = () => {
  return (
    <>
      <h1 classNameName='h'>helo</h1>
      <div className='container'>
        {/* <header className='site-header'> */}
          {/* <div className='container'>
            <div className='row'>
              <div className='col-lg-2'>
                <div className='header-logo'>
                  <a href='index.html'>
                    {/* <img src="logo.png" width="160" height="36" alt="Logo"> */}
                  {/* </a>
                </div>
              </div> */}
              {/* <div className='col-lg-10'>
                <div className='main-navigation'>
                  <button className='menu-toggle'>
                    <span></span>
                    <span></span>
                  </button>
                  <nav className='header-menu'>
                    <ul className='menu food-nav-menu'>
                      <li>
                        <a href='#home'>Home</a>
                      </li>
                      <li>
                        <a href='#about'>About</a>
                      </li>
                      <li>
                        <a href='#menu'>Menu</a>
                      </li>
                      <li>
                        <a href='#gallery'>Gallery</a>
                      </li>
                      <li>
                        <a href='#blog'>Blog</a>
                      </li>
                      <li>
                        <a href='#contact'>Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className='header-right'>
                    <form action='#' className='header-search-form for-des'>
                      <input
                        type='search'
                        className='form-input'
                        placeholder='Search Here...'
                      />
                      <button type='submit'>
                        <i className='uil uil-search'></i>
                      </button>
                    </form>
                    <a
                      href='javascript:void(0)'
                      className='header-btn header-cart'
                    >
                      <i className='uil uil-shopping-bag'></i>
                      <span className='cart-number'>3</span>
                    </a>
                    <a href='javascript:void(0)' className='header-btn'>
                      <i className='uil uil-user-md'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </header>  */}
        <div id='viewport'>
          <div id='js-scroll-content'>
            {/* <section className='main-banner' id='home'> */}
            <div className='js-parallax-scene'>
              <div className='banner-shape-1 w-100' data-depth='0.30'>
                <img src='assets/images/berry.png' alt='' />
              </div>
              <div className='banner-shape-2 w-100' data-depth='0.25'>
                <img src='assets/images/leaf.png' alt='' />
              </div>
            </div>
            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='banner-text'>
                      <h1 className='h1-title'>
                        Welcome to our
                        <span>India</span>
                        restaurant.
                      </h1>
                      <p>
                        This is Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Numquam eius vel tempore consectetur
                        nesciunt? Nam eius tenetur recusandae optio aperiam.
                      </p>
                      <div className='banner-btn mt-4'>
                        <a href='#menu' className='sec-btn'>
                          Check our Menu
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='banner-img-wp'>
                      <div
                        className='banner-img'
                        style='background-image: url(assets/images/main-b.jpg);'
                      ></div>
                    </div>
                    <div className='banner-img-text mt-4 m-auto'>
                      <h5 className='h5-title'>Sushi</h5>
                      <p>
                        this is Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* <section className='brands-sec'> */}
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='brand-title mb-5'>
                    <h5 className='h5-title'>Trusted by 70+ companies</h5>
                  </div>
                  <div className='brands-row'>
                    <div className='brands-box'>
                      <img src='assets/images/brands/b1.png' alt='' />
                    </div>
                    <div className='brands-box'>
                      <img src='assets/images/brands/b2.png' alt='' />
                    </div>
                    <div className='brands-box'>
                      <img src='assets/images/brands/b3.png' alt='' />
                    </div>
                    <div className='brands-box'>
                      <img src='assets/images/brands/b4.png' alt='' />
                    </div>
                    <div className='brands-box'>
                      <img src='assets/images/brands/b5.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='about-sec section' id='about'> */}
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='sec-title text-center mb-5'>
                    <p className='sec-sub-title mb-3'>About Us</p>
                    <h2 className='h2-title'>
                      Discover our <span>restaurant story</span>
                    </h2>
                    <div className='sec-title-shape mb-4'>
                      <img src='assets/images/title-shape.svg' alt='' />
                    </div>
                    <p>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Saepe dolore at aspernatur eveniet temporibus
                      placeat voluptatum quaerat accusamus possimus cupiditate,
                      quidem impedit sed libero id perspiciatis esse earum
                      repellat quam. Dolore modi temporibus quae possimus
                      accusantium, cum corrupti sed deserunt iusto at sapiente
                      nihil sint iste similique soluta dolor! Quod.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-8 m-auto'>
                  <div className='about-video'>
                    <div
                      className='about-video-img'
                      style='background-image: url(assets/images/about.jpg);'
                    ></div>
                    <div className='play-btn-wp'>
                      <a
                        href='assets/images/video.mp4'
                        data-fancybox='video'
                        className='play-btn'
                      >
                        <i className='uil uil-play'></i>
                      </a>
                      <span>Watch The Recipe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* <section */}
            {/* style='background-image: url(assets/images/menu-bg.png);'
            //   className='our-menu section bg-light repeat-img'
              id='menu'
            > */}
            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='sec-title text-center mb-5'>
                      <p className='sec-sub-title mb-3'>our menu</p>
                      <h2 className='h2-title'>
                        wake up early, <span>eat fresh & healthy</span>
                      </h2>
                      <div className='sec-title-shape mb-4'>
                        <img src='assets/images/title-shape.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-tab-wp'>
                  <div className='row'>
                    <div className='col-lg-12 m-auto'>
                      <div className='menu-tab text-center'>
                        <ul className='filters'>
                          <div className='filter-active'></div>
                          <li
                            className='filter'
                            data-filter='.all, .breakfast, .lunch, .dinner'
                          >
                            <img src='assets/images/menu-1.png' alt='' />
                            All
                          </li>
                          <li className='filter' data-filter='.breakfast'>
                            <img src='assets/images/menu-2.png' alt='' />
                            Breakfast
                          </li>
                          <li className='filter' data-filter='.lunch'>
                            <img src='assets/images/menu-3.png' alt='' />
                            Lunch
                          </li>
                          <li className='filter' data-filter='.dinner'>
                            <img src='assets/images/menu-4.png' alt='' />
                            Dinner
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='menu-list-row'>
                  <div className='row g-xxl-5 bydefault_show' id='menu-dish'>
                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp breakfast'
                      data-cat='breakfast'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/1.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          5<i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Fresh Chicken Veggies</h3>
                          <p>120 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Non Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>2</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 499</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp breakfast'
                      data-cat='breakfast'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/2.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          4.3
                          <i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Grilled Chicken</h3>
                          <p>80 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Non Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>1</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 359</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp lunch'
                      data-cat='lunch'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/3.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          4<i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Panner Noodles</h3>
                          <p>100 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>2</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 149</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp lunch'
                      data-cat='lunch'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/4.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          4.5
                          <i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Chicken Noodles</h3>
                          <p>120 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Non Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>2</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 379</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp dinner'
                      data-cat='dinner'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/5.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          5<i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Bread Boiled Egg</h3>
                          <p>120 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Non Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>2</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 99</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-sm-6 dish-box-wp dinner'
                      data-cat='dinner'
                    >
                      <div className='dish-box text-center'>
                        <div className='dist-img'>
                          <img src='assets/images/dish/6.png' alt='' />
                        </div>
                        <div className='dish-rating'>
                          5<i className='uil uil-star'></i>
                        </div>
                        <div className='dish-title'>
                          <h3 className='h3-title'>Immunity Dish</h3>
                          <p>120 calories</p>
                        </div>
                        <div className='dish-info'>
                          <ul>
                            <li>
                              <p>Type</p>
                              <b>Veg</b>
                            </li>
                            <li>
                              <p>Persons</p>
                              <b>2</b>
                            </li>
                          </ul>
                        </div>
                        <div className='dist-bottom-row'>
                          <ul>
                            <li>
                              <b>Rs. 159</b>
                            </li>
                            <li>
                              <button className='dish-add-btn'>
                                <i className='uil uil-plus'></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='two-col-sec section'> */}
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <div className='sec-img mt-5'>
                    <img src='assets/images/pizza.png' alt='' />
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='sec-text'>
                    <h2 className='xxl-title'>Chicken Pepperoni</h2>
                    <p>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Amet dolores eligendi earum eveniet soluta officiis
                      asperiores repellat, eum praesentium nihil totam. Non ipsa
                      expedita repellat atque mollitia praesentium assumenda quo
                      distinctio excepturi nobis tenetur, cum ab vitae fugiat
                      hic aspernatur? Quos laboriosam, repudiandae
                      exercitationem atque a excepturi vel. Voluptas, ipsa.
                    </p>
                    <p>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. At fugit laborum voluptas magnam sed ad illum? Minus
                      officiis quod deserunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='two-col-sec section pt-0'> */}
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-6 order-lg-1 order-2'>
                  <div className='sec-text'>
                    <h2 className='xxl-title'>Chicken Pepperoni</h2>
                    <p>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Amet dolores eligendi earum eveniet soluta officiis
                      asperiores repellat, eum praesentium nihil totam. Non ipsa
                      expedita repellat atque mollitia praesentium assumenda quo
                      distinctio excepturi nobis tenetur, cum ab vitae fugiat
                      hic aspernatur? Quos laboriosam, repudiandae
                      exercitationem atque a excepturi vel. Voluptas, ipsa.
                    </p>
                    <p>
                      This is Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. At fugit laborum voluptas magnam sed ad illum? Minus
                      officiis quod deserunt.
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 order-lg-2 order-1'>
                  <div className='sec-img'>
                    <img src='assets/images/sushi.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='book-table section bg-light'> */}
            <div className='book-table-shape'>
              <img src='assets/images/table-leaves-shape.png' alt='' />
            </div>

            <div className='book-table-shape book-table-shape2'>
              <img src='assets/images/table-leaves-shape.png' alt='' />
            </div>

            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='sec-title text-center mb-5'>
                      <p className='sec-sub-title mb-3'>Book Table</p>
                      <h2 className='h2-title'>Opening Table</h2>
                      <div className='sec-title-shape mb-4'>
                        <img src='assets/images/title-shape.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='book-table-info'>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <div className='table-title text-center'>
                        <h3>Monday to Thrusday</h3>
                        <p>9:00 am - 22:00 pm</p>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='call-now text-center'>
                        <i className='uil uil-phone'></i>
                        <a href='tel:+91-8866998866'>+91 - 8866998866</a>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='table-title text-center'>
                        <h3>Friday to Sunday</h3>
                        <p>11::00 am to 20:00 pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row' id='gallery'>
                  <div className='col-lg-10 m-auto'>
                    <div className='book-table-img-slider' id='icon'>
                      <div className='swiper-wrapper'>
                        <a
                          href='assets/images/bt1.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt1.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt2.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt2.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt3.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt3.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt4.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt4.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt1.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt1.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt2.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt2.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt3.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt3.jpg)'
                        ></a>
                        <a
                          href='assets/images/bt4.jpg'
                          data-fancybox='table-slider'
                          className='book-table-img back-img swiper-slide'
                          style='background-image: url(assets/images/bt4.jpg)'
                        ></a>
                      </div>

                      <div className='swiper-button-wp'>
                        <div className='swiper-button-prev swiper-button'>
                          <i className='uil uil-angle-left'></i>
                        </div>
                        <div className='swiper-button-next swiper-button'>
                          <i className='uil uil-angle-right'></i>
                        </div>
                      </div>
                      <div className='swiper-pagination'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='our-team section'> */}
            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='sec-title text-center mb-5'>
                      <p className='sec-sub-title mb-3'>Our Team</p>
                      <h2 className='h2-title'>Meet our Chefs</h2>
                      <div className='sec-title-shape mb-4'>
                        <img src='assets/images/title-shape.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row team-slider'>
                  <div className='swiper-wrapper'>
                    <div className='col-lg-4 swiper-slide'>
                      <div className='team-box text-center'>
                        <div
                          style='background-image: url(assets/images/chef/c1.jpg);'
                          className='team-img back-img'
                        ></div>
                        <h3 className='h3-title'>Nilay Hirpara</h3>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i className='uil uil-facebook-f'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-instagram'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-youtube'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 swiper-slide'>
                      <div className='team-box text-center'>
                        <div
                          style='background-image: url(assets/images/chef/c2.jpg);'
                          className='team-img back-img'
                        ></div>
                        <h3 className='h3-title'>Ravi Kumawat</h3>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i className='uil uil-facebook-f'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-instagram'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-youtube'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 swiper-slide'>
                      <div className='team-box text-center'>
                        <div
                          style='background-image: url(assets/images/chef/c3.jpg);'
                          className='team-img back-img'
                        ></div>
                        <h3 className='h3-title'>Navnit Kumar</h3>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i className='uil uil-facebook-f'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-instagram'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-youtube'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 swiper-slide'>
                      <div className='team-box text-center'>
                        <div
                          style='background-image: url(assets/images/chef/c4.jpg);'
                          className='team-img back-img'
                        ></div>
                        <h3 className='h3-title'>Pranav Badgal</h3>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i className='uil uil-facebook-f'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-instagram'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-youtube'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 swiper-slide'>
                      <div className='team-box text-center'>
                        <div
                          style='background-image: url(assets/images/chef/c5.jpg);'
                          className='team-img back-img'
                        ></div>
                        <h3 className='h3-title'>Priyotosh Dey</h3>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i className='uil uil-facebook-f'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-instagram'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='uil uil-youtube'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-button-wp'>
                    <div className='swiper-button-prev swiper-button'>
                      <i className='uil uil-angle-left'></i>
                    </div>
                    <div className='swiper-button-next swiper-button'>
                      <i className='uil uil-angle-right'></i>
                    </div>
                  </div>
                  <div className='swiper-pagination'></div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* {/* <section className='testimonials section bg-light'> */}
            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='sec-title text-center mb-5'>
                      <p className='sec-sub-title mb-3'>What they say</p>
                      <h2 className='h2-title'>
                        What our customers <span>say about us</span>
                      </h2>
                      <div className='sec-title-shape mb-4'>
                        <img src='assets/images/title-shape.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <div className='testimonials-img'>
                      <img src='assets/images/testimonial-img.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <div className='testimonials-box'>
                          <div className='testimonial-box-top'>
                            <div
                              className='testimonials-box-img back-img'
                              style='background-image: url(assets/images/testimonials/t1.jpg);'
                            ></div>
                            <div className='star-rating-wp'>
                              <div className='star-rating'>
                                <span
                                  className='star-rating__fill'
                                  style='width:85%'
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div className='testimonials-box-text'>
                            <h3 className='h3-title'>Nilay Hirpara</h3>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Itaque, quisquam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='testimonials-box'>
                          <div className='testimonial-box-top'>
                            <div
                              className='testimonials-box-img back-img'
                              style='background-image: url(assets/images/testimonials/t2.jpg);'
                            ></div>
                            <div className='star-rating-wp'>
                              <div className='star-rating'>
                                <span
                                  className='star-rating__fill'
                                  style='width:80%'
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div className='testimonials-box-text'>
                            <h3 className='h3-title'>Ravi Kumawat</h3>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Itaque, quisquam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='testimonials-box'>
                          <div className='testimonial-box-top'>
                            <div
                              className='testimonials-box-img back-img'
                              style='background-image: url(assets/images/testimonials/t3.jpg);'
                            ></div>
                            <div className='star-rating-wp'>
                              <div className='star-rating'>
                                <span
                                  className='star-rating__fill'
                                  style='width:89%'
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div className='testimonials-box-text'>
                            <h3 className='h3-title'>Navnit Kumar</h3>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Itaque, quisquam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='testimonials-box'>
                          <div className='testimonial-box-top'>
                            <div
                              className='testimonials-box-img back-img'
                              style='background-image: url(assets/images/testimonials/t4.jpg);'
                            ></div>
                            <div className='star-rating-wp'>
                              <div className='star-rating'>
                                <span
                                  className='star-rating__fill'
                                  style='width:100%'
                                ></span>
                              </div>
                            </div>
                          </div>
                          <div className='testimonials-box-text'>
                            <h3 className='h3-title'>Somyadeep Bhowmik</h3>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Itaque, quisquam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            {/* <section */}
            {/* //   className='faq-sec section-repeat-img'
              style='background-image: url(assets/images/faq-bg.png);'
            > */}
            <div className='sec-wp'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='sec-title text-center mb-5'>
                      <p className='sec-sub-title mb-3'>faqs</p>
                      <h2 className='h2-title'>
                        Frequently <span>asked questions</span>
                      </h2>
                      <div className='sec-title-shape mb-4'>
                        <img src='assets/images/title-shape.svg' alt='' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='faq-row'>
                  <div className='faq-box'>
                    <h4 className='h4-title'>What are the login hours?</h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio.
                    </p>
                  </div>
                  <div className='faq-box'>
                    <h4 className='h4-title'>What do i get my refund?</h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className='faq-box'>
                    <h4 className='h4-title'>
                      How long it will take food to arrive?
                    </h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio.
                    </p>
                  </div>
                  <div className='faq-box'>
                    <h4 className='h4-title'>
                      Does your restaurant has both veg and non veg?
                    </h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio. Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Voluptates, distinctio?
                    </p>
                  </div>
                  <div className='faq-box'>
                    <h4 className='h4-title'>What is cost of food delivery?</h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Nam officiis ducimus, cum enim
                      repudiandae animi.
                    </p>
                  </div>
                  <div className='faq-box'>
                    <h4 className='h4-title'>
                      Who is eligible for pro membership?
                    </h4>
                    <p>
                      It is Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Temporibus ipsum vitae fugit laboriosam dolor
                      distinctio.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </section> */}

            <div
              className='bg-pattern bg-light repeat-img'
              style='background-image: url(assets/images/blog-pattern-bg.png);'
            >
              {/* <section className="blog-sec section" id="blog"> */}
              <div className='sec-wp'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='sec-title text-center mb-5'>
                        <p className='sec-sub-title mb-3'>Our blog</p>
                        <h2 className='h2-title'>Latest Publication</h2>
                        <div className='sec-title-shape mb-4'>
                          <img src='assets/images/title-shape.svg' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className='blog-box'>
                        <div
                          className='blog-img back-img'
                          style='background-image: url(assets/images/blog/blog1.jpg);'
                        ></div>
                        <div className='blog-text'>
                          <p className='blog-date'>September.15.2021</p>
                          <a href='#' className='h4-title'>
                            Energy Drink which you can make at home.
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Pariatur ipsa explicabo atque reprehenderit
                            beatae! Accusantium soluta consequuntur blanditiis
                            amet ad.
                          </p>
                          <a href='#' className='sec-btn'>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='blog-box'>
                        <div
                          className='blog-img back-img'
                          style='background-image: url(assets/images/blog/blog2.jpg);'
                        ></div>
                        <div className='blog-text'>
                          <p className='blog-date'>October.15.2021</p>
                          <a href='#' className='h4-title'>
                            Fresh Veggie and rice combo for dinner.
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Pariatur ipsa explicabo atque reprehenderit
                            beatae! Accusantium soluta consequuntur blanditiis
                            amet ad.
                          </p>
                          <a href='#' className='sec-btn'>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='blog-box'>
                        <div
                          className='blog-img back-img'
                          style='background-image: url(assets/images/blog/blog3.jpg);'
                        ></div>
                        <div className='blog-text'>
                          <p className='blog-date'>November.15.2021</p>
                          <a href='#' className='h4-title'>
                            Chicken burger with double nuggets
                          </a>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Pariatur ipsa explicabo atque reprehenderit
                            beatae! Accusantium soluta consequuntur blanditiis
                            amet ad.
                          </p>
                          <a href='#' className='sec-btn'>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </section> */}

              {/* {/* <section className='newsletter-sec section pt-0'> */}
              <div className='sec-wp'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8 m-auto'>
                      <div
                        className='newsletter-box text-center back-img white-text'
                        style='background-image: url(assets/images/news.jpg);'
                      >
                        <div className='bg-overlay dark-overlay'></div>
                        <div className='sec-wp'>
                          <div className='newsletter-box-text'>
                            <h2 className='h2-title'>
                              Subscribe our newsletter
                            </h2>
                            <p>
                              This is Lorem ipsum dolor sit amet consectetur
                              adipisicing elit ad veritatis.
                            </p>
                          </div>
                          <form action='#' className='newsletter-form'>
                            <input
                              type='email'
                              className='form-input'
                              placeholder='Enter your Email Here'
                              required
                            />
                            <button
                              type='submit'
                              className='sec-btn primary-btn'
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </section> */}
            </div>
          </div>
        </div>
      </div>
     </>
  )
}
export default ShowRestaurant
