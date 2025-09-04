export const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-green-600 text-white">
      <div className="max-w-7xl w-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Nyhedsbrev */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Nyhedsbrev</h3>
          <p className="mb-4 text-sm md:text-base">
            Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev
            og få de seneste klimaopdateringer direkte i din indbakke.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Indtast din email"
              className="w-full p-2 rounded-l text-black focus:outline-none"
            />
            <button className="bg-green-700 px-4 rounded-r hover:bg-green-800 transition-colors">
              Tilmeld
            </button>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Redningen 32</li>
            <li>2210 Vinterby Øster</li>
            <li>+45 12345678</li>
            <li>dga@info.dk</li>
          </ul>
        </div>

        {/* FN's Verdensmål */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">FN's Verdensmål</h3>
          <p className="mb-2 text-sm md:text-base">
            Vi støtter på organisatorisk plan op om FN's Verdensmål
            og har derfor besluttet at en del af overskuddet går
            direkte til Verdensmål nr. 13 Klimahandling.
          </p>
          <p className="underline cursor-pointer text-sm md:text-base">
            Læs mere om verdensmålene her
          </p>
        </div>
      </div>
    </footer>
  );
};
