---
title: Setup a PostgreSQL database with Docker
date: '2022-08-21T23:36:35.105Z'
description: 'A step by step guide on setting up a PostgreSQL database with Docker'
tags: 'PostgreSQL,Docker'
---

> **_DISCLAIMER:_** This is not a Docker 101, I assume you already have some basic knowledge and expertise with docker and also have docker already installed.

# What is docker compose?

Docker Compose is a tool for defining and running multi-container Docker applications, it allows you to create and start multiple services from a `docker-compose.yml` configuration file.

# Why using docker compose?

## Lets get started with setting up a PostgreSQL database

### Step 1:

In the root of your project folder, create a new file and name it `docker-compose.yml`

### Step 2:

Let's open the file and start adding the configurations:

1- Specify the docker compose version: I am going to use `version: "3.3"`

```yml
version: '3.3'
```

2- Add the services (each service represent a container): in our case we are going to add one service, I am going to name it `postgres-db` you can name it what ever you want

```yml
version: '3.3'

services:
  postgres-db:
```

3- Find the image you want to use on [Docker Hub](https://hub.docker.com): **make sure to use the official images**, I prefer to use [postgres:latest](https://hub.docker.com/layers/postgres/library/postgres/latest/images/sha256-5e12b4abbed98e4cde708fcb6d2aa7c510f26e65e65474ac0ef7a9e85f21e60c?context=explore) which is alawys updated, you can use any tag you want from [tags](https://hub.docker.com/_/postgres/tags)

```yml
version: '3.3'

services:
  postgres-db:
    image: postgres:latest
```

4- Map the port of the docker container with the port of the hosting machine: to be able to access the data from outside the container, the default port of postgresql is `5432`, so I am going to map with the same port `5432` (you can use any port you want)

```yml
version: '3.3'

services:
  postgres-db:
    image: postgres:latest

    ports:
      # hosting-machine port:docker-container port
      - 5432:5432
```

5- Setup volumes to save the data on the hosting machine: if we dont set it the data will be erased when the container is stopped, by default the data is saved on the container under `/var/lib/postgresql/data/` folder, so we map that folder to whatever folder in the hosting machine

```yml
version: '3.3'

services:
  postgres-db:
    image: postgres:latest

    ports:
      # hosting-machine port:docker-container port
      - 5432:5432

    volumes:
      # hosting-machine folder:docker-container folder
      - ./postgres-db:/var/lib/postgresql/data/
```

6- Add the environment variables: PostgreSQL requires 3 environment variables `POSTGRES_USER`, `POSTGRES_PASSWORD` and `POSTGRES_DB`

```yml
version: '3.3'

services:
  postgres-db:
    image: postgres:latest

    ports:
      # hosting-machine port:docker-container port
      - 5432:5432

    volumes:
      # hosting-machine folder:docker-container folder
      - ./postgres-db:/var/lib/postgresql/data/

    environment:
      - POSTGRES_USER=amine
      - POSTGRES_PASSWORD=4N45e2o1*22$Euf1g279
      - POSTGRES_DB=db
```

**OR**

you can set the environment variables in a `.env` and configure the docker compose to use it from there

```yml
version: '3.3'

services:
  postgres-db:
    image: postgres:latest

    ports:
      # hosting-machine port:docker-container port
      - 5432:5432

    volumes:
      # hosting-machine folder:docker-container folder
      - ./postgres-db:/var/lib/postgresql/data/

    env_file:
      - .env
```

```bash
# .env file
POSTGRES_USER=amine
POSTGRES_PASSWORD=4N45e2o1*22$Euf1g279
POSTGRES_DB=db
```

### Step 3:

Open the terminal and navigate to the folder where the `docker-compose.yml` file lives

**Run the docker compose:**

```bash
  docker compose up
```

I like to run the container as a deamon with `docker compose up -d`.

Now the database should be started successfully, and you can access it via `http://localhost:5432` (or whatever the port you use)

**Stop the docker compose:**

```bash
  docker compose down
```

### Extra step:

This just a one way of using docker compose (basically how I like to use it), there is a lot of stuff I didn't cover and I highly suggest that you check the full [Docker Compose documentation](https://docs.docker.com/compose/).

That's it for this time, see you in the next post.
