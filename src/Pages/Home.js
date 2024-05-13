import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import homemain from "../assets/img/banner/banner-bg-shape-1.png"
import prabhupada1 from '../assets/imgs/prabhupada.jpg'
import prabhupadacare from '../assets/imgs/srila prabhupada care img.jpg'
import prabhupadamission from '../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg'
import haridas from '../assets/imgs/Hg bhaj hari das.jpg'
import mahavarahdas from '../assets/imgs/mahavara das.jpg'
import vaikunthpatidas from '../assets/imgs/vekuinpath das.jpg'
import srivarajbhumidas from '../assets/imgs/shrivarajbhumi das.jpg'
import prabhupadaneed from '../assets/imgs/need assistent.jpg'
import pabhupadaestablish from '../assets/imgs/establish program.webp'
import prabhupadadatabase from '../assets/imgs/prabhupada database.avif'
import prabhupadapromation from '../assets/imgs/prabhupada promotion.jpg'
import prabhupadaevaluate from '../assets/imgs/prabhupada evaluate.jpg'
import prabhupadacollaboration from '../assets/imgs/collaboration.jpg'
import prabhupadastory1 from '../assets/imgs/Prabhupada-iskcon.jpg'
import prabhupadastory2 from '../assets/imgs/prabhupada story2.jpg'
import prabhupadastory3 from '../assets/imgs/prabhupada story3.jpg'
import prabhupadastory4 from '../assets/imgs/prabhupada story4.jpg'
import prabhupadastory5 from '../assets/imgs/prabhupada story5.jpg'
import donner1 from '../assets/imgs/donner1.webp'
import donner2 from '../assets/imgs/donner2.webp'
import donner3 from '../assets/imgs/donner3.jpg'

const Home = () => {
  const [more, setMore] = useState(false)
  const [more2, setMore2] = useState(false)
  const [more3, setMore3] = useState(false)



  const handleClick = () => {
    setMore(!more);
  };
  const handleClick2 = () => {
    setMore2(!more2);
  };
  const handleClick3 = () => {
    setMore3(!more3);
  };

  const featuresData = [
    {
      icon: <FaIndianRupeeSign />,
      title: "Financial Assistance",
      description: "Offer financial assistance programs or fundraising support to help cover medical expenses, housing costs, and other essential needs for Srila Prabhupada's disciples."
    },
    {
      icon: <GiHealthNormal />,
      title: "Healthcare Coordination",
      description: "Provide assistance in identifying medical doctors and post-treatment care to ensure that disciples receive the necessary healthcare support."
    },
    {
      icon: <RiTeamFill />,
      title: "Emotional and Spiritual Support",
      description: "Offer emotional support services to address the unique challenges and needs of Srila Prabhupada's disciples as they age."
    },
    {
      icon: <FaUserDoctor />,
      title: "Comprehensive Health Assessments",
      description: "Explore the possibility to offer regular health check-ups and assessments to identify any medical needs or concerns among Srila Prabhupada's disciples."
    },
    {
      icon: <RiTeamFill />,
      title: "Community Building Activities",
      description: "Organize retreats and events specifically for Srila Prabhupada's disciples so they can share the pastimes of Srila Prabhupada and their realizations with the next generations."
    },
    {
      icon: <GiTeamIdea />,
      title: "Relocation Assistance",
      description: "Provide assistance with housing options, including affordable housing arrangements and support for disciples who wish to relocate to sacred pilgrimage sites like Vrindavan, Mayapur, or other Dhams in India."
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Advocacy and Outreach",
      description: "Raise awareness about the needs of Srila Prabhupada's disciples and the importance of supporting elderly devotees within ISKCON. It could be a small gesture such as announcing their appearance days or initiation anniversaries."
    },
    {
      icon: <GiTeamIdea />, // Replace with appropriate icon
      title: "Volunteer Opportunities",
      description: "Provide opportunities for volunteers to contribute their time, skills, and resources to support Srila Prabhupada's disciples, whether through caregiving, companionship, or other forms of assistance."
    }
  ];

  const navigate = useNavigate()
  return (
    <div>
      <div className="sidebar-modal">
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
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#6c04090000032c18050d021f420f0301"><span className="__cf_email__" data-cfemail="a8c0cdc4c4c7e8dcc1c9c6db86cbc7c5">[email&nbsp;protected]</span></a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#d3babdb5bc93a7bab2bda0fdb0bcbe"><span className="__cf_email__" data-cfemail="bfd6d1d9d0ffcbd6ded1cc91dcd0d2">[email&nbsp;protected]</span></a>
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
      </div>
      <section className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1 className="wow animate__animated animate__fadeInDown" data-wow-delay="1s">Srila Prabhupada Disciples Care Program</h1>
                    <p className="wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                      The Srila Prabhupada Disciples Care Program is dedicated to providing support and guidance to the disciples of Srila Prabhupada, the founder of the International Society for Krishna Consciousness (ISKCON). </p>
                    <div className="banner-btn wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                      <a onClick={() => navigate("/becomevolunteer")} href="" className="default-btn">
                        <span> Become a volunteer</span>
                      </a>
                      <a onClick={() => navigate("/donation")} href="" className="default-btn active">
                        <span>Donate</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" >
                  <div className="banner-img" >
                    <img style={{ height: '90vh' }} src={prabhupada1} alt="Image" />
                    <div className="video-btn-2 wow zoomIn" data-wow-delay="1s">
                      <a href="https://www.youtube.com/watch?v=CILPJViYk1E" className="popup-youtube">
                        <span />
                        <span />
                        <span />
                        <span />
                        <i className="flaticon-play-button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bg-shape-1">
          <img src={homemain} alt="Image" />
        </div>
      </section>
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
                <a onClick={() => navigate("/aboutus")} href="" className="default-btn">
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
      <section className="what-we-do-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Key Features of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            {featuresData.map((feature, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="single-we-box overly-outside">
                  <div style={{ height: '65vh' }} className="overly-inside">
                    <i>{feature.icon}</i>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="counter-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-project-management" />
                <h2>
                  <span className="odometer" data-count={950}>00</span>
                  <span className="target">+</span>
                </h2>
                <p>Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-like" />
                <h2>
                  <span className="odometer" data-count={850}>00</span>
                  <span className="target">+</span>
                </h2>
                <p>Fund Raised</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-trophy" />
                <h2>
                  <span className="odometer" data-count={550}>00</span>
                  <span className="traget">+</span>
                </h2>
                <p>Donations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter">
                <i className="flaticon-team" />
                <h2>
                  <span className="odometer" data-count={440}>00</span>
                  <span className="target">+</span>
                </h2>
                <p>Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="causes-area pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2>Implementation Process of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6"  >
              <div className="single-causes-box">
                <img src={prabhupadaneed} alt="Image" />
                <div style={{ height: "auto " }} className="single-causes-content">
                  <h3>
                    <a href="">Needs Assessment
                    </a>
                  </h3>
                  <p>Conduct a comprehensive needs assessment to understand the healthcare, financial and emotional needs of Srila Prabhupada disciples through
                  </p>
                  <div>
                    <button onClick={handleClick} style={{ display: more ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >
                      Read More...
                    </button>
                    {more && (
                      <div>
                        <ul style={{ textAlign: 'left' }}>
                          <li>Gather data through surveys;</li>
                          <li>Interviews;</li>
                          <li>focus groups;</li>
                          <li>consultations with Srila Prabhupada disciples;</li>
                          <li>caregivers; and</li>
                          <li>community members.</li>
                        </ul>
                        <button onClick={handleClick} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..</button>
                      </div>
                    )}
                  </div>
             
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-causes-box">
                <img src={pabhupadaestablish} alt="Image" />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">Establish Program Infrastructure
                    </a>
                  </h3>
                  <p> Initially, we can develop infrastructure for the program based on need assessment</p>
                  <button onClick={handleClick2} style={{ display: more2 ? 'none' : 'block', backgroundColor: '#f99115', 
                  padding: '.5rem', color: '#fff', borderRadius: '.5rem', marginTop:'3.4rem' }} >
                    Read More...
                  </button>
                  {more2 && (
                    <div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                        <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                        <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                        <li>consultations with Srila Prabhupada disciples;</li>
                        <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                      </ul>
                      <button onClick={handleClick2} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                      </button>
                    </div>

                  )}

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadadatabase} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Database
                    </a>
                  </h3>
                  <p>Create database of key stakeholders in the program:
                  </p>
                  <button onClick={handleClick3} style={{ display: more3 ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem',
                   color: '#fff', borderRadius: '.5rem',marginTop:'6.5rem' }} >
                    Read More...
                  </button>
                  {more3 && (
                  <div>
                    <ul style={{ textAlign: 'left' }}>
                      <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                      <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                      <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                      <li>consultations with Srila Prabhupada disciples;</li>
                      <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                    </ul>
                    <button onClick={handleClick3} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                    </button>
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadacollaboration} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Build Partnerships and Collaborations
                    </a>
                  </h3>
                  <p>"Create synergies with devotee care departments, healthcare facilities like Bahktivedanta Hospital, and the Bhakti Vedanta Medical Association network for collaboration."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadapromation} alt="Image" />
                <div style={{height:'auto'}} className="single-causes-content">
                  <h3>
                    <a href="">Launch and Promotion
                    </a>
                  </h3>
                  <p>"Launch Srila Prabhupada Disciple Care Program with coordinated outreach via websites, social media, temple announcements, and community events."
                  </p>
            
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadaevaluate} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Monitor and Evaluate
                    </a>
                  </h3>
                  <p>Establish monitoring and evaluation mechanisms to track program progress, outputs, and outcomes. Annually present the achievements to GBC members.
                  </p>
                  {/* <div className="all-skill-bar">
                    <div className="skill-bar" data-percentage="95%">
                      <h4 className="progress-title-holder">
                        <span className="progress-title">$1900000 Raised Of $160000</span>
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </h4>
                      <div className="progress-content-outter">
                        <div className="progress-content" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="default-btn">
                    <span>Donate Now</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Are Our Clients Says</h2>
          </div>
          <div className="testimonials-slider owl-theme owl-carousel">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img src="assets/img/testimonials/testimonials-1.jpg" alt="Image" />
              </div>
              <div className="col-lg-8">
                <div className="testimonials-content">
                  <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ipsum dolor sit amet, consetetur sadipscing elitr”</p>
                  <div className="testimonials-name">
                    <h3>Jiniya Lisa</h3>
                    <span>Charity CEO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img src="assets/img/testimonials/testimonials-2.jpg" alt="Image" />
              </div>
              <div className="col-lg-8">
                <div className="testimonials-content">
                  <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ipsum dolor sit amet, consetetur sadipscing elitr”</p>
                  <div className="testimonials-name">
                    <h3>Juhon Sheetz</h3>
                    <span>Charity Volunteer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="help-people-area">
        <div className="container-fluid">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2 style={{ paddingBlock: '2rem' }}>Success Stories of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row" >
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }} >
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}"  /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory1} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Establishment of ISKCON:</h2>
                  <p> Perhaps the most remarkable success story of Srila Prabhupada is the establishment of ISKCON itself. In 1966, at the age of 70, he arrived in New York City with just a few dollars and a trunk of books. Despite facing numerous challenges and setbacks, he tirelessly spread the teachings of Bhagavad Gita and the practice of Krishna consciousness. His dedication and perseverance led to the rapid growth of ISKCON, which has now become a global spiritual movement with millions of followers worldwide.</p>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Writing and Publishing:</h2>
                  <p> Srila Prabhupada translated and wrote commentaries on numerous Vedic scriptures, including the Bhagavad Gita, Srimad Bhagavatam, and Caitanya Caritamrita. His translations and commentaries are widely regarded for their clarity and depth, and they continue to inspire millions of people around the world. He also established the Bhaktivedanta Book Trust (BBT) to publish and distribute his books, which have been translated into dozens of languages and distributed in millions of copies.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory2} />
              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory3} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Temple Establishments:</h2>
                  <p>Srila Prabhupada oversaw the establishment of numerous temples and ashrams around the world, where devotees could practice Krishna consciousness and engage in devotional activities. The most famous of these is the Krishna Balaram Mandir in Vrindavan, India, and the ISKCON temple in Mayapur, West Bengal, which is the headquarters of ISKCON</p>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Food Distribution:</h2>
                  <p>  Srila Prabhupada initiated the distribution of prasadam (sanctified food offered to Krishna) as a means of alleviating hunger and poverty. ISKCON's food distribution programs, such as the Hare Krishna Food for Life, have served millions of free meals to the needy around the world, regardless of race, religion, or nationality.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory4} />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory5} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Cultural Influence: </h2>
                  <p> Srila Prabhupada's teachings and the Hare Krishna movement have had a significant cultural influence, especially in the West. The chanting of the Hare Krishna mantra, popularized by ISKCON, became a prominent feature of the counterculture movement of the 1960s and 1970s. Today, the Hare Krishna mantra continues to be sung and practiced by people of various backgrounds as a means of spiritual upliftment.</p>
                </div>

              </div>
            </div>


          </div>

        </div>
      </section>
      <section className="causes-area pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2>Meet the Sevakas</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img src={haridas} alt="Image" />
                <div className="single-causes-content">
                  <h3>
                    <a href="">HG Braj Hari Das
                    </a>
                  </h3>
                  <p>Brajhari Das joined in ISKCON at BHUBANESHWAR in June 1984. He met HH Jayapataka Swami who sent him to Hyderabad . Latter on he took Intiation from HH Jayapataka Swami in 1985. He came to Juhu temple for training and since then he has been rendering service in the temple.. He was leading the book distribution of ISKCON Juhu, then General manager, Vice President and President of the temple for last 20 years</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-causes-box">
                <img src={mahavarahdas} alt="Image" style={{ height: "52vh" }} />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Mahavaraha Das
                    </a>
                  </h3>
                  <p>Mahavaraha prabhu joined ISKCON 26 years ago in Malaysia. He is disciple of HH Jayapataka Swami. Immediately after he had become a devotee, he immediately got the chance to do personal service to his guru maharaj. Since guru maharaj had the stroke, for every single moment, every single day, for the past so many years, he has been with his guru maharaj.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={vaikunthpatidas} alt="Image" />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das
                    </a>
                  </h3>
                  <p>Chartered Accountant by qualification and has held very senior positions in Mumbai & Middle East. Disciple of HH Jaypataka Swami Maharaja initiated in 1993 and founder of Krishna Katha Desh Yatra in Middle East and currently developing a community in Wadala, Mumbai. He has developed a strong community of devotees who closely knitted and are engaged in reading Srila Prabhupa’s books and spreading the movement.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={srivarajbhumidas} alt="Image" style={{ height: "51vh" }} />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">HG Vaikunthapati Das
                    </a>
                  </h3>
                  <p>Chartered Accountant by qualification and has held very senior positions in Mumbai & Middle East. Disciple of HH Jaypataka Swami Maharaja initiated in 1993 and founder of Krishna Katha Desh Yatra in Middle East and currently developing a community in Wadala, Mumbai. He has developed a strong community of devotees who closely knitted and are engaged in reading Srila Prabhupa’s books and spreading the movement.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span className="top-title">Team Member</span> */}
            <h2>Behind The Donor's Of </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis facilis! Magni explicabo nam velit nulla officiis dolorum? Ducimus illum</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src={donner1} alt="Image" />
                  <ul className="team-link">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Glims Bond</h3>
                  <span>Donate $256</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <img src={donner2} alt="Image" />
                  <ul className="team-link">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Sharlok Bin</h3>
                  <span>Donate $256</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team">
                <div className="team-img">
                  <img src={donner3} alt="Image" />
                  <ul className="team-link">
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Pristly Hearbart</h3>
                  <span>Donate $420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Latest News</span>
            <h2>Read The Latest Articles From Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-post">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-1.jpg" alt="Image" />
                  </a>
                </div>
                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user" />
                      <a href="#">By Admin</a>
                    </li>
                    <li>
                      <i className="flaticon-class" />
                      <span>Education</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">Charity Can Help Make Smile
                      Of Poor People</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="blog-details.html" className="read-more">
                    Read More
                  </a>
                </div>
                <span className="date">
                  17 <br /> Oct
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-post">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-2.jpg" alt="Image" />
                  </a>
                </div>
                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user" />
                      <a href="#">By Admin</a>
                    </li>
                    <li>
                      <i className="flaticon-class" />
                      <span>Food</span>
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">Save The Children’s Role In Fight Against Malnutrition Hailed</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="blog-details.html" className="read-more">
                    Read More
                  </a>
                </div>
                <span className="date">
                  18 <br /> Oct
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe-area">
        <div className="container bg-color">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-content">
                <h2>Do You Want To Know to Get Update On What’s Upcoming</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form className="newsletter-form" data-toggle="validator">
                <input type="email" className="form-control" placeholder="Enter email address" name="EMAIL" required autoComplete="off" />
                <button className="default-btn" type="submit">
                  <span>Subscribe Now</span>
                </button>
                <div id="validator-newsletter" className="form-result" />
              </form>
            </div>
          </div>
          <div className="subscribe-shape-1">
            <img src="assets/img/subscribe-shape-1.png" alt="Image" />
          </div>
          <div className="subscribe-shape-2">
            <img src="assets/img/subscribe-shape-2.png" alt="Image" />
          </div>
        </div>
      </section> */}
      <div className="partner-area ptb-100">
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
      </div>
    </div>

  )
}

export default Home
