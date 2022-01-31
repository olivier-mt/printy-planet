import logo from "../logo.svg";
import "../App.css";
import LOGOPRINTY from "../assets/images/LOGOPRINTY.svg";

import PRINTYPLANET from "../assets/images/PRINTYPLANET.svg";
import centralLogo from "../assets/images/centralLogo.png";
import CADDIE from "../assets/images/CADDIE.svg";
import MONTRE from "../assets/images/MONTRE.svg";
import CLICK from "../assets/images/CLICK.svg";
import LOCAL from "../assets/images/LOCAL.png";
import CARROUSSEL1 from "../assets/images/carroussel.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <div className="Header">
      <img src={LOGOPRINTY} alt="logo" />

      <div className="Header-elem">
        <div>PRODUIT</div>
        <div>DEVIS</div>
        <div>FAQ</div>
        <div>SOCIÉTÉ</div>
      </div>
      <div className="Header-elem">
        <div>CONTACT</div>

        <div>
          <p>Appelez-nous au</p>
          <p>06 61 21 70 35</p>
        </div>
      </div>
      <div className="Header-elem">
        <img src={CADDIE} />
        <p>CONNEXION</p>
      </div>
    </div>
    <header
    /*className="App-header"*/
    >
      <div className="main">
        <section>
          <div className="carroussel">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
              infiniteLoop={true}
              interval={3000}
              transitionTime={500}
            >
              <div className="carroussel">
                <img src={CARROUSSEL1} />
              </div>
              <div className="carroussel">
                <p>Legend 2</p>
              </div>
              <div className="carroussel">
                {/* <img src="assets/3.jpeg" /> */}
                <p>Legend 3</p>
              </div>
            </Carousel>
          </div>
        </section>

        <section>
          <div className="Category">PAPETERIE</div>
          <div className="Category">CARTERIE</div>
          <div className="Category">BROCHURE</div>
          <Link to="/affiche" className="Category">
            AFFICHE
          </Link>
          <div className="Category">FLYER</div>
          <div className="Category">DEPLIANT</div>
          <div className="Category">SORTIES NUMÉRIQUES</div>
        </section>
        <section>
          <div>
            <img className="Icone" src={MONTRE} alt="montre" />
            <img className="Icone" src={CLICK} alt="click" />
            <img className="Icone" src={LOCAL} alt="LOCAL" />
          </div>
        </section>
      </div>
    </header>
  </div>
);

export default Home;
