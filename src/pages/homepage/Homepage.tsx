import { ContractsSection } from "./components/ContractsSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorksSection";
import { PartnerSection } from "./components/PartnerSection";
import { ReviewsSection } from "./components/ReviewsSection";

export function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnerSection />
      <ContractsSection />
      <HowItWorks />
      <ReviewsSection />
    </>
  );
}
