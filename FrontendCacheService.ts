// Copyright (c) 2021-2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { reduce } from "../../core/modules/lodash";

export interface InitializeCallback {
    () : Promise<void> | void;
}

export class FrontendCacheService {

    private static _initialized  : boolean = false;
    private static _initializing : boolean = false;
    private static _initializers : InitializeCallback[];

    public static registerInitializer (callback: InitializeCallback) {
        if (FrontendCacheService._initialized) throw new TypeError('Service already initialized');
        if (FrontendCacheService._initializing) throw new TypeError('Service already initializing');
        FrontendCacheService._initializers.push(callback);
    }

    public static isInitialized () : boolean {
        return FrontendCacheService._initialized;
    }

    /**
     * Initializes dynamic data for SSR / SEO
     */
    public static async initialize () {

        if (FrontendCacheService._initialized) throw new TypeError('Service already initialized');
        if (FrontendCacheService._initializing) throw new TypeError('Service already initializing');

        FrontendCacheService._initializing = true;

        await reduce(
            FrontendCacheService._initializers,
            async (p: Promise<void>, callback: InitializeCallback) : Promise<void> => {
                await p;
                await callback();
            },
            Promise.resolve()
        );

        FrontendCacheService._initializing = false;
        FrontendCacheService._initialized = true;

    }

}


