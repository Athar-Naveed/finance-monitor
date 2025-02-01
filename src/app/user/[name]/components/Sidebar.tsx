"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {sideNavigation} from "../data/constants";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Don't render sidebar on login page
  if (pathname === "/login") return null;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Sidebar for laptop screens */}
      <aside
        className={`hidden lg:block h-screen fixed bg-neutral-900 border-r border-white dark:border-slate-700 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex h-16 items-center border-b border-white dark:border-slate-700 px-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-md bg-transparent"
          >
            <Menu className="h-5 w-5 text-white bg-transparent" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>
          {!isCollapsed && (
            <div className="ml-2 flex items-center gap-2">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="ExpenseFlow Logo"
                className="rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-dark-custom-dark-blue dark:text-light-light-white">
                  Expense Flow
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
              </div>
            </div>
          )}
        </div>
        <nav className="p-2 mt-5">
          {sideNavigation.map((section, index) => (
            <div key={index} className="mb-8">
              {!isCollapsed && (
                <h3 className="my-2 px-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                  {section.section}
                </h3>
              )}
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold ${
                        pathname === item.href
                          ? "bg-gray-100 dark:bg-gray-700 font-medium text-dark-custom-dark-blue dark:text-light-light-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                      title={isCollapsed ? item.title : undefined}
                    >
                      {<item.icon />}
                      {!isCollapsed && <span>{item.title}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Bottom bar for mobile and tablet screens  */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-white dark:border-slate-700">
        <div className="flex justify-around items-center h-16">
          {sideNavigation.flatMap((section) =>
            section.items.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center w-16 h-16 ${
                  pathname === item.href
                    ? "text-dark-custom-dark-blue dark:text-light-light-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {<item.icon className="h-6 w-6" />}
                <span className="text-xs mt-1">
                  {item.title.match("Finance") ? item.title.substring(0, 8) : item.title}
                </span>
              </Link>
            )),
          )}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center justify-center w-16 h-16 text-gray-700 dark:text-gray-300"
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
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {sideNavigation.flatMap((section) =>
                section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-2 rounded-md ${
                      pathname === item.href ? "bg-gray-700" : "text-gray-300"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {<item.icon className="h-6 w-6 mb-1" />}
                    <span className={`text-xs text-center`}>
                      {item.title.match("Finance") ? item.title.substring(0, 8) : item.title}
                    </span>
                  </Link>
                )),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
