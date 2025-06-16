import Topbar from "@/components/Topbar/Topbar";
import StatCardWrapper from "@/components/StatCardWrapper/StatCardWrapper";
import ChartsGuide from "@/components/ChartsGuide/ChartsGuide";
import Header from "@/components/Header/Header";
import TopProducts from "@/components/TopProducts/TopProducts";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="container space-y-6 mx-auto px-4 py-8">
        <Header />
        <StatCardWrapper />
        <ChartsGuide />
        <TopProducts />
      </main>
    </div>
  );
}
