const Selector = ({
  selec,
  setSelec,
  funcSelec,
  text,
  cost,
  classActive,
  classDefault,
  setPrice,
}) => {
  return (
    <div
      className={selec ? classActive : classDefault}
      onClick={() => {
        setPrice(cost);
        funcSelec(setSelec);
      }}
    >
      <span>{text}</span>
      <p>{cost} €</p>
    </div>
  );
};

export default Selector;
