import React, { useContext } from 'react'
import PropertyContext from '../../Context/propertyContext'
import Property from './Property/Property'

const Properties = () => {
  const context = useContext(PropertyContext)
  const { properties } = context;
  const property = properties.map(pro => {
    return (
      <div className="mx-3 my-2 shadow p-3 mb-5 bg-white rounded" key={pro.name}>
        <Property
          name={pro.name}
          src={pro.src}
          noOfFlats={pro.noOfFlats}
          noOfTenents={pro.noOfTenents}
          tenents={pro.tenents}
          size={pro.size} />
      </div>
    )
  })
  return (
    <div className = " w-75 mx-auto">
      <h2 className = " mx-auto my-4" style={{width: "400px" , fontFamily:"monospace"}}>Available Properties</h2>
      <div className = " d-flex flex-row flex-wrap justify-content-center">
        {property}
      </div>
      
    </div>
  )
}

export default Properties;