import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public quizes = [{
    "id": "1",
    "title": "Cuestionario numero 1",
    "description": "Esta es una bree descripcion del ceustionario",
    "preguntas": "10",
    "participantes": "25",
    "ratio": "80%"
},
{
    "id": "2",
    "title": "Cuestionario numero 2",
    "description": "Esta es una bree descripcion del ceustionario",
    "preguntas": "10",
    "participantes": "25",
    "ratio": "80%"
},
{
    "id": "3",
    "title": "Cuestionario numero 3",
    "description": "Esta es una bree descripcion del ceustionario",
    "preguntas": "10",
    "participantes": "25",
    "ratio": "80%"
},
{
    "id": "4",
    "title": "Cuestionario numero 4",
    "description": "Esta es una bree descripcion del ceustionario",
    "preguntas": "10",
    "participantes": "25",
    "ratio": "80%"
},
{
  "id": "5",
  "title": "Cuestionario numero 5",
  "description": "Esta es una bree descripcion del ceustionario",
  "preguntas": "10",
  "participantes": "25",
  "ratio": "80%"
},
{
  "id": "6",
  "title": "Cuestionario numero 6",
  "description": "Esta es una bree descripcion del ceustionario",
  "preguntas": "10",
  "participantes": "25",
  "ratio": "80%"
},
{
  "id": "7",
  "title": "Cuestionario numero 7",
  "description": "Esta es una bree descripcion del ceustionario",
  "preguntas": "10",
  "participantes": "25",
  "ratio": "80%"
},
{
  "id": "8",
  "title": "Cuestionario numero 8",
  "description": "Esta es una bree descripcion del ceustionario",
  "preguntas": "10",
  "participantes": "25",
  "ratio": "80%"
},
{
    "id": "9",
    "title": "Cuestionario numero 9",
    "description": "Esta es una bree descripcion del ceustionario",
    "preguntas": "10",
    "participantes": "25",
    "ratio": "80%"
}
]
  public x:number = 0
  public y:number = 4
  // private mySwiper!: Swiper;
 
  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   this.mySwiper = new Swiper('.swiper-container', {
  //   modules: [Navigation, Pagination],
  //   loop: true,
  //   spaceBetween: 4000,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // }); 
  // }
  nextQuiz(){
    if(this.x >= this.quizes.length-4){
       null;
    }else{
      this.x +=4;
      this.y +=4;
    }
  }
  prevQuiz(){
    if(this.x <=0){
      null;
   }else{
    this.x -=4;
    this.y -=4;
   }
  }
}
