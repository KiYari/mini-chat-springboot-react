import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import react from 'react';
import React, { useState } from 'react';

export default function Login({onPressEnter, onChange}) {
    return(
        <div>
            <Input size="large" 
            placeholder="Enter your name"
             prefix={<UserOutlined />} 
             onPressEnter={onPressEnter}
             onChange={onChange}
             />
        </div>
    )
}