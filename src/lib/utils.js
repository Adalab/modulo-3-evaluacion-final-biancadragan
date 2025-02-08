function generateSceneId(scene) {
    return `${scene.movie.replace(/\s+/g, "-")}-${scene.year}-${scene.timestamp}`;
  }
  
  export { generateSceneId };
  