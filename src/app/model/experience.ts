import {Country} from "./country";
import {Language} from "./language";
import {User} from "./user";
import {Skill} from "./skill";

export class Experience {

    id: number
    title: string
    companyName: string
    startDate: Date
    endDate: Date
    description: string
    url: string
    country: Country = new Country();
    skills: Skill[] = []
    language: Language = new Language()
    user: User = new User();
}
