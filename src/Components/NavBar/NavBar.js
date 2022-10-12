import React from "react";
import logo from './../assets/logo.jpeg'
import CartWitget from '../CartWidtget/CartWidget'
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";




const NavBar = ({nombre,id})=> {
    const categorias = [
        {id:0, nombre:'Comida', ruta:'/categoria/comida'},
        {id:1, nombre:'Bebidas', ruta:'/categoria/bebidas'},
        {id:2, nombre:'Postres', ruta:'/categoria/postres'}]
    return (
        <header>
            <Link to={'/'}>
                
            </Link>
            <h1>El Bodegón</h1>
            <Nav categorias ={categorias}/>
            <Link to={'/cart'}>
                <CartWitget/>   
            </Link>   
        </header>
  
    )
  }
  
  export default NavBar;