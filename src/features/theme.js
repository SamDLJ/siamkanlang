import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = "";

export const themeSlice = createSlice({
	name: "theme",
	initialState: { value: initialStateValue },
	reducers: {
		changeColour: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const { changeColour } = themeSlice.actions;

export default themeSlice.reducer;