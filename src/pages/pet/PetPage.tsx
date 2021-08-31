import React from 'react'
import styles from './PetPage.module.scss'
import { Button, Divider } from 'antd'


// export interface PetPageProps {

// }
export const PetPage: React.FC = () => {
    return (
        <div className={styles['pet']}>
            <main className={styles['pet__detail']}>
                <div className={styles['pet__header']}>
                    <div className={styles['pet__header__top']}>
                        <h1>Luna</h1>
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
                <div className={styles['pet__detail']}>
                    <h2>Meet Luna</h2>
                    <div className={styles['pet__detail__content']}>
                        <p>This is Luna. He is one of the trio rescued from outdoors. He is a little shy like his brother, Poppy but is still playful and cuddly. He would really like to be adopted with one of his siblings if possible or to a home with another young cat.</p>
                        <p>Poppy, Piper and Luna are available for adoption through Grand River All Breed Rescue. The adoption donation is $200 per cat. All of our cats are spayed or neutered, microchipped, and vaccinated as part of their adoption. If you’d like to adopt, please fill out an application. You can also reach us by email at GrandRiverRescue@hotmail.com.</p>
                    </div>
                </div>
            </main>
            <div className={styles['pet__side']}>
                <div className={styles['pet__photo']}></div>
                <div className={styles['pet__sponsor']}></div>
            </div>
        </div>
    )

}
