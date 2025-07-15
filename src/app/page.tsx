import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <Image
          src="/Logo.png"
          alt="Global impact logo"
          width={95}
          height={130}
        />
      </div>
      <div className="px-4 text-center mt-8">
        <p className="text-primary-600 text-[28px] font-bold font- px-16">
          Welcome to Global Impact!
        </p>
        <p className="mt-2 text-[17px] mx-8 text-secondary-500 px-2 font-normal">
          Shop vetted wellness products, support ethical clinics, and earn
          rewards — all in one secure app.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Image src="/splashImg.png" alt="" width={300} height={300}/>
      </div>
      <div className="w-full flex justify-center">
        <button className="cursor-pointer relative bg-primary-500 mx-4 w-[300px] p-2 rounded-full text-white">
          <Link href="/auth/sign-up">
            Get Started
            <div className="bg-blue-400 w-8 h-8 flex items-center justify-center rounded-full ml-2 absolute right-2 bottom-1 animate-pulse">
              <ArrowRight size={20} className="text-white" />
            </div>
          </Link>
        </button>
      </div>
      <p className="text-center mt-6 text-sm text-secondary-500 font-medium">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500 cursor-pointer">
          Login
        </Link>
      </p>
    </div>
  );
}
