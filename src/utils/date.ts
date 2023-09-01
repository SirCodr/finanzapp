import { DATE_FORMAT } from '@src/consts/dateFormats'
import { type DateFormatConversionType } from '@src/types/dateConversion'
import { DateTime } from 'luxon'

export const getFormattedDate = (
  date: string,
  format: DateFormatConversionType = {}
) => {
  const { entry = DATE_FORMAT, output = DATE_FORMAT } =
    format
  return DateTime.fromFormat(date, entry).toFormat(output)
}
