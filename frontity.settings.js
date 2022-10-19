const settings = {
  "name": "kid-app",
  "state": {
    "frontity": {
      "url": "https://kabataaniwasdroga.com",
      "title": "KID Blog",
      "description": "Find the latest happening about KID Movement."
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [

            
            
            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kabataaniwasdroga.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
