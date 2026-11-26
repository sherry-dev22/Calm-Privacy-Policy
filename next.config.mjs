/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static HTML in ./out, which Netlify (or any host) can serve.
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
