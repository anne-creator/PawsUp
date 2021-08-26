import React from 'react'
import { Header, Footer } from '../../components'
import { Button } from 'antd'
import way1 from '../../assets/images/way1.png'
import way2 from '../../assets/images/way2.png'
import way3 from '../../assets/images/way3.png'
import way4 from '../../assets/images/way4.png'


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

        {/* ///////////////Hero/////////////// */}
        <div className={styles['hero']}>
          <div className={styles['center']}>
            <h1 className={styles['hero__title']}>More Than one Way to help</h1>
            <p className={styles['hero__subtitle']}>PawsUp is a non-profit charity website that provides pet adoption, pet donation and pet health care services.</p>
          </div>
        </div>

        {/* /////////////// ways to give /////////////// */}
        <div className={styles.ways}>
          <h2 className={styles['ways__title']}>Ways to Donate</h2>
          <div className={styles['ways__cards']}>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way1} />
              <h4 className={styles['ways__card__title']}>Take a furry friend home</h4>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way2} />
              <h4 className={styles['ways__card__title']}>Buy them a gift you selected</h4>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way3} />
              <h4 className={styles['ways__card__title']}>Medical care is in great need </h4>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way4} />
              <h4 className={styles['ways__card__title']}>Buy for your own pet can also help </h4>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
          </div>
        </div>

        {/* /////////////// content /////////////// */}
        <div className={styles['content']}>
          <div className={styles['content__video']}>
            <div className={`${styles['content__video__img']} ${styles['item']}`} >
            </div>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__decor']}>New ways of  helping animals </div>
              <div className={styles['text__heading']}>Like watching cute animal viedos? </div>
              <div className={styles['text__subheading']}>You donate selected products, We deliver the vidoe.</div>
              <div className={styles['text__restriction']}></div>
              <Button className={styles['text__button']} >Discover more</Button>
            </div>
          </div>
          <div className={styles['content__buy']}>
            <div className={`${styles['content__buy__text']} ${styles.item}`}>

            </div>
            <div className={`${styles['content__buy__img']} ${styles.item}`}></div>
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

