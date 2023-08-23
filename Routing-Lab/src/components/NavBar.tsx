export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center px-10 py-8 bg-gray-700 font-bold ">
        <ul className="flex gap-5 text-3xl text-white ">
          <li>
            <a className="hover:text-cyan-500" href="home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500" href="logIn">
              Log In
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500" href="information">
              Information
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
