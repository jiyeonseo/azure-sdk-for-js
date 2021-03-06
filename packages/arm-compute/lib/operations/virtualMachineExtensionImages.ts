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
import * as Mappers from "../models/virtualMachineExtensionImagesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a VirtualMachineExtensionImages. */
export class VirtualMachineExtensionImages {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a VirtualMachineExtensionImages.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a virtual machine extension image.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {string} version
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(location: string, publisherName: string, type: string, version: string): Promise<Models.VirtualMachineExtensionImagesGetResponse>;
  get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImagesGetResponse>;
  get(location: string, publisherName: string, type: string, version: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
  get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
  get(location: string, publisherName: string, type: string, version: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): Promise<Models.VirtualMachineExtensionImagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        publisherName,
        type,
        version,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineExtensionImagesGetResponse>;
  }

  /**
   * Gets a list of virtual machine extension image types.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listTypes(location: string, publisherName: string): Promise<Models.VirtualMachineExtensionImagesListTypesResponse>;
  listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImagesListTypesResponse>;
  listTypes(location: string, publisherName: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listTypes(location: string, publisherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): Promise<Models.VirtualMachineExtensionImagesListTypesResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        publisherName,
        options
      },
      listTypesOperationSpec,
      callback) as Promise<Models.VirtualMachineExtensionImagesListTypesResponse>;
  }

  /**
   * Gets a list of virtual machine extension image versions.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {VirtualMachineExtensionImagesListVersionsOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listVersions(location: string, publisherName: string, type: string): Promise<Models.VirtualMachineExtensionImagesListVersionsResponse>;
  listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<Models.VirtualMachineExtensionImagesListVersionsResponse>;
  listVersions(location: string, publisherName: string, type: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listVersions(location: string, publisherName: string, type: string, options?: Models.VirtualMachineExtensionImagesListVersionsOptionalParams, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): Promise<Models.VirtualMachineExtensionImagesListVersionsResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        publisherName,
        type,
        options
      },
      listVersionsOperationSpec,
      callback) as Promise<Models.VirtualMachineExtensionImagesListVersionsResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions/{version}",
  urlParameters: [
    Parameters.location0,
    Parameters.publisherName,
    Parameters.type,
    Parameters.version,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineExtensionImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types",
  urlParameters: [
    Parameters.location0,
    Parameters.publisherName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtensionImage"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVersionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions",
  urlParameters: [
    Parameters.location0,
    Parameters.publisherName,
    Parameters.type,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineExtensionImage"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
