import {FeatureType, StatType, StepType} from "@/types";
import {
  Award,
  BarChart3,
  Bell,
  CheckCircle2,
  DollarSign,
  Download,
  ListTodo,
  PieChart,
  Settings2,
  Shield,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const features: FeatureType[] = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Easily track and categorize your expenses with our intuitive interface. Get real-time updates on your spending habits.",
  },
  {
    icon: ListTodo,
    title: "Task Management",
    description:
      "Organize your tasks, set priorities, and never miss a deadline. Seamlessly integrate your to-dos with your financial goals.",
  },
  {
    icon: PieChart,
    title: "Budget Planning",
    description:
      "Create custom budgets, set spending limits, and receive alerts when you're approaching your threshold.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get timely reminders for bill payments, task deadlines, and budget alerts to stay on top of your commitments.",
  },
  {
    icon: TrendingUp,
    title: "Financial Analytics",
    description:
      "Gain insights into your spending patterns with detailed reports and visualizations. Make informed decisions about your money.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is protected with bank-level security. We prioritize your privacy and never share your information.",
  },
];

export const steps: StepType[] = [
  {
    icon: Download,
    title: "1. Sign Up & Import",
    description:
      "Create your account and import your expenses from your bank or manually add them.",
  },
  {
    icon: Settings2,
    title: "2. Customize & Organize",
    description: "Set up your categories, budgets, and task lists according to your needs.",
  },
  {
    icon: BarChart3,
    title: "3. Track & Analyze",
    description:
      "Monitor your spending, complete tasks, and gain insights from detailed analytics.",
  },
];

export const stats: StatType[] = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
  },
  {
    icon: DollarSign,
    value: "$10M+",
    label: "Expenses Tracked",
  },
  {
    icon: CheckCircle2,
    value: "1M+",
    label: "Tasks Completed",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "User Rating",
  },
];
