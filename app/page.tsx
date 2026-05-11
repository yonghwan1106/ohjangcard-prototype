import Header from "@/components/header";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import SolutionPreview from "@/components/solution-preview";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import BetaForm from "@/components/beta-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <SolutionPreview />
        <HowItWorks />
        <Pricing />
        <BetaForm />
      </main>
      <Footer />
    </>
  );
}
