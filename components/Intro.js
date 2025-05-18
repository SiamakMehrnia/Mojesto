export default function Intro() {
  return (
    <section className="relative min-h-screen bg-black px-6 pt-28 scroll-mt-48">
      {/* Fixed Mojesto Title at top center */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white">shop</h1>
      </div>

      {/* Central white card with more details */}
      <div className="flex items-center justify-center h-full pt-20">
        <div className="bg-white text-black rounded-lg border border-black shadow-md p-8 max-w-3xl w-full text-center space-y-8 z-10">
          {/* Box with image instead of Willkommen */}
          <div className="bg-white text-black rounded-lg">
            <img
              src="https://martinmax.de/wp-content/uploads/2021/01/martin-max-friseur-laden-innen.jpg"
              alt="Image Box"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <p className="text-lg md:text-xl">
            Ihr Schönheitssalon für exklusive Pflege und Stil. 
            Erleben Sie Qualität auf höchstem Niveau und lassen Sie sich von unserem
            professionellen Team verwöhnen. Wir bieten Ihnen maßgeschneiderte Pflege,
            die Ihre natürliche Schönheit unterstreicht. Besuchen Sie uns für ein
            unvergessliches Erlebnis!
          </p>
        </div>
      </div>
    </section>
  );
}