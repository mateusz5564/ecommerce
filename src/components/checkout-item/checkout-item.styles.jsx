import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const Name = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  display: flex;
  margin: 10px 0;
  width: 23%;

  span {
    margin: 0 10px;
  }
`;

export const Price = styled.span`
  width: 23%;
`;
