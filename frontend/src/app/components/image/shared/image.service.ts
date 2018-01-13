import {Injectable} from '@angular/core';

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
    {"id" : 1, "category": "Carne" ,"numeProdus": "Pulpe", "url" : "assets/img/carne_01.jpg"},
    {"id" : 2, "category": "Fructe" ,"numeProdus": "Mar", "url" : "assets/img/fructe_01.jpg"},
    {"id" : 3, "category": "Legume" ,"numeProdus": "Morcov", "url" : "assets/img/legume_01.jpg"},
    {"id" : 4, "category": "Lactate" ,"numeProdus": "Branza", "url" : "assets/img/lactate_01.jpg"}

]