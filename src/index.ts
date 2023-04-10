/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './company';
import { CustomMap  } from "./customMap";

// console.log(google)

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

 