import { TypeAnimation } from "react-type-animation";
import heroImage from './hero.png';
import './hero.css'

const HeroSection = () => {
  return (
    <>
      <section>
        <div >
          <div className="container">
            <div className="img"><img src={heroImage} alt="Sapientia"/>;</div>

            <div>
              <div>
                <p>your</p>
              </div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "We produce food for Mice",
                  1000,
                  "We produce food for Hamsters",
                  1000,
                  "We produce food for Guinea Pigs",
                  1000,
                  "We produce food for Chinchillas",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
