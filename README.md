# NETUNO WEBSITE

Quickly build applications adapted to your business logic.

## Requirement

#### Netuno Platform

[Follow the steps here](https://doc.netuno.org/docs/en/installation/)

## Automatic Application Install

```
./netuno app github=netuno-org/website
```

### Running

Start the Netuno Server:

```
./netuno server app=netuno_website
```

> May take while because is the first time and NPM Install will run to `ui` and `website` folder inside the application root folder.

:warning: If you got this error:
 
```
 npm ERR! code ERESOLVE
 npm ERR! ERESOLVE unable to resolve dependency tree
```
Then execute the command below inside the `website` folder:

`npm install --force`

:white_check_mark: Is not required, but is recommended to rename the app folder `(Netuno Root directory)/apps/cluar/` to your desired name, and do not forget the `name` parameter in the configurations:

`config/_development.json`

`config/_production.json`

> Remember to restart the Netuno Server with your new app name.

## From Scratch

### Clone and Setup

Clone this project to the directory (Neptune Root directory)/apps/netuno_website/.

Then install the NPM dependencies by running 

`npm install --force` 

in the `netuno_website/website/` directory.

### Configuration

You'll need to copy the sample configuration file by running 

`cp config/sample.json config/_development.json` (be sure the `name` parameter)

and modifying to match your local environment configuration.

### Running

In the Netuno root directory run

`./netuno server app=website`

to start the backend server and then in the `(netuno_website app directory)/website/` run

`npm run start`

to start the frontend server.
