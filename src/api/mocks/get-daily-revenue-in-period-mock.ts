import { http, HttpResponse } from 'msw'
import { GetDailyRevenueInPeriodResponse } from '../get-day-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2025', receipt: 200 },
    { date: '02/01/2025', receipt: 435 },
    { date: '03/01/2025', receipt: 674 },
    { date: '04/01/2025', receipt: 342 },
    { date: '05/01/2025', receipt: 300 },
    { date: '06/01/2025', receipt: 324 },
    { date: '07/01/2025', receipt: 800 },
  ])
})
