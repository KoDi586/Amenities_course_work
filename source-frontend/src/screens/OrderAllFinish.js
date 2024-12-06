import PHeader from "../components/PHeader"
import { Card, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const OrderAllFinish = () => {

    const [ finishallorder, setFinishAllOrder ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/order/finish").then(response => {
                setFinishAllOrder(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    return  ( 
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                    <Card style={{padding:'25px'}}>
                        <h1 style={{textAlign: 'center'}}>Выполненые заказы</h1>
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
                                    <th>Дата завершения</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {finishallorder.map((orders) => (
                                    <tr key={orders.orderId}>
                                        <td>{orders.order_id}</td>
                                        <td>{orders.client.name}</td>
                                        <td>{orders.client.second_name}</td>
                                        <td>{orders.client.phone}</td>
                                        <td>
                                            {orders.amenities_names.map((amenities, index) => (
                                            <p key={index}>{amenities}</p>
                                            ))}
                                        </td>
                                        <td>{orders.employee_total_name}</td>
                                        <td>{orders.total_price}</td>
                                        <td>{orders.status}</td>
                                        <td>{orders.date_of_payed}</td>
                                        <td>{orders.date_of_finished}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Container>
        </>
    )
};

export default OrderAllFinish;