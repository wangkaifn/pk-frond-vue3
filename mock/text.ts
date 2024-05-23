// test.ts

import path from 'path'
import fs from 'fs'
import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/image',
    method: 'get',
    rawResponse: async (req, res) => {
      // let reqbody = ''
      // await new Promise((resolve) => {
      //   req.on('data', (chunk) => {
      //     reqbody += chunk
      //   })
      //   req.on('end', () => resolve(undefined))
      // })
      // res.setHeader('Content-Type', 'text/plain')
      // res.statusCode = 200
      // res.end(`hello, ${reqbody}`)
      const imagesPath = path.join(__dirname, '512x512.png')
      fs.readFile(imagesPath, (err, data) => {
        if (err) {
          res.setHeader('Content-Type', 'text/plain')
          res.statusCode = 200
          res.end(`hello, ${err}`)
        } else {
          res.setHeader('Content-Type', 'image/png')
          res.statusCode = 200
          res.end(data)
        }
      })
    }
  }
] as MockMethod[]
