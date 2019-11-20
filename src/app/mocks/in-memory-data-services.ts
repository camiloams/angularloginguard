import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataServices implements InMemoryDbService {
    
    createDb (){
        const user =   [
            {
            name:'juan',
            pws: 'jh32k5423gk4j5h2g3kj45g23k452jh'
            },{
            name:'cayetano',
            pws:'nosemeocurre'
            },{
            name:'zubarra' ,
            pws:'zubaritasdekellogs'

            }
        
        ];
        return {user};
    }
}
