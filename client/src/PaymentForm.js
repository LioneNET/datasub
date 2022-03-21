import { Button, Card, Form, Input, Layout } from 'antd'
import { useForm } from 'antd/lib/form/Form';
import { useState } from 'react';

const PaymentForm = ({ isLoading, onFinish }) => {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  const validationPaterns = {
    cardNumber: /^[0-9]{16}$/,
    expirationDate: /^(0[1-9]|1[0-2])\/?([0-9]{4})$/,
    cvv: /^[0-999]{3}$/,
    amount: /^[1-9]{1}[0-9]{0,}$/
  }
  const [isDisable, setIsDisable] = useState(true)
  const [form] = useForm()

  //все это ради того, чтобы отключать кнопку
  const formChangeHandler = (e) => {
    let checkValidate = form.getFieldsValue()
    for (let value in checkValidate) {
      if (!validationPaterns[value].test(checkValidate[value])) {
        setIsDisable(true)
        return
      }
    }
    setIsDisable(false)
  }

  return (
    <Layout style={{ height: '100vh', paddingTop: 100 }}>
      <Card style={{ width: 410, margin: '0 auto' }}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} form={form} onValuesChange={formChangeHandler} >
          <Form.Item
            name='cardNumber'
            label="Card Number"
            rules={[{
              pattern: validationPaterns.cardNumber,
              required: true,
              message: 'Введите 16 цифр'
            }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='expirationDate'
            label="Expiration Date"
            rules={[{
              pattern: validationPaterns.expirationDate,
              required: true,
              message: 'Формат даты MM/YYYY'
            }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='cvv'
            label="CVV"
            rules={[{
              pattern: validationPaterns.cvv,
              message: 'Введите 3 цифры с карты',
              required: true
            }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='amount'
            label="Amount"
            rules={[{
              pattern: validationPaterns.amount,
              message: 'Введите корректную сумму',
              required: true
            }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              disabled={isDisable}
              loading={isLoading}
              type="primary"
              htmlType="submit">
              Оплатить
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}

export default PaymentForm