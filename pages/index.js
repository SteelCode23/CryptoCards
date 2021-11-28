import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AppButton, MintButton,MintButton2 } from "../components/button";
// import videocard from '/assets/herogif.mp4'
import ReactPlayer from "react-player";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import Script from 'next/script'


export default function Home() {
 
  return (

    <Layout>
      
      <Container>

        <Row className={styles.secOne_row}>
        <img className={styles.bg_top} src="/assets/bg.svg" />
          <Col xs={{order:'last' ,span:12}} lg={{order:'first' ,span:6}} style={{zIndex:1}}>
            <div className={styles.player_wrapper}>
              <ReactPlayer
                className={styles.react_player}
                muted
                url={[{src: '/assets/herogif.mp4', type: 'video/mp4'}]} 
                width="100%" height="100%" controls={false}
                playing={true} loop={true} autoPlay={true}
              />
            </div>
          </Col>
          <Col sm={12} lg={6} style={{zIndex:1}}>
            <div className={styles.text_div}>
              <p className={styles.title}>
              <span className={styles.first}> Join our exclusive </span>
                <br />
                <span className={styles.second}>Crypto Card Community</span>
              </p>
              <p className={styles.desc}>
              Not only is our art unique & rare, our community is our strongest attribute. Our loyal card members will be added to our limited Twitter group chat where we share ideas about NFTs, crypto, stocks etc like non other project 
              </p>
               
              <div className={styles.bttn_row}>
                <input type="text" placeholder="Enter Mint Quantity" ></input>
                <MintButton2 title="MINT" backgroundColor="#FF4B31" className="mint" />

                <a href="https://twitter.com/Crypto_CardsNFT?s=20" rel="noopener noreferrer" target="_blank">
                  <img src="/assets/twitter.svg" />
                </a>
              </div>
            </div>
          </Col>
         
        </Row>
        <a href="https://opensea.io/collection/crypto-cards-nft" className="openSeaAM" rel="noopener noreferrer" target="_blank">
            <AppButton title="OpenSea" className="openSea"  />
            </a>
        <div className={styles.secTwo}>
          <p className={styles.heading}>
            {/* <span className={styles.heighlight}>Crypto</span> Card , */}
            <a href="https://twitter.com/crypto_cardsnft?s=21" rel="noopener noreferrer"  target="_blank">
            Crypto Cards Official
            {/* <span className={styles.heighlight}> </span>  */}
            </a>
          </p>
          <p className={styles.dtl}>
          First collection of 500 custom crypto cards of 4 different rarity traits including: Bronze, Silver, Gold, Diamond on the Ethereum blockchain. 5 of each rarity to be minted.
          </p>
          <p className={styles.dtl}>
          Each of our crypto currencies are decentralized. Decentralization means we cannot be governed by no one, everyone is equally as valuable just like all our crypto card members.
          </p>
          {/* <Row className={styles.catg_row}>
            <Col xs={4} md={2} className="mt-5">
              <div className={styles.catg_div}>
                <p className={styles.title}>100K</p>
                <p className={styles.desc}>USERS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="mt-5">
              <div className={styles.catg_div}>
                <p className={styles.title}>100K</p>
                <p className={styles.desc}>USERS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="mt-5">
              <div className={styles.catg_div}>
                <p className={styles.title}>100K</p>
                <p className={styles.desc}>USERS</p>
              </div>
            </Col>
          </Row> */}
        </div>
        <div className={styles.collection_sec}>
          <div className={styles.collect_row}>
            <p className={styles.title}>THE COLLECTION</p>

            <a href="https://opensea.io/collection/crypto-cards-nft"  rel="noopener noreferrer" target="_blank">

            <AppButton title="Show More"/>
            </a>
          </div>
          <Row className={styles.collect_card_row}>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc1.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc2.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc3.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc4.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc5.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc6.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc7.jpeg" />
                </div>
              </a>
            </div>
            <div className={styles.collection_card}>
              <a href="#">
                <div className={styles.card_img_div}>
                  <img src="/assets/cc8.jpeg" />
                </div>
              </a>
            </div>
            
             <a href="https://opensea.io/collection/crypto-cards-nft" rel="noopener noreferrer" target="_blank">

            <AppButton title="Show More" className={styles.showOnMobile} />
            </a>

          </Row>
        </div>
        <div className={styles.team_sec}>
        <img className={styles.bg_bottom} src="/assets/bg.svg" />
          <p className={styles.title}>THE TEAM</p>
          <Row className={styles.team_row} >
            <div className={styles.team_card_div}>
              <div className={styles.img_div}>
              <a href="https://twitter.com/Rosendo_eth" rel="noopener noreferrer" target="_blank">
                <img src="/assets/Rosendo_eth.jpeg" />
                </a>
              </div>
            </div>
            <div className={styles.team_card_div}>
              <div className={styles.img_div}>
              <a href="https://twitter.com/Cryptoclos " rel="noopener noreferrer" target="_blank">
                <img src="/assets/Cryptoclos.jpeg" />
              </a>
              </div>
            </div>
            
          </Row>
        </div>
        <div className={styles.foot_sec}>
          <Row className={styles.bttn_row}>
          {/* <a href="https://opensea.io/collection/crypto-cards-nft">
            <AppButton margin="10px 0px" title="OpenSea" />
          </a>
          <a href="#">
            <MintButton margin="10px 0px" title="Mint" className="mint" />
          </a>
          </a> */}
          <a href="#">
            <AppButton margin="10px 0px" title="SHIB Collection" />
          </a>
          <a href="#">
            <AppButton margin="10px 0px" title="Smart Contract" />
          </a>
          </Row>
          <div className={styles.social_icon_row}>
            <p>Team CryptoCard</p>
            <a href="https://twitter.com/Crypto_CardsNFT?s=20" rel="noopener noreferrer" target="_blank">
            <img src="/assets/twitter.svg" />
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
