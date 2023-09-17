import React from 'react'

export default function Category(props) {
    const cards = () =>{
        let allCard = [];
        for(let i = 0;i<props.cardLen;i++){
            allCard.push(
                <div className="categories-card" key={i} >
                    <div className="categories-card-flex">
                        <div className={`categories-card-box categories-card-box-${i+1}`}>
                            {props.cardNumber[i]}
                        </div>
                        <div className="categories-card-titles">
                            <div className="categories-card-title">
                                {props.cardTitle[i]}
                            </div>
                            <div className="categories-card-text">
                                {props.cardText[i]}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return allCard;
    };
  return (
    <>
    <div className={`categories ${props.class}`}>
        <div className="container">
            <div className="categories-titles">
            {props.title !== ''?
            <div className="categories-title">
                {props.title}
            </div>:''
             }
            {
                props.text !== '' ?
                <div className="categories-text">
                    {props.text}
                </div>
                :''
            }
            </div>
            <div className="categories-cards">
                {
                   cards().map(item=>{
                    return item
                   })
                }
            </div>
        </div>
    </div>
    </>
  )
}
