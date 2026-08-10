import { useMemo, useState } from "react";

export function useTopicQuery() {
  const [topics, setTopic] = useState<string[]>([]);

  const addTopic = (topic: string) => {
    if (topics.includes(topic) || topic.trim() === "") {
      return;
    }
    setTopic((prev) => [...prev, topic]);
  };

  const removeTopic = (target: string) => {
    const newTopics = topics.filter((topic) => topic != target);
    setTopic([...newTopics]);
  };

  const topicQuery = useMemo(
    () => topics.map((topic) => `topic:${topic}`).join(" "),
    [topics],
  );

  return { topics, topicQuery, addTopic, removeTopic };
}
