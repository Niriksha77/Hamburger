import Header from '../Header'

import './index.css'

const About = () => (
  <div className="page-container">
    <Header />
    <div className="page-content">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="page-image"
        />
      </picture>
    </div>
  </div>
)

export default About
