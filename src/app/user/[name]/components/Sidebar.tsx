"use client";

import * as React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {sidebarStore} from "@/store/sidebarStore";
import {bottomNavItems, mainNavItems} from "../data/constants";
import Cookies from "js-cookie";
export function Sidebar() {
  const {isCollapsed, setIsCollapsed} = sidebarStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const userName = pathname.split("/")[2];
  if (pathname === "/sign-in") return null;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLogout = () => {
    Cookies.remove("jwtToken");
    location.reload();
  };
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col fixed h-screen bg-neutral-900 border-r border-slate-500 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo Section */}
        <div className="flex h-16 items-center border-b px-4 text-white">
          <button
            onClick={setIsCollapsed}
            className="p-2 rounded-md hover:bg-white hover:text-black"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>
          {!isCollapsed && <span className="ml-3 text-xl font-semibold ">Expense Flow</span>}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          <div className="space-y-1">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                href={`${item.title == "Dashboard" ? item.href + userName : `/user/${userName}${item.href}`}`}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-gray-100 text-black"
                    : "text-white hover:text-black hover:bg-gray-100"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isCollapsed ? "mx-auto" : "mr-3"}`} />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t p-2">
          {bottomNavItems.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-white hover:text-black hover:bg-gray-100"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isCollapsed ? "mx-auto" : "mr-3"}`} />
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ) : (
              <div
                key={index}
                onClick={handleLogout}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-white hover:text-black hover:bg-gray-100"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isCollapsed ? "mx-auto" : "mr-3"}`} />
                {!isCollapsed && <span>{item.title}</span>}
              </div>
            ),
          )}
        </div>
      </aside>

      {/* Keep your existing mobile navigation code here */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white dark:border-slate-700">
        <div className="flex justify-around items-center h-16">
          {mainNavItems.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              href={`${item.title == "Dashboard" ? item.href + userName : `/user/${userName}${item.href}`}`}
              className={`flex flex-col items-center justify-center w-16 h-16 ${
                pathname === item.href ? "text-slate-100" : "text-gray-100"
              }`}
            >
              <item.icon className="h-6 w-6 text-gray-100" color={"white"} />
              <span className="text-xs mt-1">{item.title}</span>
            </Link>
          ))}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center justify-center w-16 h-16 text-slate-100"
          >
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white dark:border-slate-700 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-dark-custom-dark-blue dark:text-light-light-white">
                Menu
              </h2>
              <button onClick={toggleMobileMenu}>
                <X className="h-6 w-6 text-slate-100" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...mainNavItems, ...bottomNavItems].map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    href={`${item.title == "Dashboard" ? item.href + userName : `/user/${userName}${item.href}`}`}
                    className={`flex flex-col items-center justify-center p-2 rounded-md ${
                      pathname === item.href ? "bg-gray-700" : "text-slate-100"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <item.icon className="h-6 w-6 mb-1 text-slate-100" />
                    <span className="text-xs text-center text-slate-100">{item.title}</span>
                  </Link>
                ) : (
                  <div
                    key={index}
                    onClick={handleLogout}
                    className={`flex flex-col items-center justify-center p-2 rounded-md cursor-pointer ${
                      pathname === item.href ? "bg-gray-700" : "text-slate-100"
                    }`}
                  >
                    <item.icon className="h-6 w-6 mb-1 text-slate-100" />
                    <span className="text-xs text-center text-slate-100">{item.title}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
