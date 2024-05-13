import React from 'react'
import donner1 from '../assets/imgs/donner1.webp'
import donner2 from '../assets/imgs/donner2.webp'
import donner3 from '../assets/imgs/donner3.jpg'

const Causes = () => {
  return (
    <div>

  <div className="page-title-area bg-13">
    <div className="container">
      <div className="page-title-content">
        <h2>Doner</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Doner</li>
        </ul>
      </div>
    </div>
  </div>
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
</div>

  )
}

export default Causes
