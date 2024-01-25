import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import{ getProductos, getProductosPorCategoria} from "../../asyncmock"
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos]= useState([]);
  const {idCategoria} = useParams();

  useEffect(()=>{
  
  const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
  
  funcionProductos(idCategoria)
    .then(res => setProductos(res))
    .catch(error => console.log(error))
},[idCategoria])

  return (
    <div>
    <h2>{greeting}</h2>
    <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer