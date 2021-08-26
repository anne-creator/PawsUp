import React from 'react'
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components'

// import { Row, Col, Typography } from "antd";
// import { productList1, productList2, productList3 } from './mockups'
// import sideImage from '../../assets/images/sider_2019_12-09.png';
// import sideImage2 from '../../assets/images/sider_2019_02-04.png';
// import sideImage3 from './../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.scss'
export class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        {/* ///////////////Hero Page/////////////// */}
        <div className={styles['hero']}>
          <div className={styles['center']}>
            <h1 className={styles['hero__title']}>More Than one Way to help</h1>
            <p className={styles['hero__subtitle']}>PawsUp is a non-profit charity website that provides pet adoption, pet donation and pet health care services.</p>
          </div>
        </div>

        {/* ///////////////content Page/////////////// */}
        <div className={styles['content']}>
          <div className={styles['content__video']}>
            <div className={styles['content__video__img']}></div>
            <div className={styles['content__video__text']}>b</div>
          </div>
          <div className={styles['content__video']}>
            <div className={styles['content__video__img']}></div>
            <div className={styles['content__video__text']}>b</div>
          </div>


        </div>
        {/* <ProductCollection
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
          /> */}
        <Footer />
      </div >
    );
  }
}

