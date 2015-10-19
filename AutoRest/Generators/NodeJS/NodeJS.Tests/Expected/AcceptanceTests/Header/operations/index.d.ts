/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.11.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { RequestOptions, WebResource } from "ms-rest";
import * as stream from "stream";
import * as models from "../models";


/**
 * @class
 * Header
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestSwaggerBATHeaderService.
 */
export interface Header {

    /**
     * Send a post request with header value "User-Agent": "overwrite"
     *
     * @param {string} userAgent Send a post request with header value
     * "User-Agent": "overwrite"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramExistingKey(userAgent: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "User-Agent": "overwrite"
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseExistingKey(options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header value "Content-Type": "text/html"
     *
     * @param {string} contentType Send a post request with header value
     * "Content-Type": "text/html"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramProtectedKey(contentType: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "Content-Type": "text/html"
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseProtectedKey(options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "positive", "value": 1
     * or "scenario": "negative", "value": -2
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {number} value Send a post request with header values 1 or -2
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramInteger(scenario: string, value: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "value": 1 or -2
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseInteger(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "positive", "value": 105
     * or "scenario": "negative", "value": -2
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {number} value Send a post request with header values 105 or -2
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramLong(scenario: string, value: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "value": 105 or -2
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseLong(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "positive", "value":
     * 0.07 or "scenario": "negative", "value": -3.0
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {number} value Send a post request with header values 0.07 or -3.0
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramFloat(scenario: string, value: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "value": 0.07 or -3.0
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseFloat(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "positive", "value":
     * 7e120 or "scenario": "negative", "value": -3.0
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {number} value Send a post request with header values 7e120 or -3.0
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramDouble(scenario: string, value: number, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "value": 7e120 or -3.0
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "positive" or "negative"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseDouble(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "true", "value": true or
     * "scenario": "false", "value": false
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "true" or "false"
     * 
     * @param {boolean} value Send a post request with header values true or false
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramBool(scenario: string, value: boolean, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header value "value": true or false
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "true" or "false"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseBool(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value": "The
     * quick brown fox jumps over the lazy dog" or "scenario": "null", "value":
     * null or "scenario": "empty", "value": ""
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "null" or "empty"
     * 
     * @param {string} [value] Send a post request with header values "The quick
     * brown fox jumps over the lazy dog" or null or ""
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramString(scenario: string, value: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "The quick brown fox jumps over the lazy
     * dog" or null or ""
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "null" or "empty"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseString(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value":
     * "2010-01-01" or "scenario": "min", "value": "0001-01-01"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {date} value Send a post request with header values "2010-01-01" or
     * "0001-01-01"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramDate(scenario: string, value: Date, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "2010-01-01" or "0001-01-01"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseDate(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value":
     * "2010-01-01T12:34:56Z" or "scenario": "min", "value":
     * "0001-01-01T00:00:00Z"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {date} value Send a post request with header values
     * "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramDatetime(scenario: string, value: Date, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "2010-01-01T12:34:56Z" or
     * "0001-01-01T00:00:00Z"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseDatetime(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value": "Wed,
     * 01 Jan 2010 12:34:56 GMT" or "scenario": "min", "value": "Mon, 01 Jan 0001
     * 00:00:00 GMT"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {date} [value] Send a post request with header values "Wed, 01 Jan
     * 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramDatetimeRfc1123(scenario: string, value: Date, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon,
     * 01 Jan 0001 00:00:00 GMT"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "min"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseDatetimeRfc1123(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value":
     * "P123DT22H14M12.011S"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid"
     * 
     * @param {moment.duration} value Send a post request with header values
     * "P123DT22H14M12.011S"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramDuration(scenario: string, value: moment.Duration, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "P123DT22H14M12.011S"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseDuration(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value":
     * "啊齄丂狛狜隣郎隣兀﨩"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid"
     * 
     * @param {buffer} value Send a post request with header values "啊齄丂狛狜隣郎隣兀﨩"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramByte(scenario: string, value: Buffer, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "啊齄丂狛狜隣郎隣兀﨩"
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseByte(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send a post request with header values "scenario": "valid", "value": "GREY"
     * or "scenario": "null", "value": null
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "null" or "empty"
     * 
     * @param {string} [value] Send a post request with header values 'GREY' .
     * Possible values for this parameter include: 'White', 'black', 'GREY'
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    paramEnum(scenario: string, value: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Get a response with header values "GREY" or null
     *
     * @param {string} scenario Send a post request with header values "scenario":
     * "valid" or "null" or "empty"
     * 
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    responseEnum(scenario: string, options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;

    /**
     * Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
     * header of the request
     *
     * @param {object} [options]
     *
     * @param {object} [options.customHeaders] headers that will be added to
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    customRequestId(options: RequestOptions, callback: (err: Error, result: void, request: WebResource, response: stream.Readable) => void): void;
}
