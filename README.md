<div align="left">

[![Visit Api.video](./header.png)](https://api.video)

# [Api.video](https://api.video)<a id="apivideo"></a>

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`apivideo.advancedAuthentication.getBearerToken`](#apivideoadvancedauthenticationgetbearertoken)
  * [`apivideo.advancedAuthentication.refreshBearerToken`](#apivideoadvancedauthenticationrefreshbearertoken)
  * [`apivideo.analytics.getLiveStreamPlays`](#apivideoanalyticsgetlivestreamplays)
  * [`apivideo.analytics.getVideoPlays`](#apivideoanalyticsgetvideoplays)
  * [`apivideo.captions.deleteByLanguage`](#apivideocaptionsdeletebylanguage)
  * [`apivideo.captions.getByLanguage`](#apivideocaptionsgetbylanguage)
  * [`apivideo.captions.listByVideoId`](#apivideocaptionslistbyvideoid)
  * [`apivideo.captions.updateSettings`](#apivideocaptionsupdatesettings)
  * [`apivideo.captions.uploadVttFile`](#apivideocaptionsuploadvttfile)
  * [`apivideo.chapters.deleteChapterInLanguage`](#apivideochaptersdeletechapterinlanguage)
  * [`apivideo.chapters.getChapterByLanguage`](#apivideochaptersgetchapterbylanguage)
  * [`apivideo.chapters.listByVideo`](#apivideochapterslistbyvideo)
  * [`apivideo.chapters.uploadVttFile`](#apivideochaptersuploadvttfile)
  * [`apivideo.liveStreams.createLivestreamObject`](#apivideolivestreamscreatelivestreamobject)
  * [`apivideo.liveStreams.deleteLivestream`](#apivideolivestreamsdeletelivestream)
  * [`apivideo.liveStreams.deleteThumbnail`](#apivideolivestreamsdeletethumbnail)
  * [`apivideo.liveStreams.getLivestreamById`](#apivideolivestreamsgetlivestreambyid)
  * [`apivideo.liveStreams.listAll`](#apivideolivestreamslistall)
  * [`apivideo.liveStreams.updateLivestreamObject`](#apivideolivestreamsupdatelivestreamobject)
  * [`apivideo.liveStreams.uploadThumbnail`](#apivideolivestreamsuploadthumbnail)
  * [`apivideo.playerThemes.deletePlayer`](#apivideoplayerthemesdeleteplayer)
  * [`apivideo.playerThemes.getThemeByPlayerId`](#apivideoplayerthemesgetthemebyplayerid)
  * [`apivideo.playerThemes.players`](#apivideoplayerthemesplayers)
  * [`apivideo.playerThemes.players_0`](#apivideoplayerthemesplayers_0)
  * [`apivideo.playerThemes.removeLogo`](#apivideoplayerthemesremovelogo)
  * [`apivideo.playerThemes.updatePlayerDetails`](#apivideoplayerthemesupdateplayerdetails)
  * [`apivideo.playerThemes.uploadLogo`](#apivideoplayerthemesuploadlogo)
  * [`apivideo.uploadTokens.deleteToken`](#apivideouploadtokensdeletetoken)
  * [`apivideo.uploadTokens.generateToken`](#apivideouploadtokensgeneratetoken)
  * [`apivideo.uploadTokens.getDetails`](#apivideouploadtokensgetdetails)
  * [`apivideo.uploadTokens.listActiveDelegatedTokens`](#apivideouploadtokenslistactivedelegatedtokens)
  * [`apivideo.videos.createObject`](#apivideovideoscreateobject)
  * [`apivideo.videos.deleteVideoObject`](#apivideovideosdeletevideoobject)
  * [`apivideo.videos.getVideoObject`](#apivideovideosgetvideoobject)
  * [`apivideo.videos.getVideoStatusAndDetails`](#apivideovideosgetvideostatusanddetails)
  * [`apivideo.videos.ingestVideoFromSource`](#apivideovideosingestvideofromsource)
  * [`apivideo.videos.listAllObjects`](#apivideovideoslistallobjects)
  * [`apivideo.videos.setThumbnailFromInterval`](#apivideovideossetthumbnailfrominterval)
  * [`apivideo.videos.updateVideoObjectParameters`](#apivideovideosupdatevideoobjectparameters)
  * [`apivideo.videos.upload`](#apivideovideosupload)
  * [`apivideo.videos.uploadThumbnail`](#apivideovideosuploadthumbnail)
  * [`apivideo.watermarks.listAll`](#apivideowatermarkslistall)
  * [`apivideo.watermarks.watermark`](#apivideowatermarkswatermark)
  * [`apivideo.watermarks.watermark_0`](#apivideowatermarkswatermark_0)
  * [`apivideo.webhooks.createWebhookEvent`](#apivideowebhookscreatewebhookevent)
  * [`apivideo.webhooks.deleteWebhook`](#apivideowebhooksdeletewebhook)
  * [`apivideo.webhooks.getDetailsById`](#apivideowebhooksgetdetailsbyid)
  * [`apivideo.webhooks.listAll`](#apivideowebhookslistall)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=api.video&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ApiVideo } from "api-video-typescript-sdk";

const apivideo = new ApiVideo({
  // Defining the base path is optional and defaults to https://ws.api.video
  // basePath: "https://ws.api.video",
  accessToken: "ACCESS_TOKEN",
});

const getBearerTokenResponse =
  await apivideo.advancedAuthentication.getBearerToken({
    apiKey: "9VxMaPgsaFg7EBqmuspSzF7",
  });

console.log(getBearerTokenResponse);
```

## Reference<a id="reference"></a>


### `apivideo.advancedAuthentication.getBearerToken`<a id="apivideoadvancedauthenticationgetbearertoken"></a>

Returns a bearer token that can be used to authenticate other endpoint.

You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBearerTokenResponse =
  await apivideo.advancedAuthentication.getBearerToken({
    apiKey: "9VxMaPgsaFg7EBqmuspSzF7",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

Your account API key. You can use your sandbox API key, or you can use your production API key.

#### 🔄 Return<a id="🔄-return"></a>

[AccessToken](./models/access-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/api-key` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.advancedAuthentication.refreshBearerToken`<a id="apivideoadvancedauthenticationrefreshbearertoken"></a>

Accepts the old bearer token and returns a new bearer token that can be used to authenticate other endpoint.

You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshBearerTokenResponse =
  await apivideo.advancedAuthentication.refreshBearerToken({
    refreshToken:
      "def502005346d9cc2bd79a7793ab5bdabfefcaabfbb8c253f14733f1262077e1a3f38c4751d6d20f590c3784e531a82adc11f05fc1949aa46d5575aaa99cb84b9334ba66ac773576b5d7a418937ae337de62811d086dd42ad1164b12f87d67be6ffea18f2d50be9b95697b21c4d3c4372849bdb2287259cb80541570e913691a08b2fa33c85885930de15cebea627fc09f0255562ab3d39d87d4ff8fc02b00e252afcd480421dec7de9d1411176bcf669c527762e22294b453bc9ea06e9fa8ba5b873feb2ee14ce0a6a6ddd4b78c580631e210e9b9387265dc2bec9478a66a09dcdce1c40d2f856689e9d81742c9628a0b87b359e0b218ea1f07427eef89f999e47af89792f598e05847bd008fddc32ee63f4a601ffb4cd2ad08977f1c854ec358238322c918f05aa5a41f8a171dee497218408abc8283473f6112aeed7310815416a0fa36c63667e0ed014fa40b8992891bf58bae400d901c01450101c88f4978938ad138adc19cfe5698d60fd82cb27c586f6a8f70f4393c7c9e579df8739d46d249fb76d7",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### refreshToken: `string`<a id="refreshtoken-string"></a>

The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it\\\'s the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token. 

#### 🔄 Return<a id="🔄-return"></a>

[AccessToken](./models/access-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/refresh` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.analytics.getLiveStreamPlays`<a id="apivideoanalyticsgetlivestreamplays"></a>

Retrieve filtered analytics about the number of plays for your live streams in a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLiveStreamPlaysResponse = await apivideo.analytics.getLiveStreamPlays({
  from: "1970-01-01",
  dimension: "liveStreamId",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string | Date`<a id="from-string--date"></a>

Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in `from`. - The date you set must be **within the last 30 days**. - The value you provide must follow the `YYYY-MM-DD` format. 

##### dimension: `'liveStreamId' | 'emittedAt' | 'country' | 'deviceType' | 'operatingSystem' | 'browser'`<a id="dimension-livestreamid--emittedat--country--devicetype--operatingsystem--browser"></a>

Use this query parameter to define the dimension that you want analytics for. - `liveStreamId`: Returns analytics based on the public live stream identifiers. - `emittedAt`: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in `from` and `to` is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - `country`: Returns analytics based on the viewers\' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - `deviceType`: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: `computer`, `phone`, `tablet`, `tv`, `console`, `wearable`, `unknown`. - `operatingSystem`: Returns analytics based on the operating system used by the viewers during the play event. Response values include `windows`, `mac osx`, `android`, `ios`, `linux`. - `browser`: Returns analytics based on the browser used by the viewers during the play event. Response values include `chrome`, `firefox`, `edge`, `opera`.

##### to: `string | Date`<a id="to-string--date"></a>

Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a `to` date, the API returns analytics data starting from the `from` date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the `YYYY-MM-DD` format. 

##### filter: `string`<a id="filter-string"></a>

Use this query parameter to filter your results to a specific live stream in a project that you want analytics for. You must use the `liveStreamId:` prefix when specifying a live stream ID.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[AnalyticsPlaysResponse](./models/analytics-plays-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/live-streams/plays` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.analytics.getVideoPlays`<a id="apivideoanalyticsgetvideoplays"></a>

Retrieve filtered analytics about the number of plays for your videos in a project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideoPlaysResponse = await apivideo.analytics.getVideoPlays({
  from: "1970-01-01",
  dimension: "videoId",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string | Date`<a id="from-string--date"></a>

Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in `from`. - The date you set must be **within the last 30 days**. - The value you provide must follow the `YYYY-MM-DD` format. 

##### dimension: `'videoId' | 'emittedAt' | 'country' | 'deviceType' | 'operatingSystem' | 'browser'`<a id="dimension-videoid--emittedat--country--devicetype--operatingsystem--browser"></a>

Use this query parameter to define the dimension that you want analytics for. - `videoId`: Returns analytics based on the public video identifiers. - `emittedAt`: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in `from` and `to` is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - `country`: Returns analytics based on the viewers\' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - `deviceType`: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: `computer`, `phone`, `tablet`, `tv`, `console`, `wearable`, `unknown`. - `operatingSystem`: Returns analytics based on the operating system used by the viewers during the play event. Response values include `windows`, `mac osx`, `android`, `ios`, `linux`. - `browser`: Returns analytics based on the browser used by the viewers during the play event. Response values include `chrome`, `firefox`, `edge`, `opera`.

##### to: `string | Date`<a id="to-string--date"></a>

Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a `to` date, the API returns analytics data starting from the `from` date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the `YYYY-MM-DD` format. 

##### filter: `string`<a id="filter-string"></a>

Use this query parameter to filter your results to a specific video in a project that you want analytics for. You must use the `videoId:` prefix when specifying a video ID.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[AnalyticsPlaysResponse](./models/analytics-plays-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/videos/plays` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.captions.deleteByLanguage`<a id="apivideocaptionsdeletebylanguage"></a>

Delete a caption in a specific language by by video id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByLanguageResponse = await apivideo.captions.deleteByLanguage({
  videoId: "videoId_example",
  language: "language_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to delete a caption from.

##### language: `string`<a id="language-string"></a>

A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/captions/{language}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.captions.getByLanguage`<a id="apivideocaptionsgetbylanguage"></a>

Retrieve a caption for a video in a specific language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByLanguageResponse = await apivideo.captions.getByLanguage({
  videoId: "videoId_example",
  language: "language_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want captions for.

##### language: `string`<a id="language-string"></a>

A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).

#### 🔄 Return<a id="🔄-return"></a>

[Caption](./models/caption.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/captions/{language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.captions.listByVideoId`<a id="apivideocaptionslistbyvideoid"></a>

Retrieve a list of available captions by video id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByVideoIdResponse = await apivideo.captions.listByVideoId({
  videoId: "videoId_example",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to retrieve a list of captions for.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[CaptionsListResponse](./models/captions-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/captions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.captions.updateSettings`<a id="apivideocaptionsupdatesettings"></a>

Update caption settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSettingsResponse = await apivideo.captions.updateSettings({
  videoId: "videoId_example",
  language: "language_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to have automatic captions for.

##### language: `string`<a id="language-string"></a>

A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).

##### default: `boolean`<a id="default-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Caption](./models/caption.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/captions/{language}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.captions.uploadVttFile`<a id="apivideocaptionsuploadvttfile"></a>

Upload a VTT file to add captions to your video. More information can be found [here](https://docs.api.video/vod/add-captions)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadVttFileResponse = await apivideo.captions.uploadVttFile({
  videoId: "videoId_example",
  language: "language_example",
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to add a caption to.

##### language: `string`<a id="language-string"></a>

A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The video text track (VTT) you want to upload.

#### 🔄 Return<a id="🔄-return"></a>

[Caption](./models/caption.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/captions/{language}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.chapters.deleteChapterInLanguage`<a id="apivideochaptersdeletechapterinlanguage"></a>

Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChapterInLanguageResponse =
  await apivideo.chapters.deleteChapterInLanguage({
    videoId: "videoId_example",
    language: "language_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to delete a chapter from.

##### language: `string`<a id="language-string"></a>

A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/chapters/{language}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.chapters.getChapterByLanguage`<a id="apivideochaptersgetchapterbylanguage"></a>

Retrieve a chapter for by video id in a specific language. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChapterByLanguageResponse =
  await apivideo.chapters.getChapterByLanguage({
    videoId: "videoId_example",
    language: "language_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to show a chapter for.

##### language: `string`<a id="language-string"></a>

A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/chapters/{language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.chapters.listByVideo`<a id="apivideochapterslistbyvideo"></a>

Retrieve a list of all chapters for by video id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByVideoResponse = await apivideo.chapters.listByVideo({
  videoId: "videoId_example",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to retrieve a list of chapters for.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[ChaptersListResponse](./models/chapters-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/chapters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.chapters.uploadVttFile`<a id="apivideochaptersuploadvttfile"></a>

Upload a VTT file to add chapters to your video.
Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos/) for more details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadVttFileResponse = await apivideo.chapters.uploadVttFile({
  videoId: "videoId_example",
  language: "language_example",
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want to upload a chapter for.

##### language: `string`<a id="language-string"></a>

A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The VTT file describing the chapters you want to upload.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/chapters/{language}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.createLivestreamObject`<a id="apivideolivestreamscreatelivestreamobject"></a>

Creates a livestream object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLivestreamObjectResponse =
  await apivideo.liveStreams.createLivestreamObject({
    name: "My Live Stream Video",
    playerId: "pl4f4ferf5erfr5zed4fsdd",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Add a name for your live stream here.

##### public: `boolean`<a id="public-boolean"></a>

Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/delivery-analytics/video-privacy-access-management).

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player.

##### restreams: [`RestreamsRequestObject`](./models/restreams-request-object.ts)[]<a id="restreams-restreamsrequestobjectmodelsrestreams-request-objectts"></a>

Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStream](./models/live-stream.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.deleteLivestream`<a id="apivideolivestreamsdeletelivestream"></a>

If you do not need a live stream any longer, you can send a request to delete it. All you need is the liveStreamId.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteLivestreamResponse = await apivideo.liveStreams.deleteLivestream({
  liveStreamId: "liveStreamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveStreamId: `string`<a id="livestreamid-string"></a>

The unique ID for the live stream that you want to remove.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams/{liveStreamId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.deleteThumbnail`<a id="apivideolivestreamsdeletethumbnail"></a>

Send the unique identifier for a live stream to delete its thumbnail.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteThumbnailResponse = await apivideo.liveStreams.deleteThumbnail({
  liveStreamId: "liveStreamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveStreamId: `string`<a id="livestreamid-string"></a>

The unique identifier of the live stream whose thumbnail you want to delete.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStream](./models/live-stream.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams/{liveStreamId}/thumbnail` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.getLivestreamById`<a id="apivideolivestreamsgetlivestreambyid"></a>

Get a livestream by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivestreamByIdResponse = await apivideo.liveStreams.getLivestreamById({
  liveStreamId: "liveStreamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveStreamId: `string`<a id="livestreamid-string"></a>

The unique ID for the live stream you want to watch.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStream](./models/live-stream.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams/{liveStreamId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.listAll`<a id="apivideolivestreamslistall"></a>

Get the list of livestreams on the workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await apivideo.liveStreams.listAll({
  sortBy: "name",
  sortOrder: "asc",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### streamKey: `string`<a id="streamkey-string"></a>

The unique stream key that allows you to stream videos.

##### name: `string`<a id="name-string"></a>

You can filter live streams by their name or a part of their name.

##### sortBy: `'name' | 'createdAt' | 'updatedAt'`<a id="sortby-name--createdat--updatedat"></a>

Enables you to sort live stream results. Allowed attributes: `name`, `createdAt`, `updatedAt`. `name` - the name of the live stream. `createdAt` - the time a live stream was created. `updatedAt` - the time a live stream was last updated.  When using `createdAt` or `updatedAt`, the API sorts the results based on the ISO-8601 time format. 

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStreamListResponse](./models/live-stream-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.updateLivestreamObject`<a id="apivideolivestreamsupdatelivestreamobject"></a>

Updates the livestream object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLivestreamObjectResponse =
  await apivideo.liveStreams.updateLivestreamObject({
    liveStreamId: "liveStreamId_example",
    name: "My Live Stream Video",
    playerId: "pl45KFKdlddgk654dspkze",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveStreamId: `string`<a id="livestreamid-string"></a>

The unique ID for the live stream that you want to update information for such as player details.

##### name: `string`<a id="name-string"></a>

The name you want to use for your live stream.

##### public: `boolean`<a id="public-boolean"></a>

Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/delivery-analytics/video-privacy-access-management).

##### playerId: `string`<a id="playerid-string"></a>

The unique ID for the player associated with a live stream that you want to update.

##### restreams: [`RestreamsRequestObject`](./models/restreams-request-object.ts)[]<a id="restreams-restreamsrequestobjectmodelsrestreams-request-objectts"></a>

Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations. This operation updates all restream destinations in the same request. If you do not want to modify an existing restream destination, you need to include it in your request, otherwise it is removed.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStream](./models/live-stream.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams/{liveStreamId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.liveStreams.uploadThumbnail`<a id="apivideolivestreamsuploadthumbnail"></a>

Upload the thumbnail for the livestream.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadThumbnailResponse = await apivideo.liveStreams.uploadThumbnail({
  liveStreamId: "liveStreamId_example",
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveStreamId: `string`<a id="livestreamid-string"></a>

The unique ID for the live stream you want to upload.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.

#### 🔄 Return<a id="🔄-return"></a>

[LiveStream](./models/live-stream.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live-streams/{liveStreamId}/thumbnail` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.deletePlayer`<a id="apivideoplayerthemesdeleteplayer"></a>

Delete a player if you no longer need it. You can delete any player that you have the player ID for.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePlayerResponse = await apivideo.playerThemes.deletePlayer({
  playerId: "playerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player you want to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players/{playerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.getThemeByPlayerId`<a id="apivideoplayerthemesgetthemebyplayerid"></a>

Retreive a player theme by player id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getThemeByPlayerIdResponse =
  await apivideo.playerThemes.getThemeByPlayerId({
    playerId: "playerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player you want to retrieve. 

#### 🔄 Return<a id="🔄-return"></a>

[PlayerTheme](./models/player-theme.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players/{playerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.players`<a id="apivideoplayerthemesplayers"></a>

Retrieve a list of all the player themes you created, as well as details about each one.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const playersResponse = await apivideo.playerThemes.players({
  sortBy: "name",
  sortOrder: "asc",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `'name' | 'createdAt' | 'updatedAt'`<a id="sortby-name--createdat--updatedat"></a>

createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[PlayerThemesListResponse](./models/player-themes-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.players_0`<a id="apivideoplayerthemesplayers_0"></a>

Create a player for your video, and customise it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const players_0Response = await apivideo.playerThemes.players_0({
  name: "My nice theme",
  text: "rgba(255, 255, 255, .95)",
  link: "rgba(255, 0, 0, .95)",
  linkHover: "rgba(255, 255, 255, .75)",
  linkActive: "rgba(255, 0, 0, .75)",
  trackPlayed: "rgba(255, 255, 255, .95)",
  trackUnplayed: "rgba(255, 255, 255, .1)",
  trackBackground: "rgba(0, 0, 0, 0)",
  backgroundTop: "rgba(72, 4, 45, 1)",
  backgroundBottom: "rgba(94, 95, 89, 1)",
  backgroundText: "rgba(255, 255, 255, .95)",
  enableApi: true,
  enableControls: true,
  forceAutoplay: false,
  hideTitle: false,
  forceLoop: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Add a name for your player theme here.

##### text: `string`<a id="text-string"></a>

RGBA color for timer text. Default: rgba(255, 255, 255, 1)

##### link: `string`<a id="link-string"></a>

RGBA color for all controls. Default: rgba(255, 255, 255, 1)

##### linkHover: `string`<a id="linkhover-string"></a>

RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)

##### linkActive: `string`<a id="linkactive-string"></a>

RGBA color for the play button when hovered.

##### trackPlayed: `string`<a id="trackplayed-string"></a>

RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)

##### trackUnplayed: `string`<a id="trackunplayed-string"></a>

RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)

##### trackBackground: `string`<a id="trackbackground-string"></a>

RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)

##### backgroundTop: `string`<a id="backgroundtop-string"></a>

RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)

##### backgroundBottom: `string`<a id="backgroundbottom-string"></a>

RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)

##### backgroundText: `string`<a id="backgroundtext-string"></a>

RGBA color for title text. Default: rgba(255, 255, 255, 1)

##### enableApi: `boolean`<a id="enableapi-boolean"></a>

enable/disable player SDK access. Default: true

##### enableControls: `boolean`<a id="enablecontrols-boolean"></a>

enable/disable player controls. Default: true

##### forceAutoplay: `boolean`<a id="forceautoplay-boolean"></a>

enable/disable player autoplay. Default: false

##### hideTitle: `boolean`<a id="hidetitle-boolean"></a>

enable/disable title. Default: false

##### forceLoop: `boolean`<a id="forceloop-boolean"></a>

enable/disable looping. Default: false

#### 🔄 Return<a id="🔄-return"></a>

[PlayerTheme](./models/player-theme.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.removeLogo`<a id="apivideoplayerthemesremovelogo"></a>

Delete the logo associated to a player.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLogoResponse = await apivideo.playerThemes.removeLogo({
  playerId: "playerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players/{playerId}/logo` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.updatePlayerDetails`<a id="apivideoplayerthemesupdateplayerdetails"></a>

Use a player ID to update specific details for a player. 
NOTE: It may take up to 10 min before the new player configuration is available from our CDN.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePlayerDetailsResponse =
  await apivideo.playerThemes.updatePlayerDetails({
    playerId: "playerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player.

##### name: `string`<a id="name-string"></a>

Add a name for your player theme here.

##### text: `string`<a id="text-string"></a>

RGBA color for timer text. Default: rgba(255, 255, 255, 1)

##### link: `string`<a id="link-string"></a>

RGBA color for all controls. Default: rgba(255, 255, 255, 1)

##### linkHover: `string`<a id="linkhover-string"></a>

RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)

##### linkActive: `string`<a id="linkactive-string"></a>

RGBA color for the play button when hovered.

##### trackPlayed: `string`<a id="trackplayed-string"></a>

RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)

##### trackUnplayed: `string`<a id="trackunplayed-string"></a>

RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)

##### trackBackground: `string`<a id="trackbackground-string"></a>

RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)

##### backgroundTop: `string`<a id="backgroundtop-string"></a>

RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)

##### backgroundBottom: `string`<a id="backgroundbottom-string"></a>

RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)

##### backgroundText: `string`<a id="backgroundtext-string"></a>

RGBA color for title text. Default: rgba(255, 255, 255, 1)

##### enableApi: `boolean`<a id="enableapi-boolean"></a>

enable/disable player SDK access. Default: true

##### enableControls: `boolean`<a id="enablecontrols-boolean"></a>

enable/disable player controls. Default: true

##### forceAutoplay: `boolean`<a id="forceautoplay-boolean"></a>

enable/disable player autoplay. Default: false

##### hideTitle: `boolean`<a id="hidetitle-boolean"></a>

enable/disable title. Default: false

##### forceLoop: `boolean`<a id="forceloop-boolean"></a>

enable/disable looping. Default: false

#### 🔄 Return<a id="🔄-return"></a>

[PlayerTheme](./models/player-theme.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players/{playerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.playerThemes.uploadLogo`<a id="apivideoplayerthemesuploadlogo"></a>

Upload an image file as a logo for your player. The image should fit within these constraints:
- The image mime type must be `image/jpeg` or `image/png`. api.video recommends using `png` images with transparent background.
- The image size should be a maximum of 200px width x 100px.
- The file size should be a maximum of 100 KiB.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadLogoResponse = await apivideo.playerThemes.uploadLogo({
  playerId: "playerId_example",
  file: "mylogo.jpg",
  link: "https://my-company.com",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playerId: `string`<a id="playerid-string"></a>

The unique identifier for the player.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The name of the file you want to use for your logo.

##### link: `string`<a id="link-string"></a>

A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.

#### 🔄 Return<a id="🔄-return"></a>

[PlayerTheme](./models/player-theme.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/players/{playerId}/logo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.uploadTokens.deleteToken`<a id="apivideouploadtokensdeletetoken"></a>

Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTokenResponse = await apivideo.uploadTokens.deleteToken({
  uploadToken: "uploadToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadToken: `string`<a id="uploadtoken-string"></a>

The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload-tokens/{uploadToken}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.uploadTokens.generateToken`<a id="apivideouploadtokensgeneratetoken"></a>

Generates an upload token that can be used to replace the API Key. More information can be found [here](https://docs.api.video/vod/delegated-upload-tokens)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateTokenResponse = await apivideo.uploadTokens.generateToken({
  ttl: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ttl: `number`<a id="ttl-number"></a>

Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.

#### 🔄 Return<a id="🔄-return"></a>

[UploadToken](./models/upload-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload-tokens` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.uploadTokens.getDetails`<a id="apivideouploadtokensgetdetails"></a>

Retrieve details about a specific upload token by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await apivideo.uploadTokens.getDetails({
  uploadToken: "uploadToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadToken: `string`<a id="uploadtoken-string"></a>

The unique identifier for the token you want information about.

#### 🔄 Return<a id="🔄-return"></a>

[UploadToken](./models/upload-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload-tokens/{uploadToken}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.uploadTokens.listActiveDelegatedTokens`<a id="apivideouploadtokenslistactivedelegatedtokens"></a>

Retrieve a list of all currently active delegated tokens.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActiveDelegatedTokensResponse =
  await apivideo.uploadTokens.listActiveDelegatedTokens({
    sortBy: "createdAt",
    sortOrder: "asc",
    currentPage: 1,
    pageSize: 25,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `'createdAt' | 'ttl'`<a id="sortby-createdat--ttl"></a>

Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[TokenListResponse](./models/token-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload-tokens` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.createObject`<a id="apivideovideoscreateobject"></a>

Creates a video object. More information on video objects can be found [here](https://docs.api.video/reference/api/Videos).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createObjectResponse = await apivideo.videos.createObject({
  tags: ['["maths", "string theory", "video"]'],
  title: "Maths video",
  description: "A video about string theory.",
  source: "https://www.myvideo.url.com/video.mp4 OR vi4k0jvEUuaTdRAEjQ4JfOyl",
  _public: true,
  panoramic: false,
  mp4Support: true,
  playerId: "pl45KFKdlddgk654dspkze",
  metadata: [
    {
      key: "Color",
      value: "Green",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of your new video.

##### tags: `string`[]<a id="tags-string"></a>

A list of tags you want to use to describe your video.

##### description: `string`<a id="description-string"></a>

A brief description of your video.

##### source: `string`<a id="source-string"></a>

You can either add a video already on the web, by entering the URL of the video, or you can also enter the `videoId` of one of the videos you already have on your api.video acccount, and this will generate a copy of your video. Creating a copy of a video can be especially useful if you want to keep your original video and trim or apply a watermark onto the copy you would create.

##### public: `boolean`<a id="public-boolean"></a>

Default: True. If set to `false` the video will become private. More information on private videos can be found [here](https://docs.api.video/delivery-analytics/video-privacy-access-management)

##### panoramic: `boolean`<a id="panoramic-boolean"></a>

Indicates if your video is a 360/immersive video.

##### mp4Support: `boolean`<a id="mp4support-boolean"></a>

Enables mp4 version in addition to streamed version.

##### playerId: `string`<a id="playerid-string"></a>

The unique identification number for your video player.

##### metadata: [`Metadata`](./models/metadata.ts)[]<a id="metadata-metadatamodelsmetadatats"></a>

A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata/).

##### clip: [`VideoClip`](./models/video-clip.ts)<a id="clip-videoclipmodelsvideo-clipts"></a>

##### watermark: [`VideoWatermark`](./models/video-watermark.ts)<a id="watermark-videowatermarkmodelsvideo-watermarkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.deleteVideoObject`<a id="apivideovideosdeletevideoobject"></a>

Delete a video object by video ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVideoObjectResponse = await apivideo.videos.deleteVideoObject({
  videoId: "videoId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The video ID for the video you want to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.getVideoObject`<a id="apivideovideosgetvideoobject"></a>

Retrieve the video details by video id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideoObjectResponse = await apivideo.videos.getVideoObject({
  videoId: "videoId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want details about.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.getVideoStatusAndDetails`<a id="apivideovideosgetvideostatusanddetails"></a>

Retrieve upload status and encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideoStatusAndDetailsResponse =
  await apivideo.videos.getVideoStatusAndDetails({
    videoId: "videoId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The unique identifier for the video you want the status for.

#### 🔄 Return<a id="🔄-return"></a>

[VideoStatus](./models/video-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.ingestVideoFromSource`<a id="apivideovideosingestvideofromsource"></a>

Ingest a video from a source or file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ingestVideoFromSourceResponse =
  await apivideo.videos.ingestVideoFromSource({
    videoId: "videoId_example",
    file: "@/path/to/video.mp4",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

Enter the videoId you want to use to upload your video.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\"/videos\\\" endpoint and add the \\\"source\\\" parameter when you create a new video.

##### ContentRange: `string`<a id="contentrange-string"></a>

`part <part>/<total_parts>` ; `bytes <from_byte>-<to_byte>/<total_bytes>`

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/source` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.listAllObjects`<a id="apivideovideoslistallobjects"></a>

List all the video objects that are associated with the current workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllObjectsResponse = await apivideo.videos.listAllObjects({
  sortBy: "title",
  sortOrder: "asc",
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.

##### tags: `string`[]<a id="tags-string"></a>

A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.

##### metadata: Record<string, Record<string, `string`><a id="metadata-record"></a>
                               `{ [key: string]: string; }`>

Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata/) allows you to define a key that allows any value pair.

##### description: `string`<a id="description-string"></a>

Retrieve video objects by `description`.

##### liveStreamId: `string`<a id="livestreamid-string"></a>

Retrieve video objects that were recorded from a live stream by `liveStreamId`.

##### sortBy: `'title' | 'createdAt' | 'publishedAt' | 'updatedAt'`<a id="sortby-title--createdat--publishedat--updatedat"></a>

Use this parameter to sort videos by the their created time, published time, updated time, or by title.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Use this parameter to sort results. `asc` is ascending and sorts from A to Z. `desc` is descending and sorts from Z to A.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[VideosListResponse](./models/videos-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.setThumbnailFromInterval`<a id="apivideovideossetthumbnailfrominterval"></a>

Set a thumbnail from a specific time interval within a video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setThumbnailFromIntervalResponse =
  await apivideo.videos.setThumbnailFromInterval({
    videoId: "videoId_example",
    timecode: "0.0",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timecode: `string`<a id="timecode-string"></a>

Frame in video to be used as a placeholder before the video plays.  Example: \\\'\\\"00:01:00.000\\\" for 1 minute into the video.\\\' Valid Patterns:  \\\"hh:mm:ss.ms\\\" \\\"hh:mm:ss:frameNumber\\\" \\\"124\\\" (integer value is reported as seconds)  If selection is out of range, \\\"00:00:00.00\\\" will be chosen.

##### videoId: `string`<a id="videoid-string"></a>

Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/thumbnail` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.updateVideoObjectParameters`<a id="apivideovideosupdatevideoobjectparameters"></a>

Update the parameters associated with a video ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVideoObjectParametersResponse =
  await apivideo.videos.updateVideoObjectParameters({
    videoId: "videoId_example",
    tags: ['["maths", "string theory", "video"]'],
    title: "String theory",
    description: "A film about good books.",
    playerId: "pl4k0jvEUuaTdRAEjQ4Jfrgz",
    _public: true,
    panoramic: false,
    mp4Support: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

The video ID for the video you want to update.

##### tags: `string`[]<a id="tags-string"></a>

A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.

##### title: `string`<a id="title-string"></a>

The title you want to use for your video.

##### description: `string`<a id="description-string"></a>

A brief description of the video.

##### playerId: `string`<a id="playerid-string"></a>

The unique ID for the player you want to associate with your video.

##### public: `boolean`<a id="public-boolean"></a>

Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos/).

##### panoramic: `boolean`<a id="panoramic-boolean"></a>

Whether the video is a 360 degree or immersive video.

##### mp4Support: `boolean`<a id="mp4support-boolean"></a>

Whether the player supports the mp4 format.

##### metadata: [`Metadata`](./models/metadata.ts)[]<a id="metadata-metadatamodelsmetadatats"></a>

A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata/) allows you to define a key that allows any value pair.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.upload`<a id="apivideovideosupload"></a>

Uploading a video with the delegated upload token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadResponse = await apivideo.videos.upload({
  token: "token_example",
  file: "path/to/video/video.mp4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### token: `string`<a id="token-string"></a>

The unique identifier for the token you want to use to upload a video.

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The path to the video you want to upload.

##### ContentRange: `string`<a id="contentrange-string"></a>

Content-Range represents the range of bytes that will be returned as a result of the request. Byte ranges are inclusive, meaning that bytes 0-999 represents the first 1000 bytes in a file or object.

##### videoId: `string`<a id="videoid-string"></a>

The video id returned by the first call to this endpoint in a large video upload scenario.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.videos.uploadThumbnail`<a id="apivideovideosuploadthumbnail"></a>

Upload a thumbnail for a certain video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadThumbnailResponse = await apivideo.videos.uploadThumbnail({
  videoId: "videoId_example",
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

Unique identifier of the chosen video 

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{videoId}/thumbnail` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.watermarks.listAll`<a id="apivideowatermarkslistall"></a>

List all watermarks associated with your workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await apivideo.watermarks.listAll({
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `string`<a id="sortby-string"></a>

Allowed: createdAt. You can search by the time watermark were created at.

##### sortOrder: `string`<a id="sortorder-string"></a>

Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[WatermarksListResponse](./models/watermarks-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/watermarks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.watermarks.watermark`<a id="apivideowatermarkswatermark"></a>

Create a new watermark by uploading a `JPG` or a `PNG` image.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const watermarkResponse = await apivideo.watermarks.watermark({
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The `.jpg` or `.png` image to be added as a watermark.

#### 🔄 Return<a id="🔄-return"></a>

[Watermark](./models/watermark.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/watermarks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.watermarks.watermark_0`<a id="apivideowatermarkswatermark_0"></a>

Delete a watermark.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const watermark_0Response = await apivideo.watermarks.watermark_0({
  watermarkId: "watermarkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### watermarkId: `string`<a id="watermarkid-string"></a>

The watermark ID for the watermark you want to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/watermarks/{watermarkId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.webhooks.createWebhookEvent`<a id="apivideowebhookscreatewebhookevent"></a>

Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 
* ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ "type": "video.encoding.quality.completed", "emittedAt": "2021-01-29T16:46:25.217+01:00", "videoId": "viXXXXXXXX", "encoding": "hls", "quality": "720p"} ```. This request says that the 720p HLS encoding was completed.
* ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
* ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting.
* ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebhookEventResponse = await apivideo.webhooks.createWebhookEvent({
  events: ["video.encoding.quality.completed"],
  url: "https://example.com/webhooks",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### events: `string`[]<a id="events-string"></a>

A list of the webhooks that you are subscribing to. There are Currently four webhook options: * ```video.encoding.quality.completed```  Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \\\\\\\"type\\\\\\\": \\\\\\\"video.encoding.quality.completed\\\\\\\", \\\\\\\"emittedAt\\\\\\\": \\\\\\\"2021-01-29T16:46:25.217+01:00\\\\\\\", \\\\\\\"videoId\\\\\\\": \\\\\\\"viXXXXXXXX\\\\\\\", \\\\\\\"encoding\\\\\\\": \\\\\\\"hls\\\\\\\", \\\\\\\"quality\\\\\\\": \\\\\\\"720p\\\\\\\"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when a live stream has finished broadcasting. * ```video.source.recorded```  Occurs when a live stream is recorded and submitted for encoding.

##### url: `string`<a id="url-string"></a>

The the url to which HTTP notifications are sent. It could be any http or https URL.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.webhooks.deleteWebhook`<a id="apivideowebhooksdeletewebhook"></a>

This endpoint will delete the indicated webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookResponse = await apivideo.webhooks.deleteWebhook({
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

The webhook you wish to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhookId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.webhooks.getDetailsById`<a id="apivideowebhooksgetdetailsbyid"></a>

Retrieve webhook details by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByIdResponse = await apivideo.webhooks.getDetailsById({
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

The unique webhook you wish to retreive details on.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhookId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `apivideo.webhooks.listAll`<a id="apivideowebhookslistall"></a>

Retrieve a list of all webhooks configured for the current workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await apivideo.webhooks.listAll({
  currentPage: 1,
  pageSize: 25,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### events: `string`<a id="events-string"></a>

The webhook event that you wish to filter on.

##### currentPage: `number`<a id="currentpage-number"></a>

Choose the number of search results to return per page. Minimum value: 1

##### pageSize: `number`<a id="pagesize-number"></a>

Results per page. Allowed values 1-100, default is 25.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListResponse](./models/webhooks-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
