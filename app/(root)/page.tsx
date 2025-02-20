import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { createHistogram } from "perf_hooks";
import { title } from "process";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}> //searchParams is a promise that resolves to an object with a query property
}) {
  //extract query
  const query = (await searchParams).query;
  const posts= [{
    _createdAt: 'Yesterday',
    views:55,
    author:{_id:1},
    _id: 1,
    description: 'This is a description',
    image:'https://via.placeholder.com/150',
    category:"Robots",
    title: 'Robotics Startup',
  }];

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

      </ul>
    </section>
    </>
  );
}
