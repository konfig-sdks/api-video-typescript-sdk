/*
api.video

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AdvancedAuthenticationApi,
  AnalyticsApi,
  CaptionsApi,
  ChaptersApi,
  LiveStreamsApi,
  PlayerThemesApi,
  UploadTokensApi,
  VideosApi,
  WatermarksApi,
  WebhooksApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { ApiVideoCustom } from "./client-custom";

export class ApiVideo extends ApiVideoCustom {
  readonly advancedAuthentication: AdvancedAuthenticationApi;
  readonly analytics: AnalyticsApi;
  readonly captions: CaptionsApi;
  readonly chapters: ChaptersApi;
  readonly liveStreams: LiveStreamsApi;
  readonly playerThemes: PlayerThemesApi;
  readonly uploadTokens: UploadTokensApi;
  readonly videos: VideosApi;
  readonly watermarks: WatermarksApi;
  readonly webhooks: WebhooksApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.advancedAuthentication = new AdvancedAuthenticationApi(configuration);
    this.analytics = new AnalyticsApi(configuration);
    this.captions = new CaptionsApi(configuration);
    this.chapters = new ChaptersApi(configuration);
    this.liveStreams = new LiveStreamsApi(configuration);
    this.playerThemes = new PlayerThemesApi(configuration);
    this.uploadTokens = new UploadTokensApi(configuration);
    this.videos = new VideosApi(configuration);
    this.watermarks = new WatermarksApi(configuration);
    this.webhooks = new WebhooksApi(configuration);
  }

}
