'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters"),

  image: z.string().url("Enter a valid image URL"),

  overview: z
    .string()
    .min(20, "Overview must be at least 20 characters"),

  date: z.string().min(1, "Date is required"),

  time: z.string().min(1, "Time is required"),

  location: z.string().min(2, "Location is required"),

  mode: z.string().min(1, "Select event mode"),

  targetAudience: z
    .string()
    .min(5, "Target audience is required"),

  agenda: z
    .string()
    .min(10, "Agenda is required"),

  organizer: z
    .string()
    .min(2, "Organizer name is required"),

  tags: z.string().min(2, "Add at least one tag"),
});

type EventFormData = z.infer<typeof eventSchema>;

const CreateEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: EventFormData) => {
    try {
      console.log(data);

      toast.success("Event created successfully!");

      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 space-y-8 max-w-3xl"
    >

      {/* BASIC INFO */}
      <div className="rounded-2xl
        border border-cyan-500/20
        bg-white/[0.02]
        backdrop-blur-sm
        p-6
        space-y-6">
        <h2 className="text-2xl font-bold">Basic Info</h2>

        <div>
          <label className="block mb-2">Event Title</label>

          <input
            type="text"
            placeholder="Global AI Hackathon 2024"
            {...register("title")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.title && (
            <p className="text-red-400 text-sm mt-2">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2">Short Description</label>

          <input
            type="text"
            placeholder="A premier hackathon for developers worldwide."
            {...register("shortDescription")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.shortDescription && (
            <p className="text-red-400 text-sm mt-2">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2">Banner Image URL</label>

          <input
            type="text"
            placeholder="https://example.com/image.png"
            {...register("image")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.image && (
            <p className="text-red-400 text-sm mt-2">
              {errors.image.message}
            </p>
          )}
        </div>
      </div>

      {/* EVENT DETAILS */}
      <div className="rounded-2xl
        border border-cyan-500/20
        bg-white/[0.02]
        backdrop-blur-sm
        p-6
        space-y-6">
        <h2 className="text-2xl font-bold">Event Details</h2>

        <div>
          <label className="block mb-2">Overview</label>

          <textarea
            rows={5}
            placeholder="Describe your event..."
            {...register("overview")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300
            resize-none"/>

          {errors.overview && (
            <p className="text-red-400 text-sm mt-2">
              {errors.overview.message}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2">Date</label>

            <input
              type="date"
              {...register("date")}
              className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

            {errors.date && (
              <p className="text-red-400 text-sm mt-2">
                {errors.date.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2">Time</label>

            <input
              type="time"
              {...register("time")}
              className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>
        <p className="text-sm text-gray-500/80 mt-2">Use 12-hour format (e.g. 01:30 PM)</p>
            {errors.time && (
              <p className="text-red-400 text-sm mt-2">
                {errors.time.message}
              </p>
              
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2">Location</label>

          <input
            type="text"
            placeholder="Bangalore, India"
            {...register("location")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.location && (
            <p className="text-red-400 text-sm mt-2">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2">Mode</label>

          <select
                {...register("mode")}
                className="
                w-full p-3 rounded-xl
                bg-[#071018]
                text-white
                border border-cyan-500/10
                outline-none
                focus:border-cyan-400/40
                focus:ring-2
                focus:ring-cyan-500/20
                transition-all duration-300
                focus:outline-none
                cursor-pointer">
            <option value="" className="bg-[#071018] text-gray-400">
  Select Mode
</option>

        <option value="online" className="bg-[#071018]">Online</option>
        <option value="offline" className="bg-[#071018]">Offline</option>
        <option value="hybrid" className="bg-[#071018]">Hybrid</option>
          </select>

          {errors.mode && (
            <p className="text-red-400 text-sm mt-2">
              {errors.mode.message}
            </p>
          )}
        </div>
      </div>

      {/* AUDIENCE & AGENDA */}
      <div className="rounded-2xl
        border border-cyan-500/20
        bg-white/[0.02]
        backdrop-blur-sm
        p-6
        space-y-6">
        <h2 className="text-2xl font-bold">Audience & Agenda</h2>

        <div>
          <label className="block mb-2">Target Audience</label>

          <input
            type="text"
            placeholder="Developers, AI Researchers..."
            {...register("targetAudience")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.targetAudience && (
            <p className="text-red-400 text-sm mt-2">
              {errors.targetAudience.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2">Agenda</label>

          <textarea
            rows={6}
            placeholder="09:00 - Keynote..."
            {...register("agenda")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300
            resize-none"/>

          {errors.agenda && (
            <p className="text-red-400 text-sm mt-2">
              {errors.agenda.message}
            </p>
          )}
        </div>
      </div>

      {/* ORGANIZER */}
      <div className="rounded-2xl
        border border-cyan-500/20
        bg-white/[0.02]
        backdrop-blur-sm
        p-6
        space-y-6">
        <h2 className="text-2xl font-bold">Organizer</h2>

        <div>
          <label className="block mb-2">Organizer Name</label>

          <input
            type="text"
            placeholder="Google Cloud"
            {...register("organizer")}
            className="
            w-full p-3 rounded-xl
            bg-black/30
            border border-cyan-500/10
            focus:outline-none
            focus:border-cyan-400/40
            focus:ring-2
            focus:ring-cyan-500/20
            transition-all duration-300"/>

          {errors.organizer && (
            <p className="text-red-400 text-sm mt-2">
              {errors.organizer.message}
            </p>
          )}
        </div>

        <div>
  <label className="block mb-2">Tags</label>

  <input
    type="text"
    placeholder="AI, Cloud, DevOps"
    {...register("tags")}
    className="
      w-full p-3 rounded-xl
      bg-black/30
      border border-cyan-500/10
      focus:outline-none
      focus:border-cyan-400/40
      focus:ring-2
      focus:ring-cyan-500/20
      transition-all duration-300"/>

  <p className="text-sm text-gray-500/80 mt-2">Separate tags with commas</p>

  {errors.tags && (
    <p className="text-red-400 text-sm mt-2">{errors.tags.message}</p>
  )}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
<div className="flex justify-center">

  <button
        type="submit"
        className="
          w-full md:w-fit
          px-8 py-4
          rounded-xl
          bg-cyan-500/20
          border border-cyan-400/20
          transition-all duration-300
          hover:scale-105
          hover:bg-cyan-500/30
          hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
          hover:-translate-y-1
          cursor-pointer">
        Create Event
      </button>
      </div>
    </form>
    
  );
};

export default CreateEventForm;