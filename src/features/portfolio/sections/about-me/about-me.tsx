export function AboutMe() {
  return (
    <>
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
        <svg
          className="size-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
        Sobre mí
      </h2>
      <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-blue-500 dark:[&>p>strong]:text-blue-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
          <p>
            Me llamo Juan José pero mis amigos me llaman Juanjo. Empecé en la
            programación con un juego (Habbo) cuando tenía 13 años. Actualmente
            estoy{" "}
            <strong>
              Desarrollando y manteniendo aplicaciones SPA para IBERIA
            </strong>{" "}
            . Soy autodidacta y me gusta aprender distintas tecnologías de
            desarrollo web, sobre todo basadas en javascript. Tambien tengo
            conocimientos de los distintos sectores en el desarrollo; Bases de
            datos como mysql, postgres, mongodb; Backend con nodejs, express o
            nestjs y frontend con angularjs, angular, react o astro.
          </p>
        </div>

        <img
          width="200"
          height="200"
          src="/juanjose.webp"
          alt="Juan José Navarro Perea"
          className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-blue-500/5 ring-1 ring-black/70 dark:ring-white/20"
          style={{ objectPosition: "50% 50%" }}
        />
      </article>
    </>
  );
}
