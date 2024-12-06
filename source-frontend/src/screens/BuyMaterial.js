import { Button, Card, CardBody, CardHeader, Container, Form, Table } from "react-bootstrap";
import PHeader from "../components/PHeader";
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

const BuyMaterial = () => {

    const [formData, setFormData] = useState({
        orderItems: []
    });

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setFormData((prev) => {
            const newOrderItems = [...prev.orderItems];
            if (checked) {
                
                newOrderItems.push({ material_id: value, count_of_bought: 0 });
            } else {
                
                return {
                    ...prev,
                    orderItems: newOrderItems.filter((item) => item.product !== value),
                };
            }
            return { ...prev, orderItems: newOrderItems };
        });
    };

    const handleQuantityChange = (e, productId) => {
        const { value } = e.target;
        const count = parseInt(value) || 0;

        setFormData((prev) => {
            const newOrderItems = prev.orderItems.map((item) => 
                item.product === productId ? { ...item, count } : item
            );
            return { ...prev, orderItems: newOrderItems };
        });
    };

    return (
        <>  
            <PHeader/>
            <Container style={{marginTop: '75px', marginBottom: '25px'}} >
                <h1 style={{textAlign: 'center'}}>Оформление заказа</h1>
                <Form onSubmit={handleSubmit} style={{marginBottom: '25px'}}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{marginBottom: '25px', marginTop: '25px'}}>
                        <Form.Label className="d-flex flex-wrap justify-content-center">Виды продуктов</Form.Label>
                        <Container style={{gap:"30px"}} className="d-flex flex-wrap justify-content-center">
                            {product.map((product) => (
                                <Card key={product.id} style={{ width: '15rem', padding: '10px' }}>
                                    <Form.Check
                                        type="checkbox"
                                        label={product.name}
                                        value={product.id}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите количество"
                                        onChange={(e) => handleQuantityChange(e, product.id)}
                                        disabled={!formData.orderItems.some(item => item.product === product.id)}
                                        
                                    />
                                    <Form.Label>Цена за еденицу товара: {product.price} р.</Form.Label>
                                </Card>
                            ))}
                        </Container>
                    </Form.Group>
                    <Container  className="d-flex flex-wrap justify-content-center">
                        <Button variant="dark" type="submit">
                            Оформить заказ
                        </Button>
                    </Container>
                </Form>
            </Container>
        </>
    )
}