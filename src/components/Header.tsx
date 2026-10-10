import Image from "next/image";
import Logo from "../../public/logo-icon.png";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-bd", { dateStyle: "full" });
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="py-4 border-b-2 border-gray-200">
        <div className="flex justify-between max-w-6xl mx-auto ">
          <Link href={"/"} className="flex gap-2 items-center">
            <div className="bg-[#34A853] p-3 rounded-xl flex items-center">
              <Image className="" src={Logo} alt="hero logo"></Image>
            </div>
            <div>
              <h1>বাজার দর</h1>
              <p>{date}</p>
            </div>
          </Link>
          <UserInfo></UserInfo>
        </div>
      </div>
      <div className="py-5 border-b-2 border-gray-200 ml-10">
        <div className="container mx-auto">
          <NavLinks></NavLinks>
        </div>
      </div>
    </div>
  );
};

export default Header;
