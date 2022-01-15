import React from 'react'

interface person{
    fullname:string,
    changed:any,
    deleted:any
}
export const ListPerson = (person:person) => {
    return (
        <div className='card text-white bg-info mb-3 mt-3 w-25 mx-auto'>
            <div className='card-card-body text-center'>
                <p className='d-block'>عنوان</p>
                <div className='input-group justify-content-center'>
                    <input type="text" className='form-control w-50' placeholder={person.fullname} onChange={person.changed}/>
                    <div className='input-group-prepend'>
                        <button className='btn btn-sm btn-danger fa fa-trash' onClick={person.deleted}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListPerson;