import { Card, Layout } from "antd"

const PaymentItem = ({ paymentData }) => {
  console.log(paymentData)
  return (
    <Layout style={{ height: '100vh', paddingTop: 100 }}>
      <Card title="Данные запроса" bordered={false} style={{ width: 410, margin: '0 auto' }}>
        <p><strong>RequestId:</strong> {paymentData?.RequestId}</p>
        <p><strong>Amount:</strong> {paymentData?.Amount}</p>
      </Card>
    </Layout>
  )
}

export default PaymentItem