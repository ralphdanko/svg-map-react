import React from 'react';
import Slider from "react-slick";

function LocationShops({currentLocation}) { 
  const shops = [
    {
      id : 'podkarpackie', 
      data: {
        name : 'woj. podkarpackie',
        images: [
          {
            src: 'pod1.jpg',
            desc: 'opis 1'
          },
          {
            src: 'pod2.jpg',
            desc: 'opis 2'
          },
          {
            src: 'pod3.jpg',
            desc: 'opis 3'
          }
        ]
      }
    },
    {
      id : 'malopolskie', 
      data: {
        name : 'woj. małopolskie',
        images: [
          {
            src: 'mal1.jpg',
            desc: 'opis 1'
          },
          {
            src: 'mal2.jpg',
            desc: 'opis 2'
          },
          {
            src: 'mal3.jpg',
            desc: 'opis 3'
          }
        ]
      }
    },
    {
      id : 'slaskie', 
      data: {
        name : 'woj. śląskie',
      }
    },
    {
      id : 'opolskie', 
      data: {
        name : 'woj. polskie',
      }
    },
    {
      id : 'dolnoslaskie', 
      data: {
        name : 'woj. dolnośląskie',
      }
    },
  ];
  
  let shop = shops.find(shop => {
    return shop.id === currentLocation;
  })
  let itemList = [];
  let imagesList = shop ? shop.data.images : null;
  if (imagesList) {
    imagesList.forEach((item,index)=>{
      itemList.push( 
      <div className="a-imageContainer" key={index}>
        <img className="a-image" src={`/images/${item.src}`} alt={item.alt}/>
      </div>)
    })
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div>
      <Slider {...settings}>
      {itemList}
      </Slider>
    </div>
  );
}

export default LocationShops;