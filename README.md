
#  gramoday_backend




## API Reference

#### Get all items

```http
  POST /api/report-form
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | *api end point is /report-form/, so user can post report *.|

#### Get item

```http
  GET /api/report-data/cmdtyID/${cmdtyID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cmdtyID` | `number` | "cmdtyId" of user to fetch data from database |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

PORT=5000
DATABASE=mongodb+srv://username:password@username.kvuxg.mongodb.net/Database?retryWrites=true&w=majority

Save this file as config.env


## Installation

Install my-project with npm

```bash
  cd gramoday_backend
  npm Install --- for node module Installation in current directory
  type "node app.js" in terminal
  
 ```
    
## Authors

- [@vinodkumar8698](https://www.github.com/vinodkumar8698)

