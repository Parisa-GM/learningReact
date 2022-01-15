import React from 'react';
import 'antd/dist/antd.css'
import Header from './component/Header';
import { ListPerson } from './component/ListPerson';
import Menu from './component/Menu';
import { Person } from './component/Person';


const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const button: HTMLButtonElement = event.currentTarget;
  console.log(button.id);

}
const handleShow = (id: number) => {


}
const handleNewPerson = () => {
}
const handleDeletePerson = () => {

}
const handleChangePerson = () => {

}

function App() {
  return (
    <div className="rtl text-center">
      <Header appTitle='آموزش  React' personLenght={0}></Header>
      <Menu onShow={handleClick} />
      <Person addPerson={handleNewPerson} />
      <ListPerson fullname='parisa' changed={handleChangePerson} deleted={handleDeletePerson} />

    </div>
  );
}

export default App;
