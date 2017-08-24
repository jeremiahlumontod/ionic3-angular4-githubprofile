import { USER_LIST } from './user.mocks';
import { Repository } from '../models/repository.interface';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the usage of the Camera within Ionic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of SMS within Ionic 3.',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 GeoLocation',
        description: 'This repository shows the usage of Geolocation within Ionic 3.',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This repository shows the usage of Vibration within Ionic 3.',
        owner: USER_LIST[1]
    }

];

export const REPOSITORY_LIST = repositoryList;