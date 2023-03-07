
import React, { Component } from 'react';
import  {connect}  from 'react-redux';
import  {action}  from '../redux/action-creators/index';
import store from '../redux/store';


class About extends Component {
  handleThemeChange = (event) =>{
    store.dispatch(action.changeTheme(event.target.value));
  }
  render() {
    return (
        <div>
          <h2>About</h2>
          <label>
            <input type="radio" name="theme" value="light" checked={this.props.theme==='light'} onChange={this.handleThemeChange} />
            Light
          </label>
          <label>
            <input type="radio" name="theme" value="dark" checked={this.props.theme==='dark'} onChange={this.handleThemeChange} />
            Dark
          </label>
        </div>
    );
  }
}
const mapStateToProps = (state) =>({
  theme: state.theme,
});

export default connect(mapStateToProps)(About);
