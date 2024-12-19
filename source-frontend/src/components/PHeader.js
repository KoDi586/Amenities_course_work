import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const PHeader = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary" style={{boxShadow: '0px 10px 8px 0px rgba(34, 60, 80, 0.2)'}} fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                            <Nav.Link as={Link} to="/amenities">Все услуги</Nav.Link>
                            <Nav.Link as={Link} to="/orderwork">Работа с заказами</Nav.Link>
                            <Nav.Link as={Link} to="/executionofworks">Выполнение работ</Nav.Link>
                            <Nav.Link as={Link} to="/warehouse">Склады и материалы</Nav.Link>
                            <Nav.Link as={Link} to="/providers">Поставщики</Nav.Link>
                            <Nav.Link as={Link} to="/salaryandraiting">Выплата зарплат и рейтинг сотрудников</Nav.Link>
                        </Nav>
                        <Button variant="primary" onClick={handleShow}>
                            О компании
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas placement='top' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Информация о компании</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Название организации: ООО "Сервис-Плюс"</p>
                    <p>ИНН: 1234567890</p>
                    <p>КПП: 123456789</p>
                    <p>Адрес: г. Москва, ул. Примерная, д. 1, оф. 100</p>
                    <p>Контактный телефон: +7 (495) 123-45-67</p>
                    <p>Электронная почта: info@serviceplus.ru</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};

export default PHeader;