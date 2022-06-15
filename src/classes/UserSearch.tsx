import React, { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps, UserSearchState> {

    state: UserSearchState = {
        name: '',
        user: undefined,
    };

    onClick() {
        const search = this.props.users.find(
            (user) => { return user.name === this.state.name; }
        )

        this.setState({user: search})
    }

    render() {
        const { user, name } = this.state;

        return(
            <div>
                <h3>Search User</h3>

                <input value={name} onChange={e => this.setState({name : e.target.value})} />

                <button onClick={this.onClick}>Search</button>

                <h4>
                    { user && user.name }
                </h4>

            </div>
        )
    }

}