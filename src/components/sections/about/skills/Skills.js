const Skills = () => {
  return (
    <div className="skills flex-column-mobile skill-mobile-add">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Skills
            </span>
          </span>
        </h3>
      </div>
      <div className="skills-content">
        <div>
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInLeft wow">
            <span>
              <i className="devicon-mongodb-plain" />
            </span>
            <h4>MongoDB</h4>
          </div>
          {/* SKILL ITEM ENDS */}
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInRight wow">
            <span>
              <i className="devicon-nextjs-original" />
            </span>
            <h4>Next JS</h4>
          </div>
          {/* SKILL ITEM ENDS */}
        </div>
        <div>
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInLeft wow">
            <span>
              <i className="devicon-typescript-plain" />
            </span>
            <h4>Typescript</h4>
          </div>
          {/* SKILL ITEM ENDS */}
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInRight wow">
            <span>
              <i className="devicon-css3-plain" />
            </span>
            <h4>CSS3</h4>
          </div>
          {/* SKILL ITEM ENDS */}
        </div>
        <div>
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInLeft wow">
            <span>
              <i className="devicon-react-plain" />
            </span>
            <h4>React JS</h4>
          </div>
          {/* SKILL ITEM ENDS */}
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInRight wow">
            <span>
              <i className="devicon-sass-plain" />
            </span>
            <h4>Sass</h4>
          </div>
          {/* SKILL ITEM ENDS */}
        </div>
        <div>
          {/* SKILL ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInLeft wow">
            <span>
              <i className="devicon-nodejs-plain" />
            </span>
            <h4>Node JS</h4>
          </div>
          {/* SKILL ITEM ENDS */}
        </div>
      </div>
    </div>
  );
};
export default Skills;
