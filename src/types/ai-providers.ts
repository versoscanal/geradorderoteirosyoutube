export interface AIProvider {
  id: string;
  name: string;
  icon: string;
  endpoint: string;
  keyName: string;
  getApiKeyUrl: string;
  costPer1MTokens?: string;
  costInfo?: string;
  models?: string[];
}

export const AI_PROVIDERS: AIProvider[] = [
  {
    id: 'ppq',
    name: 'PPQ.ai (PayPerQ)',
    icon: '⚡',
    endpoint: 'https://api.ppq.ai/chat/completions',
    keyName: 'ppq_api_key',
    getApiKeyUrl: 'https://ppq.ai/api-docs',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'Acesso unificado a GPT, Claude, Gemini, Grok e mais',
    models: [
      'gpt-5',
      'gpt-5-mini',
      'gpt-4o',
      'gpt-4o-mini',
      'claude-sonnet-4.6',
      'claude-sonnet-4-5',
      'claude-opus-4-1',
      'claude-3-7-sonnet',
      'gemini-2.5-pro',
      'gemini-2.5-flash',
      'grok-3',
      'deepseek-chat',
      'llama-3.3-70b'
    ]
  }
];

export interface ScriptData {
  topic: string;
  duration: string;
  style: string;
  styleKeywords: string;
  language: string;
  niche: string;
  subniche: string;
  microniche: string;
  nanoniche: string;
  audience: string;
  additionalInfo: string;
  youtubeLink: string;
  qualified: boolean;
  characteristics?: number;
}