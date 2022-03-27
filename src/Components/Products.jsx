import React from "react";
import { Container } from "../Components/Styles/Container.styles";
import Card from './Card'
import {deviceMax,device} from '../Utilis/Device'
import styled from "styled-components";
const Products = () => {
  return (
    <>
      <Container width="100%" display='flex' >
        <Sidebar>
          <LeftData>
            <h1
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                textAlign: "center"
              }}
            >
              Products family
            </h1>
            <hr style={{ borderBottom: "2px solid lightgray" }} />
            <div className='sbar'style={{ marginLeft: "20px" ,cursor:'pointer',}}>
              <h3>Shoes</h3>
              <h3>Shirts</h3>
              <h3>Watches</h3>
              <h3>Belts</h3>
              <h3>Socks</h3>
              <h3>Mobiles</h3>
            </div>
            <h1
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                textAlign: "center"
              }}
            >
              Sizes
            </h1>
            <hr style={{ borderBottom: "2px solid green" }} />
            <div className='sbar'style={{ marginLeft: "20px",cursor:'pointer'}}>
              <h3>
                <input type="checkbox"/>S
              </h3>
              <h3>
               
                <input type="checkbox"/>M
              </h3>
              <h3>
               
                <input type="checkbox"/>L
              </h3>
            </div>
            <h1 style={{ marginLeft: "10px", fontSize: "20px" }}>Price</h1>
            <hr style={{ borderBottom: "2px solid green" }} />
            <div>
                <input type='range' style={{cursor:'pointer'}}/>
                <h3>Min:0  Max:0</h3> 
            </div>
            
          </LeftData>
          <CenterData>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>

          </CenterData>
          
        </Sidebar>
      </Container>
    </>
  );
};

const Sidebar = styled.div`
  width: 100%;
  position:absolute;;
  top:88px;
  display: flex;
  justify-content: flex-start;
  margin-left:100px;
  @media ${deviceMax.mobileL}{
    width:100%;
    margin:0px;
    padding:0px;
    height:1
    display:flex;
    justify-content:center;
  }
  @media ${device.mobileL} and ${deviceMax.laptopL}{
    margin-left:10px;
    width:97%;
}
   
`;

const LeftData = styled.div`
  width: 250px;
  background:#151f3d;
  color:white;
  height: 100%;
  font-family: "Raleway", sans-serif;
  .sbar :hover{
     color:#ffae00;
  }
  @media ${deviceMax.mobileL}{
   display:none;
}
`;
const CenterData=styled.div`
width:75%;
margin-left:10px;
 @media ${deviceMax.mobileL}{
  display:flex;
  flex-direction:column;
  margin:0px;                                           
  width:80%;
  
 }
 
 
 

`

export default Products;
