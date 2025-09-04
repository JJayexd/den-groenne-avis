export const Donations = () => {
  return (
    <div className="max-w-6xl w-full mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg group">
        <img
          src="http://localhost:3000/assets/images/banners/banner_image2.jpg"
          alt="Donationer til Dato"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 text-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Donationer til Dato</h2>
          <p className="text-sm md:text-base mb-2">Sammen med dig har vi siden starten indsamlet:</p>
          <span className="font-bold text-2xl md:text-3xl mb-2">452.231,50 kr</span>
          <p className="text-xs md:text-sm">Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg group">
        <img
          src="http://localhost:3000/assets/images/banners/banner_image3.jpg"
          alt="Donationer i år"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 text-white">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Donationer i år</h2>
          <p className="text-sm md:text-base mb-2">Sammen med dig har vi i år indsamlet:</p>
          <span className="font-bold text-2xl md:text-3xl mb-2">452.231,50 kr</span>
          <p className="text-xs md:text-sm">Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
      </div>
    </div>
  );
};
