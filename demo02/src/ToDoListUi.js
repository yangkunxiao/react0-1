import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
const ToDoListUi = (props) => {
    return (
        <div style={{ margin: '30px' }}>
                <div>
                    {/* <div>
                        {this.state.inputValue}
                    </div> */}
                    <Input value={props.inputValue} placeholder="请输入" onChange={props.handlerChange} style={{ width: '250px', marginRight: '20px' }} />
                    <Button type="primary" onClick={props.handlerClick}>添加</Button>
                    <List
                        style={{ marginTop: '30px' }}
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        split
                        dataSource={props.list}
                        renderItem={(item,index) => <List.Item onClick={() => {props.removeItem(index)}}>{item}</List.Item>}
                    />
                </div>
            </div>
    )
}
export default ToDoListUi;