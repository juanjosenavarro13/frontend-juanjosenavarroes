export const HTTP_ENDPOINTS = {
  login: remplaceEnv("auth/login"),
  user: remplaceEnv("user"),
};

function remplaceEnv(url: string) {
  return (
    (import.meta.env.DEV
      ? "http://localhost:3001/"
      : "https://backend.juanjosenavarro.es/") + url
  );
}
