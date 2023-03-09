import React from 'react';

const GlobalContext = React.createContext();

function GlobalProvider({ children }) {
    const state = {
        isLoggedIn: false,
        userId: null,
        username: null,
        name: null,
        email: null
    }

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }