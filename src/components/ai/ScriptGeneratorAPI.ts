import { AIProvider, ScriptData } from "@/types/ai-providers";

export class ScriptGeneratorAPI {
  static async generateScript(provider: AIProvider, scriptData: ScriptData, apiKey: string, model?: string): Promise<string> {
    const prompt = this.buildPrompt(scriptData);

    switch (provider.id) {
      case 'ppq':
        return this.callPPQ(apiKey, prompt, model);
      default:
        throw new Error(`Provider ${provider.id} não suportado`);
    }
  }

  private static async callPPQ(apiKey: string, prompt: string, model?: string): Promise<string> {
    const response = await fetch("https://api.ppq.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model || "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(`Erro PPQ.ai (${response.status}): ${errorText || response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content ?? "";
  }

  private static buildPrompt(scriptData: ScriptData): string {
    return `
Crie um roteiro detalhado para um vídeo do YouTube com as seguintes especificações:

**Tópico:** ${scriptData.topic}
**Duração:** ${scriptData.duration} minutos
**Estilo:** ${scriptData.style}
**Palavras-chave do estilo:** ${scriptData.styleKeywords || "Nenhuma"}
**Idioma:** ${scriptData.language || "Português (Brasil)"}
**Nicho:** ${scriptData.niche || "Não informado"}
**Sobrenicho:** ${scriptData.subniche || "Não informado"}
**Micronicho:** ${scriptData.microniche || "Não informado"}
**Nanonicho:** ${scriptData.nanoniche || "Não informado"}
**Link de referência (YouTube):** ${scriptData.youtubeLink || "Nenhum"}
**Público qualificado:** ${scriptData.qualified ? "Sim" : "Não"}
**Público-alvo:** ${scriptData.audience || "Geral"}
**Número de características/pontos:** ${scriptData.characteristics || 5}
**Informações adicionais:** ${scriptData.additionalInfo || "Nenhuma"}

O roteiro deve incluir:
1. Hook inicial (primeiros 15 segundos)
2. Introdução e apresentação do problema/tópico
3. Desenvolvimento do conteúdo principal (dividido em ${scriptData.characteristics || 5} seções/pontos principais)
4. Call-to-action para inscrição e likes
5. Conclusão e próximos passos
6. Outro (final do vídeo)

Formate o roteiro de forma clara, com indicações de tempo aproximado para cada seção.
Use uma linguagem envolvente e adequada para YouTube.
Inclua sugestões de elementos visuais quando relevante.
Adapte o tom e a linguagem conforme as palavras-chave do estilo fornecidas.
Adapte o conteúdo ao nicho e subnichos especificados.
Se houver link do YouTube, use-o apenas como referência (sem copiar), destacando diferenciais e atualizações.
Se o público for qualificado, aprofunde a terminologia e a complexidade; caso contrário, simplifique e use exemplos práticos.
Escreva todo o roteiro no idioma especificado pelo usuário.
Estruture o conteúdo principal em exatamente ${scriptData.characteristics || 5} pontos ou características principais.
`;
  }

}