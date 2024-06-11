import React, { createContext, useReducer, ReactNode } from 'react';

// --------------------- กำหนดประเภทของสถานะ (State) และการกระทำ (Action) ---------------------
interface State {
  email: string;
}

interface Action {
  type: 'SET_EMAIL';
  payload: string;
}

// --------------------- กำหนดสถานะเริ่มต้น (Initial State) --------------------------------------
const initialState: State = {
  email: '',
};

// สร้าง Reducer Function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// --------------------- สร้าง Context ---------------------------------------------------------
const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  }>({ state: initialState, dispatch: () => null });
  
// --------------------- สร้าง UserProvider Component ------------------------------------------
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
  };
  
  // --------------------- สร้าง Context Provider ไปใช้ ----------------------------------------
export { UserContext, UserProvider };
