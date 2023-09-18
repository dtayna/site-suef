import styled from 'styled-components';
import { Pie } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import { Title } from "./global-components";

const Fonte = styled.p`
    font-size: 0.8em;
    color: var(--colorText);
    margin-top: 10px;
`;


const PizzaGraph = () => {

    const datac = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#003453',
                '#FC6E3D',
                '#FFAB08',
              ],
           
        }],

        labels: [
            'Matutino',
            'Vespertino',
            'Noturno'
        ],
        
    };
 
    
      return(
        <div>
            <Title> Matrículas por turno</Title>
            <Pie
                data={datac}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: 'Ensino Fundamental - RN - 2023',
                    },
                    legend: {
                    display: false
                    }
                }
                }}
            />
            <Fonte> Fonte: blabla</Fonte>
        </div>
      );
    }
export default PizzaGraph;