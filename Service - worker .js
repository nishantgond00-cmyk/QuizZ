self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("quizx").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./questions.js"
      ]);
    })
  );
});
