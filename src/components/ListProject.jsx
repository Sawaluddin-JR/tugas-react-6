
const ListProject = () => {
    const listProject = [
        {
            id: 1,
            judul: "Photo Sharing Application",
            deskripsi: "Aplikasi sederhana bertujuan untuk berbagi photo berbasis website",
            image:"photo-sharing-application.jpg",
            linkRepo: "https://github.com/Sawaluddin-JR/PhotoSharinggApplication.git"
        },
        {
            id: 2,
            judul: "Typing Game",
            deskripsi: "Game mengetik berbasis web,di kerjakan untuk memenuhi nilai tugas",
            image:"typing-game.jpg",
            linkRepo: "https://github.com/Sawaluddin-JR/TypingGame.git"
        },
        {
            id: 3,
            judul: "UTS React",
            deskripsi: "Aplikasi e-commerce sederhana yang menempilkan beberapa produk",
            image:"uts-react.jpg",
            linkRepo: "https://github.com/Sawaluddin-JR/uts-react-sawaluddin.git"
        },
        {
            id: 4,
            judul: "Website Perpustakaan",
            deskripsi: "Aplikasi sederhana yang mengelola data-data di perpustakaan berbasis website",
            image:"web-perpus.png",
            linkRepo: "https://github.com/Sawaluddin-JR/project-website-perpustakaan-kuliah.git"
        },
        {
            id: 5,
            judul: "Laundry Visual",
            deskripsi: "Aplikasi sederhana yang mengelola data-data di perusahaan laundry berbasis desktop",
            image:"laundry-visual.png",
            linkRepo: "https://github.com/Sawaluddin-JR/project-pelatihan-website.git"
        },
        {
            id: 6,
            judul: "School Management System",
            deskripsi: "Aplikasi sederhana yang memanajemen data-data di sekolah SMK N berbasis desktop",
            image:"school-management-system.png",
            linkRepo: "https://github.com/Sawaluddin-JR/StudentManagementSystem.git"
        },
    ];

    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Project <span className="text-primary">Saya</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Karya Yang biasa Saja!</p>
            </div>
            <div className="flex items-center justify-center mt-12 gap-10 flex-wrap cursor-pointer">
                {
                    listProject.map((e) => {
                        return <a href={e.linkRepo} key={e} className="border-2 border-primary relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl ml-8 hover:border-cyan-600">
                            <img src={e.image} className="flex w-100% items-center justify-normal text-6xl bg-gray-900 hover:text-primary"/>
                            <p className="text-bold mt-3">({e.id}) {e.judul}</p>
                            <p className="mt-3 text-semibold">{e.deskripsi}</p>
                            <a href={e.linkRepo} className="text-yellow-200 text-sm lg:text-sm hover:border-cyan-600">Repository</a>
                        </a>
                    })
                }
            </div>
        </section>
    )
}

export default ListProject