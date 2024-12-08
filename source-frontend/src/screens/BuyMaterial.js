import { Button, Card, CardBody, CardHeader, Container, Form, Table } from "react-bootstrap";
import PHeader from "../components/PHeader";
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

const BuyMaterial = () => {

    const [ materials, setMaterials ] = useState([])
    const [ allmaterials, setAllMaterials ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/material/all").then(response => {
                setAllMaterials(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/material/all").then(response => {
                setMaterials(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    const [ formData, setFormData ] = useState({
        warehouse_id: Number(),
        bought_materials: [
          
        ]
      })

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const boughtMaterials = formData.bought_materials.map(item => ({
            material_id: item.material_id,
            count_of_bought: item.count_of_bought
        }));

        const requestBody = {
            warehouse_id: formData.warehouse_id,
            bought_materials: boughtMaterials
        };

        try {
            const response = await axios.put("http://"+ ip +":8089/api/material/bought-from-provider", requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.status === 200) {
                window.location.reload();
                // Обработка успешного ответа
            } else {
                // Обработка ошибки
            }
        } catch (error) {
            // Обработка исключений
            console.error("Произошла ошибка при отправке запроса:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        
        if (formData.bought_materials.some(item => item.material_id === Number(value))) {
            setFormData(prevData => ({
                ...prevData,
                bought_materials: prevData.bought_materials.filter(item => item.material_id !== Number(value))
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                bought_materials: [...prevData.bought_materials, { material_id: Number(value), count_of_bought: 0 }]}));
            }
        };
        
        const handleQuantityChange = (event, material_id) => {
            const { value } = event.target;
            setFormData(prevData => ({
                ...prevData,
                bought_materials: prevData.bought_materials.map(item =>
                    item.material_id === material_id ? { ...item, count_of_bought: value } : item
                )
            }));
        };

    return (

        <>
            <PHeader />
            <Container style={{ marginTop: '75px', marginBottom: '25px' }}>
                <Card style={{padding: '25px', marginBottom: '25px'}}>
                    <h1 style={{ textAlign: 'center' }}>Оформление заказа на материалы</h1>
                    <Form onSubmit={handleSubmit} style={{ marginBottom: '25px' }}>
                        <Form.Group>
                            <Form.Label>Выберите склад</Form.Label>
                            <Form.Control as="select" name="warehouse_id" onChange={handleInputChange}>
                                <option value="">Выберите склад</option>
                                <option value="1">Склад №1</option>
                                <option value="2">Склад №2</option>
                                <option value="3">Склад №3</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="d-flex flex-wrap justify-content-center">Материалы</Form.Label>
                            <Container style={{ gap: "30px" }} className="d-flex flex-wrap justify-content-center">
                                {materials.map((material) => (
                                    <Card key={material.material_id} style={{ width: '15rem', padding: '10px' }}>
                                        <Form.Check
                                            type="checkbox"
                                            label={material.name}
                                            value={material.material_id}
                                            onChange={handleCheckboxChange}
                                        />
                                        <Form.Control
                                            type="number"
                                            placeholder="Введите количество"
                                            onChange={(e) => handleQuantityChange(e, material.material_id)}
                                            disabled={!formData.bought_materials.some(item => item.material_id === material.material_id)}
                                        />
                                    </Card>
                                ))}
                            </Container>
                        </Form.Group>
                        <Container className="d-flex flex-wrap justify-content-center">
                            <Button type="submit">
                                Оформить заказ
                            </Button>
                        </Container>
                    </Form>
                </Card>
                
                <Card style={{padding:'25px'}}>
                        <h1 style={{textAlign: 'center'}}>Материалы</h1>
                        <Table style={{marginTop: '25px'}}>
                            <thead>
                                <tr style={{textAlign: 'center'}}>
                                    <th>№ товара</th>
                                    <th>Название материала</th>
                                    <th>Номер склада</th>
                                    <th>Колличество на складе</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {allmaterials.map((material) => (
                                    <tr>
                                        <td>{material.material_id}</td>
                                        <td>{material.name}</td>
                                        <td>№{material.warehouse_id}</td>
                                        <td>{material.count_in_warehouse} шт.</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
            </Container>
    </>
    )
}

export default BuyMaterial;