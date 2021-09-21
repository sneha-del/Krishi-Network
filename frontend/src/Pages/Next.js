import React, { Component } from "react";
// import './css/Midmid.css';
class Next extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      isLoading: false,
      isError: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      "https://thekrishi.com/test/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=hi&crop_id=10"
    );
    if (response.ok) {
      const users = await response.json();
      console.log(users);
      this.setState({ users: users.data.other_mandi, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }
  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };
  renderTableRows = () => {
    return this.state.users.map((user, keys) => (
      <tr key={user.crop_id}>
        <td>{user.crop_id}</td>

        <td>{user.district}</td>
        <td>{user.district_id}</td>
        <td>{user.hindi_name}</td>
        <td>{user.id}</td>
        <td>{user.image}</td>
        <td>{user.km}</td>
        <td>{user.last_date}</td>
        <td>{user.lat}</td>
        <td>{user.lng}</td>
        <td>{user.location}</td>
        <td>{user.market}</td>
        <td>{user.meters}</td>
        <td>{user.state}</td>
        <td>{user.url_str}</td>
      </tr>
    ));
  };
  render() {
    const { users, isLoading, isError } = this.state;
    if (isLoading) {
      return <div>Loading..</div>;
    }
    if (isError) {
      return <div>Error..</div>;
    }
    return users ? (
      <table className="tables" cellPadding="8px" cellSpacing="12px">
        <thead>
          <tr>{this.renderTableHeader()}</tr>
        </thead>

        <tbody>{this.renderTableRows()}</tbody>
      </table>
    ) : (
      <div>No Users</div>
    );
  }
}
export default Next;
