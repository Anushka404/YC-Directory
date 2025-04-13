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

export const  STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
  title,
  slug,
  description,
  author -> {
    _id, name, image, bio, username
  },
  views,
  category, 
  image, 
  _createdAt,
  pitch,
}`)

export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == "startup" && _id ==$id][0]{
    _id, views
  }`)