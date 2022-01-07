/* eslint-disable no-console */
import request from 'supertest'
// import { createConnection } from 'typeorm'

import application from 'interfaces/express'

const NAME = 'John1 Doe'
const EMAIL = 'john1.doe@example.com'
const PASSWORD = '123456'
const BIRTHDAY = '01/01/2000'

describe('Signup', () => {
  // beforeEach(async () => {
  //   await createConnection()
  // })

  // afterEach(async () => {
  //   console.log('...afterEach')
  // })

  it('should be able to signup successfully', async () => {
    // console.log('app_tests', app_tests)

    const response = await request(application).post('/signup').send({
      name: NAME,
      email: EMAIL,
      password: PASSWORD,
      birthday: BIRTHDAY,
    })

    console.log('- BODY -', response.body)

    expect(response.statusCode).toEqual(200)
  })
})
