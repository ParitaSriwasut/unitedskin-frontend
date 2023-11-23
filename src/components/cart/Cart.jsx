import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartComponent({ items, total, deleteFromCart }) {
  const { increaseDecreaseProduct } = useCart();

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="w-3/4 shadow-md my-10 flex-wrap">
          <div className="bg-white px-10 py-1">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{items?.length} Items</h2>
            </div>
            <div className="flex flex-wrap mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-md uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-md uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-md uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-md uppercase w-1/5">
                Total
              </h3>
            </div>
            {items?.map((item) => {
              return (
                <div
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={item.productId}
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src={item.product.image}
                        alt={item.product.productName}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {item.product.productName}
                      </span>
                      <span className="text-red-500 text-xs capitalize">
                        {item.product.categoryName}
                      </span>
                      <div
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                        onClick={() => deleteFromCart(item.product)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                      onClick={() =>
                        increaseDecreaseProduct(item.product.id, "decrease")
                      }
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0-32-14.33-32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={item.quantity}
                    />

                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      onClick={() =>
                        increaseDecreaseProduct(item.product.id, "increase")
                      }
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${item.product.productPrice}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${item.product.productPrice * item.quantity}
                  </span>
                </div>
              );
            })}
            <Link
              to="/products"
              className="flex font-semibold text-gray-900 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-gray-900 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-2/4 px-8 py-10 container">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex flex-wrap justify-between mt-10">
              <span className="font-semibold text-sm uppercase">
                Items {items?.length}
              </span>
              <span className="font-semibold text-sm">
                $ {total?.toFixed(2)}
              </span>
            </div>
            <div className="py-7 mt-2">
              <label
                htmlFor="coupon"
                className="font-semibold inline-block text-sm uppercase"
              >
                Add coupon
              </label>
              <input
                type="text"
                id="coupon"
                placeholder="Enter your coupon"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-teal hover:bg-red-600 px-3 py-1 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$ {total?.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="bg-orange2 font-semibold hover-bg-indigo-600 py-3 p-2 text-sm text-orange uppercase w-full"
              >
                Order now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
