interface RegisterType {
  username?: string;
  email: string;
  password: string;
}

interface FeatureType {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StepType {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StatType {
  icon: React.ElementType;
  value: string;
  label: string;
}

interface SidebarType {
  isCollapsed: boolean;
  setIsCollapsed: () => void;
}

interface StateType {
  currency: string;
  setCurrency: (currency: string) => void;
}

export type {RegisterType, FeatureType, StepType, StatType, SidebarType, StateType};
