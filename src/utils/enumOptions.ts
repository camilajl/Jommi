import { EnumDocumentType } from '@prisma/client';

type OptionTypeProbability = { value: ; label: string };

export const leadProbabilityOptions: [] = Object.keys(enumLeadProbability)
  .map((key) => ({
    value: enumLeadProbability[key as keyof typeof enumLeadProbability],
    label: key,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));
