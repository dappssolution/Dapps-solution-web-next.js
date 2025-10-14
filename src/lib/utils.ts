type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null }

export function cn(...inputs: ClassValue[]) {
  return inputs
    .map((input) => {
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
      }
      return input
    })
    .filter(Boolean)
    .join(' ')
}

// Converts Western digits to Arabic-Indic numerals
export function toArabicNumerals(input: string | number): string {
  return String(input).replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 0x0660 - 0x0030));
} 