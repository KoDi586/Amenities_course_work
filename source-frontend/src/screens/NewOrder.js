import { Button, Card, CardBody, CardHeader, Container, Form, Table } from "react-bootstrap"
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

const NewOrder = () => {

    const [ order, setOrder ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/order/no-pay").then(response => {
                setOrder(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    const [formData, setFormData] = useState({
        name: '',
        second_name: '',
        email: '',
        phone: '',
        card: '',
        amenities_name: '',
        employee_total_name: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                <Card style={{padding:'25px'}}>
                    <h1 style={{textAlign: 'center'}}>Оформление заказа</h1>
                    <Form>
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Введите имя" name="name" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="text" placeholder="Введите фамилию" name="second_name" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Почта</Form.Label>
                            <Form.Control type="email" placeholder="Введите почту" name="email" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="text" placeholder="Введите номер телефона" name="phone" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Номер карты</Form.Label>
                            <Form.Control type="text" placeholder="Введите номер банковской карты" name="card" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group  style={{textAlign: 'center', marginTop: '25px'}}>
                            <Button>Оформить заказ</Button>
                        </Form.Group>
                    </Form>
                </Card>
                <Card style={{marginTop: '25px', padding:'25px'}}>
                    <h1 style={{marginTop: '25px', textAlign:'center'}}>Таблица новых заказов</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Почта</th>
                                <th>Номер телефона</th>
                                <th>Номер карты</th>
                                <th>Название услуг</th>
                                <th>ФИО сотрудника</th>
                                <th>Финальная цена</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {order.map((orders) => (
                                <tr>
                                    <td>{orders.order_id}</td>
                                    <td>{orders.client.name}</td>
                                    <td>{orders.client.second_name}</td>
                                    <td>{orders.client.email}</td>
                                    <td>{orders.client.phone}</td>
                                    <td>{orders.client.card}</td>
                                    <td>
                                        {orders.amenities_names.map((amenities) => (
                                        <p>{amenities}</p>
                                        ))}
                                    </td>
                                    <td>{orders.employee_total_name}</td>
                                    <td>{orders.total_price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card> 
            </Container>
        </>
    )
};

export default NewOrder;