import { Link } from "react-router-dom";

import iconImage from "../../y18.gif";

import "./Title.css";

const Title = () => {
  return (
    <div className="title-content">
      <Link to="/" className="heading">
        <img src={iconImage} alt="img" className="icon" />
        <div className="heading-text">Hacker News</div>
      </Link>
    </div>
  );
};

export default Title;
