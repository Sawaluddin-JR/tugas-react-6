
const About = () => {
    const info = [
        { text: "Years exprience", count: "2" },
        { text: "Completed Projects", count: "75" },
        { text: "Companies Work", count: "08" },
    ];
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Tentang <span className="text-primary">Saya</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">Perkenalkan Saya</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                adalah mahasiswa dari Universitas Nasional PASIM Bandung
                                mengambil Program Studi S1 Teknik Informatika dan saya
                                sudah menjalaninya selama 4 semester penuh dengan rintangan
                                yang melewati luas nya samudera dan dalamnya lautan di india.Tetapi berkat doa dan support sang ibu saya masih bisa bertahan sampai sekarang <span className="text-yellow-200">love you mom</span> 
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}
                                            <span className="text-primary">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div> 
                            <a href="#" download>
                                <button className="btn-primary mt-10">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex md:mt-0 mt-6 justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                            <img src="about-photo.png" alt="about-image" className="w-full object-cover bg-cyan-800 rounded-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About