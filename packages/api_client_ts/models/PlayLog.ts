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
import type { Chapter } from './Chapter';
import {
    ChapterFromJSON,
    ChapterFromJSONTyped,
    ChapterToJSON,
} from './Chapter';
import type { Program } from './Program';
import {
    ProgramFromJSON,
    ProgramFromJSONTyped,
    ProgramToJSON,
} from './Program';

/**
 * 
 * @export
 * @interface PlayLog
 */
export interface PlayLog {
    /**
     * 
     * @type {number}
     * @memberof PlayLog
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof PlayLog
     */
    programId: number;
    /**
     * 
     * @type {number}
     * @memberof PlayLog
     */
    chapterId: number;
    /**
     * 
     * @type {number}
     * @memberof PlayLog
     */
    accountId: number;
    /**
     * 
     * @type {number}
     * @memberof PlayLog
     */
    elapsedSeconds: number;
    /**
     * 
     * @type {Date}
     * @memberof PlayLog
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof PlayLog
     */
    updatedAt: Date;
    /**
     * 
     * @type {Chapter}
     * @memberof PlayLog
     */
    chapter: Chapter;
    /**
     * 
     * @type {Program}
     * @memberof PlayLog
     */
    program: Program;
}

/**
 * Check if a given object implements the PlayLog interface.
 */
export function instanceOfPlayLog(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "programId" in value;
    isInstance = isInstance && "chapterId" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "elapsedSeconds" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "chapter" in value;
    isInstance = isInstance && "program" in value;

    return isInstance;
}

export function PlayLogFromJSON(json: any): PlayLog {
    return PlayLogFromJSONTyped(json, false);
}

export function PlayLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'programId': json['programId'],
        'chapterId': json['chapterId'],
        'accountId': json['accountId'],
        'elapsedSeconds': json['elapsedSeconds'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'chapter': ChapterFromJSON(json['chapter']),
        'program': ProgramFromJSON(json['program']),
    };
}

export function PlayLogToJSON(value?: PlayLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'programId': value.programId,
        'chapterId': value.chapterId,
        'accountId': value.accountId,
        'elapsedSeconds': value.elapsedSeconds,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'chapter': ChapterToJSON(value.chapter),
        'program': ProgramToJSON(value.program),
    };
}

