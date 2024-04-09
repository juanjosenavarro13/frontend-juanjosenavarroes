export const HTTP_ENDPOINTS = {
  login: remplaceEnv("auth/login"),
};

function remplaceEnv(url: string) {
  return (
    (import.meta.env.DEV
      ? "http://localhost:3001/"
      : "https://www.backend.juanjosenavarro.es/") + url
  );
}
