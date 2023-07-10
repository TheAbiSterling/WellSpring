export const Support = (props) => {
  return (
    <div id="support">
      <div className="container">
        <div className="section-title text-center">
          <h2>In-House Support Group!</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="support">
                    <div className="support-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="support-content">
                      <p>"{d.text}"</p>
                      <div className="support-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
