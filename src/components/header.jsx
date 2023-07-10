export const Header = (props) => {
  console.log(props.data);
  return (
    <header id="header">
      <div className="intro">
        {" "}
        <div className="new-bg">
          <div className="col-12 d-flex flex-column align-items-center intro-text">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <a href="#features" className="btn btn-custom btn-lg page-scroll">
              Learn More
            </a>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};
