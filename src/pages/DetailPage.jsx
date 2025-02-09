import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/components/_detail-page.scss";

function DetailPage({ scenes }) {
    const { id } = useParams();

    // Buscar la escena en el estado global
    let scene = scenes.find((scene) => scene.generatedId === id);

    // Si no está en el estado, buscar en localStorage
    if (!scene) {
        const storedScenes = JSON.parse(localStorage.getItem("scenes")) || [];
        scene = storedScenes.find((scene) => scene.generatedId === id);
    }

    // Si sigue sin encontrarse, mostrar un mensaje 
    if (!scene) {
        return (
            <div className="scene-detail">
                <header className="scene-detail__header">
                    <h1 className="scene-detail__header-title">Error</h1>
                    <Link to="/" className="scene-detail__back-link">← Back to List</Link>
                </header>
                <main className="scene-detail__content">
                    <p className="scene-detail__error"> The scene you are looking for does not exist.</p>
                </main>
            </div>
        );
    }

    return (
        <div className="scene-detail">
            <header className="scene-detail__header">
                <h1 className="scene-detail__header-title">{scene.movie} - {scene.year}</h1>
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

DetailPage.propTypes = {
    scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailPage;


