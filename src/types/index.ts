export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  success?: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp?: string;
}

export interface HealthCheck {
  status: string;
  message: string;
  timestamp: string;
}
