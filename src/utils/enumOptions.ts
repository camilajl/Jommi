import { roleName } from '@prisma/client';

type OptionRole = { value: roleName; label: string };

export const roleOptions: OptionRole[] = Object.keys(roleName)
  .map((key) => ({
    value: roleName[key as keyof typeof roleName],
    label: key,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));
