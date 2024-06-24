import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInd = { firstName: "Vishal", lastName: "Gangde" };
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedInd} />
      {children}
    </main>
  );
}
