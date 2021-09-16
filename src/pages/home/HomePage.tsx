import React from 'react'
// import { Header, Footer } from '../../components'
import { Button, Spin, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import way1 from '../../assets/images/way1.png'
import way2 from '../../assets/images/way2.png'
import way3 from '../../assets/images/way3.png'
import way4 from '../../assets/images/way4.png'
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import dogFood from '../../assets/images/dogFood.png'
import styles from './HomePage.module.scss'
import { withTranslation, WithTranslation } from 'react-i18next';//首字母大写：高阶组件，首字母小写：类型定义
import { connect } from 'react-redux';
import { RootState } from '../../redux/store'
import { fetchRecommendProductFailActionCreator, fetchRecommendProductStartActionCreator, fetchRecommendProductSuccessActionCreator } from '../../redux/recommendProducts/recommendProductsActions';//引入三个action creator
// 不必要
import axios from "axios";
// import { ProductCollection } from '../../components/productCollection/ProductCollection';
// import { productList1, productList2, productList3 } from './mockups';


// get State from store
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList
  }
}

const mapDispatchToProps = (dispatch: any) => {//不建议给dispatch规定硬性类型
  return {
    // 包装了fetchStart函数，用在jsx里
    fetchStart: () => {
      dispatch(fetchRecommendProductStartActionCreator());
    },
    fetchSuccess: (data: any) => {
      dispatch(fetchRecommendProductSuccessActionCreator(data));
    },
    fetchFail: (error: any) => {
      dispatch(fetchRecommendProductFailActionCreator(error));
    },
  };
};
// self defiend type
type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
class HomePageComponent extends React.Component<PropsType> {
  // 不必要
  async componentDidMount() {
    this.props.fetchStart()
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      this.props.fetchSuccess(data)
    } catch (error) {
      this.props.fetchFail(error.message)
    }
  }
  // 不必要结束

  render() {
    console.log(this.props);
    // 用了withTranslation之后，自动给props追加一个t函数
    const { t, productList, loading, error } = this.props;
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
    return (
      <div className={styles.App}>
        {/* <Header /> */}

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
              <div className={styles['ways__card__title']}><h4 className={styles['tittle__text']}>Take a furry friend home</h4></div>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way2} />
              <div className={styles['ways__card__title']}><h4 className={styles['tittle__text']}>Buy them a gift you selected</h4></div>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way3} />
              <div className={styles['ways__card__title']}><h4 className={styles['tittle__text']}>Medical care is in great need</h4> </div>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
            <div className={styles['ways__card']}>
              <img className={styles['ways__card__img']} src={way4} />
              <div className={styles['ways__card__title']}><h4 className={styles['tittle__text']}>Buy for your own pet can also help</h4> </div>
              <Button className={styles['ways__card__button']} type='primary'>Start Now</Button>
            </div>
          </div>
        </div>

        {/* /////////////// content /////////////// */}
        <div className={styles['content']}>
          {/* ////  1 video  //// */}
          <div className={styles['content__video']}>
            <div className={`${styles['content__video__img']} ${styles['item']}`} >
            </div>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__decor']}>New ways of helping animals</div>
              <div className={styles['text__heading']}>Like watching cute animal viedos?</div>
              <div className={styles['text__subheading']}> Donate selected products, We will deliver the cute animal video.</div>
              <div className={styles['text__restriction']}></div>
              <Button className={styles['text__button']} >Discover more</Button>
            </div>
          </div>
          {/* ////  2 buy  //// */}
          <div className={styles['content__buy']}>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__decor']}>New ways of helping animals </div>
              <div className={styles['text__heading']}>Aready got a pet? You buy some products, we donate 5% in rescuing.</div>
              <div className={styles['text__subheading']}>Every purchasing of your own pet will donate 5% to help animal recuing.</div>
              <div className={styles['text__restriction']}></div>
              <Button className={styles['text__button']} >Discover more</Button>
            </div>
            <div className={`${styles['content__buy__img']} ${styles.item}`} />
          </div>
          {/* ////  3 feed  //// */}
          <div className={styles['content__feed']}>
            <div className={`${styles['content__feed__img']} ${styles.item}`}></div>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__heading']}>Help to feed the hungry</div>
              <div className={styles['text__subheading']}>
                <p>Food donations are always the core of caving our furry friends. Your donation is distributed directly to a furry friend in need of a full belly.</p>

                <p>Only $30 can feed a medium size dog for a month with quality food. And guess what, $30 can feed two cats!</p>
              </div>
              <div className={styles['text__restriction']}></div>
              <img className={styles['text__img']} src={dogFood} />
              <Button type='primary' className={styles['button__primary__donate']} >Donate $30</Button>
              <Button className={styles['button__secondary__donate']} >Explore more</Button>
            </div>
          </div>
          {/* ////  4 sick  //// */}
          <div className={styles['content__sick']}>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__decor']}>New ways of helping animals </div>
              <div className={styles['text__heading']}>Aready got a pet? You buy some products, we donate 5% in rescuing.</div>
              <div className={styles['text__subheading']}>Every purchasing of your own pet will donate 5% to help animal recuing.</div>
              <div className={styles['text__restriction']}></div>
              <Button type='primary' className={styles['button__primary__donate']} >Donate  $50 </Button>
              <Button className={styles['button__secondary__donate']} >Expolore More</Button>
            </div>
            <div className={`${styles['content__sick__img']} ${styles.item}`}></div>
          </div>
          {/* ////  5 senior  //// */}
          <div className={styles['content__senior']}>
            <div className={`${styles['content__senior__img']} ${styles.item}`}></div>
            <div className={`${styles['text']} ${styles.item}`}>
              <div className={styles['text__heading']}>Keeping Pets in the Arms of Seniors</div>
              <div className={styles['text__subheading']}>
                <p>“
                  Pets offer more than companionship to many Canadian seniors. They also act as a source of purpose, affection, empathy, and have a…
                  ”</p>
              </div>
              {/* <Button className={styles['button__senior']} type='primary' shape='round' href={seniorHref}>Read More <ArrowRightOutlined /></Button> */}
            </div>
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
              {t("home_page.new_arrival")}
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
        {/* <Footer /> */}
      </div >
    );
  }
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent));

