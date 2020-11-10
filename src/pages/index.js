import React, { useState } from "react"
import ProductData from '../data/ProductItems.json'
import Layout from "../components/layout"
import styled from "styled-components"
import Grid from "../components/Grid"

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
` 

const ChangeGridButton = styled.button`
  padding: 0;
  margin: 0;
  height: 20px;
  background: none;
  border: 0;
  margin-right: 24px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    height: 20px;
  }
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  cursor: pointer;
  justify-content: flex-start;

  img {
    margin-bottom: 16px;
    height: 300px; 
    object-fit: cover; 
  }
  h3 {
    font-size: 24px;
  }
`

const IndexPage = () => {
  const [gridSize, setGridSize] = useState(3)

  return (
    <Layout>
      {/* HEADER */}
      <Grid columns={4} style={{ gridColumnGap: "32px", marginBottom: 100 }}>
        <ColumnWrapper>
          <h3 style={{ fontSize: 48, fontWeight: 400 }}>
            Design and Technology
          </h3>

          <div>
            <h3 style={{ fontSize: 48, marginBottom: 32 }}>10—2020</h3>
            <span style={{ textTransform: "uppercase" }}>
              Sound Gadgets Selection
            </span>
          </div>
        </ColumnWrapper>

        {/* Empty Card */}
        <ColumnWrapper />

        <ColumnWrapper style={{ gridColumn: "span 2"}}>
          <h3 style={{ fontSize: 64, fontWeight: 400 }}>
            Home Gadget for Sound Enthusiasts
          </h3>
          <img
            style={{ marginBottom: 16 }}
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textTransform: "uppercase" }}>October 2020</span>
            <span style={{ textTransform: "uppercase" }}>
              Professional Overview
            </span>
          </div>
        </ColumnWrapper>
      </Grid>

      {/* Items Header */}
      <Grid columns={4} style={{ gridColumnGap: "32px", marginBottom: 24 }}>
        <h3 style={{ fontSize: 48 }}>00</h3>
        <ColumnWrapper
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <ChangeGridButton onClick={() => setGridSize(4)}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 6"
            >
              <path
                d="M0 0h2v2H0V0zM4 0h2v2H4V0zM10 0H8v2h2V0zM0 4h2v2H0V4zM6 4H4v2h2V4zM8 4h2v2H8V4zM14 0h-2v2h2V0zM14 4h-2v2h2V4z"
                fill="#000"
              />
            </svg>
          </ChangeGridButton>
          <ChangeGridButton onClick={() => setGridSize(3)}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 6"
            >
              <path
                d="M0 0h2v2H0V0zM4 0h2v2H4V0zM10 0H8v2h2V0zM0 4h2v2H0V4zM6 4H4v2h2V4zM8 4h2v2H8V4z"
                fill="#000"
              />
            </svg>
          </ChangeGridButton>
          <ChangeGridButton onClick={() => setGridSize(2)}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 6"
            >
              <path
                d="M0 0h2v2H0V0zM4 0h2v2H4V0zM0 4h2v2H0V4zM6 4H4v2h2V4z"
                fill="#000"
              />
            </svg>
          </ChangeGridButton>
          <ChangeGridButton onClick={() => setGridSize(1)}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2 6"
            >
              <path d="M0 0h2v2H0V0zM0 4h2v2H0V4z" fill="#000" />
            </svg>
          </ChangeGridButton>
        </ColumnWrapper>
        <ColumnWrapper
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gridColumn: "span 2",
          }}
        >
          <h3 style={{ fontSize: 48, fontWeight: 400 }}>General Overview</h3>
          <h3 style={{ fontSize: 48 }}>00</h3>
        </ColumnWrapper>
      </Grid>

      {/* Product Items */}
      <Grid columns={gridSize} style={{ gridColumnGap: "16px" }}>
        {ProductData.map((item, index) => {
          return (
            <ProductCard key={index}>
              <img src={item.image} />
              <h3>{item.title}</h3>
            </ProductCard>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default IndexPage
