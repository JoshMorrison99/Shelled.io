/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    unoptimized: true 
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      // Define routes as needed for CloudFront, with the ".html" extension
      '/writeups/thm/red.html': { page: '/writeups/thm/red', query: { __nextDefaultLocale: 'en' } },
      '/writeups/portswigger/sql-injection-in-where-clause.html': { page: '/writeups/portswigger/sql-injection-in-where-clause', query: { __nextDefaultLocale: 'en' } },
      '/writeups/portswigger/sql-injection-login-bypass.html': { page: '/writeups/portswigger/sql-injection-login-bypass', query: { __nextDefaultLocale: 'en' } },

      // Bug Bounty 
      '/modules/csrf.html': { page: '/modules/csrf', query: { __nextDefaultLocale: 'en' } },
      '/modules/lfi.html': { page: '/modules/lfi', query: { __nextDefaultLocale: 'en' } },
      '/modules/command-injection.html': { page: '/modules/command-injection', query: { __nextDefaultLocale: 'en' } },
      '/modules/sql-injection.html': { page: '/modules/sql-injection', query: { __nextDefaultLocale: 'en' } },

      // CTF
      '/modules/linux-privesc.html': { page: '/modules/linux-privesc', query: { __nextDefaultLocale: 'en' } },
      '/modules/attacking-ad.html': { page: '/modules/attacking-ad', query: { __nextDefaultLocale: 'en' } },
      '/modules/buffer-overflow.html': { page: '/modules/buffer-overflow', query: { __nextDefaultLocale: 'en' } },
      '/modules/ftp.html': { page: '/modules/ftp', query: { __nextDefaultLocale: 'en' } },
      '/modules/mssql.html': { page: '/modules/mssql', query: { __nextDefaultLocale: 'en' } },
      '/modules/windows-privesc.html': { page: '/modules/windows-privesc', query: { __nextDefaultLocale: 'en' } },
      '/modules/file-transfer.html': { page: '/modules/file-transfer', query: { __nextDefaultLocale: 'en' } },

      // Blogs
      '/blogs/cbbh.html': { page: '/blogs/cbbh', query: { __nextDefaultLocale: 'en' } },
      ...defaultPathMap,
    };
  },
};

module.exports = nextConfig;
