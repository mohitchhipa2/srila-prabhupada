import React from 'react'
import "../assets/css/animate.min.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/boxicons.min.css"
import "../assets/css/meanmenu.min.css"
import "../assets/css/nice-select.min.css"
import "../assets/css/odometer.min.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/owl.theme.default.min.css"
import "../assets/css/responsive.css"
import "../assets/css/style.css"
import "../assets/css/dark.css"
import "../assets/css/flaticon.css"
import { useNavigate } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import AnchorTemporaryDrawer from './ResponsiveNav'





const Header = () => {
  const navigate = useNavigate()
  return (
    <div>

      <header className="header-area">
        
        <div className="navbar-area">
          <div className="mobile-nav">
            <div className="container">
              <div className="mobile-menu">
                <div className="logo">
                  <a onClick={() => navigate("/")} className="navbar-brand2" href="">
                    <img className='mobile-logo' style={{ width: "100px" }} src="https://fbcd.co/images/products/d8f4d8e178e45c62015b7daaf4d416f5_resize.jpg " alt="logo" />
                  </a>
                </div>
                <div className="sidebar-menu">
                  <a href="" className="burger-menu">
                    {/* <i style={{ fontSize: "35px" }} className="bx bx-menu" /> */}
                    <AnchorTemporaryDrawer/>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div className="desktop-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a onClick={() => navigate("/")} className="navbar-brand" href="">
                  <img style={{ width: "100px" }} src="https://fbcd.co/images/products/d8f4d8e178e45c62015b7daaf4d416f5_resize.jpg " alt="logo" />
                </a>
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <a onClick={() => navigate("/")} href="" className="nav-link active">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                          <a onClick={() => navigate("/aboutus")} href="" className="nav-link">About Us</a>
                        </li>

                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Pages
                        <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                       
                      
                        <li className="nav-item">
                          <a onClick={() => navigate("/team")} href="" className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/events")} href="" className="nav-link">
                            Success Stories
                          </a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/becomevolunteer")} href="" className="nav-link">Become a volunteer</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/implementationProcess")} href="" className="nav-link">Implementation Process</a>
                        </li>
                       
                        <li className="nav-item">
                          <a href="" className="nav-link">
                            User
                            <i className="bx bx-chevron-right" />
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a onClick={() => navigate("/myaccount")} href="" className="nav-link">My Account</a>
                            </li>
                            <li className="nav-item">
                              <a onClick={() => navigate("/login")} href="" className="nav-link">Log In</a>
                            </li>
                            <li className="nav-item">
                              <a onClick={() => navigate("/register")} href="" className="nav-link">Register</a>
                            </li>
                            <li className="nav-item">
                              <a onClick={() => navigate("/recoverpassword")} href="" className="nav-link">Recover Password</a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/faq")} href="" className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/privacypolicy")} href="" className="nav-link">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/teamcondition")} href="" className="nav-link">Terms &amp; Conditions</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/comingsoon")} href="" className="nav-link">Coming Soon</a>
                        </li>
                        <li className="nav-item">
                          <a onClick={() => navigate("/error")} href="" className="nav-link">404 Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a onClick={() => navigate("/services")} href="" className="nav-link">
                        Key feature
                        {/* <i className="bx bx-chevron-down" /> */}
                      </a>
                      {/* <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a onClick={()=>navigate("/services")} href="" className="nav-link">Services</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={()=>navigate("/servicesdetails")} href="" className="nav-link">Service Details</a>
                  </li>
                </ul> */}
                    </li>
                    <li className="nav-item">
                      <a onClick={() => navigate("/causes")} href='' className="nav-link">
                        Donor
                        {/* <i className="bx bx-chevron-down" /> */}
                      </a>
                      {/* <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a onClick={()=>navigate("/causes")} href="" className="nav-link">Causes</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={()=>navigate("/causesdetails")} href="" className="nav-link">Causes Details</a>
                  </li>
                </ul> */}
                    </li>
                    {/* <li className="nav-item">
                      <a href="" className="nav-link">
                        Blog
                        <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog-column-two.html" className="nav-link">Blog Column Two</a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-column-three.html" className="nav-link">Blog Column Three</a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-left-sidebar.html" className="nav-link">Blog Left Sidebar</a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-details.html" className="nav-link">Blog Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <a onClick={() => navigate("/contactus")} href="" className="nav-link">Contact Us</a>
                    </li>
                  </ul>
                  <div className="others-option">

                    <div className="get-quote">
                      <a onClick={() => navigate("/donation")} className="default-btn">
                        <span>Donation</span>
                      </a>
                    </div>

                  </div>

                </div>
              </nav>
            </div>

          </div>

        </div>
      </header>
      {/* <div className='mobile-nav-icon' >
                  <div className='menu-circle' >
                    <CgMenu />
                    <CgClose />
                  </div>
                </div> */}

    </div>
  )
}

export default Header
