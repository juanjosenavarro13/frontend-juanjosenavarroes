export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center text-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear}{" "}
          <a href="https://www.juanjosenavarro.es/" className="hover:underline">
            Juan José
          </a>{" "}
          . Casi todos los derechos reservados
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a href="/#sobre-mi" className="hover:underline me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li>
            <a
              id="contacto"
              href="mailto:juanjosenavarroperea@gmail.com"
              className="hover:underline"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
