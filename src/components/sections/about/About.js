import Info from "./info/Info";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";

const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      <div className="info flex-column-mobile">
        <Info />
      </div>
      <Skills />
      <Resume />
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
