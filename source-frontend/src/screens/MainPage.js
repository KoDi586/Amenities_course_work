import PHeader from "../components/PHeader";
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"

import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '75px'}}>
                <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Работа с заказами</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Все услуги</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Прайс лист и диограмма цен услуг.</CardText>
                    </CardBody>
                    <Button as={Link} to="/amenities">Перейти</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Работа с заказами</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Оформление заказов, проведение оплаты и заверщение выполнения заказов.</CardText>
                    </CardBody>
                    <Button as={Link} to="/orderwork">Перейти</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Выполнение работ</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Отслеживание выполнения работ и вывод уже выполненых работ.</CardText>
                    </CardBody>
                    <Button as={Link} to="/executionofworks">Перейти</Button>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Склады и материалы</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Склады и информация о количестве материалов, а также заказ материалов у поставщиков.</CardText>
                    </CardBody>
                    <Button as={Link} to="/warehouse">Перейти</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Поставщики</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Все поставщики.</CardText>
                    </CardBody>
                    <Button as={Link} to="/providers">ОПерейти</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Выплата зарплат и рейтинг сотрудников</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Таблица рейтинга сотрудников и выплата зарплат.</CardText>
                    </CardBody>
                    <Button as={Link} to="/salaryandraiting">Перейти</Button>
                </Card>
            </Container>
        </>
    )
};

export default MainPage;