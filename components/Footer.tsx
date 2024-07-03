import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogoutUser = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) {
      toast.success("You have successfully logged out!");
      router.push("/sign-in");
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-normal text-gray-600">
          {user?.name}
        </h1>
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.email}
        </h1>
      </div>
      <div className="footer_image" onClick={handleLogoutUser}>
        <Image
          src="icons/logout.svg"
          alt="logout-user"
          width={20}
          height={20}
        />
        <p className="text-10 font-normal text-gray-400">Logout</p>
      </div>
    </footer>
  );
};

export default Footer;
