import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const TalkToUs = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/10-small.jpg", title: "Psychologist" },
    { thumb: "img/portfolio/11-small.jpg", title: "Mental Health Counsellor" },
    { thumb: "img/portfolio/12-small.jpg", title: "Therapist" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="professionals" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Talk To Us</h2>
          <p>Meet our Certified Professionals.</p>
        </div>
        <div className="row">
          <div className="professionals-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <div className="professionals-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img
                      src={thumb}
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
