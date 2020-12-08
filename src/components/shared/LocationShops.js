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
            loc: 'Rzeszów',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non volutpat velit. Vestibulum in sollicitudin neque, in scelerisque dui. In a nisl malesuada, porttitor enim nec, consectetur felis. Donec vulputate pretium consequat. Vestibulum fringilla libero vitae mauris vestibulum, nec vestibulum est egestas.'
          },
          {
            src: 'pod2.jpg',
            loc: 'Przemyśl',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non volutpat velit. Vestibulum in sollicitudin neque, in scelerisque dui. In a nisl malesuada, porttitor enim nec, consectetur felis. Donec vulputate pretium consequat. Vestibulum fringilla libero vitae mauris vestibulum, nec vestibulum est egestas.'
          },
          {
            src: 'pod3.jpg',
            loc: 'Jarosław',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non volutpat velit. Vestibulum in sollicitudin neque, in scelerisque dui. In a nisl malesuada, porttitor enim nec, consectetur felis. Donec vulputate pretium consequat. Vestibulum fringilla libero vitae mauris vestibulum, nec vestibulum est egestas.'
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
        <div key={index}>
          <div className="a-imageContainer">
            <img className="a-image" src={`/images/${item.src}`} alt={item.alt}/>
          </div>
          <h3>{item.loc}</h3>
          <p>{item.desc}</p>
        </div>
      )
    })
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div>
      <h2>{shop && 
      shop.data.name
      }</h2>
      <Slider {...settings}>
      {itemList}
      </Slider>
    </div>
  );
}

export default LocationShops;