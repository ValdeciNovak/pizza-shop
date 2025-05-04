import { http, HttpResponse } from 'msw'
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      phone: '342444454',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 4000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'pizza Peperroni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1500,
        product: { name: 'pizza 4 queijo' },
        quantity: 2,
      },
    ],
  })
})
