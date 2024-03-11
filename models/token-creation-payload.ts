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
 * @interface TokenCreationPayload
 */
export interface TokenCreationPayload {
    /**
     * Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.
     * @type {number}
     * @memberof TokenCreationPayload
     */
    'ttl'?: number;
}
