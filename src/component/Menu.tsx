import React from 'react'

interface MenuModel {
    id: number,
    title: string,
    color: string
    // onShow:(e:React.MouseEvent<HTMLElement>)=>void
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
        id: 3,
        title: "تماس با ما",
        color: "red"
    },
    {
        id: 4,
        title: "مدیریت  افراد",
        color: "yellow"
    }
]
interface Props {

}

const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    console.log(button.id);

}

const Menu = ({ onShow }: { onShow: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <div>
            {MenuData.map((m) =>
                <button key={m.id} style={{ backgroundColor: m.color }} onClick={onShow} >{m.title}</button>
            )}

        </div>
    )
}

export default Menu


