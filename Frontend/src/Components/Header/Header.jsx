import { NavBar } from "../NavBar/NavBar"

export const Header = () => {
    return (
        <header className="w-full">
            <div className="flex max-w-7xl items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center ">
                <span className="bg-green-700 text-white p-2 text-xl">
                    Den Grønne
                </span>
                <span className="border border-green-700 text-green-700 p-[7px] text-xl">
                    Avis
                </span>
                </div>
            <NavBar />
            </div>
        </header>
    )
}