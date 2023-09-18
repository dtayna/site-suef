import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';
import { Title } from "./global-components";


const BarGraph = () => {

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
            <Bar
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
        </div>
      );
    }
export default BarGraph;