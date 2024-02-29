import { Injectable } from '@nestjs/common';
import { IUserInput } from 'src/types';

@Injectable()
export class UserService {
  userList: IUserInput[] = [
    {
      userId: '12D',
      fullName: 'Ravi',
      phoneNumber: 987654321,
      email: 'Ravikanth.ob@gmail.com',
    },
    {
      userId: '17D',

      fullName: 'Likith',
      phoneNumber: 987654381,
      email: 'Likith@gmail.com',
    },
    {
      userId: '16D',
      fullName: 'Hema',
      phoneNumber: 987654391,
      email: 'Hema@gmail.com',
    },
  ];
  

  getAllUsers(): IUserInput[] {
    return this.userList;
  }

  addUser(user: IUserInput) {
    this.userList.push({ ...user, userId: new Date().toISOString() });
  }

  delete(useId: any) {
    const deleteIndex = this.userList.findIndex((user) => user.userId == useId);
    // delete this.userList[deleteIndex];
    try {
      console.log(deleteIndex);
    } catch (e) {
      console.log('e', e);
    }
  }
}
