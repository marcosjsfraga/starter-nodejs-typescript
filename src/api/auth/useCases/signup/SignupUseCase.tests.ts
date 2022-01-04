/* eslint-disable no-console */
import request from 'supertest'
import 'database'
import application from 'interfaces/express'

const NAME = 'John Doe'
const EMAIL = 'john.doe@example.com'
const PASSWORD = '123456'
const BIRTHDAY = '01/01/2000'

describe('Signup', () => {
  it('should be able to signup successfully', async () => {
    const response = await request(application).post('/signup').send({
      name: NAME,
      email: EMAIL,
      password: PASSWORD,
      birthday: BIRTHDAY,
    })

    console.log(response.body)

    expect(response.statusCode).toEqual(200)
  })
})
