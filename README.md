# Triple Pundit

./images/logo.sample.png
>Additional information or tag line

Brief overview of functionality including major components, which may including external APIs, SaaS vendors, and of course the tech stack.

[Front-end Design Documentation](README.md)

### Production Environment
[https://www.triplepundit.com/](https://www.triplepundit.com/)  
`live2:/var/www/vhosts/path/on/server/httpdocs`

### Staging Environment
[https://triplepundit-dev.3blmedia.com/](https://triplepundit-dev.3blmedia.com/)  
`staging:/var/www/vhosts/triplepundit-dev.3blmedia.com/`

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

## Developing

### Built With
React

### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.
* [Git](http://git.com/)
* Node.js (with NPM)
* Ember CLI
* Etc.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

```shell
npm run build
```

This will transpile all of the React code into the files you need to deploy and put them in the `build` directory. This directory is ignored by git.

### Deploying / Publishing
Deploy to the production environment with `rsync`. Eventually, we'll use Acquia's git tagging procedure on our NodeJS instance.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Version Control

Git. Normal "Git Flow" methodology. All branches should be off "develop" and be named with the Jira task id. For example: `feature/TP-23` or `hotfix/TP-263`.

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

This is a decoupled site and, as such, does not have it's own backend. All content is requested via various APIs.

## Licensing

State what the license is and how to find the text version of the license.

## Further Reading / Useful Links
List links to additional resources, which could be developer tools (browser extensions), explanation of concept or principles used that may be unfamiliar, etc.

----

## Some notes on documentation
Not everything has to be in the README. Database host, name, and password are in the config file, and should stay there and not be repeated. Same with API access URLs, etc. Keep documentation as close to the code as possible, but assume the reader of the docs is a new developer who’s never worked with it. Guide them to where they need to go, but don’t give it all to them here.

--- 

## From create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
  - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
