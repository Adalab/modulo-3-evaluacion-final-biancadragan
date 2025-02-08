import SceneItem from "./SceneItem";
import PropTypes from "prop-types";

function SceneList({ scenes }) {
  return (
    <ul className="scene__list">
      {scenes.map((scene) => {
        const sceneId = `${scene.movie.replace(/\s+/g, "-")}-${scene.year}-${scene.timestamp}`;
        return <SceneItem key={sceneId} scene={scene} id={sceneId} />;
      })}
    </ul>
  );
}

SceneList.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SceneList;

