import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "./data/portfolioData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import CaseModal from "./components/CaseModal";
import Process from "./components/Process";
import Performance from "./components/Performance";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const { theme, languages, defaultLanguage } = portfolioData;
  const [language, setLanguage] = useState(defaultLanguage);
  const [activeCase, setActiveCase] = useState(null);
  const data = languages[language];
  const languageCodes = useMemo(() => Object.keys(languages), [languages]);

  useReveal();

  useEffect(() => {
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <>
      <Header
        nav={data.nav}
        languages={languageCodes}
        activeLanguage={language}
        onLanguageChange={code => {
          setLanguage(code);
          setActiveCase(null);
        }}
      />
      <main id="top">
        <Hero hero={data.hero} />
        <Stats stats={data.stats} />
        <Work section={data.work} cases={data.cases} onOpenCase={setActiveCase} />
        <Process process={data.process} />
        <Performance performance={data.performance} />
        <Skills section={data.skills} />
        <About about={data.about} />
        <Contact contact={data.contact} />
      </main>
      <footer>{data.nav.brand} - {data.footer}</footer>
      {activeCase && <CaseModal labels={data.modal} item={activeCase} onClose={() => setActiveCase(null)} />}
    </>
  );
}
