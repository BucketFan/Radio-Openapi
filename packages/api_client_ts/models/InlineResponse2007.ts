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
import {
    Club,
    ClubFromJSON,
    ClubFromJSONTyped,
    ClubToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    /**
     * 
     * @type {Club}
     * @memberof InlineResponse2007
     */
    club: Club;
}

export function InlineResponse2007FromJSON(json: any): InlineResponse2007 {
    return InlineResponse2007FromJSONTyped(json, false);
}

export function InlineResponse2007FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2007 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'club': ClubFromJSON(json['club']),
    };
}

export function InlineResponse2007ToJSON(value?: InlineResponse2007 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'club': ClubToJSON(value.club),
    };
}

