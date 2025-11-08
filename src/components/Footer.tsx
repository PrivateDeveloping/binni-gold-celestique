import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="font-serif text-2xl font-bold tracking-wider mb-2">BINNI GOLD</h4>
            <p className="text-sm text-muted-foreground">Timeless Elegance Since 2024</p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h5 className="font-semibold mb-3 text-sm tracking-wider">COLLECTIONS</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/rings" className="hover:text-primary transition-colors">Rings</Link></li>
                <li><Link to="/earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
                <li><Link to="/necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
                <li><Link to="/bracelets" className="hover:text-primary transition-colors">Bracelets</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-sm tracking-wider">CONNECT</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://instagram.com/binnigold" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="mailto:hello@binnigold.com" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Binni Gold. All rights reserved. Crafted with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
