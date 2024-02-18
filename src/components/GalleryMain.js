import React, { useState } from "react";
import images from "./gallaryImages";
import "./Gallery.css";

const GalleryMain = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div id="gallery" className="m-4 pt-2">
        <h1 className="text-center text-info py-5 mt-5"
          style={{ fontWeight: 800, fontSize: 40 }}>Gallery</h1>
      <div>
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} onClick={() => setModel(false)}/>
        </div>
        <div className="gallery">
        {images.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{
                  width: "100%",
                  borderBlock: 5,
                  borderBlockColor: "#000000",
                }}
              />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
