import { http, HttpResponse } from 'msw'
import { getMonthOrdersAmountResponse } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  getMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
