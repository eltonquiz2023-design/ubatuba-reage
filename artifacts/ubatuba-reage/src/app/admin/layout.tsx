"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true, isAuthenticated: false });
export const useAdminAuth = () => useContext(AuthContext);

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/materias", label: "Matérias", icon: "📰" },
  { href: "/admin/denuncias", label: "Denúncias", icon: "🚨" },
  { href: "/admin/contatos", label: "Contatos", icon: "✉️" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/auth/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user ?? null);
        setIsLoading(false);
      })
      .catch(() => {
        setUser(null);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Ubatuba Reage</h1>
          <p className="text-gray-400 mb-6">Painel Administrativo</p>
          <p className="text-gray-500 text-sm mb-6">
            Faça login para acessar o painel de gerenciamento de conteúdo.
          </p>
          <a
            href="/api/login?returnTo=/admin"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Entrar
          </a>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user }}>
      <div className="min-h-screen bg-gray-950 flex">
        <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full">
          <div className="p-4 border-b border-gray-800">
            <Link href="/" className="text-white font-bold text-lg">
              Ubatuba <span className="text-blue-500">Reage</span>
            </Link>
            <p className="text-gray-500 text-xs mt-1">Painel Admin</p>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              {user.profileImageUrl && (
                <img src={user.profileImageUrl} alt="" className="w-8 h-8 rounded-full" />
              )}
              <div className="min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-gray-500 text-xs truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Ver site
              </Link>
              <span className="text-gray-700">·</span>
              <a href="/api/logout" className="text-xs text-gray-500 hover:text-red-400 transition-colors">
                Sair
              </a>
            </div>
          </div>
        </aside>
        <main className="flex-1 ml-64 p-8">{children}</main>
      </div>
    </AuthContext.Provider>
  );
}
