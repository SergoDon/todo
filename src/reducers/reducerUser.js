const initialState = {
  isLoading: false,
  user: false,
  error: null,
};

export const reducerUser = (state = initialState, action) => {
  const { type, payload } = action; // { id: uuid(), title: `Todo 1`, isCompleted: false }

  switch (type) {
    //TODO
    default:
      return { ...state };
  }
};
