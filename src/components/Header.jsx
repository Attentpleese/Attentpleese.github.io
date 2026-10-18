const navItems = [
  ["work", "work"],
  ["process", "process"],
  ["performance", "performance"],
  ["skills", "skills"],
  ["about", "about"],
  ["contact", "contact"]
];

export default function Header({ nav, languages, activeLanguage, onLanguageChange }) {
  return (
    <header className="site-nav">
      <a className="brand" href="#top">{nav.brand}</a>
      <div className="nav-right">
        <nav>
          {navItems.map(([key, id]) => <a key={id} href={`#${id}`}>{nav[key]}</a>)}
        </nav>
        <div className="language-switcher" aria-label="Language switcher">
          {languages.map(code => (
            <button
              key={code}
              className={activeLanguage === code ? "is-active" : ""}
              type="button"
              onClick={() => onLanguageChange(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
