"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || pathname !== "/"
          ? "bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10"
          : "bg-transparent border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Tribe</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/directory"
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname === "/directory" ? "text-blue-400" : "text-zinc-400",
              )}
            >
              Directory
            </Link>
            <Link
              href="/universities"
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname.startsWith("/universities") ? "text-blue-400" : "text-zinc-400",
              )}
            >
              Universities
            </Link>
            <Link
              href="/majors"
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname.startsWith("/majors") ? "text-blue-400" : "text-zinc-400",
              )}
            >
              Majors
            </Link>
            <Link
              href="/classes"
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname.startsWith("/classes") ? "text-blue-400" : "text-zinc-400",
              )}
            >
              Classes
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/admin" className="hidden md:block">
            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/10">
              Admin
            </Button>
          </Link>
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/10">
              Log in
            </Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
              Sign up
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              href="/directory"
              className="py-2 text-zinc-400 hover:text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Directory
            </Link>
            <Link
              href="/universities"
              className="py-2 text-zinc-400 hover:text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Universities
            </Link>
            <Link
              href="/majors"
              className="py-2 text-zinc-400 hover:text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Majors
            </Link>
            <Link
              href="/classes"
              className="py-2 text-zinc-400 hover:text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Classes
            </Link>
            <Link
              href="/admin"
              className="py-2 text-zinc-400 hover:text-white font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin
            </Link>
            <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/login"
                className="py-2 text-zinc-400 hover:text-white font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

