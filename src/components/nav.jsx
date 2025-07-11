export default function Navbar() {
    return (
        <nav className="max-w-[90vw] backdrop-blur-md bg-white/30 border border-white/20 shadow-md rounded-xl px-6 py-3 mb-6 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-lg font-semibold text-gray-800">DOST</h1>
            <div className="flex gap-2 flex-wrap">

                <button
                    onClick={() => navigate('/my-therapies')}
                    className="px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm"
                >
                    My Therapies
                </button>
                <button
                    onClick={() => navigate('/resources')}
                    className="px-4 py-2 bg-white/60 text-[#ff6347] border border-[#ff6347] rounded-lg hover:bg-[#fff1ee] transition-colors text-sm"
                >
                    Resources
                </button>
                <button
                    onClick={() => navigate('/therapists')}
                    className="px-4 py-2 bg-[#ff6347] text-white rounded-lg hover:bg-[#e5533d] transition-colors text-sm"
                >
                    Therapists Around Me
                </button>
            </div>
        </nav>

    )
}