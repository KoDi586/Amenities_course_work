import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"
import PHeader from "../components/PHeader"

import { Link } from 'react-router-dom';

const OrderWork = () => {
    return ( 
        <>
            <PHeader/>
            <Container style={{marginTop: '75px'}}>
                <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Работа с заказами</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Оформление заказов</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Функция оформления заказа включает выбор услуги и ввод персональных данных.</CardText>
                    </CardBody>
                    <Button as={Link} to='/orderwork/neworder'>Оформить заказы</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Оплата заказов</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Функция оплаты заказа выводит все не оплаченные заказы.</CardText>
                    </CardBody>
                    <Button>Оплатить заказы</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Выполнение заказов</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Функция выполнение заказов выводит все оплаченные заказы.</CardText>
                    </CardBody>
                    <Button>Выполнить заказы</Button>
                </Card>
            </Container>
        </>
    )
}
export default OrderWork;