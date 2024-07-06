### Run a local postgres server 

```shell
 docker run --name blog-postgres -e POSTGRES_PASSWORD=blog -p 5432:5432 -d postgres:latest
```

- connection string for this docker image is 
`postgresql://postgres:blog@localhost:5432/postgres`