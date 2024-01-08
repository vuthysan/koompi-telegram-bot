import { For, createEffect, createSignal } from "solid-js";

import Payment from "../components/Payment";
import products from "../data/products.json";
import { useCart } from "../contexts/cart";
import { useNavigate } from "@solidjs/router";

export default function cart() {
  const {
    items,
    quantity,
    addToCart,
    removeItem,
    subQuantity,
    addQuantity,
    total,
  }: any = useCart();

  const router = useNavigate();

  const [id, setId] = createSignal("");
  const [hash, setHash] = createSignal("");
  const [payment, setPayment] = createSignal<string>("");

  const [payData, setPayData] = createSignal({
    req_time: "20230630141052",
    merchant_id: "isidangkorsencheyfc",
    tran_id: `kmp${new Date().valueOf()}`,
    amount: "369",
    payment_option: "abapay",
    firstname: "san",
    lastname: "vuthy",
    email: "san.vuthy08@gmail.com",
    phone: "015769941",
  });

  createEffect(() => {
    fetch("http://localhost:8000/create_hash", {
      method: "POST",
      body: JSON.stringify(payData()),
      headers: {
        "Content-Type": "applicaton/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setHash(data.hashed);
    });
  });

  createEffect(() => {
    if (quantity() === 0) {
      router("/");
    }
  });

  // createEffect(() => {
  //   if (payment() !== "") {
  //     AbaPayway.checkout();
  //   }
  // });

  const handleSubQty = (id: string) => {
    subQuantity(id);
  };

  const handleAddQty = (id: string) => {
    addQuantity(id);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  function currencyFormat(num: number) {
    return `$${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
  }

  const handleSetId = (id: string) => {
    setId(id);
  };

  const confirmModal = (id: string) => {
    return (
      <dialog id="my_modal_1" class="modal">
        <form method="dialog" class="modal-box">
          <p class="font-medium mb-4 text-xl">Remove item from cart?</p>
          <div class="flex gap-2">
            {/* if there is a button in form, it will close the modal */}

            <button
              class="h-8 bg-error p-1 px-2 rounded-md text-white text-sm cursor-pointer"
              onClick={() => handleRemoveItem(id)}
            >
              Remove
            </button>
            <button class="h-8 bg-slate-200 p-1 px-2 rounded-md text-sm cursor-pointer">
              Close
            </button>
          </div>
        </form>
      </dialog>
    );
  };

  return (
    <>
      {confirmModal(id())}
      <div class="container m-auto">
        <div>
          <div class="bg-white p-3 shadow-sm mb-4">
            <div class="text-xl font-bold p-3">Your Order</div>
            <div>
              <For each={items}>
                {(p) => {
                  return (
                    <div class="flex gap-4 items-center relative rounded-md overflow-auto mb-4 ">
                      <img src={p.image} class="w-20" alt={p.title} />
                      <div class="flex items-center justify-between relative">
                        <div class="w-max">
                          <h3 class="font-bold text-md">{p.title}</h3>
                          <div class="text-sm">
                            US ${parseFloat(p.price).toFixed(2)}
                          </div>
                        </div>

                        <div class="ml-8">
                          <i
                            // onClick={() => {
                            //   handleSetId(p.id);
                            //   window.my_modal_1.showModal();
                            // }}
                            class="ri-delete-bin-6-line text-lg flex justify-end cursor-pointer hover:text-error transition-all  mb-4"
                          ></i>
                          <div class="flex gap-4 items-center">
                            <button
                              class="bg-gray-100 h-6 w-6 items-center flex justify-center rounded-[50%]"
                              onClick={() => handleSubQty(p.id)}
                            >
                              -
                            </button>
                            {p.qty}{" "}
                            <button
                              class="bg-gray-100 h-6 w-6 items-center flex justify-center rounded-[50%]"
                              onClick={() => handleAddQty(p.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>
        </div>

        <div class="h-max bg-white p-3 shadow-sm mb-4">
          <h3 class="font-bold text-base mb-4">Your order</h3>
          <div class="flex text-sm justify-between mb-2">
            <h5>Subtotal</h5>
            <div>US {currencyFormat(total())}</div>
          </div>
          <div class="flex justify-between mb-6">
            <h5>Shipping fee</h5>
            <div>Free</div>
          </div>

          <div class="flex justify-between pt-4 border-t-2">
            <h5 class="font-bold text-sm">Total</h5>
            <div class="font-black text-md">US {currencyFormat(total())}</div>
          </div>
        </div>

        <div class="bg-white shadow-sm p-4">
          {total() > 0 ? (
            <div class="mb-24">
              <h5 class="font-bold text-base mb-4">Select Payment</h5>
              <Payment
                image="/images/money.png"
                title="Cash"
                data={<p class="text-sm">Pay cash with us</p>}
              />
              <Payment
                image="/images/payments/wingbank.jpg"
                title="Wing"
                data={<p class="text-sm">Pay with Wing mobile</p>}
              />
              <div onClick={() => setPayment("abapay")}>
                <Payment
                  image="/images/payments/aba-pay.svg"
                  title="Cash"
                  data={<p class="text-sm">Scan to pay with ABA mobile</p>}
                />
              </div>
              <Payment
                image="/images/payments/creditcard.png"
                title="Credit/Debit Card"
                data={
                  <img
                    class="h-[15px]"
                    src="/images/payments/A-3Card_2x.png"
                  ></img>
                }
              />
            </div>
          ) : null}

          {payment() ? (
            <div>
              <div id="aba_main_modal">
                <div>
                  <form
                    method="post"
                    target="aba_webservice"
                    action="https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase"
                    id="aba_merchant_request"
                  >
                    <input type="hidden" name="hash" value={hash()} id="hash" />
                    <input
                      type="hidden"
                      name="tran_id"
                      value={payData().tran_id}
                      id="tran_id"
                    />
                    <input
                      type="hidden"
                      name="amount"
                      value={payData().amount}
                      id="amount"
                    />
                    <input
                      type="hidden"
                      name="firstname"
                      value={payData().firstname}
                    />
                    <input
                      type="hidden"
                      name="lastname"
                      value={payData().lastname}
                    />
                    <input type="hidden" name="phone" value={payData().phone} />
                    <input type="hidden" name="email" value={payData().email} />
                    <input
                      type="hidden"
                      name="req_time"
                      value={payData().req_time}
                    />
                    <input
                      type="hidden"
                      name="merchant_id"
                      value={payData().merchant_id}
                    />
                  </form>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
