import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <section className="directory-container">
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Directory;
