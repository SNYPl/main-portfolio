const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Daviti Metreveli</span>

        <ul>
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
    </section>
  );
};
export default Copyright;
