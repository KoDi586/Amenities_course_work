import { Button, Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";


const OrderPay = () => {

    const [ neworder, setNewOrder ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/order/no-pay").then(response => {
                setNewOrder(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )
 
    
    const handlePayment = async (orderId) => {
       try {
            const response = await axios.put("http://"+ ip +":8089/api/order/pay" + "?order_id="+orderId);
            console.log('Payment successful:', response.data);
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                <Card style={{padding:'25px'}}>
                    <h1 style={{textAlign: 'center'}}>Проведение оплаты</h1>
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
                                <th>Статус заказа</th>
                                <th>Оплатить</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {neworder.map((orders) => (
                                <tr key={orders.orderId}>
                                    <td>{orders.order_id}</td>
                                    <td>{orders.client.name}</td>
                                    <td>{orders.client.second_name}</td>
                                    <td>{orders.client.email}</td>
                                    <td>{orders.client.phone}</td>
                                    <td>{orders.client.card}</td>
                                    <td>
                                        {orders.amenities_names.map((amenities, index) => (
                                        <p key={index}>{amenities}</p>
                                        ))}
                                    </td>
                                    <td>{orders.employee_total_name}</td>
                                    <td>{orders.total_price}</td>
                                    <td>{orders.status}</td>
                                    <td><Button onClick={() => handlePayment(orders.order_id)}>Оплатить</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    )
};

export default OrderPay;