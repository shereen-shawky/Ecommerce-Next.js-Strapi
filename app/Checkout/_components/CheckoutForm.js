import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import orderApis from '../../_utils/orderApis'
import cartApis from '../../_utils/cartApis';
const CheckoutForm = ({ amount }) => {
	const { cart, setCart } = useContext(CartContext)
	const { user } = useUser()
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [errormessage, setErrorMessage] = useState()
	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) return;

		const handleError = (error) => {
			setLoading(false)
			setErrorMessage(error.message)
		}

		// Await these to ensure they finish before payment/redirect
		await createOrder();
		await sendEmail();

		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}
		const res = await fetch('/api/create-payment-intent', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
		const {clientSecret} = await res.json()

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/success",
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};
	const createOrder = () => {
		let productIds = [];
		cart.forEach(el => {
			productIds.push(el?.product?.id)
		})
		const data = {
			data: {
				email: user.primaryEmailAddress.emailAddress,
				username: user.fullName,
				amount,
				products: productIds
			}
		}
		orderApis.createOrder(data).then((res) => {
			if (res) {
				cart.forEach(el => {
					cartApis.deleteCartItem(el?.id).then(result => {

					})
				})
			}
		})
	}
	const sendEmail = async () => {
		const res = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				username: user.fullName
			})
		});
		const data = await res.json();
		console.log('Resend API response:', data);
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='mx-10 md:mx-[120px] lg:mx-[150px] my-25'><PaymentElement />
				<button className='w-full p-2 mt-4 text-white rounded-md bg-indigo-500'>Submit</button>
			</div>

		</form>
	);
};

export default CheckoutForm;