export const HTTP_ENDPOINTS = {
  login: remplaceEnv("auth/login"),
  user: remplaceEnv("user"),
  findUserById: remplaceEnv("user/{{id}}"),
  deleteUserById: remplaceEnv("user/{{id}}"),
  resetPasswordById: remplaceEnv("user/{{id}}"),
  article: remplaceEnv("article"),
  deleteArticleById: remplaceEnv("article/{{id}}"),
  findArticleById: remplaceEnv("article/{{id}}"),
};

function remplaceEnv(url: string) {
  return (
    (import.meta.env.DEV
      ? "http://localhost:3001/"
      : "https://backend.juanjosenavarro.es/") + url
  );
}
