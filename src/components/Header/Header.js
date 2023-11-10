import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="h-screen bg-gray-50 flex items-center">
                <section className="bg-cover bg-center py-32 w-full" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
                    <div className="container mx-auto text-left text-white">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <h1 className="text-5xl font-medium mb-6">Welcome to the education discussion</h1>
                                <p className="text-xl mb-12">“Barang siapa yang menempuh suatu jalan untuk mencari ilmu, maka Allah memudahkan untuknya jalan menuju surga.” (HR Bukhari dan Muslim).</p>
                                <a href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Start</a>
                            </div>
                            <div className="w-1/2 pl-16">
                                <img src="https://source.unsplash.com/random?ux" className="h-64 w-full object-cover rounded-xl" alt="Layout Image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Header;
