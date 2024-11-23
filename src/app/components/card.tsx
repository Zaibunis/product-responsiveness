import Image from "next/image";

export default function Card() {
    return (
        <div className="justify-around">
            {/* Title Section */}
            <h1 className="mt-10 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl decoration-slate-950">
                🌟 MY SPRAY PRODUCTS 🌟
            </h1>

            {/* Perfume Card */}
            <div className="flex flex-col w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded-md p-6 sm:p-8 border border-red-950 transition-transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray text-center">Perfume</h2>
                <Image
                    src="/R.jpeg"
                    width={300}
                    height={200}
                    alt="Perfume"
                    className="mx-auto mt-4"
                />
                <p className="text-gray-800 text-center mt-5 font-semibold">Description:</p>
                <div className="text-gray text-center mt-5">
                    <ul className="list-disc pl-5 mx-auto text-left">
                        <li><strong>Exquisite Scent 🌹</strong></li>
                        <li><strong>Long-Lasting 🌟</strong></li>
                        <li><strong>Premium Ingredients 💎</strong></li>
                        <li><strong>Perfect Gift 🎁</strong></li>
                    </ul>
                </div>
                <p className="text-gray-800 text-center mt-5 font-semibold border border-gray-400 px-4 py-2">
                    Price: 2000Rs
                </p>
                <p className="text-gray-800 text-center mt-5 font-semibold mb-5">
                    Order now and transform ordinary moments into extraordinary memories. 💖
                </p>
                <button className="w-full text-white font-semibold py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">
                    Order Now
                </button>
            </div>

            {/* Room Spray Card */}
            <div className="flex flex-col w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded-md p-6 sm:p-8 border border-red-950 transition-transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray text-center">Room Spray</h2>
                <Image
                    src="/rm.jpeg"
                    width={300}
                    height={200}
                    alt="Room Spray"
                    className="mx-auto mt-4"
                />
                <p className="text-gray-800 text-center mt-5 font-semibold">Description:</p>
                <div className="text-gray text-center mt-5">
                    <ul className="list-disc pl-5 mx-auto text-left">
                        <li><strong>Instant Freshness ✨</strong></li>
                        <li><strong>Irresistible Fragrances 🌿</strong></li>
                        <li><strong>Easy to Use 👍</strong></li>
                    </ul>
                </div>
                <p className="text-gray-800 text-center mt-5 font-semibold border border-gray-400 px-4 py-2">
                    Price: 2000Rs
                </p>
                <p className="text-gray-800 text-center mt-5 font-semibold mb-5">
                    Elevate your everyday moments. Spray it, love it, live it! 🌸
                </p>
                <button className="w-full text-white font-semibold py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">
                    Order Now
                </button>
            </div>

            {/* Room Freshener Card */}
            <div className="flex flex-col w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded-md p-6 sm:p-8 border border-red-950 transition-transform hover:scale-105 hover:shadow-lg mb-20">
                <h2 className="text-xl sm:text-2xl font-bold text-gray text-center">Room Freshener</h2>
                <Image
                    src="/rf.jpeg"
                    width={300}
                    height={200}
                    alt="Room Freshener"
                    className="mx-auto mt-4"
                />
                <p className="text-gray-800 text-center mt-5 font-semibold">Description:</p>
                <div className="text-gray text-center mt-5">
                    <ul className="list-disc pl-5 mx-auto text-left">
                        <li><strong>Instant Freshness ✨</strong></li>
                        <li><strong>Captivating Fragrances 🌺</strong></li>
                        <li><strong>Easy to Use 👍</strong></li>
                    </ul>
                </div>
                <p className="text-gray-800 text-center mt-5 font-semibold border border-gray-400 px-4 py-2">
                    Price: 2000Rs
                </p>
                <p className="text-gray-800 text-center mt-5 font-semibold mb-5">
                    Elevate your everyday moments. Spray it, love it, live it! 🌸
                </p>
                <button className="w-full text-white font-semibold py-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">
                    Order Now
                </button>
            </div>
        </div>
    );
}
