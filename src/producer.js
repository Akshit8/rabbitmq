const amqp = require('amqplib/callback_api');
const argv = require('minimist')(process.argv.slice(1));

const { host } = argv;

/**
 * implemenation with callbacks
 * basic implementation
 * channel connection close not handled
 */
const producer1 = async () => {
    amqp.connect(`amqp://${host}`, (err0, connection) => {
        if(err0) throw err0;
        connection.createChannel((err1, channel) => {
            if(err1) throw err1;
            const queue = 'hello';
            const msg = `Hello World at ${Date()}`;

            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log('message published');
        });
    });
};

producer1();

/**
 * implementation with await
 */
const producer2 = async () => {

}
