export const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const initialState = {
  filter: '',
};

export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
