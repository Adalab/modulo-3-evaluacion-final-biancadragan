import '../styles/App.scss';

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen Wilson's WoW</h1>
        <hr className="header__separator"/>
      </header>
      <main>
        <ul class="scene-item__poster">
          <li className="scene-card">
            <article className="scene-info">
              <img
                className="scene-info__image"
                src="image-url"
                alt="Movie Poster"
              />
              <h3 className="scene-info__title">Movie Title - Year of the Movie</h3>
              <p className="scene-info__quote">Full Quote</p>
            </article>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;
