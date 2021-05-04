import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const data_get_default_karnataka_vaccine_check_read = createAsyncThunk(
  "data_response_get_Newdatacalls/data_get_default_karnataka_vaccine_check_read",
  async payload => {
    const response = await apiService.data_get_default_karnataka_vaccine_check_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const data_response_get_NewdatacallsSlice = createSlice({
  name: "data_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [data_get_default_karnataka_vaccine_check_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [data_get_default_karnataka_vaccine_check_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [data_get_default_karnataka_vaccine_check_read.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  data_get_default_karnataka_vaccine_check_read,
  slice: data_response_get_NewdatacallsSlice
}
