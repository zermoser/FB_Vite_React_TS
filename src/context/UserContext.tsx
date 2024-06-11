import React, { createContext, useReducer, ReactNode } from 'react';

interface State {
  email: string;
}

interface Action {
  type: 'SET_EMAIL';
  payload: string;
}

const initialState: State = {
  email: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
