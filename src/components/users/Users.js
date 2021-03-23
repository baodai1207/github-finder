import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    user: [
      {
        id: 1,
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        login: 'ezmobius',
        id: 5,
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/ezmobius',
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
