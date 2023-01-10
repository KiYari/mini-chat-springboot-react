module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          missing: [
            {
                type: 'cookie',
                key: 'loginToEasyChat',
            }
          ],
          destination: '/auth',
          permanent: false,
        },

        {
            source: '/auth',
            has: [
                {
                    type: 'cookie',
                    key: 'loginToEasyChat',
                }
            ],
            destination: '/',
            permanent: true,
        }
      ]
    },
  }