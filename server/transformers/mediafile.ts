function mediaFileTransformer(mediaFile: any) {
  return {
    id: mediaFile.id,
    url: mediaFile.url,
  };
}

export { mediaFileTransformer };
