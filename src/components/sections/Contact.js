const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
      </div>
      <div className="boxes">
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              +995 558 14 44 99
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              Tbilisi, Georgia
            </p>
          </div>
        </div>
        <div>
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              dt.metrevel@gmail.com
            </p>
          </div>
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="https://github.com/SNYPl" target="_blank">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daviti-metreveli-21b9b5171/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100011208286719"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
