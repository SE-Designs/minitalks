import human from "human-time";
import { mediaFileTransformer } from "./mediafile";
import { userTransformer } from "./user";

function mininoteTransformer(mininote: any): any {
  return {
    id: mininote.id,
    content: mininote.content,
    mediaFiles: mininote.mediaFiles
      ? mininote.mediaFiles.map(mediaFileTransformer)
      : [],
    author: mininote.author ? userTransformer(mininote.author) : null,
    replies: mininote.replies ? mininote.replies.map(mininoteTransformer) : [],
    replyTo: mininote.replyTo ? mininoteTransformer(mininote.replyTo) : null,
    repliesNumber: mininote.replies ? mininote.replies.length : 0,
    time: human(mininote.createdAt),
    likedIds: mininote.likedIds,
    likedNumber: mininote.likedIds ? mininote.likedIds.length : 0,
    viewedIds: mininote.viewedIds,
    viewedNumber: mininote.viewedIds ? mininote.viewedIds.length : 0,
  };
}

export { mininoteTransformer };
