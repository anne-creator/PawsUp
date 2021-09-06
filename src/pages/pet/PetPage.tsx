import React from 'react'
import styles from './PetPage.module.scss'
import { Button, Divider } from 'antd'
import { ArrowRightOutlined } from "@ant-design/icons";
import { RouteComponentProps } from 'react-router-dom';




interface PetPageProps {
    petId: string
}
export const PetPage: React.FC<RouteComponentProps<PetPageProps>> = (props) => {
    console.log(props.match.params.petId);

    return (
        <div className={styles['pet']} >
            <main className={styles['pet__detail']}>
                <div className={styles['pet__header']}>
                    <div className={styles['pet__header__img']} ></div>
                    <div className={styles['pet__header__top']}>
                        <div>
                            <h1>Luna</h1>
                            <div className={styles['pet__header__top__name-decor']}></div>
                        </div>
                        <Button>Adopt FAQ </Button>
                    </div>
                    <div className={styles['pet__header__down']}>Kitten  |  Male  |  Medium  |  Black</div>
                </div>
                <Divider />
                <div className={styles['pet__about']}>
                    <h2>About</h2>
                    <div className={styles['pet__about__content']}>
                        <p className={styles['pet__about__content-item']}>HOUSE-TRAINED:&nbsp;&nbsp;&nbsp;&nbsp;Yes</p>
                        <p className={styles['pet__about__content-item']}>HEALTH:&nbsp;&nbsp;&nbsp;&nbsp;Vaccinations up to date</p>
                        <p className={styles['pet__about__content-item']}>GOOD IN A HOME WITH:&nbsp;&nbsp;&nbsp;&nbsp;Other cats</p>
                        <p className={styles['pet__about__content-item']}>Coat Length:&nbsp;&nbsp;&nbsp;&nbsp;Short</p>
                    </div>
                </div>
                <Divider />
                <div className={styles['pet__describe']}>
                    <h2>Meet Luna</h2>
                    <div className={styles['pet__detail__content']}>
                        <p>This is Luna. He is one of the trio rescued from outdoors. He is a little shy like his brother, Poppy but is still playful and cuddly. He would really like to be adopted with one of his siblings if possible or to a home with another young cat.</p>
                        <p>Poppy, Piper and Luna are available for adoption through Grand River All Breed Rescue. The adoption donation is $200 per cat. All of our cats are spayed or neutered, microchipped, and vaccinated as part of their adoption. If you’d like to adopt, please fill out an application. You can also reach us by email at GrandRiverRescue@hotmail.com.</p>
                    </div>
                </div>
                <Divider />
                <Button className={styles['pet__button']}>Adopt Luna <ArrowRightOutlined className={styles['pet__button__arrow']} /></Button>
            </main>
            <div className={styles['pet__side']}>
                <div className={styles['pet__side__sponsor']}>
                    <h4>Help provide for Luna’s Care</h4>
                    <Button className={styles['button']}>Sponsor Luna</Button>
                </div>
            </div>
        </div>
    )

}
