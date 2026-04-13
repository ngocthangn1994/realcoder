import OpenAI from 'openai';
import { env } from '../../config/env';

const client = env.OPENAI_API_KEY ? new OpenAI({ apiKey: env.OPENAI_API_KEY }) : null;

export interface ResumeAnalysis {
  recommendedJobTitles: string[];
  topSkills: string[];
  missingSkills: string[];
  candidateSummary: string;
  searchKeywords: string[];
}

export const analyzeResume = async (resumeText: string, profile: Record<string, unknown>): Promise<ResumeAnalysis> => {
  if (!client) {
    return {
      recommendedJobTitles: ['Senior Product Designer', 'UX Designer'],
      topSkills: ['Figma', 'Design Systems', 'User Research'],
      missingSkills: ['A/B testing'],
      candidateSummary: 'Strong product design background with startup delivery experience.',
      searchKeywords: ['product designer remote', 'design systems lead']
    };
  }

  const prompt = `Analyze resume and profile as JSON. Resume: ${resumeText}
Profile:${JSON.stringify(profile)}`;
  const res = await client.responses.create({
    model: env.OPENAI_MODEL,
    input: prompt,
    text: {
      format: {
        type: 'json_schema',
        name: 'resume_analysis',
        schema: {
          type: 'object',
          properties: {
            recommendedJobTitles: { type: 'array', items: { type: 'string' } },
            topSkills: { type: 'array', items: { type: 'string' } },
            missingSkills: { type: 'array', items: { type: 'string' } },
            candidateSummary: { type: 'string' },
            searchKeywords: { type: 'array', items: { type: 'string' } }
          },
          required: ['recommendedJobTitles', 'topSkills', 'missingSkills', 'candidateSummary', 'searchKeywords'],
          additionalProperties: false
        }
      }
    }
  });

  return JSON.parse(res.output_text) as ResumeAnalysis;
};

export const generateCoverLetter = async (jobTitle: string, company: string, resumeSummary: string) => {
  if (!client) return `Dear Hiring Team at ${company},

I'm excited to apply for ${jobTitle}. ${resumeSummary}`;
  const result = await client.responses.create({
    model: env.OPENAI_MODEL,
    input: `Write a concise cover letter for ${jobTitle} at ${company}. Candidate summary: ${resumeSummary}`
  });
  return result.output_text;
};
