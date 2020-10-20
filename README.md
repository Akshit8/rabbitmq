# rabbitmq

## setting up rabbitmq with docker on a docker network
```
# run a standalone instance
docker network create rabbit-network
docker run -d --rm --net rabbit-network --hostname rabbit-host --name rabbit-name rabbitmq:3.8

# how to grab existing erlang cookie
docker exec -it rabbit-name cat /var/lib/rabbitmq/.erlang.cookie

# clean up
docker rm -f rabbit-name
```

## setting up rabbitmq with management console and exposing required ports
```
# no SSL, erlang cookie set, directly exposed
docker container run -d -p 3000:5672 -p 3001:15672 --name rabbit-mq rabbitmq:3.8-management  
```