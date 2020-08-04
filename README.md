## Personal Website

### NOTE

    Make changes to "homepage" in package.json accordingly for local dev, gh-pages and s3 deployment.

    gh-pages: 
        "name": "personal-website",
        "homepage": "http://quanganhhoang.github.io/personal-website",

        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    
    s3:
        "name": "public",
        "homepage": "./",

        "predeploy": "npm run build",
        "deploy": "aws s3 sync build/ s3://qahoang.com --acl public-read"


### Deployment

Github Pages: https://quanganhhoang.github.io/personal-website/

    npm run deploy

AWS S3 & CloudFront: https://qahoang.com

    git branch s3
    npm run deploy

### Github Pages

Follow the tutorial [here](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

### S3 & CloudFront

Follow the tutorial [here](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).