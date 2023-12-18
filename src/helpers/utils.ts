/* Reformat data when it coming */

import { Option } from "../types";

export const reformatData = (locations: []): Option[] => {
  return locations?.flatMap((location: any) => {
    return {
      value: location?.name,
      label: location.name,
      coord: location.coord,
    };
  });
};
