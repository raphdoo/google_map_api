// import { User } from './User';
// import { Company } from './company';


//Instructions to every other class on how they can be an argument to "addMarker"
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  // Adding the marker content requirement to interface
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
    
    marker.addListener('click', ()=> {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
  
      infowindow.open(this.googleMap, marker)
    })
  }

  
  // addCompany(company: Company) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position:{
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}