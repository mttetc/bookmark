export const isBlank = (str: string): boolean => /^\s*$/.test(str)
export const isUrl = (str: string): boolean => /\b(https?:\/\/\S*\b)/g.test(str)
