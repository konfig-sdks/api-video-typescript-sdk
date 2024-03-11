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
 * @interface TokenUploadPayload
 */
export interface TokenUploadPayload {
    /**
     * The path to the video you want to upload.
     * @type {Uint8Array | File | buffer.File}
     * @memberof TokenUploadPayload
     */
    'file': Uint8Array | File | buffer.File;
    /**
     * The video id returned by the first call to this endpoint in a large video upload scenario.
     * @type {string}
     * @memberof TokenUploadPayload
     */
    'videoId'?: string;
}
