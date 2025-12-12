import Link from "next/link";

export function Navbar() {

    return (
        <nav className="w-full py-5 flex items-center justify-between bg-brown-200 px-1">
        <div className="flex items-center gap-8">
            <Link href="/">
            <img src="/chailogo6.png" alt="Logo" className="w-46 h-16"/> 
            </Link>
        </div>
        </nav>
    )
}