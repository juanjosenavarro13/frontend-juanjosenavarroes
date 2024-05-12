type httpEndpointsType = {
  login: string;
};
export const HTTP_ENDPOINTS: httpEndpointsType = {
  login: remplaceEnv("auth/login"),
};

function remplaceEnv(url: string) {
  return (
    (import.meta.env.DEV
      ? "http://localhost:3001/"
      : "https://backend.juanjosenavarro.es/") + url
  );
}
