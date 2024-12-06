import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const PHeader = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary" style={{boxShadow: '0px 10px 8px 0px rgba(34, 60, 80, 0.2)'}} fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                            <Nav.Link as={Link} to="/salaryandraiting">Выплата зарплат и рейтинг сотрудников</Nav.Link>
                            <Nav.Link as={Link} to="/amenities">Все услуги</Nav.Link>
                            <Nav.Link as={Link} to="/orderwork">Работа с заказами</Nav.Link>
                            <Nav.Link as={Link} to="/executionofworks">Выполнение работ</Nav.Link>
                            <Nav.Link as={Link} to="/warehouse">Склады и материалы</Nav.Link>
                            <Nav.Link as={Link} to="/providers">Поставщики</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default PHeader;