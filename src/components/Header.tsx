import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-icon.png"

const Header = () => {
  const date = new Date().toLocaleDateString("bn-bd", { dateStyle: "full" });
  return (
    <div className="flex justify-between container mx-auto my-3">
      <div className="flex gap-2 items-center">
        <div className="bg-[#34A853] p-3 rounded-xl flex items-center">
            <Image className="" src={Logo} alt="hero logo"></Image>
        </div>
        <div>
          <h1>বাজার দর</h1>
          <p>{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link className="font-semibold" href={"/signin"}>সাইন ইন</Link>
        <Link className="btn bg-[#34A853] text-white font-semibold" href={"/signup"}>
          সাইন আপ
        </Link>
      </div>
    </div>
  );
};

export default Header;
