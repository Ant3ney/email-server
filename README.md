Quickly create email functionality that can be transferd to others, severing the any exclusive depndency a client may have on you to manage and maintain there server

## Getting Started

```bash
clone repo
cd repo
# If your using vs code, open with the following
code .
```

## Set up Email functionality

This read me will explane how to install using a google email.
Note, you can use a google email that dose not require two step varification but that will cause issues down the read.
To find area where you can set up two step varification, on google, click on your profile, click on manage your google acount, click on security, find and set up two step varification.
After two step varification is set up, create an app specific password for the gmail service
Save this password as your email serer will use this to login and send emails

## Set up ENVs

Create a file called .env in root directory
Set PASSWORD to your app specific password
Set HOST_EMAIL to the email your plan to use to send emails
Set PRODUCTION to either live or development (Dose not current do anything)
example in .env file

```
PASSWORD=5%Sdnkfy^8f568jty%F@SDGgoeF
HOST_EMAIL=thompsonfoobar@gmail.com
PRODUCTION=live
```

## Deploy

This step is up to you to figure out although, I have set this repo up to deploy with Heroku.
Following the instructions here (https://devcenter.heroku.com/articles/deploying-nodejs) should be addiquite in teaching you how to deploy an node server to Heroku

## Call routes

This section will assume you are using fetch to call routes
To call routs make a post request to `${orgin}/sendMail`
create a body object and populate it with the following properties
toEmail, fromEmail, subject, message
Make sure the body is a JSON Object.
Add a header property to the request called 'Content-Type' and set it to 'application/json'

Ok, I know, just show me the code.
Example

```node
let body = JSON.stringify({
   toEmail: 'foobarmailerservice@gmail.com',
   fromEmail: 'potentialclient@gmail.com',
   subject: 'New email from PlanetMail.com!',
   message:
      'Hello Mr. Thompson Foo, I was wondering if your can fix my water cooler.',
});

fetch(`https://www.example.com/sendMail`, {
   method: 'post',
   body: body,
   headers: {
      'Content-Type': 'application/json',
   },
})
   .then(res => {
      return res.json();
   })
   .then(status => {
      console.log('status data below');
      console.log(status);
      res.redirect('/successfullysentemail');
   })
   .catch(err => {
      console.error(err);
      res.redirect('/failedtosendemail');
   });
```

## Final remarks

Your should be all set. Wait your running into errors and bugs? Well, I'm sorry but this is not a fullproof guide. In seting up this email server you will likely have to debug many issues that may arise. The real purpose of this readme is ment to remind myself on how to use this code as in the past, I have had to constantly review this code to see how it works.
