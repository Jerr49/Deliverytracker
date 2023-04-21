import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Images/Logo.jpg"
import "../Styles/Navbar.css"

const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div>
        <header>
			<img src={Logo} alt="" width={"180px"}/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Track</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
  )
}

export default Navbar