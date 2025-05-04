import { http, HttpResponse } from 'msw'
import { getMonthRevenueAmountResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  getMonthRevenueAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})
