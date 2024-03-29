/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * Unique identifier of the webhook
     * @type {string}
     * @memberof Webhook
     */
    'webhookId'?: string;
    /**
     * When an webhook was created, presented in ISO-8601 format.
     * @type {string}
     * @memberof Webhook
     */
    'createdAt'?: string;
    /**
     * A list of events that will trigger the webhook.
     * @type {Array<string>}
     * @memberof Webhook
     */
    'events'?: Array<string>;
    /**
     * URL of the webhook
     * @type {string}
     * @memberof Webhook
     */
    'url'?: string;
}

