import {Injectable} from '@angular/core';
import { ApiService } from '../../../service/';
@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}
const IMAGES = [
    {"id" : 10, "category": "Lactate" ,"numeProdus": "Lapte", "cantitatete" : 15, "pret": 3 ,"url" : "assets/img/lactate_02.jpg"},
   {"id" : 8, "category": "Fructe" ,"numeProdus": "Capsuni","cantitatete" : 10, "pret": 8 , "url" : "assets/img/fructe_03.jpg"},
     {"id" : 3, "category": "Legume" ,"numeProdus": "Morcovi","cantitatete" : 12, "pret": 1 , "url" : "assets/img/legume_01.jpg"},
    {"id" : 4, "category": "Lactate" ,"numeProdus": "Branza", "cantitatete" : 15, "pret": 15 ,"url" : "assets/img/lactate_01.jpg"},
    {"id" : 5, "category": "Carne" ,"numeProdus": "Piept pui", "cantitatete" : 15, "pret": 20 ,"url" : "assets/img/carne_02.jpg"},
    {"id" : 7, "category": "Fructe" ,"numeProdus": "Pere","cantitatete" : 1, "pret": 8 ,  "url" : "assets/img/fructe_02.png"},
    {"id" : 2, "category": "Fructe" ,"numeProdus": "Mere","cantitatete" : 10, "pret": 2 , "url" : "assets/img/fructe_01.jpg"},
    {"id" : 9, "category": "Legume" ,"numeProdus": "Rosii","cantitatete" : 12, "pret": 2 , "url" : "assets/img/legume_02.jpg"},
    {"id" : 1, "category": "Carne" ,"numeProdus": "Pulpa Porc","cantitatete" : 1, "pret": 20 ,  "url" : "assets/img/carne_01.jpg"},
    {"id" : 11, "category": "Lactate" ,"numeProdus": "Lapte Batut", "cantitatete" : 15, "pret": 5 ,"url" : "assets/img/lactate_03.jpg"},
    {"id" : 6, "category": "Legume" ,"numeProdus": "Castraveti","cantitatete" : 10, "pret": 2 , "url" : "assets/img/legume_03.jpg"},
]