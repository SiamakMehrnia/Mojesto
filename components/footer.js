// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white text-black py-8 px-6 border-t border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* آدرس */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Adresse</h3>
            <p>Hauptstraße 123</p>
            <p>12345 Berlin, Deutschland</p>
          </div>
  
          {/* اطلاعات تماس */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Kontakt</h3>
            <p>Telefon: +49 123 456789</p>
            <p>Email: info@mojesto.de</p>
          </div>
  
          {/* کپی‌رایت */}
          <div className="text-center">
            <p>© 2025 Mojesto. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    );
  }