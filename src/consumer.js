const amqp = require('amqplib/callback_api');
const argv = require('minimist')(process.argv.slice(1));

const { host } = argv;

const consumer1 = async () => {
    amqp.connect(`amqp://${host}`, (err0, connection) => {
        if(err0) throw err0;
        connection.createChannel((err1, channel) => {
            if(err1) throw err1;
            const queue = 'hello';
            const msg = `Hello World at ${Date()}`;

            channel.assertQueue(queue, {
                durable: false
            });

            channel.consume(queue, (msg) => {
                console.log(`Recieved Message: ${msg.content.toString()}`);
            }, {
                noAck: true
            });
            console.log('message consumed');
        });
    });
};

consumer1();