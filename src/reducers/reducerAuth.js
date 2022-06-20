const initialState = {
  isLoading: false,
  isAuthentificate: false,
  token: null,
  error: null,
};

export const reducerAuth = (state = initialState, action) => {
  const { type, payload } = action; // { id: uuid(), title: `Todo 1`, isCompleted: false }

  switch (type) {
    //TODO
    default:
      return { ...state };
  }
};
