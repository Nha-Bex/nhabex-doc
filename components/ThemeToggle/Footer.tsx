import Link from "next/link"
import { Facebook, Youtube, Instagram, Linkedin, Sun } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3cbda1] text-black py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="space-y-6">
            {/* <div className="flex items-center">
              <h2 className="text-4xl font-bold">
                NH
                <span className="relative">
                  A<span className="absolute -top-1 left-2 text-black">▲</span>
                </span>
                BEX
              </h2>
            </div> */}
            <p className="text-lg">Soluções Inteligentes para a sua empresa</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Aplicativos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Aplicativo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Sistema Comercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contatos</h3>
            <ul className="space-y-3">
              <li>+238 983 77 73</li>
              <li>
                <Link href="mailto:info@nhabex.com" className="hover:underline">
                  info@nhabex.com
                </Link>
              </li>
              <li>
                Achada São Filipe,
                <br />
                Praia, Cabo Verde
              </li>
            </ul>
          </div>

          {/* More */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Mais</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Termos e Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-emerald-500">
          <div className="mb-4 md:mb-0">2024 © NhaBex</div>
          <div className="flex items-center space-x-2">
            <span>powered by</span>
            <span className="font-bold text-blue-800">
              B<span className="text-blue-600">SOLUTIONS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

