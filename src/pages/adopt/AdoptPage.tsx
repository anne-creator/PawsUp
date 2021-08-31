import React from 'react'
import styles from './AdoptPage.module.scss'
import { Button, Divider, Dropdown, Menu, Card } from 'antd'
import { DownCircleOutlined } from "@ant-design/icons";


// export interface AdoptPageProps {

// }
export const AdoptPage: React.FC = () => {
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
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['adopt__card']}>
                        <div className={styles['adopt__card__img']}></div>
                        <div className={styles['adopt__card__content']}>
                            <div className={styles['adopt__card__title']}>
                                <div className={styles['adopt__card__name']}>Luna</div>
                                <div className={styles['adopt__card__age']}>Kitten</div>
                            </div>
                            <div className={styles['adopt__card__hair']}>Demostic Short Hair</div>
                            <Divider />
                            <div className={styles['adopt__card__detail']}>
                                <div className={styles['adopt__card__size-and-color']}>Medium Size <span>Black</span></div>
                                <div className={styles['adopt__card__location']}>Cambridge. ON</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['adopt__loading']}></div>
            </div>
        </div >
    )

}
