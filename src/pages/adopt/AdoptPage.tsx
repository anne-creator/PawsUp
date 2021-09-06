import React, { useState, useEffect } from 'react'
import styles from './AdoptPage.module.scss'
import { Button, Divider, Dropdown, Menu, Card } from 'antd'
import { DownCircleOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { get } from '../../utils/request';

export interface AdoptPageProps {

}
interface State {
    catList: [];
}
export const AdoptPage: React.FC<AdoptPageProps> = (props: AdoptPageProps, State) => {
    const [catList, setCatList] = useState<any[]>([])
    const [error, setError] = useState<string>();
    useEffect(() => {
        // NOTE: adding extra function inside useEffect coz useEffect cannot revceive promises but object or void.
        const fetchData = async () => {
            try {
                const res = await get('/catList');
                // const data = await res.data;
                // NOTE: add petList into the component state: catList
                setCatList(res);
            } catch (e) {
                setError(e)
            }
        }
        fetchData();
    }, [])
    const menuAge = (
        <Menu>
            <Menu.Item key="0">ANY</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">Kitten</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Adult</Menu.Item>
        </Menu>
    )
    const { Meta } = Card;
    const history = useHistory()


    return (
        <div className={styles['adopt-container']}>
            <div className={styles['adopt']}>
                <div className={styles['adopt__filter']}>
                    <div className={styles['adopt__filter-primary']}>
                        <button className={styles['adopt__button-group']}>
                            <Button className={styles['adopt__button-selected']}>All Pets</Button>
                            <Button className={styles['adopt__button']}>Cat</Button>
                            <Button className={styles['adopt__button']}>Dog</Button>
                        </button>
                    </div>
                    <Divider />
                    <div className={styles['adopt__filter-secondary']}>
                        <div className={styles['adopt__sub-filter']}>
                            <h4>AGE</h4>
                            <Dropdown className={styles['adopt__sub-filter__drop-down']} overlay={menuAge} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    any <DownCircleOutlined className={styles['icon']} />
                                </a>
                            </Dropdown>
                        </div>
                        <div className={styles['adopt__sub-filter']}>
                            <h4>AGE</h4>
                            <Dropdown className={styles['adopt__sub-filter__drop-down']} overlay={menuAge} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Any <DownCircleOutlined className={styles['icon']} />
                                </a>
                            </Dropdown>
                        </div>
                        <div className={styles['adopt__sub-filter']}>
                            <h4>AGE</h4>
                            <Dropdown className={styles['adopt__sub-filter__drop-down']} overlay={menuAge} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    any <DownCircleOutlined className={styles['icon']} />
                                </a>
                            </Dropdown>
                        </div>
                        <div className={styles['adopt__sub-filter']}>
                            <h4>AGE</h4>
                            <Dropdown className={styles['adopt__sub-filter__drop-down']} overlay={menuAge} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    any <DownCircleOutlined className={styles['icon']} />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <Divider />
                </div>
                <div className={styles['adopt__cards']}>
                    {catList.map(item => (
                        <div className={styles['adopt__card']} key={item.Pet_Name} onClick={() => history.push(`/adopt/pet/${item.Pet_ID}`)}>
                            <img src={item.photo} className={styles['adopt__card__img']}></img>
                            <div className={styles['adopt__card__content']}>
                                <div className={styles['adopt__card__title']}>
                                    <div className={styles['adopt__card__name']}>{item.Pet_Name}</div>
                                    <div className={styles['adopt__card__age']}>{item.Age}</div>
                                </div>
                                <div className={styles['adopt__card__hair']}>{item.Primary_Breed}</div>
                                <div className={styles['adopt__card__location']}>{item.Shelter_Name}</div>
                                <Divider className={styles['adopt__card__divider']} />
                                <div className={styles['adopt__card__detail']}>
                                    <div className={styles['adopt__card__size-and-gender']}>
                                        <div className={styles['adopt__card__size']}>Size: {item.Size} </div>
                                        <span className={styles['adopt__card__color']}>{item.Gender}</span>
                                    </div>
                                    <span> Color: {item.Primary_color}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['adopt__loading']}></div>
        </div >
    )

}
