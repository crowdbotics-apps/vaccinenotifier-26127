import axios from "axios"
const data = axios.create({
  baseURL: "https://53bc23xex0.execute-api.ap-south-1.amazonaws.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function data_get_default_karnataka_vaccine_check_read(payload) {
  return data.get(`/default/karnataka_vaccine_check`)
}
export const apiService = { data_get_default_karnataka_vaccine_check_read }
