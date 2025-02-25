import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the authentication and modal state
interface AuthState {
  isAuthenticated: boolean;
  user: { username: string; email: string } | null;
  authModal: {
    open: boolean;
    type: 'login' | 'signup' | 'forgotPassword';
  };
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  authModal: {
    open: false,
    type: 'login', // Default to 'login' form in the modal
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the modal state (open/close and type)
    setAuthModalState: (state, action: PayloadAction<{ open: boolean; type: 'login' | 'signup' | 'forgotPassword' }>) => {
      state.authModal.open = action.payload.open;
      state.authModal.type = action.payload.type;
    },

    // Action to set authentication status and user
    setAuthenticated: (state, action: PayloadAction<{ isAuthenticated: boolean; user: AuthState['user'] }>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },

    // Action to log out the user
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export actions
export const { setAuthModalState, setAuthenticated, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
