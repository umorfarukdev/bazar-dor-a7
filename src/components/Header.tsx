import Image from "next/image";
import Logo from "../../public/logo-icon.png";
import UserInfo from "./UserInfo";

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
      <UserInfo></UserInfo>
    </div>
  );
};

export default Header;
