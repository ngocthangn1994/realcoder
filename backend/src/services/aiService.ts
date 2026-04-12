import OpenAI from 'openai';
import { env } from '../config/env';

const client = env.OPENAI_API_KEY ? new OpenAI({ apiKey: env.OPENAI_API_KEY }) : null;

export const analyzeResume = async (resumeText: string, profileContext: Record<string, unknown>) => {
  if (!client) {
    return {
      bestMatchingJobTitles: ['Product Manager', 'Operations Analyst'],
      topSkillsFound: ['Stakeholder communication', 'SQL'],
      missingSkills: ['Experimentation frameworks'],
      candidateSummary: 'Strong cross-functional operator with measurable outcomes.',
      jobSearchKeywords: ['product operations', 'growth analytics']
    };
  }

  const response = await client.responses.create({
    model: env.OPENAI_MODEL,
    input: `Analyze resume and profile. Return JSON with bestMatchingJobTitles, topSkillsFound, missingSkills, candidateSummary, jobSearchKeywords. Resume:${resumeText}. Profile:${JSON.stringify(profileContext)}`,
    text: { format: { type: 'json_object' } }
  });

  return JSON.parse(response.output_text);
};

export const generateCoverLetter = async (jobTitle: string, company: string, resumeSummary: string) => {
  if (!client) return `Dear ${company},\n\nI am excited to apply for the ${jobTitle} role...`;
  const response = await client.responses.create({
    model: env.OPENAI_MODEL,
    input: `Write a concise tailored cover letter for ${jobTitle} at ${company} using this summary: ${resumeSummary}`
  });
  return response.output_text;
};
