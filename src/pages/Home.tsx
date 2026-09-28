import Intro from "../components/Intro";
import SignupForm from "../components/SignupForm";
import bgIntroDesktop from "../assets/bg-intro-desktop.png";

function Home() {
  return (
    <main
      className="min-h-screen w-full lg:flex-row gap-12 px-6 py-10 lg:px-12 flex flex-col items-center justify-center p-6 bg-red-400 bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgIntroDesktop})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Intro />
      <SignupForm />
    </main>
  );
}

export default Home;
