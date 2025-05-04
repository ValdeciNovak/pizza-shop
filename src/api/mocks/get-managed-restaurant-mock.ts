import { http, HttpResponse } from 'msw'
import { GetManagedRestaurantResponse } from '../get-manage-restaurant'

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'custom description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
