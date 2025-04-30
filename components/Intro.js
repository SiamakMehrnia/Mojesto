export default function Intro() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6 scroll-mt-48">
      
      {/* Floating "Mojesto" text with black background and white border */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white z-20">
        <h1 className="text-5xl md:text-6xl font-bold">Mojesto</h1>
      </div>

      {/* Central white card with more details */}
      <div className="bg-white text-black rounded-lg border border-black shadow-md p-8 max-w-3xl w-full text-center space-y-8 z-10">
        <div className="bg-white text-black rounded-lg ">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNNRdutRniK26N6vyeF4YQCvtEBa_ZmRJ_4bVDD=s1360-w1360-h1020-rw"
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
    </section>
  );
}