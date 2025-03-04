"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/" },
  {
    title: "Soluções",
    url: "/",
    hasSubmenu: true,
    submenu: [
      { title: "Fila de Espera", url: "/filadeespera", hasSubmenu: true, submenu: [
        { title: "Operador Balcão", url: "/filadeespera/balcao" },
        { title: "Monitor", url: "/filadeespera/submenu2" },
        { title: "Agência", url: "/filadeespera/agencia" },
      ] },
      { title: "Agendamento", url: "/agendamento" },
      { title: "Audiência", url: "/audiencia" },
    ],
  },
  { title: "Instalação", url: "/components" },
  { title: "Suporte", url: "/api-reference" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
  const [openSubmenuFilaEspera, setOpenSubmenuFilaEspera] = React.useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title));
  };

  const toggleSubmenuFilaEspera = (title: string) => {
    setOpenSubmenuFilaEspera((prev) => (prev === title ? null : title));
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="w-full flex justify-center p-4">
                  <img
                    src="/logo/logoNhabexTextGreen.svg"
                    alt="Logo"
                    className="w-full h-auto object-contain"
                  />
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
              <Input id="search" placeholder="Digite" className="pl-8" />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  {item.hasSubmenu ? (
                    <div>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        <div className="flex items-center justify-between w-full cursor-pointer">
                          <Link href={item.url}>{item.title}</Link>
                          <ChevronDown
                            className={`ml-2 size-4 transition-transform duration-200 ${
                              openSubmenu === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </SidebarMenuButton>

                      {openSubmenu === item.title && (
                        <div className="ml-4 mt-1 space-y-1">
                          <SidebarMenu className="p-1">
                            {item.submenu?.map((subItem) => (
                              <SidebarMenuItem key={subItem.url}>
                                {subItem.hasSubmenu ? (
                                  <div>
                                    <SidebarMenuButton
                                      asChild
                                      isActive={pathname === subItem.url}
                                      onClick={() => toggleSubmenuFilaEspera(subItem.title)}
                                    >
                                      <div className="flex items-center justify-between w-full cursor-pointer">
                                        <Link href={subItem.url}>{subItem.title}</Link>
                                        <ChevronDown
                                          className={`ml-2 size-4 transition-transform duration-200 ${
                                            openSubmenuFilaEspera === subItem.title ? "rotate-180" : ""
                                          }`}
                                        />
                                      </div>
                                    </SidebarMenuButton>

                                    {openSubmenuFilaEspera === subItem.title && (
                                      <div className="ml-4 mt-1 space-y-1">
                                        <SidebarMenu className="p-1">
                                          {subItem.submenu?.map((subSubItem) => (
                                            <SidebarMenuItem key={subSubItem.url}>
                                              <SidebarMenuButton asChild isActive={pathname === subSubItem.url}>
                                                <Link href={subSubItem.url} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                                  {subSubItem.title}
                                                </Link>
                                              </SidebarMenuButton>
                                            </SidebarMenuItem>
                                          ))}
                                        </SidebarMenu>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <SidebarMenuButton asChild isActive={pathname === subItem.url}>
                                    <Link href={subItem.url} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                      {subItem.title}
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
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
