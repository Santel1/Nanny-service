import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";

export const fetchData = createAsyncThunk(
  "nanny/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const db = getDatabase();
      const dataRef = ref(db, "/");
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        return rejectWithValue("Данные не найдены");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
