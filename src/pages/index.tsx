import { type NextPage } from "next";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image, { type StaticImageData } from "next/image";
import kuy from "../../public/inz.svg";
import { useState } from "react";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>inspirezuza</title>
          <meta name="description" content="inspirezuza portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 text-gray-800 dark:bg-gray-900 dark:text-slate-300 md:px-20 lg:px-40">
          <section className="min-h-screen ">
            <nav className="mb-12 flex justify-between py-10">
              <h1 className="font-mono text-xl font-extrabold text-teal-500">
                inspirezuza
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className=" ml-8 rounded-md bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 font-medium text-white dark:text-gray-900"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div className="p-10 text-center">
              <div className="py-2 text-5xl font-medium text-teal-500 md:text-6xl">
                inspirezuza
              </div>
              <div className="py-2 text-2xl dark:text-white md:text-3xl">
                Developer and designer.
              </div>
              <p className=" mx-auto max-w-lg py-5 text-base leading-8 md:text-lg">
                {`Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!`}
              </p>
              <div className="py-5"></div>
              <div className=" flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-slate-500">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
              <div className=" relavtive mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-teal-300 md:h-96 md:w-96">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
            </div>
          </section>

          <section>
            <div className="">
              <h3 className="py-1 text-3xl dark:text-white">Service I offer</h3>
              <div className="py-5 text-base leading-8 ">
                {`Since the beginning of my journey as a free developer,
               I've done remote work for`}{" "}
                <span className="text-teal-500">agencies</span> consulted for
                <span className="text-teal-500">starups</span> and collaborated
                with talanted people to create for both business and consumer
                use.
              </div>
              <p className="py-5 text-base leading-8 ">
                I offer from a wide range of services, including programming and
                teaching.
              </p>

              <div className="gap-10 lg:flex">
                <div className="my-10 rounded-xl p-10 text-center shadow-lg  dark:bg-slate-800 ">
                  <div className="relavtive mx-auto h-40 w-40 overflow-hidden rounded-full bg-red-300 shadow-lg ">
                    <Image
                      src={kuy as StaticImageData}
                      alt="Inspirezuza icon"
                    />
                  </div>
                  <h3 className="pb-2 pt-8 text-lg font-medium">
                    Beautiful huh?
                  </h3>
                  <p className="py-2">
                    Creating elegant designs suited for your needs following
                    core design theory.
                  </p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Photoshop
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Illustrator
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Figma
                  </p>
                </div>

                <div className="my-10 rounded-xl p-10 text-center shadow-lg  dark:bg-slate-800 ">
                  <div className="relavtive mx-auto h-40 w-40 overflow-hidden rounded-full bg-green-300 shadow-lg ">
                    <Image
                      src={kuy as StaticImageData}
                      alt="Inspirezuza icon"
                    />
                  </div>
                  <h3 className="pb-2 pt-8 text-lg font-medium">
                    Beautiful huh?
                  </h3>
                  <p className="py-2">
                    Creating elegant designs suited for your needs following
                    core design theory.
                  </p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Photoshop
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Illustrator
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Figma
                  </p>
                </div>
                <div className="my-10 rounded-xl p-10 text-center shadow-lg dark:bg-slate-800 ">
                  <div className="relavtive mx-auto h-40 w-40 overflow-hidden rounded-full bg-blue-300 shadow-lg ">
                    <Image
                      src={kuy as StaticImageData}
                      alt="Inspirezuza icon"
                    />
                  </div>
                  <h3 className="pb-2 pt-8 text-lg font-medium">
                    Beautiful huh?
                  </h3>
                  <p className="py-2">
                    Creating elegant designs suited for your needs following
                    core design theory.
                  </p>
                  <h4 className="py-4 text-teal-600">Design tools I use</h4>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Photoshop
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Illustrator
                  </p>
                  <p className="py-1 text-gray-800 dark:text-slate-300">
                    Figma
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>

              <p className="py-5 text-base leading-8 ">
                {`Since the beginning of my journey as a free developer,
               I've done remote work for`}{" "}
                <span className="text-teal-500">agencies</span> consulted for
                <span className="text-teal-500">starups</span> and collaborated
                with talanted people to create for both business and consumer
                use.
              </p>
              <p className="py-5 text-base leading-8 ">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-red-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-orange-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-yellow-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-green-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-blue-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
              <div className="mx-auto flex-1 basis-1/3 flex-col overflow-hidden rounded-lg bg-purple-300 object-cover shadow-lg">
                <Image src={kuy as StaticImageData} alt="Inspirezuza icon" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
