import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the VoortgangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voortgang',
  templateUrl: 'voortgang.html',
})
export class VoortgangPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  gewichten: Array<any>;
  gewicht: number;
  myDate: DateTime;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoortgangPage');
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Ma", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [
          {
            label: "Gewicht/Maand",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          }
        ]
      }
    });
  }
  dataToevoegen() {
    if (this.myDate.monthValues != "2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand januari");
      this.lineChart.data.datasets[0].data[0] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand februari");
      this.lineChart.data.datasets[0].data[1] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand maart");
      this.lineChart.data.datasets[0].data[2] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand april");
      this.lineChart.data.datasets[0].data[3] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand mei");
      this.lineChart.data.datasets[0].data[4] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand juni");
      this.lineChart.data.datasets[0].data[5] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12") {
      console.log("Dit is de maand juli");
      this.lineChart.data.datasets[0].data[6] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12") {
      console.log("Dit is de maand augustus");
      this.lineChart.data.datasets[0].data[7] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12") {
      console.log("Dit is de maand september");
      this.lineChart.data.datasets[0].data[8] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12") {
      console.log("Dit is de maand oktober");
      this.lineChart.data.datasets[0].data[9] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12") {
      console.log("Dit is de maand november");
      this.lineChart.data.datasets[0].data[10] = this.gewicht;
    }
    else if (this.myDate.monthValues != "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11") {
      console.log("Dit is de maand december");
      this.lineChart.data.datasets[0].data[11] = this.gewicht;
    }
    this.lineChart.update();
  }
}
