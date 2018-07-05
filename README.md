# S3 WebApp (Simple Storage Service - Amazon Web Services)

A simple web Application for interact with a bucket of AWS S3 without login on AWS console.(using cognito authentication and authorization)

_bootstrapped by create-react-app_

_Using AWS Amplify for AWS Interactions_

## Development

```bash
npm install
npm start
```

## Production

```bash
npm run build
```

## Configuration on Web app

After setting up the AWS part, you need to fill out the AWS props in the `/src/utils/awsconfig.json` file

## Configuring AWS services

For accessing a bucket of S3 from a web application, you need to sign your requests and get the role with has the access on the prefered resource. For that, you should setup a cognito pool and federation to sign in and get the required keys for signing the requests. In addition, you need to configure CORS on the bucket as explianed in [amplify Documentation](https://aws.github.io/aws-amplify/media/storage_guide#setup-amazon-s3-bucket-cors-policy)

### Cognito

1.  Create a **Cognito user pool** (better to avoid email as prop)
2.  Create an **app client**
3.  Create a **Federated Identities** and in _Authentication providers_ in cognito section, fill the _User Pool ID_ and _App client id_
4.  As an authenticated role of the federated identity, create a new role and in IAM, give the role required access to the S3 bucket.

### S3

- CORS Setting in bucker permissions

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <ExposeHeader>x-amz-server-side-encryption</ExposeHeader>
    <ExposeHeader>x-amz-request-id</ExposeHeader>
    <ExposeHeader>x-amz-id-2</ExposeHeader>
    <ExposeHeader>ETag</ExposeHeader>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

- Better also to enable versioning on the bucket so in case of existing file, it just keeps the old versions
