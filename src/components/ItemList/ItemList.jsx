import React from 'react'
import { Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
  return (
    
    <Row xs={2} md={4} className="g-4">
        {productos.map(prod => <Item key={prod.id} producto={prod}/>)}
    </Row>
    )
}
 