const Affiche = () => {
  return (
    <>
      <p className="title">AFFICHES</p>
      <div className="vertical-divs">
        <div>
          <div className="size-div">
            <div className="formatbtn">A1</div>
            <div className="formatbtn">A2</div>
          </div>
          <div className="describe-div">
            <p>
              <p>Descriptif</p>
              <p>Pré-presse </p>
              <p>Papier</p>
              <p>Impression</p>
              <p>Emballage</p>
              <p>Livraison</p>
            </p>
            <p>
              <p>59,4 x 84,1 cm à la française</p>
              <p>PAO fournie par vos soins</p>
              <p>Couché moderne demi-mat 135 g/m2 CUBE</p>
              <p>R° Quadri</p>
              <p>Sous film rétractable par 1 ex</p>
              <p>Enlèvement par vos soins</p>
            </p>
          </div>
          <div className="choice-div">
            <div className="choiceBtn">
              <line>1 exemplaire</line> <line>19.20€ TTC</line>
            </div>
            <div className="choiceBtn">
              <line>10 exemplaire</line> <line>108.00€ TTC</line>
            </div>
          </div>
        </div>
        <div>
          <p>right</p>
          <p>2okok</p>
        </div>
      </div>
    </>
  );
};

export default Affiche;
