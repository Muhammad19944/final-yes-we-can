/**
 * Удаляет все пробелы
 * */
export const clearSpaces = (value: string) => value.replaceAll(' ', '')
/**
 * Удаляет все cимволы и альфавиты
 * */
export const clearSymbols = (value: string) => value.replace(/\D/g, '')
/**
 * Первая буква заглавная
 * */
export const capitalize = (value: string | null) => {
  if (!value) return ''

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}
/**
 * Форматирует размер файла
 * */
export const formatFileSize = (size: number): string => {
  switch (true) {
    case size < 1024:
      return `${size} B`
    case size < 1024 * 1024:
      return `${(size / 1024).toFixed(2)} KB`
    case size < 1024 * 1024 * 1024:
      return `${(size / (1024 * 1024)).toFixed(2)} MB`
    default:
      return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`
  }
}
/**
 * Форматирует число виде валюты
 * */
export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat('ru', {
    maximumSignificantDigits: 3
  })

  return formatter.format(value)
}
