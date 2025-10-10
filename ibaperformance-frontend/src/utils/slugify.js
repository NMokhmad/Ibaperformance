export function createSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Enlever caractères spéciaux
    .replace(/\s+/g, '-') // Espaces en tirets
    .replace(/-+/g, '-'); // Tirets multiples en un
}