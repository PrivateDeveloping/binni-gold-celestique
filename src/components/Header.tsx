import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" data-testid="link-home">
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider hover:text-primary transition-colors">
            BINNI GOLD
          </h1>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-light tracking-wide">
          <a href="/#about" className="hover:text-primary transition-colors">About</a>
          <a href="/#collections" className="hover:text-primary transition-colors">Collections</a>
          <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <a href="https://instagram.com/binnigold" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-instagram">
            <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
}
