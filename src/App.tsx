import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ContentPage } from './pages/ContentPage';
import { About } from './sections/About';
import { Calculators } from './sections/Calculators';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Stats } from './sections/Stats';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { WHATSAPP_URL } from './lib/format';
import { findContentPage } from './lib/siteContent';

export default function App() {
  const contentPage =
    typeof window === 'undefined' ? undefined : findContentPage(window.location.pathname, window.location.search);

  useEffect(() => {
    document.title = contentPage
      ? `${contentPage.title} | Exclusive Global Advisory`
      : 'Exclusive Global Advisory | SME Business Loan Consultant Malaysia';
  }, [contentPage]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FDF8F0_0%,#F7EFE4_44%,#FDF8F0_100%)] text-ink">
      {contentPage ? (
        <ContentPage page={contentPage} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Stats />
            <Calculators />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Exclusive Global Advisory on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-[0_18px_48px_rgba(22,163,74,.38)] ring-1 ring-white/30 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-success/30"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
