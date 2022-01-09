import React, { ButtonHTMLAttributes, DOMAttributes } from 'react'

interface MenuModel {
    id: number,
    title: string,
    color: string
}
const MenuData = [
    {
        id: 1,
        title: "نمایش تاریخ",
        color: "blue"
    },
    {
        id: 2,
        title: "درباره ما",
        color: "green"
    },
    {
        id:3,
        title: "تماس با ما",
        color: "red"
    },
]

const Menu = (onShow: React.MouseEvent<HTMLElement>) => {
    return (
        <div>
            {MenuData.map((m)=>
             <button key={m.id} style={{ backgroundColor: m.color }} onClick={()=>onShow} >{m.title}</button>
            )}
           
        </div>
    )
}

export default Menu


