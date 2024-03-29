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
import type { Club } from './Club';
import {
    ClubFromJSON,
    ClubFromJSONTyped,
    ClubToJSON,
} from './Club';

/**
 * 
 * @export
 * @interface GetSubscribingClubs200Response
 */
export interface GetSubscribingClubs200Response {
    /**
     * 
     * @type {Array<Club>}
     * @memberof GetSubscribingClubs200Response
     */
    clubs: Array<Club>;
}

/**
 * Check if a given object implements the GetSubscribingClubs200Response interface.
 */
export function instanceOfGetSubscribingClubs200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clubs" in value;

    return isInstance;
}

export function GetSubscribingClubs200ResponseFromJSON(json: any): GetSubscribingClubs200Response {
    return GetSubscribingClubs200ResponseFromJSONTyped(json, false);
}

export function GetSubscribingClubs200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSubscribingClubs200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clubs': ((json['clubs'] as Array<any>).map(ClubFromJSON)),
    };
}

export function GetSubscribingClubs200ResponseToJSON(value?: GetSubscribingClubs200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clubs': ((value.clubs as Array<any>).map(ClubToJSON)),
    };
}

