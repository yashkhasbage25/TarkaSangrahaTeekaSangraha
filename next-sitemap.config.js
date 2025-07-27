module.exports = {  
  siteUrl: process.env.SITE_URL || 'https://www.tarkasangraha.com',  
  generateRobotsTxt: true,  
  robotsTxtOptions: {  
    policies: [  
      { userAgent: '*', allow: '/' },  
    ],  
  },  
};  