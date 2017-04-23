# rabbitmq-with-expressjs

By following [tutorials](https://www.rabbitmq.com/getstarted.html) from RabbitMQ official site. There is a problem for me to adapt the code from tutorials and use it in my project, since most examples not running on long-lived process.

After googling for a pattern I could use, I ended up found this [great article](https://facundoolano.wordpress.com/2016/06/26/real-world-rpc-with-rabbitmq-and-node-js/)

So here I will use pattern I found from the article along with express.js to create producer,
and use this [tutorial](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html) to create consumer.

## Prerequisite
* node & npm
* rabbitmq

## Installation
```
npm install
```

## Start RabbitMQ server
```
rabbitmq-server
```

## Start application
```
# first terminal
node app.js

# second terminal
node rpcServer.js
```

Then navigate to "localhost:3000/fibonacci/15" and you will see the result.
