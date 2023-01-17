import { WebAuthClient } from '../src'

describe('WebAuthClient', () => {
  describe('.instance', () => {
    it('should return a Client openid-client instance', async () => {
      const webAuth = await WebAuthClient.getInstance()

      const client = webAuth.client

      expect(client).toBeDefined()
      expect(client.constructor.name).toBe('Client')
    })
  })
})
