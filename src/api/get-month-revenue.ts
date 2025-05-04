import { api } from '../lib/axios'

export interface getMonthRevenueAmountResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenueAmount() {
  const response = await api.get<getMonthRevenueAmountResponse>(
    '/metrics/month-receipt'
  )
  return response.data
}
