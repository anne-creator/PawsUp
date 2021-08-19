
import React from 'react';
import styles from './SideMenu.module.css';
import {sideMenuList} from './mockup';
import { GifOutlined } from "@ant-design/icons";
import { Menu } from 'antd';
export const SideMenu: React.FC =() => {
    return(
    <Menu mode='vertical' className={styles['side-menu']}>
        {/* NOTE: React规定，循环生成的组件必须加上Key */}
        {sideMenuList.map((m,index) => (
            <Menu.SubMenu
                key={`side-menu-${index}`}
                title={<span><GifOutlined />{m.title}</span>}
            >
                {m.subMenu.map((sm, smindex) => (
                    <Menu.SubMenu key={`side-menu-${smindex}`} title={
                        <span><GifOutlined />{sm.title}</span>
                    }>
                        {sm.subMenu.map((sms,index) => (
                            <Menu.Item key={index}>
                                <span><GifOutlined/>{sms}</span>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ))}
            </Menu.SubMenu>
        ))}
    </Menu>
        
    )
}