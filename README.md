# NETUNO WEBSITE

Quickly build applications adapted to your business logic.

## Requirement

#### Netuno Platform

[Follow the steps here](https://doc.netuno.org/docs/en/installation/)

## Automatic Application Install

```
./netuno app github=netuno-org/website
```

## Website with Bun :art:

Inside the website folder:

```
cd website
```

Execute the Bun install command:

```
bun install
```

It needs to execute untrusted scripts of the ESBUILD, then execute:

```
bun pm trust --all
```

If needed, to restart the website installation, remove this folder and these files:

```
rm -rf node_modules
bun install
bun pm trust --all
```

Now you can start the website with the classic command:

```bun run dev```

> By default, the website runs with Bun.

## Running :rocket:

In the Netuno root directory run

`./netuno server app=website`

and it should start both the back-end and the front-end server.

> The first run may take a while due to the installation of frontend dependencies.

By default, the Netuno backoffice will be available in:
  - [http://localhost:9000/](http://localhost:9000/)

The OpenAPI will be in:
  - [http://localhost:9000/services/_openapi](http://localhost:9000/services/_openapi)

To start the website:

```
cd website
bun run dev
```

By default, the website is available in:
  - [http://localhost:3000/](http://localhost:3000/)

You can auto-start the website with the Netuno server, enabling the command in the `config/_development.json`:

```
   "commands": [
      ...
      {
         "path": "website",
         ...
         "enabled": true
      }
   ]
```
