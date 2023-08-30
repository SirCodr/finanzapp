export const getFormattedCurrency = (amount: number): string => {
  const formattingOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }

  const currenyObject = new Intl.NumberFormat('en-US', formattingOptions)

  return currenyObject.format(amount)
}
