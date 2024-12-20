import { Container, Table } from "react-bootstrap"
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";

import axios from 'axios'
import ip from "../ApiConfig";

import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(...registerables);

const Amenities = () => {

    const [ amenitiesall, setAmenitiesAll] = useState([])

    useEffect(() => {
        axios.get("http://" + ip + ":8089/api/amenities/all")
            .then(response => {
                // Преобразуем данные, устанавливая пустые массивы для materials_names и products_names, если они равны null
                const transformedAmenities = response.data.children.map(amenitie => ({
                    ...amenitie,
                    materials_names: amenitie.materials_names || ['-'],
                    products_names: amenitie.products_names || ['-']
                }));
                setAmenitiesAll(transformedAmenities);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    const chartData = {
        labels: amenitiesall.map((amenitie) => amenitie.name),
        datasets: [
            {
                label: 'Цена услуги',
                data: amenitiesall.map((amenitie) => amenitie.price ),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
            },
        ],
    };
    
    return (
        <>
            <PHeader/>
            <Container className="d-flex justify-content-center" style={{marginTop: '75px'}}>
                <div style={{width: '400px'}}>
                            <h1 style={{ textAlign: 'center' }}>Диаграмма цен</h1>
                            <Pie width={1} height={1} data={chartData} />
                </div>
                <div>
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
                            {amenitiesall.map((amenitie, key) => (
                                <tr>
                                    <td>{key + 1}</td>
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
                                    <td>{amenitie.price} р.</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div> 
            </Container>
        </>
    )
};

export default Amenities;