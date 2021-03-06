import React, { Component } from 'react';
import './estilos.css';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const dataDona = {
	labels: [
		'Gastos',
		'Nomina',
		'Utilidad'
	],
	datasets: [{
		data: [2000, 6000, 7000],
    borderWidth: 8,
		backgroundColor: [
		'#a70954dd',
		'#00ffffdd',
		'#74b90add'
		],
		hoverBackgroundColor: [
		'#a70954ff',
		'#00ffffff',
		'#74b90aff'
		]
	}]
};




const dataUtilidad = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
      label: 'Proyeccion',
      type:'line',
      data: [1600, 3000, 4600, 8400, 12000, 18000, 23000],
      fill: false,
      borderWidth: 5,
      borderColor: '#999999ee',
      backgroundColor: '#999999ee',
      pointBorderColor: '#999999ee',
      pointBackgroundColor: '#999999ff',
      pointHoverBackgroundColor: '#999999ff',
      pointHoverBorderColor: '#999999ff',
    },{
      type: 'bar',
      label: 'Utilidad',
      data: [1600, 3000, 4600, 8400, 12000, 18000],
      fill: false,
      backgroundColor: '#74b90aee',
      borderColor: '#74b90aff',
      hoverBackgroundColor: '#74b90aff',
      hoverBorderColor: '#74b90aff',
    }]
};

const options = {
  gridLines: {
                offsetGridLines: true
            },
  legend: {
    display: false,
  },
  elements: {
    line: {
      fill: false
    }
  },
};

class Vista1 extends Component {

  render() {
    return (
      <div>

        <div className='Vista1'>
          <div className='Dona'>
            <Doughnut
              data={dataDona}
              options={options}
            />
          </div>
          <div className='Proyeccion'>
             <Bar
              data={dataUtilidad}
              options={options}
            />
          </div>
        </div>
        <div className='Datos'>
          <div className='Efectivos'>
            <b className='Gastos'>2000</b><p>Gastos</p><br/>
            <b className='Nomina'>6000</b><p>Nomina</p><br/>
            <b className='Utilidad'>7000</b><p>Utilidad</p><br/>
          </div>
          <div className='Descripcion'>
              <p>Describcion Breve de cada Flujo</p>
          </div>
        </div>


      </div>
    )
  }
}

export default Vista1;
