# Percy-Webssite
A personal website/online resume


## Getting Started
change the information and pictures in the views folder<br>
for the skills page change the data in the skill_dic, skills_list and get skills function of skills2d.ejs,skills3d.ejs and skills.ejs

### Prerequisites
NodeJS & npm<br>
Heroku or some other form of hosting<br>
custom domain space linked to host

### Installing Packages
cd to project base<br>
$ npm install 


## Free Heroku Deployment Guide (Dummy's Guide) 
Step 1:  Load projet to your own git repo,<br>
Step 2:  Create heroku account at [heroku.com](https://www.heroku.com)<br>
Step 3:  Once logged in, on the [Apps](https://dashboard.heroku.com/apps) page click "NEW"->"Create New App"<br>
Step 4:  Name your app and click create<br>
Step 5:  Navigate to your App, then go to the "Deploy" tab, connect your github account, then link your Project's repo<br>
Step 6:  Go to the "Automatic Deploy" section and enable on push to master branch<br>
         ----(if you have a CI/CD link that if you want, if not don't worry about it)<br>
Step 7:  Go to the "Resources" tab, then in the Add-On search bar search for Mailgun, add the "Starter-Free" version <br>
Step 8:  Go to the "Settings" tab, click "Reveal Config Vars" and set the mailgun settings from the below section<br>
Step 9:  Go to the "Deploy" tab, and near the bottom click the deploy button<br>
Step 10: After Heroku builds and deploys, click the open app button in the top right corner of page.<br>
Step 11: ENJOY!<br>


## Process.env settings (Heroku config vars)
Only neccessary if using the contact me tab
* MAILTO : your email adress contact page will send to
* MAILGUN_API_KEY : Found During MAILGUN setup
* MAILGUN_DOMAIN : Found During MAILGUN setup
* MAILGUN_PUBLIC_KEY : Found During MAILGUN setup
* MAILGUN_SMTP_LOGIN : Found During MAILGUN setup
* MAILGUN_SMTP_PASSWORD : Found During MAILGUN setup
* MAILGUN_SMTP_PORT : Found During MAILGUN setup
* MAILGUN_SMTP_SERVER : Found During MAILGUN setup


## MAILGUN SETTINGS CONFIGURATION (AFTER DEPLOYED TO HEROKU & with Personal DNS)
Go to "Overview" tab, click mailgun, then follow mailgun [quickstart guide](https://documentation.mailgun.com/en/latest/quickstart-sending.html#verify-your-domain) to complete the setup

## Built With

* [NodeJS](https://nodejs.org/en/) - The JS runtime environment
* [NPM](https://www.npmjs.com/) - Dependency Management
* [EJS](https://ejs.co/) - The templating engine used
* [ExpressJS](https://expressjs.com/) - Web Framework


# TODO
Aggregate personal data and customizing information into seperate JSON files and inject with EJS for much easier customization. 


## Authors

* **Michael Fink** - *Initial work* - [Mike-Fink-Jr](https://github.com/Mike-Fink-Jr)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
