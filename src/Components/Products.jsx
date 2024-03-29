import React from "react";
import { Container } from "../Components/Styles/Container.styles";
import Card from "./Card";
import { deviceMax, device } from "../Utilis/Device";
import styled from "styled-components";
import { connect } from "react-redux";
import Footer from "../Components/Footer";
const Products = ({ products }) => {
  console.log({ products });
  return (
    <>
      <Container width="100%" display="flex">
        <MainContainer>
          <Sidebar>
            <LeftData className="bg-gray-400">
              <div className="text-gray-900 font-bold">
                <h1
                  // style={{
                  //   marginLeft: "10px",
                  //   fontSize: "20px",
                  //   textAlign: "center",
                  // }}
                  className="ml-1 text-xl font-bold text-center py-3 "
                >
                  Products family
                </h1>
                <hr style={{ borderBottom: "2px solid lightgray " }} />
                <div
                  className="sbar p-2 text-xl cursor-pointerfont-bold"
                  // style={{ marginLeft: "20px", cursor: "pointer" }}
                >
                  <h3>Shoes</h3>
                  <h3>Shirts</h3>
                  <h3>Watches</h3>
                  <h3>Belts</h3>
                  <h3>Socks</h3>
                  <h3>Mobiles</h3>
                </div>
                <h1
                  // style={{
                  //   marginLeft: "10px",
                  //   fontSize: "20px",
                  //   textAlign: "center",
                  // }}
                  className="ml-3 text-xl font-bold text-start py-2"
                >
                  Sizes
                </h1>
                <hr style={{ borderBottom: "2px solid lightgray" }} />
                <div
                  className="sbar p-2 text-xl cursor-pointer"
                  // style={{ marginLeft: "20px", cursor: "pointer" }}
                >
                  <h3>
                    <input type="checkbox" />S
                  </h3>
                  <h3>
                    <input type="checkbox" />M
                  </h3>
                  <h3>
                    <input type="checkbox" />L
                  </h3>
                </div>
                <h1
                  /* style={{ marginLeft: "10px", fontSize: "20px" }}*/ className="text-xl font-bold py-2 mx-2"
                >
                  Price
                </h1>
                <hr style={{ borderBottom: "2px solid lightgray" }} />
                <div className="py-2 mx-2">
                  <input type="range" style={{ cursor: "pointer" }} />
                  <h3>Min:0 Max:0</h3>
                </div>
              </div>
            </LeftData>
            <CenterData>
              {products.map((val) => {
                return (
                  <Card
                    key={val.id}
                    image={val.image}
                    title={val.title}
                    price={val.price}
                    id={val.id}
                    qty={val.qty}
                  />
                );
              })}
              <Footer />
            </CenterData>
          </Sidebar>
        </MainContainer>
      </Container>
    </>
  );
};

const Sidebar = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  @media ${deviceMax.mobileL} {
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  @media ${device.mobileL} and ${deviceMax.laptopL} {
    margin-left: 0px;
    width: 100%;
  }
`;

const LeftData = styled.div`
  width: 250px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: ;
  color: white;
  ${"" /* height: 100%; */}
  font-family: "Raleway", sans-serif;
  .sbar :hover {
    color: white;
  }
  @media ${deviceMax.mobileL} {
    display: none;
  }
`;
const CenterData = styled.div`
  width: 75%;
  margin-left: 10px;
  @media ${deviceMax.mobileL} {
    display: flex;
    flex-direction: column;
    margin: 0px;
    width: 80%;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  height: 1200px;
`;
const mapStateToProps = (state) => {
  return {
    products: state.productsState.products,
  };
};
export default connect(mapStateToProps)(Products);
