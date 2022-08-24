# Getting Started with Create React App

## Deploy

change `heroku_api_key` & `heroku_app_name` & `heroku_email`  in your `.github/workflows/cd.yml` to the root of your project, like:

```
      - uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "afs-react" #Must be unique in Heroku
          heroku_email: "gmszone@qq.com"
```

### Generate Token to HEROKU_API_KEY

#### with Web

[https://dashboard.heroku.com/account/applications/authorizations/new](https://dashboard.heroku.com/account/applications/authorizations/new)

#### or with CLI

- [install heroku](https://devcenter.heroku.com/articles/heroku-cli)
- login heroku

```
heroku login
> note: will open the browser to auth
```
- generate the **Token** of the heroku
```
heroku authorizations:create
```

will generate:

```
Creating OAuth Authorization... done
Client:      <none>
ID:          7f750130-8992-47ec-99f5-0c9c66cf68e0
Description: Long-lived user authorization
Scope:       global
Token:       xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Updated at:  Fri Aug 05 2022 10:34:53 GMT+0800 (China Standard Time) (less than a minute ago)
```

### Custom Env variable

1. config `REACT_APP_ENV` in `package.json` under `scripts`, for example:

```diff
  "scripts": {
    "serve": "serve -s build",
    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "build": "REACT_APP_ENV=$NODE_ENV react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

2. config by `NODE_ENV`. Add `NODE_ENV` in `.github/workflows/ci.yaml` and `.github/workflows/cd.yml`, for example:

```yaml
    env:
      NODE_ENV: production
```

3. then use in code `process.env['REACT_APP_ENV']`
