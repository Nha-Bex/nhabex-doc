"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Search,
  ChevronDown,
  Home,
  Settings,
  HelpCircle,
  Users,
  Calendar,
  Video,
  CreditCard,
  Car,
  ShoppingBag,
  ShoppingCart,
  Coffee,
  Dumbbell,
  Megaphone,
  Code,
  CalendarClock,
  Sun,
} from "lucide-react"
import ThemeToggle from "@/components/mode/ThemeToggle"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Map icons to menu items
const getIcon = (title: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="size-4" />,
    Soluções: <Settings className="size-4" />,
    Instalação: <Code className="size-4" />,
    Suporte: <HelpCircle className="size-4" />,
    "Fila de Espera": <Users className="size-4" />,
    Agendamento: <Calendar className="size-4" />,
    Audiência: <Video className="size-4" />,
    Pagamentos: <CreditCard className="size-4" />,
    Carro: <Car className="size-4" />,
    Loja: <ShoppingBag className="size-4" />,
    Marketplace: <ShoppingCart className="size-4" />,
    Restaurante: <Coffee className="size-4" />,
    Ginásio: <Dumbbell className="size-4" />,
    Publicidade: <Megaphone className="size-4" />,
    API: <Code className="size-4" />,
    Eventos: <CalendarClock className="size-4" />,
  }

  return iconMap[title] || <Settings className="size-4" />
}

const navItems = [
  { title: "Home", url: "/", icon: <Home className="size-4" /> },
  {
    title: "Soluções",
    url: "/",
    icon: <Settings className="size-4" />,
    hasSubmenu: true,
    submenu: [
      {
        title: "Fila de Espera",
        url: "/filadeespera",
        icon: <Users className="size-4" />,
        hasSubmenu: true,
        submenu: [
          { title: "Operador", url: "/filadeespera/balcao" },
          { title: "Balcões", url: "/filadeespera/balcoes" },
          { title: "Agência", url: "/filadeespera/agencia" },
          { title: "Serviços", url: "/filadeespera/service" },
          { title: "Utentes", url: "/filadeespera/users" },
          { title: "Prioridade", url: "/filadeespera/priority" },
          { title: "Utilizadores", url: "/filadeespera/utilizadores" },
        ],
      },
      {
        title: "Agendamento",
        url: "/agendamento",
        icon: <Calendar className="size-4" />,
      },
      {
        title: "Audiência",
        url: "/audiencia",
        icon: <Video className="size-4" />,
        hasSubmenu: true,
        submenu: [{ title: "Gestão", url: "/audiencia/management" }],
      },
    ],
  },
  { title: "Instalação", url: "/components", icon: <Code className="size-4" /> },
  { title: "Suporte", url: "/api-reference", icon: <HelpCircle className="size-4" /> },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)
  const [openSubmenuFilaEspera, setOpenSubmenuFilaEspera] = React.useState<string | null>(null)

  // Auto-open submenu based on current path
  React.useEffect(() => {
    // Check if current path matches any submenu item
    navItems.forEach((item) => {
      if (item.hasSubmenu && item.submenu) {
        item.submenu.forEach((subItem) => {
          if (pathname.startsWith(subItem.url)) {
            setOpenSubmenu(item.title)

            if (subItem.hasSubmenu && subItem.submenu) {
              subItem.submenu.forEach((subSubItem) => {
                if (pathname.startsWith(subSubItem.url)) {
                  setOpenSubmenuFilaEspera(subItem.title)
                }
              })
            }
          }
        })
      }
    })
  }, [pathname])

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title))
  }

  const toggleSubmenuFilaEspera = (title: string) => {
    setOpenSubmenuFilaEspera((prev) => (prev === title ? null : title))
  }

  return (
    <Sidebar className="border-r border-[#3CBDA1]/20 bg-gradient-to-b from-white to-[#3CBDA1]/5 dark:from-gray-950 dark:to-[#3CBDA1]/10">
      <SidebarHeader className="pb-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="2xl" asChild>
              <Link href="/">
                <div className="w-full flex justify-center p-4 mt-6 mb-2">
                  <img src="/images/logo/logoNhabexTextGreen.svg" alt="Logo" className="w-full h-auto object-contain" />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <div className="relative group">
                <Input
                  id="search"
                  placeholder="Pesquisar..."
                  className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border-[#3CBDA1]/30 focus-visible:ring-[#3CBDA1] transition-all duration-200 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3CBDA1] transition-colors duration-200" />
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>

      <div className="px-3 mb-2">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3CBDA1]/30 to-transparent"></div>
      </div>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  {item.hasSubmenu ? (
                    <div className="mb-1">
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url || openSubmenu === item.title}
                        onClick={() => toggleSubmenu(item.title)}
                        className={cn(
                          "group justify-between font-medium",
                          openSubmenu === item.title ? "bg-[#3CBDA1]/10 text-[#3CBDA1]" : "hover:bg-[#3CBDA1]/5",
                        )}
                      >
                        <div className="flex items-center justify-between w-full cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "p-1 rounded-md transition-colors",
                                openSubmenu === item.title
                                  ? "text-[#3CBDA1]"
                                  : "text-gray-500 group-hover:text-[#3CBDA1]",
                              )}
                            >
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200",
                              openSubmenu === item.title ? "rotate-180 text-[#3CBDA1]" : "text-gray-400",
                            )}
                          />
                        </div>
                      </SidebarMenuButton>

                      {openSubmenu === item.title && (
                        <div className="mt-1 space-y-1 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                          <SidebarMenu className="pl-2">
                            {item.submenu?.map((subItem) => (
                              <SidebarMenuItem key={subItem.url}>
                                {subItem.hasSubmenu ? (
                                  <div className="mb-1">
                                    <SidebarMenuButton
                                      asChild
                                      isActive={pathname === subItem.url || openSubmenuFilaEspera === subItem.title}
                                      onClick={() => toggleSubmenuFilaEspera(subItem.title)}
                                      className={cn(
                                        "group justify-between font-medium",
                                        openSubmenuFilaEspera === subItem.title
                                          ? "bg-[#3CBDA1]/10 text-[#3CBDA1]"
                                          : "hover:bg-[#3CBDA1]/5",
                                      )}
                                    >
                                      <div className="flex items-center justify-between w-full cursor-pointer">
                                        <div className="flex items-center gap-2">
                                          <span
                                            className={cn(
                                              "p-1 rounded-md transition-colors",
                                              openSubmenuFilaEspera === subItem.title
                                                ? "text-[#3CBDA1]"
                                                : "text-gray-500 group-hover:text-[#3CBDA1]",
                                            )}
                                          >
                                            {subItem.icon}
                                          </span>
                                          <span>{subItem.title}</span>
                                        </div>
                                        <ChevronDown
                                          className={cn(
                                            "size-4 transition-transform duration-200",
                                            openSubmenuFilaEspera === subItem.title
                                              ? "rotate-180 text-[#3CBDA1]"
                                              : "text-gray-400",
                                          )}
                                        />
                                      </div>
                                    </SidebarMenuButton>

                                    {openSubmenuFilaEspera === subItem.title && (
                                      <div className="mt-1 space-y-1 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                                        <SidebarMenu className="pl-3 border-l-2 border-[#3CBDA1]/20 ml-4">
                                          {subItem.submenu?.map((subSubItem) => (
                                            <SidebarMenuItem key={subSubItem.url}>
                                              <SidebarMenuButton
                                                asChild
                                                isActive={pathname === subSubItem.url}
                                                className={cn(
                                                  "group text-sm",
                                                  pathname === subSubItem.url
                                                    ? "bg-[#3CBDA1]/10 text-[#3CBDA1] font-medium"
                                                    : "hover:bg-[#3CBDA1]/5 text-gray-600 dark:text-gray-400",
                                                )}
                                              >
                                                <Link href={subSubItem.url} className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></div>
                                                  {subSubItem.title}
                                                  {pathname === subSubItem.url && (
                                                    <Badge className="ml-auto text-[0.65rem] py-0 px-1.5 bg-[#3CBDA1]/20 text-[#3CBDA1] font-normal">
                                                      Ativo
                                                    </Badge>
                                                  )}
                                                </Link>
                                              </SidebarMenuButton>
                                            </SidebarMenuItem>
                                          ))}
                                        </SidebarMenu>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <SidebarMenuButton
                                    asChild
                                    isActive={pathname === subItem.url}
                                    className={cn(
                                      "group",
                                      pathname === subItem.url
                                        ? "bg-[#3CBDA1]/10 text-[#3CBDA1] font-medium"
                                        : "hover:bg-[#3CBDA1]/5 text-gray-600 dark:text-gray-400",
                                    )}
                                  >
                                    <Link href={subItem.url} className="flex items-center gap-2">
                                      <span
                                        className={cn(
                                          "p-1 rounded-md transition-colors",
                                          pathname === subItem.url
                                            ? "text-[#3CBDA1]"
                                            : "text-gray-500 group-hover:text-[#3CBDA1]",
                                        )}
                                      >
                                        {subItem.icon}
                                      </span>
                                      {subItem.title}
                                      {pathname === subItem.url && (
                                        <Badge className="ml-auto text-[0.65rem] py-0 px-1.5 bg-[#3CBDA1]/20 text-[#3CBDA1] font-normal">
                                          Ativo
                                        </Badge>
                                      )}
                                    </Link>
                                  </SidebarMenuButton>
                                )}
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </div>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className={cn(
                        "group mb-1",
                        pathname === item.url
                          ? "bg-[#3CBDA1]/10 text-[#3CBDA1] font-medium"
                          : "hover:bg-[#3CBDA1]/5 text-gray-600 dark:text-gray-400",
                      )}
                    >
                      <Link href={item.url} className="flex items-center gap-2">
                        <span
                          className={cn(
                            "p-1 rounded-md transition-colors",
                            pathname === item.url ? "text-[#3CBDA1]" : "text-gray-500 group-hover:text-[#3CBDA1]",
                          )}
                        >
                          {item.icon}
                        </span>
                        {item.title}
                        {pathname === item.url && (
                          <Badge className="ml-auto text-[0.65rem] py-0 px-1.5 bg-[#3CBDA1]/20 text-[#3CBDA1] font-normal">
                            Ativo
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto">
        {/* Theme Toggle */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="size-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Alterar Tema</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="px-3">
          <div className="h-px bg-gradient-to-r from-transparent via-[#3CBDA1]/30 to-transparent"></div>
        </div>

        {/* Support Section */}
        <div className="p-4">
          <div className="rounded-lg bg-[#3CBDA1]/10 p-4 border border-[#3CBDA1]/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-[#3CBDA1]/20">
                <HelpCircle className="size-4 text-[#3CBDA1]" />
              </div>
              <h4 className="font-medium text-sm">Precisa de ajuda?</h4>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Acesse nossa central de suporte para obter assistência com o NhaBex.
            </p>
            <Link href="/suporte" className="block w-full">
              <button className="w-full py-1.5 px-3 text-xs font-medium rounded-md bg-[#3CBDA1] text-white hover:bg-[#35a892] transition-colors">
                Central de Suporte
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}

