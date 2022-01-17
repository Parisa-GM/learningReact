import React,{useContext} from 'react'
import { Alert } from 'antd';
import SimpleContext from '../../context/SimpleContext';


export const NewPerson = () => {
    const context = useContext(SimpleContext);
    return (
        <div className='rtl text-center'>
            {/* <div className='alert alert-info'>
                <h2>مدیریت کاربر</h2>
            </div> */}


            {/* <Alert message="مدیریت کاربر" type="info" showIcon />
            <h5 className='alert alert-light'>
                تعداد افراد فعال
                <span className='badge badge-pill badge-danger'>0</span>
            </h5> */}

            <div className='m-2 p-2'>
                <form  className='form-inline justify-content-center' onSubmit={e => e.preventDefault()}>
                    <div className='input-group w-25'>
                        <input
                         type="text" 
                         placeholder='اسم بهم بده'
                          className='form-control'
                           />
                        <div className='input-group-prepend'>
                            <button type="submit" className='btn btn-sm btn-success fa fa-pluse-square'
                             onClick={context.handleNewPerson} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
