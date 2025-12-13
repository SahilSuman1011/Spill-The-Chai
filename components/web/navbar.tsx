import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {

    return (
        <nav className="w-full py-3 flex items-center justify-between bg-[#dd8136] px-1">
        <div className="flex items-center gap-8">
            <Link href="/">
            <h1 className="font-bold text-2xl tracking-wide text-[#f5e6d3]" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>
                Spill The <span className="text-amber-900">Chai</span> ☕</h1>
            </Link>

            <div className="flex items-center gap-2">
                <Link className={buttonVariants({variant: "ghost"})} href="/">Home</Link>
                <Link className={buttonVariants({variant: "ghost"})} href="/blog">Blog</Link>
                <Link className={buttonVariants({variant: "ghost"})} href="/create">Create</Link>
            </div>
        </div>
        
        <div className="flex items-center gap-2">
            <Link className={buttonVariants({variant: "outline"})} href="/auth/sign-up">Sign up</Link>
            <Link className={buttonVariants({variant: "outline"})} href="/auth/login">Login</Link>

            <ThemeToggle />
        </div>

        </nav>
    )
}