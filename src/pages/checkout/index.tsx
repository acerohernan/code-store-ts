import { useNavigate } from "react-router-dom";
import { ChangeHandler, SubmitHandler, useForm } from "react-hook-form";

import Order from "./order";
import NoProducts from "./noProducts";

import checkout from "../../styles/pages/checkout/checkout.module.scss";
import form from "../../styles/pages/checkout/form.module.scss";
import payment from "../../styles/pages/checkout/payment.module.scss";

import { useAppSelector } from "../../store/hooks";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

interface FormValues {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  full_name: string;
  country: string;
  city: string;
  address: string;
  address_2: string;
  state: string;
  zip_code: string;
  shipping_method: string;
  subscribe: string;
  order_notes: string;
  card_number: string;
  cvc: string;
  exp_month: string;
  exp_year: string;
  gift_code?: string;
}

function Checkout() {
  const [phone, setPhone] = useState("");
  const { items } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handlePhoneInputChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let value = event.currentTarget.value.replace(/[a-zA-Z]/, "");

    if (phone.length === 3) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    }

    if (phone.length === 7) {
      value = value.slice(0, 7) + "-" + value.slice(7);
    }

    if (phone.length === 12) {
      value = value.slice(0, 12);
    }

    setPhone(value);
  };

  const onKeydownPhone: KeyboardEventHandler<HTMLInputElement> = (e) => {
    let key = e.keyCode;

    if (key === 8 && phone.length === 4) {
      let value = phone;
      setPhone(value.slice(0, 3));
    }

    if (key === 8 && phone.length === 8) {
      let value = phone;
      setPhone(value.slice(0, 7));
    }

    console.log(phone.length);
  };

  console.log(phone, phone.length);

  return (
    <form
      className={checkout.container}
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className={form.container}>
        <h1 className={form.sectionTitle}>Customer</h1>
        <div className={form.customer}>
          <div>
            <label htmlFor="first_name">First name*</label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", {
                required: "Please enter your first name",
              })}
            />
            {errors.first_name ? (
              <div className={form.labelError}>{errors.first_name.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="last_name">Last name*</label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", {
                required: "Please enter your last name",
              })}
            />
            {errors.last_name ? (
              <div className={form.labelError}>{errors.last_name.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              {...register("phone", {
                required: "Please enter your phone",
                pattern: {
                  value: /^(\d{3})-(\d{3})-(\d{4})/,
                  message: "Enter a valid phone number. Example: 222-222-2222",
                },
              })}
              onChange={handlePhoneInputChange}
              onKeyDown={onKeydownPhone}
            />
            {errors.phone ? (
              <div className={form.labelError}>{errors.phone.message}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email ? (
              <div className={form.labelError}>{errors.email.message}</div>
            ) : null}
          </div>
        </div>
        <h1 className={form.sectionTitle}>Shipping Address</h1>
        <div className={form.shiping}>
          <div>
            <label htmlFor="full_name">Full name*</label>
            <input
              type="text"
              id="full_name"
              {...register("full_name", {
                required: "Please enter your full name",
              })}
            />
            {errors.full_name ? (
              <div className={form.labelError}>{errors.full_name.message}</div>
            ) : null}
          </div>
          <div className={form.address}>
            <div>
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                id="country"
                {...register("country", {
                  required: "Please enter your country",
                })}
              />
              {errors.country ? (
                <div className={form.labelError}>{errors.country.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="city">City*</label>
              <input
                type="text"
                id="city"
                {...register("city", {
                  required: "Please enter your city",
                })}
              />
              {errors.city ? (
                <div className={form.labelError}>{errors.city.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="address">Address line 1*</label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: "Please enter your address",
                })}
              />
              {errors.address ? (
                <div className={form.labelError}>{errors.address.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="address_2">Address line 2* (optional)</label>
              <input
                type="text"
                id="address_2"
                {...register("address_2", {})}
              />
              {errors.address_2 ? (
                <div className={form.labelError}>
                  {errors.address_2.message}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="state">State/province/regiony**</label>
              <input
                type="text"
                id="state"
                {...register("state", {
                  required: "Please enter your state",
                })}
              />
              {errors.state ? (
                <div className={form.labelError}>{errors.state.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="zip_code">Zip Code*</label>
              <input
                type="text"
                id="zip_code"
                {...register("zip_code", {
                  required: "Please enter your zip_code",
                })}
              />
              {errors.zip_code ? (
                <div className={form.labelError}>{errors.zip_code.message}</div>
              ) : null}
            </div>
          </div>
          <label htmlFor="method">Shipping Method*</label>
          <select id="method" className={form.selectInput}>
            <option>Worldwide (11 - 20 days) $11.34</option>
          </select>
          <div className={form.check}>
            <input type="checkbox" name="subscribe" id="subscribe" />
            <label htmlFor="subscribe">
              Receive our news, restocking, good plans and news in your mailbox!
              Rest assured, you will not be flooded, we only send one newsletter
              per month approximately 🙂.
            </label>
          </div>
          <label htmlFor="notes">Order notes (optional)</label>
          <textarea className={form.notes} name="notes" id="notes" />
        </div>
      </section>
      <div>
        <div className={payment.container}>
          <h2 className={payment.title}>Payment Detail</h2>
          <div className={payment.card}>
            <h3 className={payment.cardTitle}>Credit/ debit card</h3>
            <div className={payment.cardDetails}>
              <div className={payment.cardNumber}>
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  id="card_number"
                  {...register("card_number", {
                    required: "Please enter your card number",
                  })}
                />
                {errors.card_number ? (
                  <div className={form.labelError}>
                    {errors.card_number.message}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="cvc">CVC(CVV)</label>
                <input
                  type="text"
                  id="cvc"
                  {...register("cvc", {
                    required: "Please enter your cvc",
                  })}
                />
                {errors.cvc ? (
                  <div className={form.labelError}>{errors.cvc.message}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="exp_month">Exp. Month</label>
                <input
                  type="text"
                  id="exp_month"
                  {...register("exp_month", {
                    required: "Please enter your expiration month",
                  })}
                />
                {errors.exp_month ? (
                  <div className={form.labelError}>
                    {errors.exp_month.message}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="exp_year">Exp. Year</label>
                <input
                  type="text"
                  id="exp_year"
                  {...register("exp_year", {
                    required: "Please enter your expiration year",
                  })}
                />
                {errors.exp_year ? (
                  <div className={form.labelError}>
                    {errors.exp_year.message}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Order />
        <button className={checkout.button} type="submit" form="form">
          Make payment
        </button>
      </div>
      {items.length < 1 && <NoProducts />}
    </form>
  );
}

export default Checkout;
