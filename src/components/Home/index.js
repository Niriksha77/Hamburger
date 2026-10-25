import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="page-container">
    <Header />
    <div className="page-content">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="page-image"
        />
      </picture>
    </div>
  </div>
)

export default Home
