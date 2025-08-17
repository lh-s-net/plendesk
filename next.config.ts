const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // other Next.js configurations
  async rewrites() {
    return [
      // Rewrites für pd_calc
      {
        source: '/calc',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_CALC}/calc`,
      },
      {
        source: '/calc/:path*',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_CALC}/calc/:path*`,
      },
      // Rewrites für pd_planner
      {
        source: '/planner',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_PLANNER}/planner`,
      },
      {
        source: '/planner/:path*',
        destination: `${process.env.NEXT_PUBLIC_URL_PD_PLANNER}/planner/:path*`,
      },
    ];
  },
});