import "./directory-item.styles.jsx";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Buy now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
