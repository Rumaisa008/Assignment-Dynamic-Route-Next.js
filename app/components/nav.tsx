import Link from "next/link"

function Nav(){
    return(
        <div>
            <header className="bg-red-500 text-black w-full">
            <nav className="flex list-none gap-20 h-20 justify-center items-center font-bold">
                <li className="ease duration-200 hover:text-white" ><Link href={"/"}> Home </Link></li>
                <li className="ease duration-200 hover:text-white"><Link href={"/about"}> About </Link></li>
                <li className="ease duration-200 hover:text-white"><Link href={"/country"}> Country List </Link></li>
            </nav>
        </header>
        </div>
    )
}
export default Nav
