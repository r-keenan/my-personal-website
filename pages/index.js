import HomeBackground from "@/components/HomeBackground";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <HomeBackground className="relative z-0 w-full bg-cover" />
      <LandingPage />
    </>
  );
}
