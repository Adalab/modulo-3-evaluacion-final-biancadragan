import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/components/_scene-detail.scss";

function SceneDetail({ scene }) {
  return (
    <div className="scene-detail">
      <header className="scene-detail__header">
        <h1 className="scene-detail__header-title">
          {scene.movie} - {scene.year}
        </h1>
        <Link to="/" className="scene-detail__back-link">← Back to List</Link>
      </header>
      <main className="scene-detail__content">
        <img className="scene-detail__image" src={scene.poster} alt={`Poster of ${scene.movie}`} />
        <p className="scene-detail__quote">"{scene.full_line}"</p>
        <p className="scene-detail__director">Director: {scene.director || "Unknown"}</p>
        <a href={scene.audio} target="_blank" rel="noopener noreferrer" className="scene-detail__audio-link">
          Listen to Scene
        </a>
      </main>
    </div>
  );
}

SceneDetail.propTypes = {
  scene: PropTypes.object.isRequired,
};

export default SceneDetail;
