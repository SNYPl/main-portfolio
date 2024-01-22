const Resume = () => {
  return (
    <div className="resume flex-column-mobile">
      <div className="custom-title fadeInUp wow">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation">
              My Resume
            </span>
          </span>
        </h3>
      </div>
      <div className="timeline">
        <ol className="animated-layer fade-in-animation">
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Front-End Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2021 - 2023</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Supernova</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="experience">
                <h4>UI Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2020 - 2021</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Supernova</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>QA Engineer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2019 - 2020</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Pulsar AI</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="education">
                <h4>Programming in HTML5/JavaScript/CSS</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2021 - 2021</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>New Horizon</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="education">
                <h4>Javascript</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2018 - 2020</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>Business and Technology University</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          <li />
        </ol>
      </div>
    </div>
  );
};
export default Resume;
