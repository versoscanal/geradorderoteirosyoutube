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
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    icon: '✨',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    keyName: 'gemini_api_key',
    getApiKeyUrl: 'https://aistudio.google.com/app/apikey',
    costInfo: 'Plano gratuito disponível',
  },
  {
    id: 'openai',
    name: 'OpenAI (ChatGPT)',
    icon: '🤖',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    keyName: 'openai_api_key',
    getApiKeyUrl: 'https://platform.openai.com/api-keys',
    costInfo: 'Pago por uso',
  },
  {
    id: 'claude',
    name: 'Anthropic Claude',
    icon: '🧠',
    endpoint: 'https://api.anthropic.com/v1/messages',
    keyName: 'claude_api_key',
    getApiKeyUrl: 'https://console.anthropic.com/settings/keys',
    costInfo: 'Pago por uso',
  },
  {
    id: 'grok',
    name: 'xAI Grok',
    icon: '🚀',
    endpoint: 'https://api.x.ai/v1/chat/completions',
    keyName: 'grok_api_key',
    getApiKeyUrl: 'https://console.x.ai/',
    costInfo: 'Pago por uso',
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    icon: '🌬️',
    endpoint: 'https://api.mistral.ai/v1/chat/completions',
    keyName: 'mistral_api_key',
    getApiKeyUrl: 'https://console.mistral.ai/api-keys/',
    costInfo: 'Plano gratuito disponível',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    icon: '🔎',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    keyName: 'deepseek_api_key',
    getApiKeyUrl: 'https://platform.deepseek.com/api_keys',
    costInfo: 'Baixo custo',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: '🔮',
    endpoint: 'https://api.perplexity.ai/chat/completions',
    keyName: 'perplexity_api_key',
    getApiKeyUrl: 'https://www.perplexity.ai/settings/api',
    costInfo: 'Pago por uso',
  },
  {
    id: 'meta',
    name: 'Meta Llama (Together)',
    icon: '🦙',
    endpoint: 'https://api.together.xyz/v1/chat/completions',
    keyName: 'meta_api_key',
    getApiKeyUrl: 'https://api.together.xyz/settings/api-keys',
    costInfo: 'Pago por uso',
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