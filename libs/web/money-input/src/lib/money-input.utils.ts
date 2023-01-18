const formatMoney = (value: string, locale: string, currency: string) => {
  const number = Number(value)
  if (isNaN(number)) return '0.00'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  })
    .format(number)
    .trim()
}

export { formatMoney }
