import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Firework Rocket",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Sky Shorts",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Bijli Crackers",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Hydro Bomb",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Flower Pots",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Walas",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Lakshmi CrackerBox",
    },
  ]

  return (
    <>
      <div className='category nav_cat'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
