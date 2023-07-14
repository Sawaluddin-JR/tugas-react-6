
const Contact = () => {
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Kontak <span className="text-primary">Saya</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Hubungi : <span className="text-yellow-300 text-bold">+</span>628 8889 5432 11</p>
                <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
                    <form className="flex flex-col flex-1 gap-5">
                        <input type="text" placeholder="Nama anda" />
                        <input type="email" placeholder="Alamat email anda" /><textarea placeholder="Pesan anda" rows={10}></textarea>
                        <button className="btn-primary w-fit">Kirim</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact