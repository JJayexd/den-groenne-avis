export const DGABanner = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto h-[300px] overflow-hidden rounded-lg">
      <img
        src="http://localhost:3000/assets/images/banners/banner_image1.jpg"
        alt="Den Grønne Avis - Klima-venlige køb"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
          Den Grønne Avis
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto">
          Vi går forrest i kampen om klimaet ved at give 2 kr. til klima-venlige
          formål, hver gang du handler brugt på Den Grønne Avis.
        </p>
      </div>
    </section>
  );
};
