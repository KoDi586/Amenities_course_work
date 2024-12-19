import { Button, Card, CardBody, CardFooter, CardHeader, Container, Form, Table } from "react-bootstrap"
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

const NewOrder = () => {

    const [ order, setOrder ] = useState([])
    const [ amenities, setAmenities] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/amenities/all").then(response => {
                setAmenities(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )


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
        amenities_name: [

        ]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const newOrderItems = [...prev.amenities_name];
            if (checked) {
                newOrderItems.push(value);
            } else {
                
                return {
                    ...prev,
                    orderItems: newOrderItems.filter((item) => item !== value),
                };
            }
            return { ...prev, amenities_name: newOrderItems };
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage('');

        const payload = {
            client: {
                name: formData.name,
                secondName: formData.secondName,
                email: formData.email,
                phone: formData.phone,
                card: formData.card,
            },
            amenities_names: formData.amenities_name
        };

        try {
            const response = await axios.post("http://"+ ip +":8089/api/order", payload);
            setResponseMessage(`Успех! Ответ: ${response.data.message}`);

            window.location.reload();
        } catch (error) {
            if (error.response) {
                setResponseMessage(`Ошибка: ${error.response.data.message}`);
            } else {
                setResponseMessage(`Ошибка: ${error.message}`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                <Card style={{padding:'25px'}}>
                    <h1 style={{textAlign: 'center'}}>Оформление заказа</h1>
                    <Form onSubmit={handleSubmit}>
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
                        <Form.Group>
                            <Form.Label className="d-flex flex-wrap justify-content-center" style={{marginTop: '15px'}}>Выбор услуг</Form.Label>
                            <Container style={{gap:"30px", marginTop: "25px"}} className="d-flex flex-wrap justify-content-center" >
                                {amenities.map((amenitie) => (
                                    <Card>
                                        <CardHeader>
                                            <Form.Check type="checkbox" label={amenitie.name} value={amenitie.name} onChange={handleCheckboxChange}/>
                                        </CardHeader>   
                                        <CardBody>
                                            <p>{amenitie.description}</p>
                                        </CardBody>
                                        <CardFooter>
                                            <p>Цена: {amenitie.price} р.</p>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </Container>
                        </Form.Group>
                        <Form.Group  style={{textAlign: 'center', marginTop: '25px'}}>
                            <Button type="submit">Оформить заказ</Button>
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
                                    <td>{orders.total_price} р.</td>
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