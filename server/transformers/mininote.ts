function mininoteTransformer(mininote: any) {
  return {
    id: mininote.id,
    content: mininote.content,
  };
}

export { mininoteTransformer };
