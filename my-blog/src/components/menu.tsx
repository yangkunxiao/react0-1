import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import '../styles/menu.css'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	SettingOutlined,
	UploadOutlined,
	OrderedListOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

function SideMenu() {
	let [collapsed, setCollapsed] = useState<boolean>(false)
	function handlerCollapsed() {
		setCollapsed(!collapsed)
	}
	return (
		<>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo">admin</div>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['1']}
					>
						<Menu.Item key="1">
							<OrderedListOutlined />
							<span>博客列表</span>
						</Menu.Item>
						<Menu.Item key="2">
							<SettingOutlined />
							<span>博客设置</span>
						</Menu.Item>
						<Menu.Item key="3">
							<UserOutlined />
							<span>个人简介</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{ padding: 0 }}
					>
						{React.createElement(
							collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: 'trigger',
								onClick: handlerCollapsed,
							}
						)}
					</Header>
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div
							className="site-layout-background"
							style={{ padding: 24, minHeight: 360 }}
						>
							Bill is a cat.
						</div>
					</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default SideMenu
