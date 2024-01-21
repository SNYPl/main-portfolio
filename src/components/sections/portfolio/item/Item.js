const Item = ({
  images,
  title,
  project,
  client,
  duration,
  frameworks,
  link,
}) => {
  return (
    <>
      <div className="main-content">
        <img
          className="img-fluid"
          src={`assets/portfolio/${images}`}
          alt="Image Project"
        />
      </div>
      <div className="details">
        <h4>{title}</h4>
        <div>
          <ul>
            <li>
              <span>
                <i className="fa-regular fa-file-lines" /> Project :
              </span>
              <span>{project}</span>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-user" /> Client :
              </span>
              <span>{client}</span>
            </li>
            <li>
              <span>
                <i className="fa-regular fa-hourglass" /> Duration :
              </span>
              <span>{duration}</span>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-code-branch" /> Frameworks :
              </span>
              <span>{frameworks}</span>
            </li>
          </ul>
        </div>
        <a href={link} target="_blank" className="custom-btn">
          <span>
            preview <i className="fa-solid fa-arrow-up-right-from-square" />
          </span>
        </a>
      </div>
    </>
  );
};
export default Item;
