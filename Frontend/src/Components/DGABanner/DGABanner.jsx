export const DGABanner = () => {
  return (
    <div className="relative w-6xl m-auto h-64 flex items-center justify-center bg-cover bg-center bg-[url('http://localhost:3000/assets/images/banners/banner_image1.jpg')]">
      <div className="relative text-center text-black px-4">
        <h1 className="text-3xl text-white font-semibold mb-2">Den Grønne Avis</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Vi går forest i kampen om klimaet ved at give 2 kr. til klima-venlige
          formål, hver gang du handler brugt på Den Grønne Avis.
        </p>
      </div>
    </div>
  );
};
