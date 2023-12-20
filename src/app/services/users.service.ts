import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user1 : any = null;
  users: User[] = 
[
  { id: 321651651516 ,  firstname: 'John',      lastname: 'Doe',      email: 'john@example.com' ,        password: 'Password1' ,admin:false, cart : [] , games:[]  },
  { id: 321651651726 ,  firstname: 'Jane',      lastname: 'Doe',      email: 'jane@example.com' ,        password: 'Password2' ,admin:false, cart : [] , games:[]  },
  { id: 321651798716 ,  firstname: 'Alice',     lastname: 'Smith',    email: 'alice@example.com'  ,      password: 'Password3' ,admin:false, cart : [] , games:[]  },
  { id: 321651632116 ,  firstname: 'Bob',       lastname: 'Johnson',  email: 'bob@example.com'  ,        password: 'Password4' ,admin:false, cart : [],  games:[]  },
  { id: 321654151516 ,  firstname: 'Eva',       lastname: 'Davis',    email: 'eva@example.com'  ,        password: 'Password5' ,admin:false, cart : [],  games:[]  },
  { id: 321987451516 ,  firstname: 'imen',      lastname: 'nouri',    email: 'imen@nouri.tn'  ,          password: 'Password6' ,admin:true , cart : [],  games:[]  },
  { id: 321954751516 ,  firstname: 'Montassar', lastname: 'Lounissi', email: 'montassar@lounissi.tn'  ,  password: 'Password7' ,admin:true , cart : [],  games:[]  },
  { id: 321965451516 ,  firstname: 'David',     lastname: 'Wilson',   email: 'david@example.com'  ,      password: 'Password8' ,admin:false, cart : [],  games:[]  },
  { id: 321654251516 ,  firstname: 'Emma',      lastname: 'Taylor',   email: 'emma@example.com' ,        password: 'Password9' ,admin:false, cart : [],  games:[]  },
  { id: 321975651516 ,  firstname: 'Oliver',    lastname: 'Moore',    email: 'oliver@example.com' ,      password: 'Password10',admin:false, cart : [],  games:[]  }
];
  constructor() { }
}
