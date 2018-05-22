"use strict";

let mediator = function () {

    let ChannelEnum = {
        COMPLETE: 'complete',
        DELETE: 'delete'
    };

    Object.freeze(ChannelEnum);

    let channels = {};

    let subscribe = function (channel, context, func) {
        if (!channels[channel]) {
            channels[channel] = {
                subscribes: []
            };
        }
        channels[channel].subscribes.push({
            context: context,
            func: func
        });
    };

    let publish = function (channel) {
        if (!channels[channel]) {
            return false;
        }
        let args = Array.prototype.slice.call(arguments, 1);
        let channelSubscribers = channels[channel].subscribes;
        for (let subscribersIndex = 0; subscribersIndex < channelSubscribers.length; subscribersIndex++) {
            let subscriber = channelSubscribers[subscribersIndex];
            subscriber.func.apply(subscriber.context, args);
        }
    }

    return {
        ChannelEnum: ChannelEnum,
        subscribe: subscribe,
        publish: publish
    }
}

module.exports = mediator();