import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"
import PHeader from "../components/PHeader"

const Warehouses = () => {
    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '75px'}}>
                <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Склады и материалы</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Склад №1</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Показывает все материалы хранящиеся в складе №1.</CardText>
                    </CardBody>
                    <Button>Посмотреть склад</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Склад №2</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Показывает все материалы хранящиеся в складе №2.</CardText>
                    </CardBody>
                    <Button>Посмотреть склад</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Склад №3</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Показывает все материалы хранящиеся в складе №3.</CardText>
                    </CardBody>
                    <Button>Посмотреть склад</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Все материалы</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Показывает все материалы хранящиеся во всех складах.</CardText>
                    </CardBody>
                    <Button>Посмотреть склад</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Закупка материалов</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Оформит заказ материалов у поставщика.</CardText>
                    </CardBody>
                    <Button>Оформить заказ</Button>
                </Card>
            </Container>
        </>
    )
};

export default Warehouses;