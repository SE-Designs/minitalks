import { ShortUserType } from "~/types/types";
import { createMediaFile } from "~/server/db/mediafile";
import { createMininote } from "~/server/db/mininote";
import formidable from "formidable";
import { mininoteTransformer } from "~/server/transformers/mininote";
import { uploadToCloud } from "~/utils/cloudinary";

export default defineEventHandler(async (event: any) => {
  const form = formidable({});
  const user = event.context.auth?.user as ShortUserType;

  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) reject(err);

      resolve({ fields, files });
    });
  });

  const { fields, files }: any = response;

  const mininoteData = {
    authorId: user.id,
    content: fields.content[0],
  } as any;

  const replyTo = fields.replyTo[0];

  if (replyTo && replyTo !== "null" && replyTo !== "undefined") {
    mininoteData.replyToId = replyTo;
  }

  const mininote = await createMininote(mininoteData);

  const filePromise = Object.keys(files).map(async (key) => {
    const file = files[key];

    const cloudFile = (await uploadToCloud(file[0].filepath)) as any;

    return createMediaFile({
      url: cloudFile.secure_url,
      providerPublicId: cloudFile.public_id,
      userId: user.id,
      mininoteId: mininote.id,
    });
  });

  await Promise.all(filePromise);

  return {
    mininote: mininoteTransformer(mininote),
  };
});
