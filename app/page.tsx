import Image from "next/image";
import profile from "../assets/profile.png";
import github from "../assets/github-fill.svg";
import linkedin from "../assets/linkedin-box-fill.svg";
import twitter from "../assets/twitter-x-fill.svg";
import instagram from "../assets/instagram-fill.svg";
import Link from "next/link";

const socials = [github, linkedin, twitter, instagram];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[200px] w-[340px] bg-white rounded-lg shadow px-4 py-6 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image src={profile} alt="profile" width={64} height={64} />
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-xl font-medium">Sarah Dole</h1>
            <p className="text-sm text-neutral-500">
              Front End Engineer @ Microsoft
            </p>
          </div>
          <p className="text-center text-neutral-500 text-base">
            I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            className="bg-indigo-700 w-full py-2.5 text-white rounded shadow hover:bg-indigo-800 transition-colors 
                      focus:outline-none focus:ring-2 focus:ring-[rgba(68,_76,_231,_0.12)] focus:bg-indigo-800 focus:ring-offset-2 disabled:bg-neutral-50 
                      disabled:cursor-not-allowed disabled:text-neutral-400 disabled:shadow-none"
          >
            Contact me
          </button>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social, index) => (
              <Link
                href="/"
                key={index}
                className="size-9 flex items-center justify-center rounded hover:bg-neutral-50 transition-colors 
                          focus:outline-none focus:ring-2 focus:ring-[rgba(68,_76,_231,_0.12)] focus:bg-neutral-50 focus:ring-offset-2"
              >
                <Image src={social} alt="social" width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
