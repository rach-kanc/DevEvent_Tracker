import connectToDatabase from "@/lib/mongodb";
import { Event } from "@/database";

const escapeRegex = (text: string) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

export async function getAllEvents(filters?: { query?: string; mode?: string; tag?: string }, page = 1, limit = 50) {
  try {
    await connectToDatabase();
    const queryCondition: any = {};

    if (filters?.query) {
      queryCondition.$text = { $search: filters.query };
    }

    if (filters?.mode && filters.mode !== 'All') {
      const safeMode = escapeRegex(filters.mode);
      queryCondition.mode = { $regex: new RegExp(`^${safeMode}$`, 'i') };
    }

    if (filters?.tag && filters.tag !== 'All') {
      const safeTag = escapeRegex(filters.tag);
      queryCondition.tags = { $regex: new RegExp(`^${safeTag}$`, 'i') };
    }

    let query = Event.find(queryCondition);

    if (filters?.query) {
        query = query.select({ score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } });
    } else {
        query = query.sort({ createdAt: -1 });
    }

    const skip = (page - 1) * limit;
    const events = await query.skip(skip).limit(limit);
    return JSON.parse(JSON.stringify(events));

  } catch (error) {
    console.error('Error fetching events:', error);
    return []; 
  }
}

export async function getSimilarEventsBySlug(
  slug: string,
  tags: string[] = []
) {
  await connectToDatabase();

  if (!tags.length) {
    return [];
  }

  const events = await Event.find({
    slug: { $ne: slug },
    tags: { $in: tags }
  }).limit(3);

  return JSON.parse(JSON.stringify(events));
}

// Add this at the very bottom of your lib/actions/event.action.ts file

export async function getRecommendedEvents(userTags: string[] = []) {
  try {
    await connectToDatabase();

    if (!userTags.length) {
      return [];
    }

    // Find up to 3 events that match the user's interested tags, sorted by newest
    const recommendedEvents = await Event.find({
      tags: { $in: userTags }
    })
    .sort({ createdAt: -1 })
    .limit(3);

    return JSON.parse(JSON.stringify(recommendedEvents));
  } catch (error) {
    console.error('Error fetching recommended events:', error);
    return [];
  }
}