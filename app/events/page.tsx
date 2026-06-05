import { Suspense } from "react";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { IEvent } from "@/database";
import { getAllEvents } from "@/lib/actions/event.actions";

async function EventsList() {
  const events = await getAllEvents();

  return (
    <>
      {events && events.length > 0 ? (
        <ul className="events">
          {events.map((event: IEvent) => (
            <li key={event._id} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-gray-300 rounded-2xl max-w-xl mx-auto bg-white/50 mt-20">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            No events available
          </h4>
          <p className="text-sm text-gray-500 max-w-xs">
            Check back soon for new events and opportunities.
          </p>
        </div>
      )}
    </>
  );
}

const Page = () => {
  return (
    <section>
      <div className="mt-16">
        <h1 className="text-center mb-3">All Events</h1>
        <p className="text-center text-gray-400 mb-12">
          Discover upcoming events and opportunities
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading events...</div>}>
        <EventsList />
      </Suspense>

      <Footer />
    </section>
  );
};

export default Page;
