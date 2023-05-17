import PropTypes from "prop-types";
import React from "react";
import { Col, Jumbotron } from "reactstrap";
//import textGridData from "../../data/text-grid/text-grid-one.json";
//import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div
      className={`about-mission-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <Col md="5">
            {" "}
            <div className="row">
              <div className="col-sm-12 ">
                <div className="shadow p-4 mb-5 mr-2 bg-black rounded">
                  <h2>Our Vision</h2>
                  <p style={{ color: "white" }}>
                    <p style={{ color: "white" }}>
                      We aspire to put “crypto currency in every portfolio.”
                    </p>{" "}
                    We envision a world where wealth-building strategies that
                    were once only accessible to affluent individuals become
                    available to everyone, transferring the power over our
                    financial systems back to the people. GSD100 is going to
                    create a revolutionary ecosystem to bring more people into
                    digital assets, helping to earn a passive income through
                    redistribution / reflection, by holding the Lift token long
                    term, along with maintaining their privacy, security, power,
                    and autonomy. We strive to create an ecosystem based on
                    sound monetary policies, with a sound and solid
                    decentralized foundation, that should be expected with the
                    Lift coin digital asset
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className=" shadow p-4 mb-5 mr-2 bg-black rounded">
                  <h2>Our Mission</h2>
                  <p style={{ color: "white" }}>
                    GSD100 utility will become a powerful weapon for normal
                    household people globally for utilizing day to day needs .
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="7">
            <Jumbotron className="shadow p-4 mb-5 bg-black rounded ">
              <div className="col-sm-12">
                <h2>About us</h2>

                <p style={{ color: "white" }}>
                  GSD100 is not only an emerging crypto currency platform that
                  is built on TRC 20 (Tron Smart chain) and BEP-20 (Binance
                  Chain) but also has features of transparency and Initial coin
                  distribution which we believe is crucial for the long-term
                  feasibility and decentralization. GSD100 is complete all in
                  one ecosystem that contains the Staking, Launchpad, NFT
                  marketplace, and swapping facility under an umbrella.GSD100 is
                  also using in utility services for over 4r5 countries in phase
                  wise offering through GSD100. GSD100 also bringing exchange
                  services. GSD100 used block chain technology to make its NFT
                  marketplace Unique. Community members are also involved in
                  decision making to make feel true ownership of their asset. To
                  connect the different block chain platform under an umbrella
                  GSD100 started a platform SOXYBRIDGE & By using GSD100 SWAP
                  digital asset can be converted into desired form. Martin Dewis
                  & Williams are the founders of Soxy. Both together have
                  decided to develop the community through Gynysys partner
                  program. Martin is an experienced market analyst with 10years
                  of traditional business and crypto currency portfolio
                  management. Martin has done his Masters in Computer science
                  with specialization in blockchain technology. With very rich
                  experience in blockchain and crypto, he turned into an expert
                  in crypto trading. Williams has done his masters in Cyber
                  Security and is experienced in researching, execution of
                  innovative new products in Block Chain & Crypto currency for
                  the last 9 years. William’s passion is transformation of life
                  through technology. Moved by confidence and trusted team and
                  as the crypto is the future, both the founders have planned to
                  provide financial freedom for each and every one through
                  crypto currency in many countries. Martin has decided to make
                  GSD100 household name worldwide.
                </p>
                <p></p>
              </div>
            </Jumbotron>
          </Col>

          {/* <div className="row">
            <div className="col-sm-12 shadow p-4 mb-5 bg-white rounded">
              <h2>Our Story From Scratch</h2>
              <p>
                Founded in _______, we are committed to digitally shaping the
                local Indian apparel market! 
              </p>
              <p>
                We believe that the local Indian retail markets for apparel and
                garments possess the potential to grow and deliver a polished
                quality of clothes to Indian households. However, in comparison
                to juggernauts of the fashion industry and leading clothes
                brands, these shops seem to be a bit all over the place and
                unorganized. In the face of growing competition from leading
                vendors, the efforts of the local traditional apparel shops are
                falling flat. The primary issue lies in poor promotion,
                advertising, and store operations management. 
              </p>
              <p>
                We think this can be changed only through some disruption in the
                system! Soxycoin steps in as a group of young people from the
                “City of Joy – Kolkata” to alter the condition of the local
                Indian apparel stores. We aim to make an impact by
                revolutionizing the customer’s shopping experience by
                highlighting these mismanaged stores to make them attain what
                they deserve.
              </p>
            </div>
          </div> */}
        </div>
        {/* <div className="row" >
          {textGridData &&
            textGridData.map((single, key) => {
              return (
                <TextGridOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default TextGridOne;
