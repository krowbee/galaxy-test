import { ContractsSection } from "./components/ContractsSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PartnerSection } from "./components/PartnerSection";

export function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnerSection />
      <ContractsSection />
    </>
  );
}
