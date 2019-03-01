import {
  IBrandedEntityCreateRequest,
  IBrandedEntity,
  IAccessible,
  ISearchCriteria,
  ISearchResults,
  IResponseFormat
} from "./common-model";

/**
 * Enum of device container policy choices.
 */
export enum DeviceContainerPolicy {
  Standalone = "Standalone",
  Composite = "Composite"
}

/**
 * Used to create or update a device type.
 */
export interface IDeviceTypeCreateRequest
  extends IBrandedEntityCreateRequest,
    IAccessible {
  containerPolicy: DeviceContainerPolicy;
  deviceElementSchema: any;
}

/**
 * Device type information.
 */
export interface IDeviceType extends IBrandedEntity, IAccessible {
  containerPolicy: DeviceContainerPolicy;
  deviceElementSchema: any;
}

/**
 * Response format for device type records.
 */
export interface IDeviceTypeResponseFormat extends IResponseFormat {
  includeAsset?: boolean;
}

/**
 * Search criteria for device types.
 */
export interface IDeviceTypeSearchCriteria extends ISearchCriteria {}

/**
 * Search results for device types.
 */
export interface IDeviceTypeSearchResults extends ISearchResults<IDeviceType> {}
