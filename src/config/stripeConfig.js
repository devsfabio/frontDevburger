import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Q6JiwLNrGdeCSVpbuPUCjpOwZga1MNWYXD9ez4wxkh8KCMVdonFJINl85xusly9dWbA1YYMeMV1OVkfhbC53Rc4007HXdDzpW',
);

export default stripePromise;
