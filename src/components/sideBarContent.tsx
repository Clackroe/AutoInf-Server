import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

// import Image from "next/image";

import { defaultNavItems, type NavItem } from "./navItems";

type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};

const SidebarContent = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

  return (
    <div className="z-20 bg-indigo-700 text-zinc-50">
      <div className="flex flex-col justify-between">
        {/* {logo and collapse button} */}
        <div
          className={cn({
            "flex items-center border-b border-b-indigo-800": true,
            "justify-between p-4": !collapsed,
            "justify-center py-4": collapsed,
            "fixed md:static md:translate-x-0": true,
            "w-[300px]": !collapsed,
            "w-16": collapsed,
            "-translate-x-full": !shown,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className="roudned-full grid h-10 w-10 place-content-center hover:bg-indigo-800"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="h-5 w-5"></Icon>
          </button>
        </div>
        {/* nav items part */}
        <nav className="flex-grow">
          <ul
            className={cn({
              "my-2 flex flex-col items-stretch gap-2": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cn({
                    "flex text-indigo-100 hover:bg-indigo-900": true, //colors
                    "transition-colors duration-300": true, //animation
                    "mx-3 gap-4 rounded-md p-2 ": !collapsed,
                    "mx-3 h-10 w-10 rounded-full p-2": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarContent;
