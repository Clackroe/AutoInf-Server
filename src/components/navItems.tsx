// components/defaultNavItems.tsx
import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="h-6 w-6" />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <CalendarIcon className="h-6 w-6" />,
  },
];
