import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import IconHeart from "./IconHeart";
import "./gallery.css";

const Gallery = () => {
  const { apiData, setApiData } = useContext(ApiContext);

  function obtenerId(id) {
    const indexLiked = apiData.findIndex((photo) => photo.id === id);
    const copyData = [...apiData];
    if (copyData[indexLiked].liked) {
      copyData[indexLiked].liked = false;
      setApiData(copyData);
    } else {
      copyData[indexLiked].liked = true;
      setApiData(copyData);
    }
  }

  const handleClick = (id) => {
    obtenerId(id);
  };

  return (
    <div className="gallery grid-columns-4 p-3">
      {apiData.length > 0
        ? apiData.map((photos) => {
            return (
              <div
                onClick={() => handleClick(photos.id)}
                key={photos.id}
                className="photos"
              >
                <img src={photos.src.portrait} alt={photos.alt} />
                <IconHeart liked={photos.liked} />
                <h3>{photos.alt}</h3>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Gallery;
