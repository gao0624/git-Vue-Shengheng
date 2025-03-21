// api/reservation.js
import request from '@/utils/request'

export function getShops() {
  return request.get('/api/shops')
}

export function getFloors(shopId) {
  return request.get(`/api/shops/${shopId}/floors`)
}

export function getRooms(shopId, floor) {
  return request.get(`/api/shops/${shopId}/floors/${floor}/rooms`)
}

export function createReservation(data) {
  return request.post('/api/reservations', data)
}

export function getReservations(params) {
  return request.get('/api/reservations', { params })
}

export function cancelReservation(id) {
  return request.put(`/api/reservations/${id}/cancel`)
}