module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          has : [{
            type: 'cookie',
            key: 'authorized',
            value: 'false'
          }],
          destination: '/auth',
          permanent: true,
        },

        {
          source: '/chat/:path',
          has : [{
            type: 'cookie',
            key: 'authorized',
            value: 'false'
          }],
          destination: '/auth',
          permanent: true,
        },

        {
            source: '/auth',
            has : [{
              type: 'cookie',
              key: 'authorized',
              value: 'true'
            }],
            destination: '/',
            permanent: true,
        },

        {
          source: '/chat/:path',
          missing: [{
            type: 'cookie',
            key: 'rooms',
            value: ':path',
          }],
          destination: '/',
          permanent: true,
        }
      ]
    },
  }