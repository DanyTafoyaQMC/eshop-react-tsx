import { CartItem } from "../../../interfaces/Shopp_Interfaces";
import { Loading } from "../../../shared";

interface CartItemProps {
  item: CartItem;
}
export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  return (
    <>
      {item ? (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={item.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Cart Actions"
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {}}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {}}
                  >
                    Subtract
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
