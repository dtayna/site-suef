import styled from 'styled-components';
import { Pie , Bar , Doughnut, Line } from "react-chartjs-2";
import { Title } from "./global-components";

const Fonte = styled.p`
    font-size: 0.8em;
    color: var(--colorSubtitle);
    margin-top: 10px;
`;


export const Grafico = ({tipo, dados, titulo, subtitulo}) => {

    const dataPie = {
        datasets: [{
            label: ['Matutino', 'Vespertino', 'Noturno'],
            data: [10, 20, 30],
            backgroundColor: ['#003453','#FC6E3D','#FFAB08',],
            },
        ],
        labels: [
            'Matutino',
            'Vespertino',
            'Noturno'
        ], 
    };

    const dataBar = {
            datasets: [{
                label: ['Matutino', 'Vespertino', 'Noturno'],
                data: [10, 20, 30],
                backgroundColor: ['#003453','#FC6E3D','#FFAB08',],
                },
            ],
            labels: [
                'Matutino',
                'Vespertino',
                'Noturno'
            ],  
    };
    
 
    
      return(
        <div>
            <Title> {titulo}</Title>
            {tipo=='Pie'?

            <Pie
                data={dados}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: subtitulo,
                    },
                    legend: {
                    display: true,
                    position: 'bottom',
                    }
                }
                }}
            />
            : tipo == 'Bar'?
            <Bar
                data={dados}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: subtitulo,
                    },
                    legend: {
                    display: false,
                    position: 'bottom',
                    }
                }
                }}
            />
            : tipo == 'Line'?
            <Line
                data={dados}
                options={{
                responsive: true,
                plugins: {
                    title: {
                    display: true,
                    text: subtitulo,
                    },
                    legend: {
                    display: true,
                    position: 'bottom',
                    }
                }
                }}
            />
            :
            <Doughnut
            data={dados}
            options={{
            plugins: {
                title: {
                display: true,
                text: subtitulo,
                },
                legend: {
                display: true,
                position: 'bottom',
                }
            }
            }}
             />
            }
            
            <Fonte> Fonte: blabla</Fonte>
        </div>
      );
    }

    
export default Grafico;