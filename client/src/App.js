import { useState } from 'react';
import onApi from './onApi';
import PaymentForm from './PaymentForm';
import PaymentItem from './PaymentItem';

function App() {

  const $api = onApi()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentData, setPaymentData] = useState(false)

  const onFinish = async (values) => {
    setIsLoading(true)
    try {
      const res = await $api.post('payment', values)
      setPaymentData(res.data)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }

  }

  return paymentData ? <PaymentItem paymentData={paymentData} /> : <PaymentForm onFinish={onFinish} isLoading={isLoading} />
}

export default App;
