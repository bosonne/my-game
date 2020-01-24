import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import "./Tab1.css";
import "./nystyle.css";

const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Game />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

const Game = () => {
  return (
    <div className="game">
      <div className="grid">
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />

        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />

        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
      </div>
      <div className="message">Game message</div>
      <div className="button">
        <button>Start Game</button>
      </div>
    </div>
  );
};
