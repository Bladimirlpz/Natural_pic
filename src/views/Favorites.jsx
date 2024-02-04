import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { apiData, setApiDataa } = useContext(ApiContext);
  const dataFavoritas = apiData.filter((photos) => photos.liked === true);

  return (
    <div className="favoritos ">
      <h1>Imagenes Favoritas</h1>
      <div className=" gallery grid-columns-4 p-3">
        {dataFavoritas.length > 0
          ? dataFavoritas.map((photos) => {
              return (
                <div key={photos.id} className="photos">
                  <img src={photos.src.portrait} alt={photos.alt} />
                  <IconHeart liked={photos.liked} />
                  <h3>{photos.alt}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Favorites;
