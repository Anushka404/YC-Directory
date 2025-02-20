import Image from "next/image";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}> //searchParams is a promise that resolves to an object with a query property
}) {
  //extract query
  const query = (await searchParams).query;
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
    
    </>
  );
}
