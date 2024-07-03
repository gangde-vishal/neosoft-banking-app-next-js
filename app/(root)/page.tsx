import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        {/* HEADER COMPONENT */}
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and translations efficiently"
            user={loggedIn?.name || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1246.11}
          />
        </header>
        {/* RECENT TRANSACTIONS COMPONENT  */}
      </div>
      {/* RIGHT SIDEBAR COMPONENT */}
      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 121.21 }, { currentBalance: 341.61 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Home;
