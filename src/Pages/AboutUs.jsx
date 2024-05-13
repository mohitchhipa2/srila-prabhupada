import React from 'react'
import prabhupadacare from '../assets/imgs/srila prabhupada care img.jpg'
import prabhupadamission from '../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg'

const AboutUs = () => {
  return (
    <div>
      {/* <div className="sidebar-modal">
        <div className="sidebar-modal-inner">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="assets/img/logo.png" alt="Image" />
            </div>
            <span className="close-btn sidebar-modal-close-btn">
              <i className="bx bx-x" />
            </span>
          </div>
          <div className="sidebar-about">
            <div className="title">
              <p>Tians is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="bx bx-location-plus" />
                6890 Blvd, The Bronx, NY 1058 New York, USA
              </li>
              <li>
                <i className="bx bx-envelope" />
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#dcb4b9b0b0b39ca8b5bdb2aff2bfb3b1"><span className="__cf_email__" data-cfemail="94fcf1f8f8fbd4e0fdf5fae7baf7fbf9">[email&nbsp;protected]</span></a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#a0c9cec6cfe0d4c9c1ced38ec3cfcd"><span className="__cf_email__" data-cfemail="c7aea9a1a887b3aea6a9b4e9a4a8aa">[email&nbsp;protected]</span></a>
              </li>
              <li>
                <i className="bx bx-phone-call" />
                <a href="tel:+1-(123)-456-7899">+1 (123) 456 7899</a>
                <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-gallery-feed">
            <h3>Gallery</h3>
            <ul>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-follow-us">
            <h3>Sidebar Follow</h3>
            <ul className="social-wrap">
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="index.html">
                  Home
                </a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadacare} alt="Image" style={{ borderRadius: '15px' }} />

                <div className="date-of-years">
                  <div className="date-years">
                    <div className>
                      <span>26</span>
                      <span>Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About</span>
                <h2>Introduction to Srila Prabhupada Disciples Care Program</h2>
                <p>Srila Prabhupada’s disciples surrendered their life to the spiritual master at very young age and served the movement for entire life.
                </p>
                <p>This program is to express our gratitude, as we are relishing the fruits from their labour.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>How To Become Volante</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>More Charity Better Lives</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>Poor Children Education</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>Safe water For People</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="" className="default-btn">
                  <span>About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span className="top-title">About</span> */}
                <h2>Mission and Vision of Srila Prabhupada Disciples Care Program</h2>
                <p>To honor the lifelong dedication and service of Srila Prabhupada's disciples by providing compassionate care and support as they age to lead a life with dignity and purpose in their later years.

                </p>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadamission} alt="Image" style={{ borderRadius: '2rem' }} />

                <div className="date-of-years">
                  <div className="date-years">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="partner-area ptb-100">
        <div className="container">
          <div className="partner-slider owl-theme owl-carousel">
            <div className="partner-item">
              <a href="#">
                <img src="assets/img/partner/partner-1.png" alt="Image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#">
                <img src="assets/img/partner/partner-2.png" alt="Image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#">
                <img src="assets/img/partner/partner-3.png" alt="Image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#">
                <img src="assets/img/partner/partner-4.png" alt="Image" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>

  )
}

export default AboutUs
