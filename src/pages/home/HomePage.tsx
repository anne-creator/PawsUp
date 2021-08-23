import React from 'react'
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components'
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from './../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.scss'
export class HomePage extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <Header />
                <div className={styles['page-content']}>
                    <Row style={{ marginTop: 20 }}>
                        {/* NOTE：多重菜单 */}
                        {/* <Col span={6} style={{ background: "red" }}><SideMenu /></Col> */}
                        <Col span={24} style={{ backgroundColor: 'blue' }}><Carousel /></Col>
                    </Row>
                    <ProductCollection
                        title={<Typography.Title level={3} type="warning">Popular</Typography.Title>}
                        sideImage={sideImage}
                        products={productList1}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="danger">
                                新品上市
                            </Typography.Title>
                        }
                        sideImage={sideImage2}
                        products={productList2}
                    />
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type="success">
                                国内游推荐
                            </Typography.Title>
                        }
                        sideImage={sideImage3}
                        products={productList3}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

