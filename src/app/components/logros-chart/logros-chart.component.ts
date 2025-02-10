import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importa el plugin

Chart.register(...registerables, ChartDataLabels);  // Registra el plugin

@Component({
  selector: 'app-logros-chart',
  templateUrl: './logros-chart.component.html',
  styleUrls: ['./logros-chart.component.scss'],
  standalone: false
})
export class LogrosChartComponent implements AfterViewInit {
  @ViewChild('logrosChart') logrosChart: any;
  @Input() juego!: { nombreVideojuego: string, logrosTotales: number, logrosCompletados: number }; // Ajuste de la estructura del input
  chart!: Chart;

  ngAfterViewInit() {
    // Esperamos un poco para asegurarnos de que el ViewChild está disponible
    setTimeout(() => {
      if (this.juego) {
        this.createChart();
      }
    });
  }

  createChart() {
    if (!this.logrosChart || !this.logrosChart.nativeElement) return;

    this.chart = new Chart(this.logrosChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Logros Totales', 'Logros Completados'],
        datasets: [
          {
            label: this.juego.nombreVideojuego,
            data: [this.juego.logrosTotales, this.juego.logrosCompletados],
            backgroundColor: ['#0e2a71', '#6d81b5'], 
            borderColor: ['#a4bcfc', '#aeb5c6'], 
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: 'white',  // Color del texto
            anchor: 'center',  // Posición de las etiquetas
            align: 'center',  // Alineación del texto
            font: {
              weight: 'bold',
              size: 16,
            },
            formatter: (value) => value.toString(), // Muestra el valor
          },
        },
        scales: {
          y: { 
            beginAtZero: true 
          },
        },
      },
    });
  }
}
