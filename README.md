# Tile Shop FE
https://d2lvjuwl8mt9u1.cloudfront.net/


## Deploy
npm i serverless -g
npm i serverless-finch
sls create --template aws-nodejs --template-path .

### Add to (cpopy past) '.serverless_plugins/' folder
'serverless-single-page-app-plugin/' folder
### Add to serverless.yml
plugins:
  - serverless-finch
  - serverless-single-page-app-plugin

custom:
  client:
    bucketName: tile-shop-fe
    distributionFolder: build

###