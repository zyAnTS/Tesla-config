const Price = ({ price }) => {
  return (
    <div className="price">
      <span>{price} €</span>
      <button
        onClick={() => {
          alert("Merci pour votre commande !");
        }}
      >
        Commander
      </button>
    </div>
  );
};

export default Price;
