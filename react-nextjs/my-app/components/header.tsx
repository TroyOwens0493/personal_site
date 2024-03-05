import Image from "next/image";
import Link from "next/link";
import logo from '../public/images/logo.png';

export default function header() {
  return (
    <div className="bg-gray-800 shadow-lg">
      <header className="flex items-center justify-between px-5">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-40 flex" />
        </Link>
        <h1 className=" text-primaryAccent font-bold ">Troy Owens - Web Dev</h1>
        <nav className="flex">
          <Link href="/">
            <button className="bg-primaryAccent hover:bg-secondaryAccent font-bold py-2 px-4 rounded-lg mr-2">Home</button>
          </Link>
          <Link href="/">
            <button className="bg-primaryAccent hover:bg-secondaryAccent font-bold py-2 px-4 rounded-lg mr-2">About Me</button>
          </Link>
          <Link href="/">
            <button className="bg-primaryAccent hover:bg-secondaryAccent font-bold py-2 px-4 rounded-lg mr-2">Projects</button>
          </Link>
          <Link href="/">
            <button className="bg-primaryAccent hover:bg-secondaryAccent font-bold py-2 px-4 rounded-lg">Site Plan</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}
