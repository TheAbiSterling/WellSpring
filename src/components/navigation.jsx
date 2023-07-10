export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll d-flex gap-2" href="#page-top">
            <img
              style={{ display: "inline-block" }}
              src="img/logo/logo4.jpg"
              alt="logo"
              width="50px"
              height="50px"
            />
            <font type="quintessential">WellSpring</font>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#professionals" className="page-scroll">
                Talk To Us
              </a>
            </li>
            <li>
              <a href="#support" className="page-scroll">
                Support
              </a>
            </li>
            <li>
              <a href="#login" className="button">
                <button type="button">LOGIN</button>
              </a>
            </li>
            <li>
              <a href="#signup" className="button">
                <button type="button">SIGN UP</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
