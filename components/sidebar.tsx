"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Bengali, Righteous } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  LuArrowDownRight,
  LuArrowUpLeft,
  LuEdit,
  LuFileClock,
  LuFileEdit,
  LuFileInput,
  LuFileOutput,
  LuIterationCw,
  LuLayoutDashboard,
  LuMegaphone,
  LuSettings,
} from "react-icons/lu";

const serifBangla = Noto_Serif_Bengali({
  weight: "700",
  subsets: ["bengali"],
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    items: [{ path: "/dashboard" }, { path: "/dashboard/sample" }],
    icon: LuLayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "IRC",
    items: [{ href: "/irc" }, { href: "/irc/sample" }],
    icon: LuArrowDownRight,
    href: "/irc",
    color: "text-pink-400",
  },
  {
    label: "ERC",
    icon: LuArrowUpLeft,
    href: "/erc",
    color: "text-indigo-500",
  },
  {
    label: "Renew Application",
    icon: LuFileEdit,
    href: "/renewal",
    color: "text-lime-500",
  },
  {
    label: "Re-registration",
    icon: LuIterationCw,
    href: "/re-registration",
    color: "text-amber-500",
  },
  {
    label: "Change Information",
    icon: LuEdit,
    href: "/change-info",
    color: "text-emerald-500",
  },
  {
    label: "Extension of Permits",
    icon: LuFileClock,
    href: "/extension-permits",
    color: "text-cyan-500",
  },
  {
    label: "Export Permits",
    icon: LuFileOutput,
    href: "/export-permits",
    color: "text-green-200",
  },
  {
    label: "Import Permits",
    icon: LuFileInput,
    href: "/import-permits",
    color: "text-red-200",
  },
  {
    label: "Complain | Query Box",
    icon: LuMegaphone,
    href: "/complain",
    color: "text-orange-500",
  },
  {
    label: "Settings",
    icon: LuSettings,
    href: "/settings",
    // color: "text-sky-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  // console.log({ pathname });

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 pt-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-9 h-9 mr-4'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className={cn("text-md font-bold", serifBangla.className)}>
            অনলাইন লাইসেন্সিং মডিউল
          </h1>
        </Link>
        <div className='space-y-1 '>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
