import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="py-16 bg-white">  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:w-5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="startup" loading="lazy" width="" height="" />
                        </div>
                        <div className="md:w-7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Seputar informasi tentang pendidikan</h2>
                            <p className="mt-6 text-gray-600">Pendidikan adalah usaha dasar terencana untuk mewujudkan suasana belajar dan proses pembelajaran agar peserta didik secara aktif mengembangkan potensi dirinya untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan, akhlak, ilmu hidup, pengetahuan umum serta keterampilan yang diperlukan dirinya agar berguna bagi masyarakat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
