import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/components/_detail-page.scss";

function DetailPage({ scenes }) {
    const { id } = useParams();

    const scene = scenes.find((scene) => {
        const generatedId = `${scene.movie.replace(/\s+/g, "-")}-${scene.year}-${scene.timestamp}`;
        return generatedId === id;
    });

    if (!scene) return <p>Scene not found</p>;

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

