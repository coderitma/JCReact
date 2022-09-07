import { Outlet, Link } from "react-router-dom";

function Main() {
  const id = 10;
  return (
    <>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to={`/about/${id}`}>About</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  ) 
}

export default Main;