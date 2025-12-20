export function detectContentType(input: string) {
  const ytRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;

  const twitterRegex =
    /^(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/.+\/status\/\d+/;

  const ytMatch = input.match(ytRegex);

  if (ytMatch) {
    return { type: "youtube", link: ytMatch[1] };
  }

  if (twitterRegex.test(input)) {
    return { type: "twitter", link: input };
  }

  return { type: "text", link: input };
}
