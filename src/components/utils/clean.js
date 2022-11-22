import omitDeep from "omit-deep-lodash";

export const clean = (data, keysToOmit) => omitDeep(data, keysToOmit);
