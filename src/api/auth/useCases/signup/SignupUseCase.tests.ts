/* eslint-disable no-console */
import request from 'supertest'
import http from '../../../../interfaces/express'

const NAME = 'John Doe'
const EMAIL = 'john.doe@example.com'
const PASSWORD = '123456'
const BIRTHDAY = '01/01/2000'

describe('Signup', () => {
  it('should be able to signup successfully', async () => {
    const response = await request(http)
      .post('/signup')
      .send({ name: NAME, email: EMAIL, password: PASSWORD, birthday: BIRTHDAY })

    console.log('*-------------------------------*\n', response.body, '\n*-------------------------------*')

    expect(response.statusCode).toEqual(200)
  })
})
