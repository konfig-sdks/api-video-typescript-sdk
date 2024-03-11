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
 * @interface RefreshTokenPayload
 */
export interface RefreshTokenPayload {
    /**
     * The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it\'s the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token. 
     * @type {string}
     * @memberof RefreshTokenPayload
     */
    'refreshToken': string;
}

