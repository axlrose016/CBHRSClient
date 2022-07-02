import { Injectable } from '@angular/core';
import { lib_user_level } from '../model/library.model';

@Injectable()
export class GlobalVariablesService {

   user_level: lib_user_level;

   storeUserLevel(userLevel: lib_user_level) {
     debugger;
      this.user_level = userLevel;
    }

    getUserLevel() {
      return this.user_level;
    }
}