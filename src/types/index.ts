export interface StartupIdea {
  name: string;
  description: string;
  market: string;
  targetAudience: string;
}

export interface AnalysisResult {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  targetAudience: string[];
  revenueIdeas: string[];
  improvementSuggestions: string[];
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: AnalysisResult;
}