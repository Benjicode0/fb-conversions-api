export * from './action-source'
export * from './event-name'

import {ActionSource} from "./action-source";
import {EventName} from "./event-name";

export type ConversionPayload = {
    event_name: EventName;
    event_time: number;
    user_data: Record<string, any>;
    custom_data?: Record<string, any>;
    event_source_url?: string;
    opt_out?: boolean;
    event_id?: string;
    action_source: ActionSource;
    data_processing_options?: string[];
    data_processing_options_country?: number;
    data_processing_options_state?: number;
    app_data?: Record<string, any>;
    referrer_url?: string;
    original_event_data?: Record<string, any>;
};
