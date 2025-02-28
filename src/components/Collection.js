import React from "react";
import "./Collection.css";

export default function Collection() {
  const collections = [
    {
      name: "#Opensea (SEI-Chain)",
      username: "@By CoolCriminal_Universe",
      profileImg: require("../images/9.png"),
      image1: require("../images/10.png"),
      image2: require("../images/08.png"),
      image3: require("../images/18.png"),
    },
    {
      name: "#MagicEden (SEI-Chain)",
      username: "@By TheSalvare",
      profileImg: require("../images/19.png"),
      image1: require("../images/03.png"),
      image2: require("../images/01.png"),
      image3: require("../images/12.png"),
    },
    {
      name: "#Alec Art",
      username: "@Georgijevic",
      profileImg: require("../images/05.png"),
      image1: require("../images/14.png"),
      image2: require("../images/18.png"),
      image3: require("../images/13.png"),
    },
    {
      name: "#Toxic Poeth",
      username: "@By Yayoi",
      profileImg: require("../images/03.png"),
      image1: require("../images/13.png"),
      image2: require("../images/12.png"),
      image3: require("../images/15.png"),
    },
    {
      name: "#Saphyre",
      username: "@By CryptoX",
      profileImg: require("../images/01.png"),
      image1: require("../images/16.png"),
      image2: require("../images/17.png"),
      image3: require("../images/14.png"),
    },
    {
      name: "By CryptoX",
      username: "@By Texira",
      profileImg: require("../images/10.png"),
      image1: require("../images/10.png"),
      image2: require("../images/02.png"),
      image3: require("../images/06.png"),
    }
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="row">
          <h1>
            COLLECTIONs<br></br>
            <span>ON MarketPlaces</span>
          </h1>
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.username}</p>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                   <img src={collection.image1} alt="Image1" />
                  </div>
                  <div className="collection-card-right-images">
                    <img src={collection.image2} alt="Image2" />
                    <img src={collection.image3} alt="Image3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
