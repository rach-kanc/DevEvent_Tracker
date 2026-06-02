import Image from "next/image";
import Link from "next/link";

interface Props {
    title : string;
    image : string;
    location : string;
    date : string;
    time : string;
    slug : string;
}

const EventCard = ({title,image,location,date,time,slug} : Props) => {
  return (
  <Link
    href={`/events/${slug}`}
    id="event-card"
    className="
      border border-transparent
      rounded-2xl
      overflow-hidden
      transition-all duration-300 ease-out
      hover:-translate-y-2
      hover:border-cyan-400/30
      hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
      border border-cyan-500/10"
  >
    <div className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster transition-transform duration-500 hover:scale-105"
      />
    </div>
<div className="p-4">
    <div className="flex flex-row gap-2 mt-1">
      <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
      <p>{location}</p>
    </div>

    <p className="title">{title}</p>

    <div className="datetime mt-4">
      <div>
        <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
        <p>{date}</p>
      </div>

      <div>
        <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
        <p>{time}</p>
      </div>
    </div>
</div>
  </Link>    
)
}

export default EventCard