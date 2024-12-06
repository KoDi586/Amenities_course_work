import { Card, Container, Table } from "react-bootstrap"
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

const Amenities = () => {

    const [ amenities, setAmenities] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/amenities/all").then(response => {
                setAmenities(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    const chartData = {
        labels: amenities.map(amenitie => amenitie.name),
        datasets: [
            {
                label: 'Цена услуги',
                data: amenities.map(amenitie => amenitie.price),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
            },
        ],
    };
    
    return (
        <>
            <PHeader/>
            <h1></h1>
            <Container className="d-flex justify-content-center" style={{marginTop: '75px'}}>
                <Card style={{width: '400px'}}>
                            <h1 style={{ textAlign: 'center' }}>Диаграмма цен</h1>
                            <Pie width={1} height={1} data={chartData} />
                </Card>
                <Card style={{margin:'0',padding:'25px'}}>
                    <h1 style={{textAlign:'center'}}>Прайс лист услуг</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Перечень используемых материалов</th>
                                <th>Перечень товаров</th>
                                <th>цена услуги</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {amenities.map((amenitie) => (
                                <tr>
                                    <td>{amenitie.amenities_id}</td>
                                    <td>{amenitie.name}</td>
                                    <td>{amenitie.description}</td>
                                    <td>
                                        {amenitie.materials_names.map((material) => (
                                            <p>{material}</p>
                                        ))}
                                    </td>
                                    <td>
                                        {amenitie.products_names.map((product) => (
                                            <p>{product}</p>
                                        ))}
                                    </td>
                                    <td>{amenitie.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card> 
            </Container>
        </>
    )
};

export default Amenities;