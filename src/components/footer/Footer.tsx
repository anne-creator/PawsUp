import React from 'react';
import styles from './Footer.module.scss';
import { Divider } from "antd";
import logo from '../../assets/logo.svg';
// use hooks in i18n
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
   // NOTE: use hooks in function class 
   const { t } = useTranslation();
   return (
      <footer className={styles['footer-container']}>
         {/* //NOTE: use translation in hsx*/}
         <div>{t("footer.detail")}</div>
         <div className={styles['footer']}>
            <div className={styles['footer__main']}>
               <div className={styles['footer__paws-up']}>
                  <div className={styles['footer__paws-up__logo']}>
                     <img src={logo} alt="logo" className={styles["footer__paws-up__img"]} />
                     <h1 className={styles["footer__paws-up__title"]}>Paws Up</h1>
                  </div>
                  <div className={styles['footer__paws-up__save-life']}>
                     Let’s saves lives together!
                  </div>
               </div>
               <div className={styles['footer__nav']}>
                  <div className={styles['footer__nav__item']}>Adopt</div>
                  <div className={styles['footer__nav__item']}>Donate</div>
                  <div className={styles['footer__nav__item']}>Order</div>
                  <div className={styles['footer__nav__item']}>Profile</div>
               </div>
               <div className={styles['footer__info']}>
                  <div className={styles['footer__info__item']}>Contact</div>
                  <div className={styles['footer__info__item']}>FAQ</div>
                  <div className={styles['footer__info__item']}>Join Us</div>
               </div>
            </div>
            <Divider />
            <div className={styles['footer__copyright']}>
               <div className={styles['footer__copyright__content']}>
                  <p className={styles['footer__copyright__Paws-Up']}>Copyright © 2021 Anne Paws Up. All rights reserved</p>
                  <p className={styles['footer__copyright__cookies']} >We use cookies for better service. &ensp;&ensp;<span className={styles['footer__copyright__span']}>Accept</span></p>
               </div>
            </div>
         </div>
      </footer>
   )
}