export const NavBar = () => {
    return (
        <nav className="flex items-center gap-4">
            {/* Dropdown */}
            <select className="border border-green-700 px-3 py-2 text-sm rounded focus:outline-none">
                <option>Vælg Kategori</option>
            </select>

            {/* Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Opret Annonce
            </button>

            {/* Icons */}
            <div className="flex items-center gap-4 text-gray-500">
                <i className="fa-solid fa-envelope h-8 w-8"></i>
                <i className="fa-solid fa-info h-8 w-8"></i>
                <i className="fa-solid fa-user h-8 w-8"></i>
            </div>
        </nav>
    )
}