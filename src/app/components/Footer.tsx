import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  // const [titles, setTitles] = useState({
  //   github: "GitHub",
  //   instagram: "Instagram",
  //   facebook: "Facebook",
  // });

  // const changeTitles = () => {
  //   setTitles({
  //     github: "My GitHub",
  //     instagram: "My Instagram",
  //     facebook: "My Facebook",
  //   });
  // };
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-[#ffffff]">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black"
        href="https://github.com/matthewIeng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/test.PNG"
          alt="GitHub icon"
          width={400}
          height={400}
          className="mt-10"
        />
        GitHub
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://instagram.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/instagram.svg"
          alt="Instagram icon"
          width={16}
          height={16}
        />
        Instagram
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://facebook.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/facebook.svg"
          alt="Facebook icon"
          width={16}
          height={16}
        />
        Facebook
      </a>
    </footer>
  );
}
