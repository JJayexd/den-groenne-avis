export const Donations = () => {
  return (
    <div className="w-6xl m-auto grid grid-cols-2 text-white">
        <div className="w-[560px] relative p-4 m-auto h-48 items-center justify-center bg-cover bg-center bg-[url('http://localhost:3000/assets/images/banners/banner_image2.jpg')]">
            <h2>Donationer til Dato</h2>
            <p>Sammen med dig har vi siden starten indsamlet:</p>
            <span className="font-semibold text-3xl">452.231,50 kr</span>
            <p>Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
        <div className="w-[560px] relative p-4 m-auto h-48 items-center justify-center bg-cover bg-center bg-[url('http://localhost:3000/assets/images/banners/banner_image3.jpg')]">
            <h2>Donationer i år</h2>
            <p>Sammen med dig har vi i år indsamlet:</p>
            <span className="font-semibold text-3xl">452.231,50 kr</span>
            <p>Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
    </div>
  );
};
