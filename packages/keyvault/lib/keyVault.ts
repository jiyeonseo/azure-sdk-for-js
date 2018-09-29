/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

'use strict';

import { WebResource, RestError, stripRequest, generateUuid, stripResponse, HttpHeaders, HttpOperationResponse, ServiceClient } from "ms-rest-js";
import { KeyVaultCredentials } from "./keyVaultCredentials";

const models = require('./models');

/** Identifier of the resource on which Key Vault users and service principals must authenticate.
 */
exports.RESOURCE_ID = 'https://vault.azure.net';

// The internal client is too low level, so we wrap it instead of exposing it directly.
import { KeyVaultClient as KeyVaultClientBase } from "./keyVaultClient"

/**
 * @class
 * Initializes a new instance of the KeyVaultClient class.
 * @constructor
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
export class KeyVaultClient extends KeyVaultClientBase {
    private _serviceClient: ServiceClient;

    constructor(credentials: any, options: any) {
        // convert credentials to KeyVaultCredentials if needed
        let keyVaultCredentials = credentials;
        if (!(_isKeyVaultCredentials(credentials))) {
            keyVaultCredentials = new KeyVaultCredentials(credentials);
        }

        // ServiceClient constructor adds filter to the pipeline
        super(keyVaultCredentials, options);
        this._serviceClient = new ServiceClient(keyVaultCredentials);
    }

    /**
     * Gets the certificate operation response.
     *
     * @param {string} vaultBaseUrl The vault name, e.g.
     * https://myvault.vault.azure.net
     *
     * @param {string} certificateName The name of the certificate
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CertificateListResult>} - The deserialized result object.
     *
     * @reject {Error} - The error object.
     */
    getPendingCertificateSigningRequestWithHttpOperationResponse(vaultBaseUrl: string, certificateName: string, options: any) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._getPendingCertificateSigningRequest(vaultBaseUrl, certificateName, options, (err?: Error, result?: any, request?: WebResource, response?: any) => {
                let httpOperationResponse: HttpOperationResponse = new HttpOperationResponse(request, response);
                httpOperationResponse.bodyAsText = result;
                if (err) { reject(err); }
                else { resolve(httpOperationResponse); }
                return;
            });
        });
    }

    /**
     * Gets the certificate operation response.
     *
     * @param {string} vaultBaseUrl The vault name, e.g.
     * https://myvault.vault.azure.net
     *
     * @param {string} certificateName The name of the certificate
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {function} [optionalCallback] - The optional callback.
     *
     * @returns {function|Promise} If a callback was passed as the last parameter
     * then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned
     *
     *                      @resolve {CertificateOperation} - The deserialized result object.
     *
     *                      @reject {Error} - The error object.
     *
     * {function} optionalCallback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CertificateOperation} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    getPendingCertificateSigningRequest(vaultBaseUrl: string, certificateName: string, options: any, optionalCallback?: (err?: Error, result?: any, request?: WebResource, response?: any) => void) {
        if (!optionalCallback && typeof options === 'function') {
            optionalCallback = options;
            options = null;
        }
        if (!optionalCallback) {
            return new Promise((resolve, reject) => {
                this._getPendingCertificateSigningRequest(vaultBaseUrl, certificateName, options, (err?: Error, result?: any, request?: WebResource, response?: any) => {
                    if (err) { reject(err); }
                    else { resolve(result); }
                    return;
                });
            });
        } else {
            return this._getPendingCertificateSigningRequest(vaultBaseUrl, certificateName, options, optionalCallback);
        }
    }

    /**
     * Gets the certificate operation response.
     *
     * @param {string} vaultBaseUrl The vault name, e.g.
     * https://myvault.vault.azure.net
     *
     * @param {string} certificateName The name of the certificate
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {function} callback
     *
     * @returns {function} callback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object.
     *                      See {@link CertificateOperation} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    private _getPendingCertificateSigningRequest(vaultBaseUrl: string, certificateName: string, options: any, callback: (err?: Error, result?: any, request?: WebResource, response?: any) => void) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = null;
        }
        if (!callback) {
            throw new Error('callback cannot be null.');
        }
        // Validate
        try {
            if (vaultBaseUrl === null || vaultBaseUrl === undefined || typeof vaultBaseUrl.valueOf() !== 'string') {
                throw new Error('vaultBaseUrl cannot be null or undefined and it must be of type string.');
            }
            if (certificateName === null || certificateName === undefined || typeof certificateName.valueOf() !== 'string') {
                throw new Error('certificateName cannot be null or undefined and it must be of type string.');
            }
            if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
                throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
            }
            if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
                throw new Error('this.acceptLanguage must be of type string.');
            }
        } catch (error) {
            return callback(error);
        }

        // Construct URL
        let requestUrl = this.baseUri +
            '//certificates/{certificate-name}/pending';
        requestUrl = requestUrl.replace('{vaultBaseUrl}', vaultBaseUrl);
        requestUrl = requestUrl.replace('{certificate-name}', encodeURIComponent(certificateName));
        let queryParameters = [];
        queryParameters.push('api-version=' + encodeURIComponent(this.apiVersion));
        if (queryParameters.length > 0) {
            requestUrl += '?' + queryParameters.join('&');
        }
        // trim all duplicate forward slashes in the url
        let regex = /([^:]\/)\/+/gi;
        requestUrl = requestUrl.replace(regex, '$1');

        // Create HTTP transport objects
        let httpRequest = new WebResource();
        httpRequest.method = 'GET';
        httpRequest.headers = new HttpHeaders();
        httpRequest.url = requestUrl;
        // Set Headers
        if (this.generateClientRequestId) {
            httpRequest.headers.set('x-ms-client-request-id', generateUuid());
        }
        if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
            httpRequest.headers.set('accept-language', this.acceptLanguage);
        }
        if (options) {
            for (let headerName in options['customHeaders']) {
                if (options['customHeaders'].hasOwnProperty(headerName)) {
                    httpRequest.headers.set(headerName, options['customHeaders'][headerName]);
                }
            }
        }
        httpRequest.headers.set('Content-Type', 'application/json; charset=utf-8');
        httpRequest.headers.set('Accept', 'application/pkcs10');
        httpRequest.body = null;

        this._serviceClient.sendRequest(httpRequest).then(response => {
            if (response.status !== 200) {
                const error = parseErrorFromResponse(httpRequest, response);
                return callback(error);
            }

            const result = response.bodyAsText === "" ? response.bodyAsText : undefined;
            return callback(undefined, result, httpRequest, response);

        }).catch(err => callback(err));
    }
}

export function parseErrorFromResponse(request: WebResource,response: HttpOperationResponse): RestError {
    const responseBody = response.bodyAsText;

    let error = new RestError(responseBody!);
    error.statusCode = response.status;
    error.request = stripRequest(request);
    error.response = stripResponse(response);

    if (!responseBody || responseBody === "") {
        return error;
    }

    let parsedErrorResponse;
    try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            //let resultMapper = new this.models['KeyVaultError']().mapper();
            //let resultMapper = new Mapper()
            //error.body = this.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
    } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
            `- "${responseBody}" for the default response.`;
    }

    return error;
}

/**
 * @private
 *
 * It is possible for multiple instances of msRestAzure to exist. This method adds a backup check in case "instanceof" returns false.
 *
 * @param {object} credentials
 */
function _isKeyVaultCredentials(credentials: any) {
    return credentials instanceof KeyVaultCredentials || KeyVaultCredentials.name === credentials.constructor.name;
}

/**
 * Creates a new {@linkcode KeyVaultClient} object.
 *
 * @param {object} [credentials]     The credentials, typically a {@linkcode KeyVaultCredentials} object. If null, an authentication filter must be provided.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
export function createKeyVaultClient(credentials: any, options: any) {
    return new module.exports.KeyVaultClient(credentials, options);
};