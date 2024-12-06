import { Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader"


const Providers = () => {
    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                <Card style={{padding:'25px'}}>
                    <h1 style={{textAlign: 'center'}}>Выполнение заказов</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Номер телефона</th>
                                <th>Название услуг</th>
                                <th>ФИО сотрудника</th>
                                <th>Финальная цена</th>
                                <th>Статус заказа</th>
                                <th>Дата оплаты</th>
                                <th>Завершить</th>
                            </tr>
                        </thead>
                    </Table>
                </Card>
            </Container>
        </>
    )
};

export default Providers;