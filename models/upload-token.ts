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
 * @interface UploadToken
 */
export interface UploadToken {
    /**
     * The unique identifier for the token you will use to authenticate an upload.
     * @type {string}
     * @memberof UploadToken
     */
    'token'?: string;
    /**
     * Time-to-live - how long the upload token is valid for.
     * @type {number}
     * @memberof UploadToken
     */
    'ttl'?: number;
    /**
     * When the token was created, displayed in ISO-8601 format.
     * @type {string}
     * @memberof UploadToken
     */
    'createdAt'?: string;
    /**
     * When the token expires, displayed in ISO-8601 format.
     * @type {string}
     * @memberof UploadToken
     */
    'expiresAt'?: string | null;
}
