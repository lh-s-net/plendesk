const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // other Next.js configurations
    async rewrites() {
    return [
      // Rewrites für pd_app1
      {
        source: '/app1',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_APP1}/app1`,
      },
      {
        source: '/app1/:path*',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_APP1}/app1/:path*`,
      },
    ];
  },

});