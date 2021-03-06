/// <reference path="References/VSS-Common.d.ts" />
/**
* Issue an AJAX request. This is a wrapper around jquery's ajax method that handles VSS authentication
* and triggers events that can be listened to by other modules.
*
* @param requestUrl Url to send the request to
* @param ajaxOptions jQuery.ajax options
* @param vssRequestOptions VSS specific request options
*/
export declare function issueRequest(requestUrl: string, ajaxOptions: JQueryAjaxSettings, vssRequestOptions?: IVssAjaxOptions): JQueryPromise<any>;
/**
* Add a listener that gets notified whenever requests from this client begin/end/etc.
*
* @param listener HttpClient listener to add
*/
export declare function addGlobalListener(listener: IVssAjaxEventListener): void;
/**
* Remove a listener that gets notified whenever requests from this client begin/end/etc.
*
* @param listener HttpClient listener to remove
*/
export declare function removeGlobalListener(listener: IVssAjaxEventListener): void;
