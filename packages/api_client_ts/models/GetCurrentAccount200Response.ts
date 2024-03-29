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

import { exists, mapValues } from '../runtime';
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './Account';

/**
 * 
 * @export
 * @interface GetCurrentAccount200Response
 */
export interface GetCurrentAccount200Response {
    /**
     * 
     * @type {Account}
     * @memberof GetCurrentAccount200Response
     */
    account?: Account;
}

/**
 * Check if a given object implements the GetCurrentAccount200Response interface.
 */
export function instanceOfGetCurrentAccount200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCurrentAccount200ResponseFromJSON(json: any): GetCurrentAccount200Response {
    return GetCurrentAccount200ResponseFromJSONTyped(json, false);
}

export function GetCurrentAccount200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCurrentAccount200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : AccountFromJSON(json['account']),
    };
}

export function GetCurrentAccount200ResponseToJSON(value?: GetCurrentAccount200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': AccountToJSON(value.account),
    };
}

