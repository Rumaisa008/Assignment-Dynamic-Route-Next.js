import Link from "next/link"
import Nav from "../../components/nav"

export default function country() {
    return(
        <div>
            <Nav/>
            <div className="flex gap-10 flex-col items-center mt-20">
                <h1 className="bg-red-100 text-2x1 py-2 px-10 font-bold">
                    Country List:
                </h1>
                <ul className="bg-red-100 text-6x1 py-10 px-20 font-semibold">
                    <li className="ease duration-300 hover:text-red-900"><Link href={"/country/pakistan"}>Pakistan</Link></li>
                    <li className="ease duration-300 hover:text-red-900"><Link href={"/country/japan"}>Japan</Link></li>
                    <li className="ease duration-300 hover:text-red-900"><Link href={"/country/bangladesh"}>Bangladesh</Link></li>
                    <li className="ease duration-300 hover:text-red-900"><Link href={"/country/china"}>China</Link></li>
                    <li className="ease duration-300 hover:text-red-900"><Link href={"/country/russia"}>Russia</Link></li>
                </ul>
            </div>
        </div>
    )
}