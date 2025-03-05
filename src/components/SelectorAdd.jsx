const SelectorAdd = ({
  selec,
  setSelec,
  funcSelec,
  text,
  cost,
  classActive,
  classDefault,
  setPrice,
  price,
}) => {
  return (
    <div
      className={selec ? classActive : classDefault}
      onClick={() => {
        if (!selec) {
          console.log("Bloqué");
        } else {
          setPrice(price + cost);
          funcSelec(setSelec);
        }
      }}
    >
      <span>{text}</span>
      <p>{cost} €</p>
    </div>
  );
};

export default SelectorAdd;
