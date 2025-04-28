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

          {/* نقشه فروشگاه */}
          <div className="w-full mt-6">
            <h3 className="text-xl font-bold mb-2 text-center">Unser Standort</h3>
            <div className="w-full h-64">
              <iframe
                title="Mojesto Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4961026741514!2d13.404954315803743!3d52.52000677981219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c23eec4ed7%3A0xe4be046e98be6a1d!2sHauptstra%C3%9Fe%20123%2C%2012345%20Berlin%2C%20Deutschland!5e0!3m2!1sen!2sde!4v1685113942967!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    );
  }