import React,{ useState } from "react";
import PropertyContext from "./propertyContext";
const PropertyState = (props) =>{
const Property = [
    {
      name: "PriceTon Villa", 
      src:"https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      size: "580 x 940", 
      noOfFlats: 6,
      noOfTenents : 1, 
      tenents : [
        {
          id:0,
          name : 'Vinay',
          rent : '10k',
        }

      ]
    },
    {
      name: "White Villa", 
      src:"https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      size: "580 x 940", 
      noOfFlats: 6, 
      noOfTenents : 1, 
      tenents : [
        {
          id:0,
          name : 'Vinayak',
          rent : '10k',
        }

      ]
    },
    {
      name: "Oceanic Villa", 
      src: "https://cdn.pixabay.com/photo/2016/08/05/17/32/new-1572747__340.jpg",
      size: "580 x 940", 
      noOfFlats: 6, 
      noOfTenents : 5, 
      tenents : [
        {
          id:0,
          name : 'Ram',
          rent : '10k',
        },
        {
          id:1,
          name : 'Vinay',
          rent : '10k',
        },
        {
          id:2,
          name : 'Vinamra',
          rent : '10k',
        },
        {
          id:3,
          name : 'Vaishali',
          rent : '10k',
        },
        {
          id:4,
          name : 'Shikhar',
          rent : '10k',
        }

      ]
    },
    {
      name: "Farm ", 
      src: "https://cdn.pixabay.com/photo/2016/08/05/17/32/new-1572747__340.jpg",
      size: "580 x 940", 
      noOfFlats: 6, 
      noOfTenents : 1, 
      tenents : [
        {
          id:0,
          name : 'Vipul',
          rent : '10k',
        }

      ]
    },
    {
      name: "Grees Villa", 
      src:"https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      
      size: "580 x 940", 
      noOfFlats: 6, 
      noOfTenents : 1, 
      tenents : [
        {
          id:0,
          name : 'Vikram',
          rent : '10k',
        }

      ]
    },
    {
      name: "White House", 
      src:"https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",
      
      size: "580 x 940", 
      noOfFlats: 6, 
      noOfTenents : 1, 
      tenents : [
        {
          id:0,
          name : 'Vishal',
          rent : '10k',
        }

      ]
    },

  ]
  
  const [properties, setProperties] = useState(Property);
  const addTenent = (propertyName, tenentName, tenentRent) =>{
    properties.map((pro, index) =>{
      if(pro.name === propertyName){
        const newProperties = [...properties];
        const newNoOfTenents = pro.noOfTenents +1;
        const newTenent = [...pro.tenents,{id:Date.now(),name:tenentName,rent: tenentRent}]
        newProperties[index].noOfTenents = newNoOfTenents;
        newProperties[index].tenents = newTenent;
        setProperties(newProperties);
      }
      index = index+1;
    })
  }
  const editTenent = (propertyName, tenentId, tenentNewName, tenentNewRent)=>{
    properties.map((pro, index) =>{
      if(pro.name === propertyName){
        const newProperties = [...properties];
        pro.tenents.map((ten, idx)=>{
          if(ten.id == tenentId){
            newProperties[index].tenents.splice(idx,1,{id:Date.now(),name:tenentNewName,rent: tenentNewRent});
          }
          idx = idx+1;
        })
        setProperties(newProperties);
      }
      index = index+1;
    })
  }
  const deleteTenent = (propertyName, tenentId) =>{
    properties.map((pro, index) =>{
      if(pro.name === propertyName){
        const newProperties = [...properties];
        const newNoOfTenents = pro.noOfTenents -1;
        pro.tenents.map((ten, idx)=>{
          if(ten.id === tenentId){
            newProperties[index].tenents.splice(idx,1);
          }
          idx = idx+1;
        })
        newProperties[index].noOfTenents = newNoOfTenents;
        setProperties(newProperties);
      }
      index = index+1;
    }) 
  }
  return (
    <PropertyContext.Provider value = {{properties, addTenent, deleteTenent, editTenent}}>
    {props.children}
    </PropertyContext.Provider>
  )
}

export default PropertyState;