import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from '../../components/StartupCard';
import { createHistogram } from "perf_hooks";
import { title } from "process";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}> //searchParams is a promise that resolves to an object with a query property
}) {
  //extract query
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY); //fetch startup from sanity db

  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch Your Startup,
      <br/>Connect with enterpreneurs
    </h1>
    <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed on Virtual Competitions.
    </p>
    <SearchForm query={query}/>
    </section>
    
    <section className="section_container">
      <p className="text-30-semibold">
        {query? `Search results for ${query}`: "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ?(
          posts.map((post: StartupTypeCard ) => (
            <StartupCard key={post._id} post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
        )}
      </ul>
    </section>
    </>
  );
}
