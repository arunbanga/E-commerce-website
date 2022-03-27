import React from "react";
import { Container } from "./Styles/Container.styles";
import { deviceMax, device } from "../Utilis/Device";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { fontWeight } from "@mui/system";
const Card = () => {
  return (
    <>
      <Container width="100%" display="flex" flexDirection="row">
        <CardContainer>
          <Image>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
              className="images"
              style={{
                width: "125px",
                height: "120px"
              }}
            />
          </Image>

          <ContentContainer>
            <p>
              Products Name
              <span style={{ display: "block", marginTop: "10px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                assumenda voluptas rep...
              </span>
              <span
                className="span"
                style={{
                  display: "flex",
                  paddingTop: "35px",
                  justifyContent: "space-between",
                   color:'#ebb905',
                   fontWeight:'bold'
                }}
              >
                $350
                <Button className='btn'variant="contained" color="success">
                  Buy Now
                </Button>
              </span>
            </p>
          </ContentContainer>
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer = styled.div`
  width:100%;
  background:#5c585b;
  color:#ffffff;
  display:flex;
  margin-bottom:2px;
  flex-direction:row;
  border: 1px solid lightgray;
  border-radius:5px;
  
  Button.btn:hover{
    background:#e8402a;
    color:white;
  }
  @media${deviceMax.mobileL}{
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:row;
    height:92%;
    padding:5px;
    margin:0px;
    .btn{
    font-size:9px;
  }
  }
  
  @media ${device.mobileL} and ${deviceMax.tablet}{
  padding:5px;
 
 }

  
`;
const ContentContainer = styled.div`
@media${deviceMax.mobileL}{
  font-size:11px;
   display:flex;
  flex-direction:row;
 
  
}

`;
const Image = styled.div`
 margin:10px;
 @media${deviceMax.mobileL}{
  margin:5px;
  
 }
 
`;

export default Card;
