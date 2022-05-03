import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9bpufwcy",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skM3BdebL1hmT0wH6Q1dcpQbczGSotCAw8urD5S579PnXzO3sBP2Xw5yinqsk4SBmVH8LnfhySkNI5dnP9Jj25LPBA1XCCZcfZYcm3puDyWWEOvh1LrOKIq7Bh9puYVoFBrOwnBW5pyexIddtGAaOi04L9GDgaB9ufsjHXDUUncsuCzdfLp6", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
