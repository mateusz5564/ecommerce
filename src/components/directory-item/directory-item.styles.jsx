import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  height: 90px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  text-transform: uppercase;

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 6px;
    color: rgb(74, 74, 74);
  }

  p {
    font-size: 0.9rem;
    font-weight: lighter;
    margin: 0;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  height: 240px;
  min-width: 30%;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${Body} {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }

    ${BackgroundImage} {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.11, 1.17, 0.92, 0.83);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &.large {
    height: 380px;
  }
`;
