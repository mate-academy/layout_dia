import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="page">
    <Header />
    <Hero />
    <WhoWeAre />
    <Expertise />
    <Process />
    <Testimonials />
    <Vision />
    <div className="footer-shell">
      <Contact />
      <Footer />
    </div>
  </main>
);

export default Index;
