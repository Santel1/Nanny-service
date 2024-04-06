import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = userCredential.user;
      await updateProfile(currentUser, {
        displayName: name,
      });
      console.log(userCredential);
      return {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const currentUser = userCredential.user;
      return {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
    return null;
  } catch (error) {
    return error.message;
  }
});
