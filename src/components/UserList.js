import { Component } from "react";


class UserList extends Component{
    handleReset = () => {
        this.props.onReset();
    }

    render() {
        const { user, repos } = this.props;

        return (
            <div className="wrapper">
                <div className="logo-wrapper">
                    <img src={user.avatar_url} alt="user-logo" width="150px" height="150px" />
                    <h2><b>Name:</b> {user.name}</h2>
                </div>
                <div className="info-wrapper">
                    <h3><b>BIO:</b> {user.bio}</h3>
                    <h3><b>LOCATION:</b> {user.location}</h3>
                    <h3><b>REPOSITORIES: </b></h3>
                </div>
                <table className="table">
                    <thead>
                        {repos.map(rep => {
                            return <tr key={rep.id}>{rep.name}</tr>
                        })}
                    </thead>
                </table>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default UserList;