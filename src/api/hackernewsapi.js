import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getTopStories = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);
  return result.slice(0, 20);
};

export const getEntity = async (storyID) => {
  return await axios
    .get(`${storyUrl + storyID}.json`)
    .then((result) => result.data);
};

export const getAllEntities = async (storyIDs) => {
  return await Promise.all(
    storyIDs.map((storyID) =>
      axios.get(`${storyUrl + storyID}.json`).then((result) => result.data)
    )
  );
};
