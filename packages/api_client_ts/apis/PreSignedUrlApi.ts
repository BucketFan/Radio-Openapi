/* tslint:disable */
/* eslint-disable */
/**
 * radio_openapi
 * radio_openapi
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@anycloud.co.jp
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PostPublishPreSignedUrl200Response,
  PostPublishPreSignedUrlRequest,
} from '../models';
import {
    PostPublishPreSignedUrl200ResponseFromJSON,
    PostPublishPreSignedUrl200ResponseToJSON,
    PostPublishPreSignedUrlRequestFromJSON,
    PostPublishPreSignedUrlRequestToJSON,
} from '../models';

export interface PostPublishPreSignedUrlOperationRequest {
    postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest;
}

/**
 * PreSignedUrlApi - interface
 * 
 * @export
 * @interface PreSignedUrlApiInterface
 */
export interface PreSignedUrlApiInterface {
    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * @summary Publish pre-signed URL
     * @param {PostPublishPreSignedUrlRequest} [postPublishPreSignedUrlRequest] contentTypeは無くても良いといえば良いのですが、s3に登録する際のmetadataとして登録します。   例： https://fanclove-radio.s3.ap-northeast-1.amazonaws.com/media/1(clubId)/abc.mp3(fileName)?X-Amz-Algorithm&#x3D;AWS4-HMAC-SHA256&amp;X-Amz-Credential&#x3D;AKIAJTLX7NCWRPA2NHBA%2F20220708%2Fap-northeast-1%2Fs3%2Faws4_request&amp;X-Amz-Date&#x3D;20220708T140416Z&amp;X-Amz-Expires&#x3D;86400&amp;X-Amz-SignedHeaders&#x3D;host&amp;x-id&#x3D;PutObject&amp;X-Amz-Signature&#x3D;28d152cf695759fb6a6b86fe858c9ecafd8da298025b24481e2f69b7c153d198
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreSignedUrlApiInterface
     */
    postPublishPreSignedUrlRaw(requestParameters: PostPublishPreSignedUrlOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostPublishPreSignedUrl200Response>>;

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    postPublishPreSignedUrl(postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostPublishPreSignedUrl200Response>;

}

/**
 * 
 */
export class PreSignedUrlApi extends runtime.BaseAPI implements PreSignedUrlApiInterface {

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    async postPublishPreSignedUrlRaw(requestParameters: PostPublishPreSignedUrlOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostPublishPreSignedUrl200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/pre_signed_url`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostPublishPreSignedUrlRequestToJSON(requestParameters.postPublishPreSignedUrlRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostPublishPreSignedUrl200ResponseFromJSON(jsonValue));
    }

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    async postPublishPreSignedUrl(postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostPublishPreSignedUrl200Response> {
        const response = await this.postPublishPreSignedUrlRaw({ postPublishPreSignedUrlRequest: postPublishPreSignedUrlRequest }, initOverrides);
        return await response.value();
    }

}
