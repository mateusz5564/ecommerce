import "./category-item.styles.scss";

const CategoryItem = ({ category: { id, title, imageUrl } }) => {
  return (
    <div key={id} className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Buy now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
