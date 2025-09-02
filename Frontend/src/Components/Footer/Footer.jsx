export const Footer = () => {
    return (
        <footer className="w-full mt-16 h-48 bg-green-500">
            <div className="grid grid-cols-3 gap-8 w-7xl m-auto">
                <ul>
                    <li className="text-2xl text-white mt-4">Nyhedsbrev</li>
                    <li className="mt-4">
                        Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev
                        og få de seneste klima opdateringer direkte i din indbakke.
                    </li>
                    <li><input type="text"></input></li>
                </ul>
                <ul>
                    <li className="text-2xl text-white mt-4">Kontakt</li>
                    <li className="mt-4">Redningen 32</li>
                    <li>2210 Vinterby Øster</li>
                    <li>+45 12345678</li>
                    <li>dga@info.dk</li>
                </ul>
                <ul>
                    <li className="text-2xl text-white mt-4">FN's Verdensmål</li>
                    <li className="mt-2">
                        Vi støtter på organisatorisk plan op om FN's Verdensmål
                        og har derfor besluttet at en del af overskuddet går
                        direkte til Verdensmål nr. 13 Klimahandling.
                    </li>
                    <li className="mt-2 text-white">Læs mere om FN's Verdensmål her</li>
                </ul>
            </div>
        </footer>
    )
}