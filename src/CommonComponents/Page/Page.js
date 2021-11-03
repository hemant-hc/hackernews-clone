import Title from "../Title/Title";

import "./Page.css";

const Page = ({ children }) => {
  return (
    <div className="page">
      <Title />
      <div className="content">{children}</div>
    </div>
  );
};

export default Page;
