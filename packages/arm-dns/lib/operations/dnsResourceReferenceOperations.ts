/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/dnsResourceReferenceOperationsMappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClientContext } from "../dnsManagementClientContext";

/** Class representing a DnsResourceReferenceOperations. */
export class DnsResourceReferenceOperations {
  private readonly client: DnsManagementClientContext;

  /**
   * Create a DnsResourceReferenceOperations.
   * @param {DnsManagementClientContext} client Reference to the service client.
   */
  constructor(client: DnsManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the DNS records specified by the referencing targetResourceIds.
   *
   * @param {DnsResourceReferenceRequest} parameters Properties for dns resource reference request.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getByTargetResources(parameters: Models.DnsResourceReferenceRequest): Promise<Models.DnsResourceReferenceGetByTargetResourcesResponse>;
  getByTargetResources(parameters: Models.DnsResourceReferenceRequest, options: msRest.RequestOptionsBase): Promise<Models.DnsResourceReferenceGetByTargetResourcesResponse>;
  getByTargetResources(parameters: Models.DnsResourceReferenceRequest, callback: msRest.ServiceCallback<Models.DnsResourceReferenceResult>): void;
  getByTargetResources(parameters: Models.DnsResourceReferenceRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DnsResourceReferenceResult>): void;
  getByTargetResources(parameters: Models.DnsResourceReferenceRequest, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DnsResourceReferenceResult>): Promise<Models.DnsResourceReferenceGetByTargetResourcesResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        options
      },
      getByTargetResourcesOperationSpec,
      callback) as Promise<Models.DnsResourceReferenceGetByTargetResourcesResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByTargetResourcesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/getDnsResourceReference",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DnsResourceReferenceRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DnsResourceReferenceResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
