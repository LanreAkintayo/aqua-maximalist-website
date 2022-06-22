export default function Footer() {
 return (
  <footer className="relative pt-8 pb-6 text-gray-400">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left"></div>
          {/* <hr className="my-6" /> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="" className=" hover:text-blueGray-800">
                  Aqua Clan
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
 )
}