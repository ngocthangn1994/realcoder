import { Resume } from '../../models/Resume';

export const upsertResume = async (userId: string, payload: { fileUrl: string; originalFileName: string; parsedText: string; extractedSkills: string[]; extractedTitles: string[]; aiSummary: string }) => {
  return Resume.findOneAndUpdate(
    { userId },
    { ...payload, userId },
    { upsert: true, new: true }
  );
};
