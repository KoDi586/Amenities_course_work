import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"
import PHeader from "../components/PHeader"

import { Link } from 'react-router-dom';

const ExecutionOfWorks = () => {
    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '75px'}}>
                <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Выполнеие работ</h1>
                <Card >
                    <CardHeader>
                        <CardTitle>Выполненые заказы</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Выводит все выполненые заказы.</CardText>
                    </CardBody>
                    <Button as={Link} to='/executionofworks/orderallfinish'>Просмотреть</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Заказы в пооцессе</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Выводит заказы которые оплачены.</CardText>
                    </CardBody>
                    <Button as={Link} to='/executionofworks/ordernofinish'>Просмотреть</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Отчет по движению денежных средств</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Выводит таблицу по движению денежных средств.</CardText>
                    </CardBody>
                    <Button>Просмотреть</Button>
                </Card><Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Учет выполнения заказов</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Учёт выполнения заказов в разрезе мастеров и списание израсходованных материалов.</CardText>
                    </CardBody>
                    <Button>Просмотреть</Button>
                </Card>
            </Container>
        </>
    )
};

export default ExecutionOfWorks