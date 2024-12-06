import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"
import PHeader from "../components/PHeader"

import { Link } from 'react-router-dom';

const SalaryAndRating = () => {
    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '75px'}}>
                <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Выплата зарплат и рейтинг сотрудников</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Рейтинг сотрудников</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Показывает сотрудников от самого лучшего до самого худшего.</CardText>
                    </CardBody>
                    <Button as={Link} to='/salaryandraiting/raiting'>Посмотреть</Button>
                </Card>
                <Card style={{marginTop: '10px'}}>
                    <CardHeader>
                        <CardTitle>Начисление и выплата заработной платы</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Выводит всех сотрудников с начисленной и выплаченной зарплатой.</CardText>
                    </CardBody>
                    <Button as={Link} to='/salaryandraiting/salary'>Посмотреть</Button>
                </Card>
            </Container>
        </>
    )
};
export default SalaryAndRating;