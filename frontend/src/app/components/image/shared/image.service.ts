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

// {
//     this.apiService.get('api/user/1+" "+').subscribe(res => {
//       this.user = res.firstName;
//     });
//   }
const IMAGES = [
    {"id" : 1, "category": "Carne" ,"numeProdus": "Pulpe","cantitatete" : 1, "pret": 20 ,  "url" : "assets/img/carne_01.jpg"},
    {"id" : 2, "category": "Fructe" ,"numeProdus": "Mar","cantitatete" : 10, "pret": 20 , "url" : "assets/img/fructe_01.jpg"},
    {"id" : 3, "category": "Legume" ,"numeProdus": "Morcov","cantitatete" : 12, "pret": 20 , "url" : "assets/img/legume_01.jpg"},
    {"id" : 4, "category": "Lactate" ,"numeProdus": "Branza", "cantitatete" : 15, "pret": 20 ,"url" : "assets/img/lactate_01.jpg"}

]