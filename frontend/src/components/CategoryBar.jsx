import { Link } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {
  const sports = [
    { name: "Football", icon: "sports_soccer" },
    { name: "Basketball", icon: "sports_basketball" },
    { name: "Tennis", icon: "sports_tennis" },
    { name: "Natation", icon: "pool" },
    { name: "Hockey", icon: "sports_hockey" },
  ];
  return (
    <nav className="category-bar">
      {sports.map((sport) => (
        <Link
          key={sport.name}
          className="category-button"
          to={`/category/${sport.name}`}
        >
          <span className="material-icons">{sport.icon}</span>
          {sport.name}
        </Link>
      ))}
    </nav>
  );
}
export default CategoryBar;
