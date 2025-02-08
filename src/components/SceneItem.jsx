import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SceneItem({ scene, id }) {
  return (
    <li className="scene__card">
      <Link to={`/detail/${id}`} className="scene-link">
        <article className="scene__info">
          <img className="scene__info__image" src={scene.poster} alt={`Poster of ${scene.movie}`} />
          <h3 className="scene__info__title">{scene.movie} - {scene.year}</h3>
          <p className="scene__info__quote">"{scene.full_line}"</p>
        </article>
      </Link>
    </li>
  );
}

SceneItem.propTypes = {
  scene: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default SceneItem;


