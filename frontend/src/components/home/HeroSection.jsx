import "./HeroSection.css";

import {
  motion
} from "framer-motion";

import {
  Link
} from "react-router-dom";

function HeroSection() {

  return (

    <section className="hero-section">

      <div className="hero-overlay">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <motion.h1

                initial={{
                  opacity:0,
                  y:-50
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:1
                }}

                className="hero-title"
              >

                Find Your Dream Home
                With HouseHunt

              </motion.h1>

              <motion.p

                initial={{
                  opacity:0
                }}

                animate={{
                  opacity:1
                }}

                transition={{
                  delay:0.5
                }}

                className="hero-text"
              >

                Browse thousands of
                verified rental homes,
                apartments, villas,
                and commercial spaces.

              </motion.p>

              <motion.div

                initial={{
                  opacity:0
                }}

                animate={{
                  opacity:1
                }}

                transition={{
                  delay:1
                }}

              >

                <Link
                  to="/properties"
                  className="btn hero-btn"
                >
                  Explore Properties
                </Link>

              </motion.div>

            </div>

            <div className="col-lg-5">

              <motion.div

                initial={{
                  opacity:0,
                  scale:0.8
                }}

                animate={{
                  opacity:1,
                  scale:1
                }}

                transition={{
                  duration:1
                }}

                className="search-card"
              >

                <h3>
                  Quick Search
                </h3>

                <input
                  type="text"
                  placeholder="City"
                  className="form-control mb-3"
                />

                <select
                  className="form-select mb-3"
                >
                  <option>
                    Property Type
                  </option>

                  <option>
                    Apartment
                  </option>

                  <option>
                    House
                  </option>

                  <option>
                    Villa
                  </option>

                  <option>
                    Commercial
                  </option>
                </select>

                <button
                  className="btn search-btn"
                >
                  Search
                </button>

              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default HeroSection;