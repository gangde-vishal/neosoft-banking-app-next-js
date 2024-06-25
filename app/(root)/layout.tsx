import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInd = { firstName: "Vishal", lastName: "Gangde" };
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedInd} />
      {/* MOBILE NAVBAR */}
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="Menu Logo" width={30} height={30} />
          <div>
            <MobileNavbar user={loggedInd}/>
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
