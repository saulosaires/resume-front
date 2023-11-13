import {Country} from "./country";

export class User {
    id: number;
    name: string;
    summary: string
    email: string
    telephone: string
    website: string
    instantMessaging: string
    birthDate: Date;
    photoUrl: string;
    country: Country=new Country();


}
