import { Menu, Switch } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default class MenuSide extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="menu">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">
              <Link to="/">Option 1</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">关于我们</Link>
            </Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4" danger>
              Option 4
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            <Menu.Item key="13">Option 13</Menu.Item>
            <Menu.Item key="14">Option 14</Menu.Item>
            <Menu.Item key="15">Option 15</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
