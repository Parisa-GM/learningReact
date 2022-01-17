import React, { createContext } from 'react';


export const SimpleContext = createContext({
    persons: [],
    person: "",
    handleDeletePerson: () => { },
    handleNameChange: () => { },
    handleNewPerson: () => { },
    setPerson: () => { }
});
export default SimpleContext;