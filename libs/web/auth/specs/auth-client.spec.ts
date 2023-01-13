import { WebAuthClient } from '../src';

describe('WebAuthClient', () => {
  describe('.instance', () => {
    it('should return a Client openid-client instance', async () => {
      const client = (await WebAuthClient.getInstance()).client;

      expect(client).toBeDefined();
      expect(client.constructor.name).toBe('Client');
    });
  });
});
