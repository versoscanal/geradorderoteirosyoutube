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
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
    keyName: 'gemini_api_key',
    getApiKeyUrl: 'https://aistudio.google.com/app/apikey',
    costPer1MTokens: 'Free tier disponível',
    costInfo: 'Gemini 2.0/1.5 - tier gratuito generoso',
    models: [
      'gemini-2.0-flash-exp',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-1.5-flash-8b'
    ]
  },
  {
    id: 'openai',
    name: 'OpenAI',
    icon: '🤖',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    keyName: 'openai_api_key',
    getApiKeyUrl: 'https://platform.openai.com/api-keys',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'GPT-4o, GPT-4 Turbo, GPT-3.5',
    models: [
      'gpt-4o',
      'gpt-4o-mini',
      'gpt-4-turbo',
      'gpt-3.5-turbo'
    ]
  },
  {
    id: 'claude',
    name: 'Anthropic Claude',
    icon: '🧠',
    endpoint: 'https://api.anthropic.com/v1/messages',
    keyName: 'claude_api_key',
    getApiKeyUrl: 'https://console.anthropic.com/settings/keys',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'Claude 3.5 Sonnet, Opus, Haiku',
    models: [
      'claude-3-5-sonnet-20241022',
      'claude-3-5-haiku-20241022',
      'claude-3-opus-20240229'
    ]
  },
  {
    id: 'grok',
    name: 'xAI Grok',
    icon: '🚀',
    endpoint: 'https://api.x.ai/v1/chat/completions',
    keyName: 'grok_api_key',
    getApiKeyUrl: 'https://console.x.ai/',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'Grok 2 e Grok Beta',
    models: ['grok-2-latest', 'grok-2-1212', 'grok-beta']
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    icon: '🌬️',
    endpoint: 'https://api.mistral.ai/v1/chat/completions',
    keyName: 'mistral_api_key',
    getApiKeyUrl: 'https://console.mistral.ai/api-keys/',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'Mistral Large, Medium, Small',
    models: ['mistral-large-latest', 'mistral-small-latest', 'open-mistral-nemo']
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    icon: '🔍',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    keyName: 'deepseek_api_key',
    getApiKeyUrl: 'https://platform.deepseek.com/api_keys',
    costPer1MTokens: 'Muito barato',
    costInfo: 'DeepSeek Chat e Coder - excelente custo-benefício',
    models: ['deepseek-chat', 'deepseek-reasoner']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: '🔮',
    endpoint: 'https://api.perplexity.ai/chat/completions',
    keyName: 'perplexity_api_key',
    getApiKeyUrl: 'https://www.perplexity.ai/settings/api',
    costPer1MTokens: 'Pay-per-use',
    costInfo: 'Modelos com busca online integrada',
    models: ['llama-3.1-sonar-large-128k-online', 'llama-3.1-sonar-small-128k-online']
  },
  {
    id: 'llama',
    name: 'Meta Llama (Groq)',
    icon: '🦙',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions',
    keyName: 'groq_api_key',
    getApiKeyUrl: 'https://console.groq.com/keys',
    costPer1MTokens: 'Free tier disponível',
    costInfo: 'Llama 3.3/3.1 via Groq - ultra rápido',
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant', 'llama-3.1-70b-versatile']
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