/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.gg/M7kaJDZtyY',
      permanent: true
    }
  ]
}

module.exports = nextConfig
