
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>

        {/* START TOP HEADER CLASS */}
        <div className="top_header_banner">
          {/* START LOGO WITH CONTACT */}
          <section className="logo-contact">
            <div className="container-fluid" style={{ padding: '0 2%' }}>
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-4 col-sm-6 col-xs-12">
                  <div className="single-top-contact">
                    <i className="ti-mobile" />
                    <h4><a href="tel:+917503517545">+91 7503517545</a></h4>
                  </div>
                </div>{/*- END COL */}
                <div className="col-lg-auto col-md-4 col-sm-6 col-xs-12">
                  <div className="single-top-contact">
                    <i className="ti-email" />
                    <h4><a href="mailto:krishnaartinstitute@gmail.com">krishnaartinstitute@gmail.com</a></h4>
                  </div>
                </div>{/*- END COL */}
                <div className="col-lg-auto col-md-4 col-sm-6 col-xs-12">
                  <div className="single-top-contact">
                    <i className="ti-alarm-clock" />
                    <h4>Mon to sat Open: 9am - 6pm</h4>
                  </div>
                </div>{/*- END COL */}
                <div className="col-lg-auto col-md-4 col-sm-6 col-xs-12">
                  <div className="top_social_profile">
                    <ul>
                      <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                      <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>{/*- END COL */}
              </div>{/*- END ROW */}
            </div>{/*- END CONTAINER */}
          </section>
          {/* END LOGO WITH CONTACT */}
          {/* START NAVBAR */}
          <div id="navigation" className="navbar-light bg-faded site-navigation">
            <div className="container-fluid" style={{ padding: '0 2%' }}>
              <div className="row justify-content-between align-items-center">
                <div className="col-auto align-self-center">
                  <div className="site-logo">
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                      <img src="assets/images/all-img/krishna-icon.png" alt="Krishna Art Institute Logo" style={{ maxHeight: '60px' }} />
                      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                        <span style={{
                          fontSize: '24px',
                          fontWeight: '800',
                          fontFamily: '"Lexend", sans-serif',
                          background: 'linear-gradient(90deg, #1a2d62, #2c7aff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          letterSpacing: '-0.5px',
                        }}>Krishna</span>
                        <span style={{
                          fontSize: '9px',
                          fontWeight: '700',
                          fontFamily: '"Lexend", sans-serif',
                          color: '#6b7a99',
                          letterSpacing: '4px',
                          textTransform: 'uppercase',
                          marginTop: '3px',
                        }}>Art Institute</span>
                      </span>
                    </a>
                  </div>
                </div>{/*- END Col */}
                <div className="col d-none d-lg-flex" style={{ paddingLeft: '60px' }}>
                  <style>{`
                    #main-menu ul li:hover > ul {
                      opacity: 1 !important;
                      visibility: visible !important;
                      pointer-events: auto !important;
                      display: block !important;
                    }
                    #main-menu ul li {
                      padding-bottom: 20px !important; /* Bridge any potential hover gaps */
                      margin-bottom: -20px !important;
                    }
                  `}</style>
                  <nav id="main-menu">
                    <ul>
                      <li className="menu-item-has-children"><a href="#">Home</a>
                        <ul>
                          <li><a href="/">Home One</a></li>
                          <li><a href="/">Home Two</a></li>
                        </ul>
                      </li>
                      <li><a href="/">About</a></li>
                      <li className="menu-item-has-children"><a href="/">Course</a>
                        <ul>
                          <li><a href="/">Course One</a></li>
                          <li><a href="/">Course Two</a></li>
                          <li><a href="/">Course Three</a></li>
                          <li><a href="/">Course Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="#">Pages</a>
                        <ul>
                          <li><a href="/">Instructor</a></li>
                          <li><a href="/">Instructor Details</a></li>
                          <li><a href="/">Event</a></li>
                          <li><a href="/">Single Event</a></li>
                          <li><a href="/">Pricing Plan</a></li>
                          <li><a href="/">Faq Page</a></li>
                          <li><a href="/">Login Page</a></li>
                          <li><a href="/">Register</a></li>
                          <li><a href="/">404</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="#">Shop</a>
                        <ul>
                          <li><a href="/">Shop</a></li>
                          <li><a href="/">Single Shop</a></li>
                          <li><a href="/">Cart</a></li>
                          <li><a href="/">Checkout</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="/">Blog</a>
                        <ul>
                          <li><a href="/">Blog</a></li>
                          <li><a href="/">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="/">Contact</a></li>
                    </ul>
                  </nav>
                </div>{/*- END Col */}
                <div className="col-auto d-none d-xl-block text-end align-self-center">
                  <div className="home_lc">
                    <a href="#" className="hlc">
                      <i className="fa-regular fa-heart" />
                      <span className="gactive">0</span>
                    </a>
                  </div>
                  <div className="call_to_action">
                    <a className="btn_two" href="/">Enroll Now <i className="fa-solid fa-arrow-right" /></a>
                  </div>{/*- END SOCIAL PROFILE */}
                </div>{/*- END Col */}
                <ul className="mobile_menu">
                  <li><a href="#">Home</a>
                    <ul className="sub-menu">
                      <li><a href="/">Home One</a></li>
                      <li><a href="/">Home Two</a></li>
                    </ul>
                  </li>
                  <li><a href="/">About</a></li>
                  <li><a href="#">Course</a>
                    <ul className="sub-menu">
                      <li><a href="/">Course One</a></li>
                      <li><a href="/">Course Two</a></li>
                      <li><a href="/">Course Three</a></li>
                      <li><a href="/">Course Details</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="/">Instructor</a></li>
                      <li><a href="/">Instructor Details</a></li>
                      <li><a href="/">Event</a></li>
                      <li><a href="/">Single Event</a></li>
                      <li><a href="/">Pricing Plan</a></li>
                      <li><a href="/">Faq Page</a></li>
                      <li><a href="/">Login Page</a></li>
                      <li><a href="/">Register</a></li>
                      <li><a href="/">404</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="/">Shop</a></li>
                      <li><a href="/">Single Shop</a></li>
                      <li><a href="/">Cart</a></li>
                      <li><a href="/">Checkout</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="/">Blog</a></li>
                      <li><a href="/">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>{/*- END ROW */}
            </div>{/*- END CONTAINER */}
          </div>
          {/* END NAVBAR */}
          {/* START HOME */}
          <section id="home" className="home_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <div className="home_content">
                    <h1>Krishna Art Institute is the best choice for everyone!</h1>
                    <p>It is a long established fact that reader will be distracted readable content of a page when.</p>
                  </div>
                  <div className="home_btn">
                    <a href="/" className="cta"><span>Explore Courses</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </div>{/* END COL*/}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <div className="home_me_img">
                    <img src="assets/images/all-img/home-image.png" className="img-fluid" alt="" />
                    <div className="home_ps">
                      <img src="assets/images/icon/user2.svg" alt="" />
                      <h2>7500+</h2>
                      <span>Active student</span>
                    </div>
                    <div className="home_ps2">
                      <img src="assets/images/icon/file2.svg" alt="" />
                      <h2>4500+</h2>
                      <span>Online Course</span>
                    </div>
                  </div>
                </div>{/* END COL*/}
              </div>{/*- END ROW */}
            </div>{/*- END CONTAINER */}
          </section>
          {/* END  HOME */}
        </div>
        {/* END  TOP HEADER CLASS */}
        {/* START COUNTER */}
        <section className="count_area counter_feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter count_one">
                  <span className="ti-folder sc_one" />
                  <h2 className="counter-num">134</h2>
                  <p>Our Online Course</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter count_two">
                  <span className="ti-medall-alt sc_two" />
                  <h2 className="counter-num">299</h2>
                  <p>Academic Programs</p>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter count_three">
                  <span className="ti-id-badge sc_three" />
                  <h2 className="counter-num">684</h2>
                  <p>Certified Students</p>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single-counter count_four">
                  <span className="ti-user sc_four" />
                  <h2 className="counter-num">941</h2>
                  <p>Enrolled Students</p>
                </div>
              </div>{/* END COL */}
            </div>{/*- END ROW */}
          </div>{/*- END CONTAINER */}
        </section>
        {/* END COUNTER */}
        {/* START ABOUT US HOME ONE */}
        <section className="ab_one section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="ab_img">
                  <img src="assets/images/all-img/about1.png" className="img-fluid" alt="image" />
                  <div className="wc_year">
                    <h3><span>6k+</span> <br />Happy Clients</h3>
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="ab_content">
                  <h2>Create, Learn &amp; grow your skills from anywhere.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.</p>
                </div>
                <div className="abmv">
                  <i className="fa-regular fa-lightbulb" />
                  <h4>Discover the joy of lifelong learning</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                </div>
                <div className="abmv">
                  <i className="fa-solid fa-satellite-dish" />
                  <h4>Build a real community</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                </div>
                <div className="cta_two">
                  <a href="#" className="cta"><span>Discover More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/*- END COL */}
            </div>{/*- END ROW */}
          </div>{/*- END CONTAINER */}
        </section>
        {/* END ABOUT US HOME ONE */}
        {/* START TOP PROMO FEATURES */}
        <section className="tp_feature section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h4>Start Learning </h4>
              <h1>Build Better skills, faster From Today.</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
                <div className="single_tp">
                  <h3>Award Wining</h3>
                  <i className="fa-solid fa-medal" />
                  <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                  <a href="/" className="cta"><span>Learn More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="single_tp st_one">
                  <h3>Quality Education</h3>
                  <i className="fa-solid fa-book-journal-whills" />
                  <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit. </p>
                  <a href="/" className="cta"><span>Learn More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                <div className="single_tp st_two">
                  <h3>Expert Teachers</h3>
                  <i className="fa-solid fa-user-graduate" />
                  <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                  <a href="/" className="cta"><span>Learn More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
                <div className="single_tp st_three">
                  <h3>Life Time Support</h3>
                  <i className="fa-solid fa-headset" />
                  <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                  <a href="/" className="cta"><span>Learn More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/* END COL */}
            </div>{/* END ROW */}
          </div>{/* END CONTAINER */}
        </section>
        {/* END TOP PROMO FEATURES */}
        {/* START TOPIC*/}
        <section className="topic_content_p2 section-padding">
          <div className="container">
            <div className="section-title">
              <h4>Start Learning </h4>
              <h1>Popular Categories From Today.</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_one">
                  <img src="assets/images/icon/ct1.svg" alt="" />
                  <h2><a href="#">IT &amp; Software</a></h2>
                  <span>71 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_two">
                  <img src="assets/images/icon/ct2.svg" alt="" />
                  <h2><a href="#">Digital Program</a></h2>
                  <span>59 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_three">
                  <img src="assets/images/icon/ct3.svg" alt="" />
                  <h2><a href="#">Finance Marketing</a></h2>
                  <span>68 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_four">
                  <img src="assets/images/icon/ct4.svg" alt="" />
                  <h2><a href="#">Modern Physics</a></h2>
                  <span>83 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_five">
                  <img src="assets/images/icon/ct5.svg" alt="" />
                  <h2><a href="#">Music Production</a></h2>
                  <span>37 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_six">
                  <img src="assets/images/icon/ct6.svg" alt="" />
                  <h2><a href="#">Website Design</a></h2>
                  <span>51 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_seven">
                  <img src="assets/images/icon/ct6.svg" alt="" />
                  <h2><a href="#">UI/UX Design</a></h2>
                  <span>38 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_tca sc_eight">
                  <img src="assets/images/icon/ct6.svg" alt="" />
                  <h2><a href="#">Health &amp; Fitness</a></h2>
                  <span>43 Courses</span>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-12 text-center">
                <div className="cc_btn">
                  <a href="#" className="cta"><span>View All category</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/*END COL */}
            </div>{/* END ROW */}
          </div>{/* END CONTAINER */}
        </section>
        {/* END TOPIC */}
        {/* START WHY CHOOSE US*/}
        <section className="marketing_content_area section-padding">
          <div className="container">
            <div className="section-title">
              <h4>Why Choose Krishna Art Institute</h4>
              <h1>Find the best features of Krishna Art Institute.</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-school" />
                    <h2><a href="/">Learn More <br />Anywhere</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-person-chalkboard" />
                    <h2><a href="/">Expert <br />Instructor</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-people-group" />
                    <h2><a href="/">Team <br />Management</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-book" />
                    <h2><a href="/">Course <br />Planing</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-chalkboard-user" />
                    <h2><a href="/">Teacher <br />Monitoring</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
              <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset={0}>
                <div className="single_feature_one">
                  <div className="sf_top">
                    <i className="fa-solid fa-ticket" />
                    <h2><a href="/">24/7 Strong <br />Support</a></h2>
                  </div>
                  <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                  <a href="/">Read More <i className="fa-solid fa-arrow-right" /></a>
                </div>
              </div>{/* END COL */}
            </div>{/* END ROW */}
          </div>{/* END CONTAINER */}
        </section>
        {/* END WHY CHOOSE US */}
        {/*START COURSE */}
        <div className="best-course section-padding">
          <div className="container">
            <div className="section-title">
              <h4>Popular Courses</h4>
              <h1>Choose Our Top Courses</h1>
            </div>
            <div className="course-list row wow fadeIn">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="course-item d-flex">
                  <div className="course-inner">
                    <div className="course-img">
                      <img src="assets/images/course/c1.png" alt="course" />
                      <div className="course-price">$150</div>
                    </div>
                    <div className="course-content">
                      <div className="ccategory">
                        <a href="#">Data Science</a>
                      </div>
                      <h3><a href="#">Professional Ceramic Moulding for Beginners</a></h3>
                      <div className="crating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <span>
                          5.0 / 28 Rating
                        </span>
                      </div>
                      <div className="cmeta">
                        <span>
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375" /></svg>
                          25 Lessons
                        </span>
                        <span className="cmtime">
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375" /><path stroke="#2c7aff" strokeMiterlimit={10} strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652" /></svg>
                          8 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="course-hover align-self-center">
                    <div className="chover_content">
                      <div className="ccategory">
                        <a href="#">Data Science</a>
                      </div>
                      <h3><a href="#">Professional Ceramic Moulding for Beginners</a></h3>
                      <div className="hcourse-price">$150.00</div>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.
                      </p>
                      <div className="hcmeta">
                        <span>
                          <img src="assets/images/all-img/avator.png" alt="img" />
                          <a href="#">Theme Ocean</a>
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                          5.0 (2k)
                        </span>
                      </div>
                      <div className="text-center">
                        <a href="#" className="cta"><span>Enroll Now</span>
                          <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5" />
                            <polyline points="8 1 12 5 8 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End course-item */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="course-item d-flex">
                  <div className="course-inner">
                    <div className="course-img">
                      <img src="assets/images/course/c2.png" alt="course" />
                      <div className="course-price">$120</div>
                    </div>
                    <div className="course-content">
                      <div className="ccategory">
                        <a href="#">Management</a>
                      </div>
                      <h3><a href="#">Ultimate Photoshop Training: From Beginner</a></h3>
                      <div className="crating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <span>
                          5.0 / 28 Rating
                        </span>
                      </div>
                      <div className="cmeta">
                        <span>
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375" /></svg>
                          25 Lessons
                        </span>
                        <span className="cmtime">
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375" /><path stroke="#2c7aff" strokeMiterlimit={10} strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652" /></svg>
                          8 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="course-hover align-self-center">
                    <div className="chover_content">
                      <div className="ccategory">
                        <a href="#">Management</a>
                      </div>
                      <h3><a href="#">Ultimate Photoshop Training: From Beginner</a></h3>
                      <div className="hcourse-price">$120.00</div>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.
                      </p>
                      <div className="hcmeta">
                        <span>
                          <img src="assets/images/all-img/avator.png" alt="img" />
                          <a href="#">Theme Ocean</a>
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                          5.0 (2k)
                        </span>
                      </div>
                      <div className="text-center">
                        <a href="#" className="cta"><span>Enroll Now</span>
                          <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5" />
                            <polyline points="8 1 12 5 8 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End course-item */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="course-item d-flex">
                  <div className="course-inner">
                    <div className="course-img">
                      <img src="assets/images/course/c3.png" alt="course" />
                      <div className="course-price">$170</div>
                    </div>
                    <div className="course-content">
                      <div className="ccategory">
                        <a href="#">Graphics</a>
                      </div>
                      <h3><a href="#">Basic Fundamentals of Interior &amp; Graphics Design</a></h3>
                      <div className="crating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <span>
                          5.0 / 28 Rating
                        </span>
                      </div>
                      <div className="cmeta">
                        <span>
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375" /></svg>
                          25 Lessons
                        </span>
                        <span className="cmtime">
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375" /><path stroke="#2c7aff" strokeMiterlimit={10} strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652" /></svg>
                          8 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="course-hover align-self-center">
                    <div className="chover_content">
                      <div className="ccategory">
                        <a href="#">Graphics</a>
                      </div>
                      <h3><a href="#">Basic Fundamentals of Interior &amp; Graphics Design</a></h3>
                      <div className="hcourse-price">$170.00</div>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.
                      </p>
                      <div className="hcmeta">
                        <span>
                          <img src="assets/images/all-img/avator.png" alt="img" />
                          <a href="#">Theme Ocean</a>
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                          5.0 (2k)
                        </span>
                      </div>
                      <div className="text-center">
                        <a href="#" className="cta"><span>Enroll Now</span>
                          <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5" />
                            <polyline points="8 1 12 5 8 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End course-item */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="course-item d-flex">
                  <div className="course-inner">
                    <div className="course-img">
                      <img src="assets/images/course/c4.png" alt="course" />
                      <div className="course-price">$140</div>
                    </div>
                    <div className="course-content">
                      <div className="ccategory">
                        <a href="#">Development</a>
                      </div>
                      <h3><a href="#">WordPress for Beginners – Master WordPress</a></h3>
                      <div className="crating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <span>
                          5.0 / 28 Rating
                        </span>
                      </div>
                      <div className="cmeta">
                        <span>
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375" /></svg>
                          25 Lessons
                        </span>
                        <span className="cmtime">
                          <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375" /><path stroke="#2c7aff" strokeMiterlimit={10} strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z" /><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652" /></svg>
                          8 Hours
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="course-hover align-self-center">
                    <div className="chover_content">
                      <div className="ccategory">
                        <a href="#">Development</a>
                      </div>
                      <h3><a href="#">WordPress for Beginners – Master WordPress</a></h3>
                      <div className="hcourse-price">$140.00</div>
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.
                      </p>
                      <div className="hcmeta">
                        <span>
                          <img src="assets/images/all-img/avator.png" alt="img" />
                          <a href="#">Theme Ocean</a>
                        </span>
                        <span>
                          <i className="fa-solid fa-star" />
                          5.0 (2k)
                        </span>
                      </div>
                      <div className="text-center">
                        <a href="#" className="cta"><span>Enroll Now</span>
                          <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5" />
                            <polyline points="8 1 12 5 8 9" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End course-item */}
            </div>{/*END ROW */}
          </div>{/*END CONTAINER */}
        </div>
        {/*END COURSE */}
        {/* START VIDEO */}
        <section className="vid_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUDown" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="video-area">
                  <a href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" className="magnific_popup video-button"><i className="fa fa-play" /></a>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="cp_content">
                  <h4>Best Online Learning Platform</h4>
                  <h2>One Platfrom &amp; Many Courses For You</h2>
                  <p>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
                  <ul>
                    <li><span className="ti-check" />9/10 Average Satisfaction Rate</li>
                    <li><span className="ti-check" />96% Completitation Rate</li>
                    <li><span className="ti-check" />Friendly Environment &amp; Expert Teacher</li>
                  </ul>
                </div>
                <div className="cp_btn">
                  <a href="/" className="cta"><span>Explore Our Courses</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5" />
                      <polyline points="8 1 12 5 8 9" />
                    </svg>
                  </a>
                </div>
              </div>{/*- END COL */}
            </div>{/*- END ROW */}
          </div>{/*- END CONTAINER */}
        </section>
        {/* END VIDEO */}
        {/* START TEAM*/}
        <section className="team_member section-padding">
          <div className="container">
            <div className="section-title">
              <h4>Our Instructor</h4>
              <h1>Our Expert Instructors</h1>
            </div>
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="our-team">
                  <div className="team-content">
                    <h3 className="title">Stephen Cronin</h3>
                    <span className="post">Designer</span>
                    <div className="sth_det2">
                      <span className="ti-file"> <u>5 Course</u></span>
                      <span className="ti-user"> <u>12 Student</u></span>
                    </div>
                  </div>
                  <div className="team_img">
                    <img src="assets/images/team/1.jpg" alt="team-image" />
                    <ul className="social">
                      <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                      <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="our-team">
                  <div className="team_img">
                    <img src="assets/images/team/2.jpg" alt="team-image" />
                    <ul className="social">
                      <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                      <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Rachel Park</h3>
                    <span className="post">Developer</span>
                    <div className="sth_det2">
                      <span className="ti-file"> <u>19 Course</u></span>
                      <span className="ti-user"> <u>41 Student</u></span>
                    </div>
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                <div className="our-team">
                  <div className="team-content">
                    <h3 className="title">Dan Billson</h3>
                    <span className="post">Marketer</span>
                    <div className="sth_det2">
                      <span className="ti-file"> <u>14 Course</u></span>
                      <span className="ti-user"> <u>33 Student</u></span>
                    </div>
                  </div>
                  <div className="team_img">
                    <img src="assets/images/team/3.jpg" alt="team-image" />
                    <ul className="social">
                      <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                      <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
                <div className="our-team">
                  <div className="team_img">
                    <img src="assets/images/team/4.jpg" alt="team-image" />
                    <ul className="social">
                      <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                      <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Gina Mellow</h3>
                    <span className="post">Co-founder</span>
                    <div className="sth_det2">
                      <span className="ti-file"> <u>11 Course</u></span>
                      <span className="ti-user"> <u>27 Student</u></span>
                    </div>
                  </div>
                </div>
              </div>{/*- END COL */}
            </div>{/* END ROW */}
          </div>{/* END CONTAINER */}
        </section>
        {/* END TEAM */}
        {/* START TESTIMONIALS*/}
        <section className="testi_home_area section-padding">
          <div className="container">
            <div className="section-title">
              <h4>Testimonial</h4>
              <h1>What users saying about Krishna Art Institute</h1>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div id="testimonial-slider" className="owl-carousel">
                  <div className="testimonial">
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src="assets/images/all-img/t1.png" alt="" />
                      </div>
                      <h4>Kallu Mastan</h4>
                      <small className="post">Bissa Batpar</small>
                    </div>
                    <p>I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>{/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src="assets/images/all-img/t2.png" alt="" />
                      </div>
                      <h4>Kader Kaku</h4>
                      <small className="post">Mitthay Expert</small>
                    </div>
                    <p>I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>{/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src="assets/images/all-img/t3.png" alt="" />
                      </div>
                      <h4>Mittha Hasina</h4>
                      <small className="post">Lotpat Company</small>
                    </div>
                    <p>I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>{/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src="assets/images/all-img/t4.png" alt="" />
                      </div>
                      <h4>Hasau Mahmud</h4>
                      <small className="post">Mastan group</small>
                    </div>
                    <p>I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>{/* END TESTIMONIAL */}
                  <div className="testimonial">
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src="assets/images/all-img/t1.png" alt="" />
                      </div>
                      <h4>Kutta Leauge</h4>
                      <small className="post">Kutta iNC</small>
                    </div>
                    <p>I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>{/* END TESTIMONIAL */}
                </div>{/* END TESTIMONIAL SLIDER */}
              </div>{/* END COL  */}
            </div>{/* END ROW */}
          </div>{/* END CONTAINER */}
        </section>
        {/* END TESTIMONIALS */}
        {/* START BLOG */}
        <section id="blog" className="blog_area section-padding">
          <div className="container">
            <div className="section-title">
              <h4>News</h4>
              <h1>Our Latest Blogs</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="single_blog">
                  <img src="assets/images/blog/1.jpg" className="img-fluid" alt="image" />
                  <div className="img_info">
                    <span>August 26, 2025 | <a href="/">Education</a></span>
                  </div>
                  <div className="content_box">
                    <h2><a href="/">Professional Mobile Painting and Sculpting</a></h2>
                    <a href="#" className="cta"><span>Read More</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>{/* END COL*/}
              <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
                <div className="single_blog">
                  <img src="assets/images/blog/2.jpg" className="img-fluid" alt="image" />
                  <div className="img_info">
                    <span>August 28, 2025 | <a href="/">Design</a></span>
                  </div>
                  <div className="content_box">
                    <h2><a href="/">Professional Ceramic Moulding for Beginner</a></h2>
                    <a href="#" className="cta"><span>Read More</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>{/* END COL*/}
              <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                <div className="single_blog">
                  <img src="assets/images/blog/3.jpg" className="img-fluid" alt="image" />
                  <div className="img_info">
                    <span>August 30, 2025 | <a href="/">Marketing</a></span>
                  </div>
                  <div className="content_box">
                    <h2><a href="/">Education Is About Create Leaders For Tomorrow </a></h2>
                    <a href="#" className="cta"><span>Read More</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>{/* END COL*/}
            </div>{/* / END ROW */}
          </div>{/* END CONTAINER  */}
        </section>
        {/* END BLOG */}
        {/* START INSTRUCTOR+FREE COURSE */}
        <section className="insfreecourse section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="single_ins">
                  <div className="single_ins_content">
                    <h4>Build Your Career</h4>
                    <h1>Become an Instructor</h1>
                    <p>Learn at your own pace, move the between multiple courses. </p>
                    <a href="/" className="cta"><span>Apply Now</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                  <div className="single_ins_img">
                    <img src="assets/images/all-img/become-ins.png" className="img-fluid" alt="image" />
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                <div className="single_ins">
                  <div className="single_ins_content">
                    <h4>Build Your Career</h4>
                    <h1>Get Free Courses</h1>
                    <p>Learn at your own pace, move the between multiple courses. </p>
                    <a href="/" className="cta"><span>Contact Us</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5" />
                        <polyline points="8 1 12 5 8 9" />
                      </svg>
                    </a>
                  </div>
                  <div className="single_ins_img">
                    <img src="assets/images/all-img/free-course.png" className="img-fluid" alt="image" />
                  </div>
                </div>
              </div>{/*- END COL */}
            </div>{/*- END ROW */}
          </div>{/*- END CONTAINER */}
        </section>
        {/* END INSTRUCTOR+FREE COURSE */}
        {/* START NEWSLETTER */}
        <section className="newsletter_area section-padding">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
                <div className="subs_form">
                  <h3>Subscripbe to our newsletter, We don't make any spam.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
                  <form action="#" className="home_subs">
                    <input type="text" className="subscribe__input" placeholder="Enter your Email Address" />
                    <button type="button" className="subscribe__btn">Subscribe</button>
                  </form>
                </div>
              </div>{/* END COL */}
            </div>{/* END ROW */}
          </div>{/*- END CONTAINER */}
        </section>
        {/* END NEWSLETTER */}
        {/* START FOOTER */}
        <div className="footer section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', marginBottom: '20px' }}>
                    <img src="assets/images/all-img/krishna-icon.png" alt="Krishna Art Institute Logo" style={{ maxHeight: '80px' }} />
                    <span style={{ fontSize: '26px', fontWeight: 'bold', color: 'inherit', lineHeight: '1.2' }}>Krishna<br /><span style={{ fontSize: '15px', fontWeight: 'normal' }}>Art Institute</span></span>
                  </a>
                  <p>immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some. Describe my business along with my business name.</p>
                </div>
                <div className="foot_social">
                  <ul>
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook" /></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter" /></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram" /></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in" /></a></li>
                  </ul>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Courses</h4>
                  <ul>
                    <li><a href="#">Creative Writing</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">SEO Business</a></li>
                    <li><a href="#">Social Marketing</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Website Development</a></li>
                  </ul>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Knowledge Base</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Market API</a></li>
                    <li><a href="#">Support team</a></li>
                  </ul>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Contact Info</h4>
                  <div className="sf_contact">
                    <span className="ti-mobile" />
                    <h3>Phone number</h3>
                    <p>+91 7503517545</p>
                  </div>
                  <div className="sf_contact">
                    <span className="ti-email" />
                    <h3>Email Address</h3>
                    <p>krishnaartinstitute@gmail.com</p>
                  </div>
                  <div className="sf_contact">
                    <span className="ti-map" />
                    <h3>Office Address</h3>
                    <p>Faridabad, India</p>
                  </div>
                </div>
              </div>{/*- END COL */}
              <div className="col-lg-2 col-sm-6 col-xs-12">
                <div className="single_footer">
                  <h4>Download App</h4>
                  <p>Download our app from app store and goole play store.</p>
                  <a href="/"><img src="assets/images/all-img/google-play.jpg" className="foot_img" alt="" /></a>
                  <a href="/"><img src="assets/images/all-img/app-store.jpg" className="foot_img" alt="" /></a>
                </div>
              </div>{/*- END COL */}
            </div>{/*- END ROW */}
            <div className="row fc">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="footer_copyright">
                  <p>© 2025. All Rights Reserved by <a href="https://bestwpware.com/" className="text-dark" target="_blank">bestwpware</a> • Distributed by <a href="https://themewagon.com" className="text-dark" target="_blank">ThemeWagon</a> </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>{/* END COL */}
            </div>
          </div>{/*- END CONTAINER */}
        </div>
        {/* END FOOTER */}
        {/* Latest jQuery */}
        {/* Latest compiled and minified Bootstrap */}
        {/* owl-carousel min js  */}
        {/* jquery-simple-mobilemenu.min */}
        {/* magnific-popup js */}
        {/* jquery mixitup min js */}
        {/* GSAP AND LOCOMOTIV JS*/}
        {/* scrolltopcontrol js */}
        {/* jquery inview js */}
        {/* WOW - Reveal Animations When You Scroll */}
        {/* scripts js */}
      </div>

    </>
  );
}
