import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import HoverBlock from "~/components/HoverBlock";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  function handleLoad() {
    setIsLoaded(true);
  }
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-max overflow-hidden">
          <div className="grid grid-cols-11 mix-blend-overlay">
            {Array(12)
              .fill(null)
              .map((i: number) => (
                <Fragment key={i}>
                  {Array(11)
                    .fill(null)
                    .map((i: number) => (
                      <Fragment key={i}>
                        <HoverBlock />
                      </Fragment>
                    ))}
                </Fragment>
              ))}
          </div>
          <div className="absolute inset-0 -z-10 bg-[#fd5530] mix-blend-screen" />
          <Image
            onLoad={handleLoad}
            src={isLoaded ? "/image-main.jpg" : "/image20x21.jpg"}
            alt={"Image"}
            width={800}
            height={824}
            className={`absolute bottom-1/2 right-1/2 -z-20 h-[100.5%] translate-x-1/2 translate-y-1/2 object-cover ${
              !isLoaded ? "animate-pulse" : ""
            }`}
          ></Image>
        </div>
      </main>
    </>
  );
}
