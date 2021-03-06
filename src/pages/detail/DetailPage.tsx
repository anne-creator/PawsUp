import React, { useState, useEffect } from 'react'
// import styles from 'DetailPage.module.scss'
import axios from "axios";
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from "antd";
import { HeaderClass, Footer, ProductIntro, ProductComments } from "../../components";
import { DatePicker, Space } from "antd";
import { RouteComponentProps, useParams } from 'react-router-dom';
const { RangePicker } = DatePicker;
import { commentMockData } from "./mockup";
// NOTE1 for use slice in detail page
import { productDetailSlice, getProductDetail } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';//连接 产品详情的数据
import { useDispatch } from 'react-redux';


/** connect rtk in detail page
 *      1.NOTE1:import productDetailSlice,useSelector, useDispatch
 *      2.NOTE2:extract data from store: useSelector
 *      3.NOTE3:取得dispatch函数
 *      4.NOTE4：useEffect 中分别发送三个action。action从slice中来，RTK自动生成了actionCreator
 */

//NOTE2: extract data from store: useSelector
const loading = useSelector(state => state.productDetail.loading);
const error = useSelector(state => state.productDetail.error)
const product = useSelector(state => state.productDetail.data);

// NOTE3: get dispatch funciton from useDispatch
const dispatch = useDispatch();

interface MatchParams {
    touristRoutedId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    // console.log(props.history)
    // console.log(props.location)
    // console.log(props.match)
    const { touristRoutedId } = useParams<MatchParams>();
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(getProductDetail(touristRoutedId)) //NOTE 使用异步thunk
    }, [])
    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>网站出错：{error}</div>;
    }
    return (<>
        <HeaderClass />
        <div className={styles["page-content"]}>
            {/* 产品简介 与 日期选择 */}
            <div className={styles["product-intro-container"]}>
                <Row>
                    <Col span={13}>
                        <ProductIntro
                            title={product.title}
                            shortDescription={product.description}
                            price={product.originalPrice}
                            coupons={product.coupons}
                            points={product.points}
                            discount={product.price}
                            rating={product.rating}
                            pictures={product.touristRoutePictures.map((p) => p.url)}
                        />
                    </Col>
                    <Col span={11}>
                        <RangePicker open style={{ marginTop: 20 }} />
                    </Col>
                </Row>
            </div>
            {/* 锚点菜单 */}
            <Anchor className={styles["product-detail-anchor"]}>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                        <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                    </Menu.Item>
                </Menu>
            </Anchor>
            {/* 产品特色 */}
            <div id="feature" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: product.features }}
                    style={{ margin: 50 }}
                ></div>
            </div>
            {/* 费用 */}
            <div id="fees" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>费用</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: product.fees }}
                    style={{ margin: 50 }}
                ></div>
            </div>
            {/* 预订须知 */}
            <div id="notes" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>预定须知</Typography.Title>
                </Divider>
                <div
                    dangerouslySetInnerHTML={{ __html: product.notes }}
                    style={{ margin: 50 }}
                ></div>
            </div>
            {/* 商品评价*/}
            <div id="comments" className={styles["product-detail-container"]}>
                <Divider orientation={"center"}>
                    <Typography.Title level={3}>用户评价</Typography.Title>
                </Divider>
                <div style={{ margin: 40 }}>
                    <ProductComments data={commentMockData} />
                </div>
            </div>
        </div>
        <Footer />
    </>)
}