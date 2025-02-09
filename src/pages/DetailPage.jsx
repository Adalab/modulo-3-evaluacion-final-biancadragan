import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import SceneDetail from "../components/SceneDetail"; 
import "../styles/components/_scene-detail.scss";

function DetailPage({ scenes }) {
    const { id } = useParams();
    const scene = scenes.find((scene) => scene.generatedId === id);

    return scene ? (
        <SceneDetail scene={scene} />
    ) : (
        <p className="scene-detail__not-found">The scene you are looking for does not exist.</p>
    );
}

DetailPage.propTypes = {
    scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailPage;



