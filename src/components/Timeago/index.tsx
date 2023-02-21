import React from "react";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  date: string;
};

const TimeAgo: React.FC<Props> = ({ date }) => {
  const createdAt = new Date(date);
  const now = new Date();
  const timeAgo = formatDistance(createdAt, now, {
    addSuffix: true,
    locale: es,
  });

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
