import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoCss3 } from "react-icons/io"
import { TbBrandCSharp } from "react-icons/tb"
import { SiMysql } from "react-icons/si"

const Skills = () => {
    return (
        <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    Keahlian <span className="text-primary">Saya</span>
                </h3>
                <p className="text-gray-100 mt-3 text-lg">Pengetahuan saya</p>
                <div className="flex items-center justify-center mt-12 gap-10 flex-wrap cursor-pointer">
                    <div className="border-2 border-primary relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                        <AiFillHtml5 className="w-16 h-16 flex items-center justify-normal rounded-full text-6xl bg-gray-900 hover:text-yellow-600" />
                        <p className="text-xl mt-3">HTML</p><p className="text-yellow-200 font-bold text-lg">75%</p>
                    </div>
                    <div className="border-2 border-primary relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                        <IoLogoCss3 className="w-16 h-16 flex items-center justify-normal rounded-full text-6xl bg-gray-900 hover:text-yellow-600" />
                        <p className="text-xl mt-3">CSS</p><p className="text-yellow-200 font-bold text-lg">60%</p>
                    </div>
                    <div className="border-2 border-primary relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                        <TbBrandCSharp className="w-16 h-16 flex items-center justify-normal rounded-full text-6xl bg-gray-900 hover:text-yellow-600" />
                        <p className="text-xl mt-3">C SHARP</p><p className="text-yellow-200 font-bold text-lg">82%</p>
                    </div>
                    <div className="border-2 border-primary relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                        <SiMysql className="w-16 h-16 flex items-center justify-normal rounded-full text-6xl bg-gray-900 hover:text-yellow-600" />
                        <p className="text-xl mt-3">MYSQL</p><p className="text-yellow-200 font-bold text-lg">80%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills