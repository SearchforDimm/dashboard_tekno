import UseAuthToken from "../hooks/UseAuthToken";
const Navbar = () => {
  const { name, description } = UseAuthToken();
  return (
    <nav className="navbar flex">
      <i className="bx bx-menu" id="sidebar-open"></i>
      <div className="search_box">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <span className="nav_image nav-absolute">
        <img src="../images/photo.JPG" alt="logo_img" />
        <div className="nav-text">
          <p className="name-bold">{name.substring(0, name.indexOf(" "))}</p>
          <p className="gray">{description}</p>
        </div>
      </span>
    </nav>
  );
};

export default Navbar;
