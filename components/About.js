export default function About() {
 return (
  <section
        className=" py-12 border-x-0 border-t-0 border-b border-b-slate-600 mx-4 sm:mx-12 "
        id="about"
      >
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-8/12">
            <h1 className="text-3xl text-black dark:text-white font-medium font-sans">
              WELCOME TO THE THE AQUA CLUB
            </h1>

            <div className="flex">
              <p className="lg:w-8/12 text-black dark:text-white py-2 text-lg font-hand">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit
              </p>
            </div>
          </div>
          <div className="lg:w-4/12">
            <div className="grid grid-rows-2 grid-cols-1 gap-2 h-auto">
              <div className="grid grid-rows-1 grid-cols-2 gap-2">
                <div className="bg-red-100 rounded-md">
                  <img
                    alt="..."
                    src="/img/tutle.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="bg-red-100 rounded-md">
                  <img
                    alt="..."
                    src="/img/meta.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-2">
                <div className="bg-red-400 rounded-md">
                  {" "}
                  <img
                    alt="..."
                    src="/img/meta.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="bg-red-400 rounded-md">
                  <img
                    alt="..."
                    src="/img/tutle.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 )
}