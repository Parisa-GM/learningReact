import React, { useState } from 'react';
import 'antd/dist/antd.css'
import Header from './component/Header';
import { ListPerson } from './component/Person/ListPerson';
import Menu from './component/Menu';
import { Person } from './component/Person/Person';
import { toast } from 'react-toastify';
import { SimpleContext } from './context/SimpleContext';
import { NewPerson } from './component/Person/NewPerson';
import { Button } from "react-bootstrap";



const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const button: HTMLButtonElement = event.currentTarget;
  console.log(button.id);

}

function App() {
  interface personModel{
    id:number,
    fullname:string
  
  }
  const [getPersons, setPersons] = useState<personModel[]>([]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPersons, setShowPersons] = useState(true);

  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);
  };

  const handleDeletePerson = (id:number) => {
    const persons  = [...getPersons];    
    const filteredPersons = persons.filter(p => p.id !== id); 
    setPersons(filteredPersons);

    const personIndex = persons.findIndex(p => p.id === id);
    const person = persons[personIndex];

    toast.error(`${person.fullname} با موفقیت حذف شد`, {
      position: "top-right",
      closeOnClick: true
    });
  };

  const handleNameChange = (event:{ target: { value: string; }; }, id: number) => {
    // const { persons: allPersons } = getPersons;

    // const personIndex = allPersons.findIndex(p => p.id === id);
    // const person = allPersons[personIndex];
    // person.fullname = event.target.value;

    // const persons = [...allPersons];

    // persons[personIndex] = person;
    // setPersons(persons);
  };

  const handleNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getSinglePerson
    };

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");

      toast.success("شخصی با موفقیت اضافه شد.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true
      });
    }
  };

  const setPerson = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSinglePerson(event.currentTarget.value);
  };

  let person = null;

  if (getShowPersons) {
    person = <ListPerson/>;
  }
  return (

    <SimpleContext.Provider
      value={{
        persons []: getPersons,
        person: getSinglePerson,
        handleDeletePerson: handleDeletePerson,
        handleNameChange: handleNameChange,
        handleNewPerson: handleNewPerson,
        setPerson: setPerson
      }}
    >
      <div className="rtl text-center">
        <Header appTitle='آموزش  React' personLenght={0}></Header>
        <Menu onShow={handleClick} />
        <NewPerson />
        <Button
          onClick={handleShowPerson}
          variant={getShowPersons ? "info" : "danger"}>
          نمایش اشخاص
        </Button>

      </div>
    </SimpleContext.Provider>
  );
}

export default App;
