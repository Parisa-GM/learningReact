import React,{useContext} from 'react'
import SimpleContext from "../../context/SimpleContext";
import Person from '../Person/Person'


export const ListPerson = () => {
    const context = useContext(SimpleContext);
    console.log(context);
    return (
        <div>
            {context.persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => context.handleDeletePerson(person.id)}
                    changed={event =>
                        context.handleNameChange(event, person.id)
                    }
                />
            ))}
        </div>
    );
}
export default ListPerson;
