import {
  Bell,
  LayoutGrid,
  LogOut,
  MessageSquare,
  Pocket,
  Settings,
  Shield,
  User,
} from "lucide-react";
export const mainNavItems = [
  {title: "Dashboard", icon: LayoutGrid, href: "/user/"},
  {title: "Pockets", icon: Pocket, href: "/pockets"},
  {title: "Users", icon: User, href: "/users"},
  {title: "Messages", icon: MessageSquare, href: "/messages"},
  {title: "Security", icon: Shield, href: "/security"},
  {title: "Notifications", icon: Bell, href: "/notifications"},
];

export const bottomNavItems = [
  {title: "Settings", icon: Settings, href: "/settings"},
  {title: "Logout", icon: LogOut, button: true},
];

export const pockets = [
  {
    user: "65f8c4b2e7a5f5d1c2a3b4c5", // Example MongoDB ObjectId as a string
    user_pocket: [
      {
        pocketName: "Personal",
        pocketDesc: "Personal expenses and savings",
        earnings: [
          {
            from: "Salary",
            amount: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            from: "Freelancing",
            amount: 500,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        spendings: [
          {
            to: "Groceries",
            amount: 200,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            to: "Rent",
            amount: 700,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      },
      {
        pocketName: "Business",
        pocketDesc: "Business-related finances",
        earnings: [
          {
            from: "Client Payment",
            amount: 3000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        spendings: [
          {
            to: "Office Rent",
            amount: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      },
    ],
  },
];
