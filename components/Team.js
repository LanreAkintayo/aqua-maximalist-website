export default function Team() {
  return (
    <section
      className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-black dark:text-white "
      id="team"
    >
      <h1 className="text-3xl font-medium pb-2 text-center font-serif">
        MEET THE TEAMS
      </h1>
      <div className="flex lg:flex-row flex-col justify-center mt-3 font-hand">
        <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
          <div className="w-64">
            <img
              alt="..."
              src="/img/huslte.jpg"
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          <p className="text-2xl font-medium pt-2"> Hustle Danie</p>
          <p className="text-gray-900 dark:text-gray-400 py-1">Aqua Clan 001</p>
        </div>
        <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
          <div className="w-64">
            <img
              alt="..."
              src="/img/lanre3.jpg"
              className="object-cover w-full rounded-md"
            />
          </div>

          <p className="text-2xl font-medium pt-2"> Code Larry</p>
          <p className="text-gray-900 dark:text-gray-400 py-1">Developer</p>
        </div>
        <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
          <div className="w-64">
            <img
              alt="..."
              src="/img/artist2.jpg"
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          <p className="text-2xl font-medium pt-2"> XYZ</p>
          <p className="text-gray-900 dark:text-gray-400 py-2">Artist</p>
        </div>
      </div>
    </section>
  );
}
