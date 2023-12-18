import { useQuery } from "@tanstack/react-query";

export const FETCH_LOCATIONS_OPTIONS = (cache_key: string, param: string) => {
  return useQuery({
    queryKey: [cache_key, param],
    queryFn: async () => {
      const { locations } = await fetch(
        `/api?coordOutputFormat=WGS84%5Bdd.ddddd%5D&ms_suggestMacro=ms_suggest&name_sf=${param}&outputFormat=rapidJSON&sfMacroMS=1&snapDistance_sf=500&type_sf=any`
      ).then((res) => res.json());
      return locations;
    },
  });
};
