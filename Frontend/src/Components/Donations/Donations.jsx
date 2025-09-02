export const Donations = () => {
  const donationsData = [
    {
      title: "Donationer til Dato",
      subtitle: "Sammen med dig har vi siden starten indsamlet:",
      amount: "452.231,50 kr",
      note: "Tak fordi du handler brugt, med omtanke for klimaet",
      bgImage: "/path/to/your/first/image.png", // skift til stien til dit billede
    },
    {
      title: "Donationer i år",
      subtitle: "Sammen med dig har vi i år indsamlet:",
      amount: "112.452,75 kr",
      note: "Tak fordi du handler brugt, med omtanke for jorden",
      bgImage: "/path/to/your/second/image.png", // skift til stien til dit billede
    },
  ];

  return (
    <div className="w-6xl m-auto grid grid-cols-2 gap-4">
        <div className="relative m-auto h-64 items-center justify-center bg-cover bg-center bg-[url('http://localhost:3000/assets/images/banners/banner_image2.jpg')]">
            <h2>Donationer til Dato</h2>
            <p>Sammen med dig har vi siden starten indsamlet:</p>
            <span className="font-semibold text-3xl">452.231,50 kr</span>
            <p>Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
        <div className="relative m-auto h-64 items-center justify-center bg-cover bg-center bg-[url('http://localhost:3000/assets/images/banners/banner_image3.jpg')]">
            <h2>Donationer i år</h2>
            <p>Sammen med dig har vi i år indsamlet:</p>
            <span className="font-semibold text-3xl">452.231,50 kr</span>
            <p>Tak fordi du handler brugt, med omtanke for klimaet.</p>
        </div>
    </div>
  );
};
