import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ImDownload } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" className="navbar">
            <Nav.Link as={NavLink} to="/category" className="view-products-btn" onClick={handleClose}>
                View Our Products <FaArrowRight className="icon" />
            </Nav.Link>

            {/* Toggle button opens Offcanvas */}
            <Navbar.Toggle onClick={handleShow} />

            <Navbar.Offcanvas
                show={show}
                onHide={handleClose}
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose} style={{ border: 'none' }} >
                            <img src="/logo.png" alt="logo" loading="eager" className="logo" />
                        </Nav.Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 nav">
                        <div className="mob-nav">
                            <Nav.Link as={NavLink} to="/products" onClick={handleClose}>
                                View Our Products
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
                                Get In Touch
                            </Nav.Link>
                        </div>
                        <div className="centered-logo">
                            <Nav.Link as={NavLink} to="/" onClick={handleClose} style={{ border: 'none' }} >
                                <img src="/logo.png" alt="logo" loading="eager" className="logo" />
                            </Nav.Link>
                        </div>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        <button className="download-btn">Download <ImDownload className="download-icon" /></button>
                        <button className="get-in-touch-btn">Get In Touch</button>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;