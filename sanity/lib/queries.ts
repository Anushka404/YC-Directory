import { defineQuery } from "next-sanity";

//define the query for the startups, starting from most recent
export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && (!defined($search) || title match $search || category match $search || author->name match $search)] | order(_createdAt desc) { 
    _id, 
  title,
  slug,
  description,
  author -> {
    _id, name, image, bio
  },
  views,
  category, 
  image, 
  _createdAt
}`);