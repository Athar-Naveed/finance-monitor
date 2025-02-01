import {CheckCircle, Home, LucideCircleDollarSign} from "lucide-react";

export const sideNavigation = [
  {
    section: "Home",
    items: [
      {
        title: "Overview",
        href: "/user",
        icon: Home,
      },
      {
        title: "ToDo's",
        href: "/todo",
        icon: CheckCircle,
      },
      {
        title: "Finance Manager",
        href: "/finance_manager",
        icon: LucideCircleDollarSign,
      },
    ],
  },
];
