import { ODSCategory } from '../models/odsModel';

export const ODS_OFFICIAL_COLORS: Record<number, string> = {
  1: '#E5243B',
  2: '#DDA63A',
  3: '#4C9F38',
  4: '#C5192D',
  5: '#FF3A21',
  6: '#26BDE2',
  7: '#FCC30B',
  8: '#A21942',
  9: '#FD6925',
  10: '#DD1367',
  11: '#FD9D24',
  12: '#BF8B2E',
  13: '#3F7E44',
  14: '#0A97D9',
  15: '#56C02B',
  16: '#00689D',
  17: '#19486A',
};

export const CATEGORY_COLORS: Record<ODSCategory, { label: string; bg: string; text: string; border: string }> = {
  Social: {
    label: 'Social & Dignidade',
    bg: 'bg-rose-50 dark:bg-rose-950/40',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-200 dark:border-rose-800/60'
  },
  Ambiental: {
    label: 'Biosfera & Planeta',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800/60'
  },
  Economico: {
    label: 'Economia & Inovação',
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800/60'
  },
  Governanca: {
    label: 'Paz & Parcerias',
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-800 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800/60'
  }
};

export function hexToRgba(hex: string, alpha: number = 1): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
